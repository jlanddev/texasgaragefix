import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Use service role key for full database access (bypass RLS)
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
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

    // Step 2: Find matching campaigns (new campaign-based routing)
    const { data: allCampaigns, error: campaignsError } = await supabase
      .from('campaigns')
      .select('*')
      .eq('status', 'active');

    if (campaignsError) {
      console.error('Campaign query error:', campaignsError);
    }

    // Get all active contractors for lookup
    const { data: allActiveContractors } = await supabase
      .from('contractors')
      .select('*')
      .eq('status', 'active');

    const contractorMap = {};
    allActiveContractors?.forEach(c => contractorMap[c.id] = c);

    // Filter campaigns that match county, job type, and have active contractor
    const matchingCampaigns = (allCampaigns || []).filter(campaign => {
      const matchesCounty = campaign.counties?.includes(leadData.county);
      const matchesJobType = campaign.job_types?.includes(leadData.jobType);
      const hasActiveContractor = contractorMap[campaign.contractor_id];
      return matchesCounty && matchesJobType && hasActiveContractor;
    }).map(c => ({ ...c, contractor: contractorMap[c.contractor_id] }));

    console.log('Lead:', { county: leadData.county, jobType: leadData.jobType });
    console.log('All campaigns:', allCampaigns?.length || 0);
    console.log('Matching campaigns:', matchingCampaigns.length);

    // Fallback to contractor-based routing if no campaigns exist
    let contractors = [];
    if (matchingCampaigns.length === 0) {
      console.log('No campaigns found, falling back to contractor routing');
      const { data: allContractors } = await supabase
        .from('contractors')
        .select('*')
        .eq('status', 'active');

      contractors = allContractors?.filter(c => {
        return c.counties?.includes(leadData.county) && c.job_types?.includes(leadData.jobType);
      }) || [];
    }

    if (matchingCampaigns.length === 0 && contractors.length === 0) {
      console.error('❌ NO MATCHING CAMPAIGNS OR CONTRACTORS');
      return NextResponse.json({
        success: false,
        error: 'No contractors service this area yet'
      }, { status: 400 });
    }

    // Step 3: Round-robin assignment with daily cap checking
    const today = new Date().toISOString().split('T')[0];
    let assignedContractor = null;
    let assignedCampaign = null;

    // Campaign-based routing (priority)
    if (matchingCampaigns.length > 0) {
      // Get today's lead counts per campaign
      const { data: todayLeads } = await supabase
        .from('leads')
        .select('campaign_id')
        .gte('submitted_at', `${today}T00:00:00`)
        .lte('submitted_at', `${today}T23:59:59`);

      const campaignCounts = {};
      todayLeads?.forEach(l => {
        if (l.campaign_id) campaignCounts[l.campaign_id] = (campaignCounts[l.campaign_id] || 0) + 1;
      });

      // Filter campaigns with capacity and add counts
      const campaignsWithCounts = matchingCampaigns.map(c => ({
        ...c,
        leads_today: campaignCounts[c.id] || 0
      })).filter(c => c.leads_today < c.daily_cap);

      // Sort by leads_today ASC (round-robin)
      campaignsWithCounts.sort((a, b) => a.leads_today - b.leads_today);

      if (campaignsWithCounts.length > 0) {
        assignedCampaign = campaignsWithCounts[0];
        assignedContractor = assignedCampaign.contractor;
        console.log(`📋 Campaign routing: ${assignedCampaign.name} -> ${assignedContractor?.email}`);
      }
    }

    // Fallback to contractor-based routing
    if (!assignedContractor && contractors.length > 0) {
      const { data: allCounts } = await supabase
        .from('daily_lead_counts')
        .select('contractor_id, lead_count')
        .eq('date', today);

      const countsMap = {};
      allCounts?.forEach(c => countsMap[c.contractor_id] = c.lead_count);

      const contractorsWithCounts = contractors.map(c => ({
        ...c,
        leads_today: countsMap[c.id] || 0
      })).filter(c => c.leads_today < c.daily_lead_cap);

      contractorsWithCounts.sort((a, b) => a.leads_today - b.leads_today);
      assignedContractor = contractorsWithCounts[0] || contractors[0];
      console.log(`👷 Contractor routing: ${assignedContractor.email}`);
    }

    // If no contractor assigned (all at capacity), mark for manual assignment
    if (!assignedContractor) {
      console.log('⚠️ All contractors at capacity - marking for manual assignment');

      await supabase
        .from('leads')
        .update({
          status: 'unassigned',
          notes: 'All campaigns at capacity - needs manual assignment'
        })
        .eq('id', lead.id);

      return NextResponse.json({
        success: true,
        leadId: lead.id,
        status: 'unassigned',
        message: 'Lead saved - all contractors at capacity, pending manual assignment'
      });
    }

    // Step 4: Assign lead to contractor (and campaign if applicable)
    const { error: assignError } = await supabase
      .from('leads')
      .update({
        contractor_id: assignedContractor.id,
        campaign_id: assignedCampaign?.id || null,
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
    let chargeSuccess = false;

    try {
      // Import stripe-billing functions
      const { chargeContractorForLead } = await import('../../../lib/stripe-billing.js');

      const chargeResult = await chargeContractorForLead(
        assignedContractor.id,
        lead.id,
        pricing.platformPrice
      );

      if (chargeResult.success) {
        stripeChargeId = chargeResult.chargeId;
        chargeSuccess = true;
        console.log('✅ Charged contractor:', assignedContractor.email, '$' + pricing.platformPrice);
        console.log('   Stripe charge ID:', stripeChargeId);
      } else {
        console.error('❌ Charge failed:', chargeResult.reason);
        // If charge failed, could try next contractor here
        // For now, we'll record the failed attempt
      }
    } catch (stripeError) {
      console.error('❌ Stripe charge error:', stripeError);
      // Continue anyway - lead still gets assigned
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
