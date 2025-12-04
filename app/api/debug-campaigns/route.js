import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const county = searchParams.get('county') || 'Harris';
  const jobType = searchParams.get('jobType') || 'residential';

  // Get all active campaigns
  const { data: allCampaigns, error: campaignsError } = await supabase
    .from('campaigns')
    .select('*')
    .eq('status', 'active');

  // Get all active contractors
  const { data: allActiveContractors, error: contractorsError } = await supabase
    .from('contractors')
    .select('*')
    .eq('status', 'active');

  const contractorMap = {};
  allActiveContractors?.forEach(c => contractorMap[c.id] = c);

  // Filter campaigns that match
  const matchingCampaigns = (allCampaigns || []).filter(campaign => {
    const matchesCounty = campaign.counties?.includes(county);
    const matchesJobType = campaign.job_types?.includes(jobType);
    const hasActiveContractor = contractorMap[campaign.contractor_id];

    return matchesCounty && matchesJobType && hasActiveContractor;
  }).map(c => ({
    ...c,
    contractor: contractorMap[c.contractor_id]
  }));

  // Also check each campaign individually for debugging
  const campaignDebug = (allCampaigns || []).map(campaign => ({
    id: campaign.id,
    name: campaign.name,
    counties: campaign.counties,
    job_types: campaign.job_types,
    contractor_id: campaign.contractor_id,
    status: campaign.status,
    matchesCounty: campaign.counties?.includes(county),
    matchesJobType: campaign.job_types?.includes(jobType),
    hasActiveContractor: !!contractorMap[campaign.contractor_id],
    contractorEmail: contractorMap[campaign.contractor_id]?.email
  }));

  return NextResponse.json({
    query: { county, jobType },
    allCampaigns: allCampaigns?.length || 0,
    allActiveContractors: allActiveContractors?.length || 0,
    matchingCampaigns: matchingCampaigns.length,
    campaignDebug,
    contractorMap: Object.keys(contractorMap).map(id => ({
      id,
      email: contractorMap[id].email,
      status: contractorMap[id].status
    }))
  });
}
