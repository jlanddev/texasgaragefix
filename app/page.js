'use client';

import { useState, useEffect } from 'react';

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
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">Request Received</h1>
          <p className="text-2xl text-gray-700 mb-8">A local contractor will contact you shortly</p>
          <div className="bg-gray-50 p-8">
            <p className="text-xl font-bold text-gray-900">
              Keep your phone handy - a contractor will reach out soon
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-cream px-6 py-3 flex items-center justify-between">
        <img src="/logo.png" alt="Texas Garage Fix" className="h-14" />
        <div className="flex items-center gap-8">
          <a href="tel:4696403864" className="bg-tn-orange text-white font-bold text-sm tracking-wider hidden sm:block px-4 py-2 hover:bg-opacity-90 transition">Call Us Anytime! (469) 640-3864</a>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-wide">
            <a href="/" className="text-smokey hover:text-tn-orange transition">HOME</a>
            <a href="/services" className="text-smokey hover:text-tn-orange transition">SERVICES</a>
            <a href="/about" className="text-smokey hover:text-tn-orange transition">ABOUT</a>
          </div>
        </div>
      </div>

      {/* Hero Section with Parallax Background */}
      <div className="relative overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(/hero-bg.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            transform: `translateY(${scrollY * 0.3}px)`,
            willChange: 'transform'
          }}
        />
        {/* Navy Overlay - lighter to show image better */}
        <div className="absolute inset-0 bg-smokey opacity-60"></div>

        <div className="container mx-auto px-6 py-20 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content */}
            <div className="text-white">
              <div className="space-y-6 mb-12">
                <h1 className="text-5xl font-black leading-tight">
                  Houston Garage Door<br/>Repair Services
                </h1>
                <div className="text-xl leading-relaxed text-gray-200">
                  Connect with vetted local contractors for repairs, installations, and service across the Houston metro area.
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tn-orange flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Local Pros</div>
                    <div className="text-gray-300">Vetted technicians in your area</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tn-orange flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Licensed & Insured</div>
                    <div className="text-gray-300">Professional contractors only</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-tn-orange flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Free Quotes</div>
                    <div className="text-gray-300">No obligation estimates</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-gray-600">
                <div className="text-sm font-bold text-tn-orange mb-2 uppercase tracking-widest">SERVING</div>
                <div className="text-lg">Harris • Montgomery • Fort Bend • Waller • Brazoria • Liberty</div>
              </div>
            </div>

            {/* Right Form - Sticky */}
            <div className="lg:sticky lg:top-8">
              <div className="bg-white p-10 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-4xl font-black text-smokey leading-tight">
                    Get a Free Quote
                  </h2>
                  <p className="text-gray-600 text-sm mt-3">
                    Describe your issue and a local pro will reach out
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none transition-colors"
                    placeholder="Your Name"
                  />

                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none transition-colors"
                    placeholder="Phone Number"
                  />

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none transition-colors"
                    placeholder="Email"
                  />

                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none transition-colors"
                    placeholder="Street Address"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none transition-colors"
                      placeholder="City"
                    />
                    <input
                      type="text"
                      name="zip"
                      required
                      value={formData.zip}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none transition-colors"
                      placeholder="ZIP"
                    />
                  </div>

                  <select
                    name="county"
                    required
                    value={formData.county}
                    onChange={handleChange}
                    className="w-full px-5 py-4 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none transition-colors"
                  >
                    <option value="">Select County</option>
                    <option value="Harris">Harris</option>
                    <option value="Montgomery">Montgomery</option>
                    <option value="Fort Bend">Fort Bend</option>
                    <option value="Waller">Waller</option>
                    <option value="Brazoria">Brazoria</option>
                    <option value="Liberty">Liberty</option>
                  </select>

                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="jobType"
                        value="residential"
                        checked={formData.jobType === 'residential'}
                        onChange={handleChange}
                        className="w-5 h-5"
                      />
                      <span className="font-bold">Residential</span>
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
                      <span className="font-bold">Commercial</span>
                    </label>
                  </div>

                  <textarea
                    name="issue"
                    required
                    value={formData.issue}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-5 py-4 border-2 border-gray-300 text-lg resize-none focus:border-tn-orange outline-none transition-colors"
                    placeholder="What's the problem?"
                  />

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-tn-orange text-white py-5 text-xl font-black hover:bg-opacity-90 transition disabled:opacity-50"
                  >
                    {submitting ? 'SENDING...' : 'GET FREE QUOTE'}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting, you agree to be contacted. No spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-cream py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-6">
            <img src="/logo.png" alt="Texas Garage Fix" className="h-12" />
            <div className="flex gap-8 text-sm uppercase font-bold">
              <a href="/" className="text-smokey hover:text-tn-orange transition">HOME</a>
              <a href="/services" className="text-smokey hover:text-tn-orange transition">SERVICES</a>
              <a href="/about" className="text-smokey hover:text-tn-orange transition">ABOUT</a>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/terms-of-use" className="text-smokey hover:text-tn-orange transition">Terms of Use</a>
              <a href="/privacy-policy" className="text-smokey hover:text-tn-orange transition">Privacy Policy</a>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-4 text-center">
            <p className="text-sm text-gray-600 mb-1">5900 Balcones Drive STE 100, Austin, TX 78731</p>
            <p className="text-sm text-gray-500">&copy; 2025 Texas Garage Fix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
