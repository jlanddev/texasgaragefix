'use client';

import { useState } from 'react';

export default function TestLeadFlow() {
  const [results, setResults] = useState([]);
  const [running, setRunning] = useState(false);

  const addResult = (step, status, data) => {
    setResults(prev => [...prev, { step, status, data, time: new Date().toISOString() }]);
  };

  const runTest = async () => {
    setResults([]);
    setRunning(true);

    const testLead = {
      name: `Test User ${Date.now()}`,
      phone: '555-TEST-' + Math.floor(Math.random() * 1000),
      email: `test${Date.now()}@test.com`,
      address: '123 Test Street',
      city: 'Houston',
      county: 'Harris',
      zip: '77001',
      issue: 'Test lead - garage door not opening',
      jobType: 'residential',
    };

    addResult('1. Test Lead Data', 'info', testLead);

    // Step 1: Submit lead
    try {
      const startTime = Date.now();
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testLead),
      });

      const elapsed = Date.now() - startTime;
      const data = await response.json();

      if (response.ok && data.success) {
        addResult('2. Lead Submitted', 'success', {
          ...data,
          responseTime: `${elapsed}ms`,
          underThreeSeconds: elapsed < 3000
        });
      } else {
        addResult('2. Lead Submitted', 'error', { error: data.error || 'Unknown error', status: response.status });
      }
    } catch (error) {
      addResult('2. Lead Submitted', 'error', { error: error.message });
    }

    // Step 2: Verify lead in database (via debug endpoint on garageleadly)
    try {
      const verifyResponse = await fetch(`https://garageleadly.com/api/debug?email=${testLead.email}`);
      const verifyData = await verifyResponse.json();
      addResult('3. Database Verification', verifyResponse.ok ? 'success' : 'warning', verifyData);
    } catch (error) {
      addResult('3. Database Verification', 'warning', { note: 'Could not verify - CORS may block cross-origin requests' });
    }

    setRunning(false);
  };

  const runMultipleLeads = async (count) => {
    setResults([]);
    setRunning(true);

    addResult('Round-Robin Test', 'info', { totalLeads: count });

    const results = [];
    for (let i = 0; i < count; i++) {
      const testLead = {
        name: `Test User ${i + 1}`,
        phone: `555-${String(i).padStart(4, '0')}`,
        email: `test${Date.now()}-${i}@test.com`,
        address: `${100 + i} Test Street`,
        city: 'Houston',
        county: 'Harris',
        zip: '77001',
        issue: `Test lead #${i + 1}`,
        jobType: 'residential',
      };

      try {
        const response = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(testLead),
        });
        const data = await response.json();
        results.push({ leadNum: i + 1, success: data.success, contractorId: data.contractorId });
      } catch (error) {
        results.push({ leadNum: i + 1, success: false, error: error.message });
      }
    }

    // Analyze distribution
    const contractorCounts = {};
    results.forEach(r => {
      if (r.contractorId) {
        contractorCounts[r.contractorId] = (contractorCounts[r.contractorId] || 0) + 1;
      }
    });

    addResult('Lead Distribution', 'success', {
      results,
      distribution: contractorCounts,
      totalSuccessful: results.filter(r => r.success).length,
      totalFailed: results.filter(r => !r.success).length,
    });

    setRunning(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Lead Delivery System - E2E Test</h1>
        <p className="text-gray-400 mb-8">Test the complete lead flow from submission to contractor notification</p>

        <div className="flex gap-4 mb-8">
          <button
            onClick={runTest}
            disabled={running}
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {running ? 'Running...' : 'Run Single Lead Test'}
          </button>

          <button
            onClick={() => runMultipleLeads(5)}
            disabled={running}
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            Test Round-Robin (5 leads)
          </button>

          <button
            onClick={() => runMultipleLeads(10)}
            disabled={running}
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            Test Round-Robin (10 leads)
          </button>
        </div>

        <div className="space-y-4">
          {results.map((result, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${
                result.status === 'success' ? 'bg-green-900/30 border-green-500' :
                result.status === 'error' ? 'bg-red-900/30 border-red-500' :
                result.status === 'warning' ? 'bg-yellow-900/30 border-yellow-500' :
                'bg-gray-800 border-gray-600'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-3 h-3 rounded-full ${
                  result.status === 'success' ? 'bg-green-500' :
                  result.status === 'error' ? 'bg-red-500' :
                  result.status === 'warning' ? 'bg-yellow-500' :
                  'bg-gray-500'
                }`} />
                <span className="font-semibold">{result.step}</span>
                <span className="text-xs text-gray-500">{result.time}</span>
              </div>
              <pre className="text-sm bg-black/30 p-3 rounded overflow-auto max-h-96">
                {JSON.stringify(result.data, null, 2)}
              </pre>
            </div>
          ))}
        </div>

        {results.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            Click a button above to run tests
          </div>
        )}

        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold mb-2">Test Checklist</h3>
          <ul className="text-sm text-gray-400 space-y-1">
            <li>[ ] Lead saved to database</li>
            <li>[ ] Contractor assigned via round-robin</li>
            <li>[ ] Stripe charge processed (if payment method exists)</li>
            <li>[ ] SMS sent to contractor</li>
            <li>[ ] Lead appears on contractor dashboard</li>
            <li>[ ] Response time under 3 seconds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
