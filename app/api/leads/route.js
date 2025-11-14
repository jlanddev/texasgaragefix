import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import twilio from 'twilio';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request) {
  try {
    const leadData = await request.json();
    
    // Step 1: Insert lead into database
    const { data: lead, error: leadError } = await supabase
      .from('leads')
      .insert([{
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email,
        address: leadData.address,
        city: leadData.city,
        county: leadData.county,
        zip: leadData.zip,
        issue: leadData.issue,
        job_type: leadData.jobType,
        status: 'pending',
      }])
      .select()
      .single();

    if (leadError) {
      console.error('Lead insertion error:', leadError);
      return NextResponse.json(
        { error: 'Failed to create lead' },
        { status: 500 }
      );
    }

    // Step 2: Find matching contractors
    // Get all active contractors and filter in JavaScript
    const { data: allContractors, error: contractorsError } = await supabase
      .from('contractors')
      .select('*')
      .eq('status', 'active');

    if (contractorsError) {
      console.error('Contractor query error:', contractorsError);
      return NextResponse.json(
        { error: 'Failed to find contractors' },
        { status: 500 }
      );
    }

    // Filter contractors who match county and job type
    const contractors = allContractors.filter(contractor => {
      const matchesCounty = contractor.counties.includes(leadData.county);
      const matchesJobType = contractor.job_types.includes(leadData.jobType);
      return matchesCounty && matchesJobType;
    });

    console.log('Lead data:', { county: leadData.county, jobType: leadData.jobType });
    console.log('All contractors:', allContractors);
    console.log('Matching contractors:', contractors);

    if (!contractors || contractors.length === 0) {
      // No contractors available - this should rarely happen, but log it
      console.error('❌ NO MATCHING CONTRACTORS FOUND');
      console.error('County:', leadData.county, 'Job Type:', leadData.jobType);
      return NextResponse.json({
        success: false,
        error: 'No contractors service this area yet'
      }, { status: 400 });
    }

    // Step 3: Round-robin assignment with daily cap checking
    const today = new Date().toISOString().split('T')[0];

    let assignedContractor = null;

    // First pass: Find contractor with capacity
    for (const contractor of contractors) {
      const { data: dailyCount } = await supabase
        .from('daily_lead_counts')
        .select('lead_count')
        .eq('contractor_id', contractor.id)
        .eq('date', today)
        .single();

      const currentCount = dailyCount?.lead_count || 0;

      if (currentCount < contractor.daily_lead_cap) {
        assignedContractor = contractor;
        break;
      }
    }

    // If all at cap, assign to first contractor anyway (overflow)
    if (!assignedContractor) {
      assignedContractor = contractors[0];
      console.log('⚠️ All contractors at cap - assigning to first contractor (overflow)');
    }

    // Step 4: Assign lead to contractor
    const { error: assignError } = await supabase
      .from('leads')
      .update({ 
        contractor_id: assignedContractor.id,
        status: 'assigned',
        assigned_at: new Date().toISOString()
      })
      .eq('id', lead.id);

    if (assignError) {
      console.error('Lead assignment error:', assignError);
    }

    // Step 5: Update daily lead count
    // Get current count
    const { data: currentDailyCount } = await supabase
      .from('daily_lead_counts')
      .select('lead_count')
      .eq('contractor_id', assignedContractor.id)
      .eq('date', today)
      .single();

    const newCount = (currentDailyCount?.lead_count || 0) + 1;

    // Upsert with new count
    const { error: countError } = await supabase
      .from('daily_lead_counts')
      .upsert({
        contractor_id: assignedContractor.id,
        date: today,
        lead_count: newCount,
      });

    if (countError) {
      console.error('Daily count update error:', countError);
    }

    // Step 6: Calculate dynamic pricing
    const { calculateLeadPrice, recordLeadCost } = await import('../../../lib/pricing.js');
    const pricing = await calculateLeadPrice();

    console.log('💰 Dynamic pricing:', pricing);

    // Step 7: Charge contractor via Stripe instantly
    let stripeChargeId = null;
    try {
      // TODO: Get contractor's Stripe customer ID from database
      // For now, skip Stripe charging in test mode
      console.log('💳 Would charge contractor:', assignedContractor.email, '$' + pricing.platformPrice);

      // When Stripe is ready:
      // const charge = await stripe.charges.create({
      //   amount: Math.round(pricing.platformPrice * 100),
      //   currency: 'usd',
      //   customer: assignedContractor.stripe_customer_id,
      //   description: `Lead: ${leadData.name} - ${leadData.county}`,
      // });
      // stripeChargeId = charge.id;
    } catch (stripeError) {
      console.error('Stripe charge error:', stripeError);
      // Continue anyway - we'll handle failed payments separately
    }

    // Step 8: Create transaction record
    const { error: transactionError } = await supabase
      .from('transactions')
      .insert([{
        contractor_id: assignedContractor.id,
        lead_id: lead.id,
        type: 'lead_charge',
        amount: pricing.platformPrice,
        google_ads_cost: pricing.googleAdsCost,
        margin_applied: pricing.margin,
        status: stripeChargeId ? 'completed' : 'pending',
        payment_method: 'stripe',
        stripe_charge_id: stripeChargeId,
        description: `Lead: ${leadData.name} - ${leadData.city}, ${leadData.county}`,
      }]);

    if (transactionError) {
      console.error('Transaction error:', transactionError);
    }

    // Record lead cost for analytics
    await recordLeadCost(lead.id, assignedContractor.id, pricing);

    // Step 7: Send SMS to contractor
    const smsMessage = `🔧 NEW LEAD - GarageLeadly

Name: ${leadData.name}
Phone: ${leadData.phone}
Email: ${leadData.email}

Address: ${leadData.address}
City: ${leadData.city}
County: ${leadData.county}
ZIP: ${leadData.zip}

Type: ${leadData.jobType}
Issue: ${leadData.issue}

CALL NOW - They're expecting your call within 10 minutes!`.trim();

    try {
      await twilioClient.messages.create({
        body: smsMessage,
        messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
        to: assignedContractor.phone
      });
      console.log('SMS sent successfully to:', assignedContractor.phone);
    } catch (smsError) {
      console.error('SMS sending error:', smsError);
      // Don't fail the whole request if SMS fails
    }

    return NextResponse.json({ 
      success: true, 
      leadId: lead.id,
      contractorId: assignedContractor.id,
      message: 'Lead successfully assigned to contractor'
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
