'use client';

import { useState } from 'react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    county: '',
    zip: '',
    issue: '',
    jobType: 'residential',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        if (typeof window !== 'undefined' && window.gtag_report_conversion) {
          window.gtag_report_conversion();
        }
        setSubmitted(true);
      } else {
        alert('There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your request. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="text-8xl mb-8">✓</div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            WE GOT IT
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Expect a call in the next 10 minutes
          </p>
          <div className="bg-gray-50 p-8 rounded">
            <p className="text-xl font-bold text-gray-900">
              Keep your phone handy - our tech is calling you now
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple Top Bar */}
      <div className="bg-black text-white py-2 px-4 text-center text-sm font-bold">
        SAME DAY SERVICE • 24/7 EMERGENCY REPAIRS • ALL BRANDS
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200 py-4 px-4">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <a href="/" className="text-3xl font-black text-gray-900">TEXAS GARAGE FIX</a>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-wide">
            <a href="/" className="text-gray-900 hover:text-orange-600">Home</a>
            <a href="/services" className="text-gray-900 hover:text-orange-600">Services</a>
            <a href="/about" className="text-gray-900 hover:text-orange-600">About</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <div className="inline-block bg-orange-600 text-white px-6 py-2 font-black text-sm mb-6 transform -rotate-1">
              HOUSTON'S FASTEST RESPONSE TIME
            </div>

            <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-none">
              BROKEN<br/>
              GARAGE<br/>
              DOOR?
            </h1>

            <div className="bg-orange-600 text-white p-8 mb-8 transform rotate-1">
              <p className="text-3xl font-black mb-2">10 MINUTES</p>
              <p className="text-lg">That's how fast we call you back. Not kidding.</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Spring snapped?</p>
                  <p className="text-gray-600">Same-day replacement. All brands.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Door stuck?</p>
                  <p className="text-gray-600">We fix it fast. No BS.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Opener dead?</p>
                  <p className="text-gray-600">Repair or replace today.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-orange-600 mt-3 flex-shrink-0"></div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Panel damaged?</p>
                  <p className="text-gray-600">Quick replacement, perfect match.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-black">
              <p className="font-bold text-lg mb-2">SERVING:</p>
              <p className="text-gray-700">Harris • Montgomery • Fort Bend • Waller • Brazoria • Liberty Counties</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <div className="bg-black text-white p-8 sticky top-8">
              <div className="bg-orange-600 text-white text-center py-4 px-4 mb-6 font-black text-xl transform -rotate-1">
                GET A TECH IN 10 MINUTES
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-white bg-black text-white text-lg focus:outline-none focus:border-orange-600"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-white bg-black text-white text-lg focus:outline-none focus:border-orange-600"
                    placeholder="(832) 555-1234"
                  />
                  <p className="text-xs text-gray-400 mt-1">We'll call this number in 10 min</p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-white bg-black text-white text-lg focus:outline-none focus:border-orange-600"
                    placeholder="john@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-white bg-black text-white text-lg focus:outline-none focus:border-orange-600"
                    placeholder="123 Main St"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-white bg-black text-white text-lg focus:outline-none focus:border-orange-600"
                      placeholder="Houston"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                      ZIP
                    </label>
                    <input
                      type="text"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-white bg-black text-white text-lg focus:outline-none focus:border-orange-600"
                      placeholder="77001"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    County
                  </label>
                  <select
                    name="county"
                    required
                    value={formData.county}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-white bg-black text-white text-lg focus:outline-none focus:border-orange-600"
                  >
                    <option value="">Select County</option>
                    <option value="Harris">Harris</option>
                    <option value="Montgomery">Montgomery</option>
                    <option value="Fort Bend">Fort Bend</option>
                    <option value="Waller">Waller</option>
                    <option value="Brazoria">Brazoria</option>
                    <option value="Liberty">Liberty</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Property Type
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jobType"
                        value="residential"
                        checked={formData.jobType === 'residential'}
                        onChange={handleChange}
                        className="w-5 h-5"
                      />
                      <span className="text-lg text-white font-bold">Residential</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jobType"
                        value="commercial"
                        checked={formData.jobType === 'commercial'}
                        onChange={handleChange}
                        className="w-5 h-5"
                      />
                      <span className="text-lg text-white font-bold">Commercial</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    What's Wrong?
                  </label>
                  <textarea
                    name="issue"
                    required
                    value={formData.issue}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-4 border-2 border-white bg-black text-white text-lg resize-none focus:outline-none focus:border-orange-600"
                    placeholder="Door won't open, loud noise, spring broke..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-orange-600 text-white py-5 px-6 font-black text-2xl hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'SENDING...' : 'GET MY FREE QUOTE'}
                </button>

                <p className="text-center text-xs text-gray-400">
                  By submitting, you agree to be contacted. No spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="border-r border-gray-700">
              <div className="text-5xl font-black text-orange-600 mb-2">500+</div>
              <div className="text-sm uppercase tracking-wide">Repairs This Month</div>
            </div>
            <div className="border-r border-gray-700">
              <div className="text-5xl font-black text-orange-600 mb-2">&lt;10</div>
              <div className="text-sm uppercase tracking-wide">Minute Callback</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-600 mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wide">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <div className="text-3xl font-black mb-4">TEXAS GARAGE FIX</div>
          <div className="mb-4 space-x-6">
            <a href="/" className="hover:text-orange-600">HOME</a>
            <a href="/services" className="hover:text-orange-600">SERVICES</a>
            <a href="/about" className="hover:text-orange-600">ABOUT</a>
          </div>
          <p className="text-sm text-gray-400">&copy; 2024 Texas Garage Fix</p>
        </div>
      </footer>
    </div>
  );
}
