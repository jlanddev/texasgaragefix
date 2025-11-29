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
          <h1 className="text-5xl font-black text-gray-900 mb-4">WE GOT IT</h1>
          <p className="text-2xl text-gray-700 mb-8">Expect a call in the next 10 minutes</p>
          <div className="bg-gray-50 p-8">
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
      {/* Top Strip */}
      <div className="bg-smokey text-white px-6 py-3 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tight">TEXAS GARAGE FIX</div>
        <div className="flex gap-8 text-sm font-bold uppercase">
          <a href="/">HOME</a>
          <a href="/services">SERVICES</a>
          <a href="/about">ABOUT</a>
        </div>
      </div>

      {/* Full Width Image Hero */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=2000&q=90"
          alt="Garage Door"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-smokey opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-5xl">
            <div className="text-tn-orange font-black text-xl mb-6 tracking-widest">
              HOUSTON'S FASTEST
            </div>
            <h1 className="text-white font-black text-7xl md:text-9xl leading-none mb-8">
              GARAGE<br/>DOOR<br/>EXPERTS
            </h1>
            <div className="text-white text-2xl mb-12 max-w-2xl mx-auto">
              10-minute response • Same-day repairs • All brands
            </div>
            <a
              href="#contact"
              className="inline-block bg-tn-orange text-white px-16 py-6 text-2xl font-black hover:bg-opacity-90 transition-all"
            >
              GET FREE QUOTE
            </a>
          </div>
        </div>
      </div>

      {/* Services Grid - Unique Layout */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Large Service Card */}
          <div className="md:col-span-8 relative h-96 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1400&q=90"
              alt="Spring Replacement"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <div className="text-tn-orange font-black text-sm mb-2">MOST COMMON</div>
              <h2 className="text-5xl font-black mb-4">SPRING REPLACEMENT</h2>
              <p className="text-xl opacity-90">Broken spring? We fix it same day. All brands.</p>
            </div>
          </div>

          {/* Small Service Card */}
          <div className="md:col-span-4 relative h-96 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=90"
              alt="New Doors"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-black mb-2">NEW DOORS</h3>
              <p className="opacity-90">Modern styles</p>
            </div>
          </div>

          {/* Small Service Card */}
          <div className="md:col-span-4 relative h-96 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=90"
              alt="Openers"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-3xl font-black mb-2">OPENERS</h3>
              <p className="opacity-90">Repair & install</p>
            </div>
          </div>

          {/* Large Service Card */}
          <div className="md:col-span-8 relative h-96 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1621905252472-be5c3968b7d7?w=1400&q=90"
              alt="Commercial"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <div className="text-tn-orange font-black text-sm mb-2">BUSINESSES</div>
              <h2 className="text-5xl font-black mb-4">COMMERCIAL DOORS</h2>
              <p className="text-xl opacity-90">Warehouses, loading docks, industrial</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats - Full Width */}
      <div className="bg-smokey text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-16 text-center">
            <div>
              <div className="text-tn-orange text-8xl font-black mb-4">500+</div>
              <div className="text-xl uppercase tracking-widest">Repairs Monthly</div>
            </div>
            <div>
              <div className="text-tn-orange text-8xl font-black mb-4">&lt;10</div>
              <div className="text-xl uppercase tracking-widest">Minute Response</div>
            </div>
            <div>
              <div className="text-tn-orange text-8xl font-black mb-4">24/7</div>
              <div className="text-xl uppercase tracking-widest">Emergency Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form - Side by Side */}
      <div id="contact" className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="text-tn-orange font-black text-sm mb-4 tracking-widest">CONTACT</div>
            <h2 className="text-6xl font-black text-smokey mb-8">GET A TECH IN 10 MINUTES</h2>
            <div className="space-y-6 text-xl">
              <p className="text-gray-700">Fill out the form and we'll call you back in under 10 minutes.</p>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-tn-orange mt-2"></div>
                <div>
                  <div className="font-bold text-smokey">Springs, cables, panels</div>
                  <div className="text-gray-600">Same-day replacement</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-tn-orange mt-2"></div>
                <div>
                  <div className="font-bold text-smokey">Openers & remotes</div>
                  <div className="text-gray-600">All brands serviced</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-tn-orange mt-2"></div>
                <div>
                  <div className="font-bold text-smokey">Emergency repairs</div>
                  <div className="text-gray-600">Available 24/7</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-5 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none"
                placeholder="Your Name"
              />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-6 py-5 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none"
                placeholder="Phone Number"
              />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-5 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none"
                placeholder="Email"
              />
              <input
                type="text"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full px-6 py-5 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none"
                placeholder="Street Address"
              />
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none"
                  placeholder="City"
                />
                <input
                  type="text"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleChange}
                  className="w-full px-6 py-5 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none"
                  placeholder="ZIP"
                />
              </div>
              <select
                name="county"
                required
                value={formData.county}
                onChange={handleChange}
                className="w-full px-6 py-5 border-2 border-gray-300 text-lg focus:border-tn-orange outline-none"
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
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="jobType"
                    value="residential"
                    checked={formData.jobType === 'residential'}
                    onChange={handleChange}
                    className="w-6 h-6"
                  />
                  <span className="text-lg font-bold">Residential</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="jobType"
                    value="commercial"
                    checked={formData.jobType === 'commercial'}
                    onChange={handleChange}
                    className="w-6 h-6"
                  />
                  <span className="text-lg font-bold">Commercial</span>
                </label>
              </div>
              <textarea
                name="issue"
                required
                value={formData.issue}
                onChange={handleChange}
                rows={4}
                className="w-full px-6 py-5 border-2 border-gray-300 text-lg resize-none focus:border-tn-orange outline-none"
                placeholder="What's the problem?"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-tn-orange text-white py-6 text-2xl font-black hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {submitting ? 'SENDING...' : 'GET FREE QUOTE'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-smokey text-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-black text-2xl">TEXAS GARAGE FIX</div>
          <div className="flex gap-8 text-sm uppercase font-bold">
            <a href="/">HOME</a>
            <a href="/services">SERVICES</a>
            <a href="/about">ABOUT</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
