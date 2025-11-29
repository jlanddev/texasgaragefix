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
        <div className="max-w-2xl w-full text-center animate-scaleIn">
          <div className="text-8xl mb-8 animate-float">✓</div>
          <h1 className="text-5xl font-black text-gray-900 mb-4 animate-fadeInUp">
            WE GOT IT
          </h1>
          <p className="text-2xl text-gray-700 mb-8 animate-fadeInUp delay-200">
            Expect a call in the next 10 minutes
          </p>
          <div className="bg-gray-50 p-8 rounded animate-fadeInUp delay-300">
            <p className="text-xl font-bold text-gray-900">
              Keep your phone handy - our tech is calling you now
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Top Bar with slide-in animation */}
      <div className="bg-smokey text-white py-2 px-4 text-center text-sm font-bold relative overflow-hidden">
        <div className="animate-fadeInLeft">
          SAME DAY SERVICE • 24/7 EMERGENCY REPAIRS • ALL BRANDS
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-200 py-4 px-4 animate-fadeInUp">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <a href="/" className="text-3xl font-black text-smokey">TEXAS GARAGE FIX</a>
          <div className="flex gap-8 text-sm font-bold uppercase tracking-wide">
            <a href="/" className="text-smokey hover:text-tn-orange transition-colors duration-300">Home</a>
            <a href="/services" className="text-smokey hover:text-tn-orange transition-colors duration-300">Services</a>
            <a href="/about" className="text-smokey hover:text-tn-orange transition-colors duration-300">About</a>
          </div>
        </div>
      </nav>

      {/* Hero with parallax */}
      <div
        className="container mx-auto px-4 py-16 max-w-7xl"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div>
            <div className="inline-block bg-tn-orange text-white px-6 py-2 font-black text-sm mb-6 transform -rotate-1 animate-fadeInLeft">
              HOUSTON'S FASTEST RESPONSE TIME
            </div>

            <div className="relative mb-6 animate-fadeInUp delay-200">
              <div className="absolute -left-4 top-0 w-2 h-full bg-tn-orange"></div>
              <h1 className="text-6xl lg:text-7xl font-black text-smokey leading-none">
                BROKEN<br/>
                GARAGE<br/>
                DOOR?
              </h1>
            </div>

            <div className="bg-tn-orange text-white p-8 mb-8 transform rotate-1 animate-scaleIn delay-300">
              <p className="text-3xl font-black mb-2">10 MINUTES</p>
              <p className="text-lg">That's how fast we call you back. Not kidding.</p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                { title: 'Spring snapped?', desc: 'Same-day replacement. All brands.' },
                { title: 'Door stuck?', desc: 'We fix it fast. No BS.' },
                { title: 'Opener dead?', desc: 'Repair or replace today.' },
                { title: 'Panel damaged?', desc: 'Quick replacement, perfect match.' }
              ].map((item, i) => (
                <div key={i} className={`flex items-start gap-4 group animate-fadeInLeft delay-${(i + 4) * 100}`}>
                  <div className="w-8 h-8 bg-tn-orange flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-smokey">{item.title}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 border-l-4 border-smokey animate-fadeInUp delay-500">
              <p className="font-bold text-lg mb-2">SERVING:</p>
              <p className="text-gray-700">Harris • Montgomery • Fort Bend • Waller • Brazoria • Liberty Counties</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="animate-fadeInRight delay-300">
            <div className="bg-smokey text-white p-8 sticky top-8 shadow-2xl">
              <div className="bg-tn-orange text-white text-center py-4 px-4 mb-6 font-black text-xl transform -rotate-1 animate-scaleIn delay-500">
                GET A TECH IN 10 MINUTES
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="animate-fadeInUp delay-600">
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-white bg-smokey text-white text-lg focus:outline-none focus:border-tn-orange transition-colors duration-300"
                    placeholder="John Smith"
                  />
                </div>

                <div className="animate-fadeInUp delay-700">
                  <label className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-white bg-smokey text-white text-lg focus:outline-none focus:border-tn-orange transition-colors duration-300"
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
                    className="w-full px-4 py-4 border-2 border-white bg-smokey text-white text-lg focus:outline-none focus:border-tn-orange transition-colors duration-300"
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
                    className="w-full px-4 py-4 border-2 border-white bg-smokey text-white text-lg focus:outline-none focus:border-tn-orange transition-colors duration-300"
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
                      className="w-full px-4 py-4 border-2 border-white bg-smokey text-white text-lg focus:outline-none focus:border-tn-orange transition-colors duration-300"
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
                      className="w-full px-4 py-4 border-2 border-white bg-smokey text-white text-lg focus:outline-none focus:border-tn-orange transition-colors duration-300"
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
                    className="w-full px-4 py-4 border-2 border-white bg-smokey text-white text-lg focus:outline-none focus:border-tn-orange transition-colors duration-300"
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
                    className="w-full px-4 py-4 border-2 border-white bg-smokey text-white text-lg resize-none focus:outline-none focus:border-tn-orange transition-colors duration-300"
                    placeholder="Door won't open, loud noise, spring broke..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-tn-orange text-white py-5 px-6 font-black text-2xl hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
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

      {/* Photo Gallery */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-black text-smokey mb-12 text-center animate-fadeInUp">
          REAL WORK. REAL RESULTS.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {[
            { img: 'photo-1581092918056-0c4c3acd3789', title: 'GARAGE DOOR INSTALLATION', delay: '100' },
            { img: 'photo-1504917595217-d4dc5ebe6122', title: 'SPRING REPLACEMENT', delay: '200' },
            { img: 'photo-1581092160562-40aa08e78837', title: 'MODERN DOOR STYLES', delay: '300' }
          ].map((photo, i) => (
            <div key={i} className={`relative h-64 overflow-hidden group image-reveal animate-fadeInUp delay-${photo.delay}`}>
              <img
                src={`https://images.unsplash.com/${photo.img}?w=800&q=80`}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-tn-orange opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-smokey text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-black text-lg">{photo.title}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: 'photo-1581092795360-fd1ca04f0952', title: 'COMMERCIAL DOORS', subtitle: 'Warehouses • Loading Docks • Industrial', delay: '400' },
            { img: 'photo-1581092583537-20d51876c1d3', title: 'RESIDENTIAL DOORS', subtitle: 'Homes • Townhomes • Condos', delay: '500' }
          ].map((photo, i) => (
            <div key={i} className={`relative h-80 overflow-hidden group image-reveal animate-fadeInUp delay-${photo.delay}`}>
              <img
                src={`https://images.unsplash.com/${photo.img}?w=1200&q=80`}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-tn-orange opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-smokey text-white p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-black text-2xl">{photo.title}</p>
                <p className="text-sm mt-2">{photo.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-smokey text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-tn-orange rounded-full -translate-x-32 -translate-y-32 animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-tn-orange rounded-full translate-x-48 translate-y-48 animate-float" style={{animationDelay: '1.5s'}}></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid grid-cols-3 gap-8 text-center">
            {[
              { num: '500+', text: 'Repairs This Month', delay: '100' },
              { num: '<10', text: 'Minute Callback', delay: '200' },
              { num: '24/7', text: 'Emergency Service', delay: '300' }
            ].map((stat, i) => (
              <div key={i} className={`${i < 2 ? 'border-r border-gray-600' : ''} animate-fadeInUp delay-${stat.delay}`}>
                <div className="text-5xl font-black text-tn-orange mb-2 transform hover:scale-110 transition-transform duration-300">{stat.num}</div>
                <div className="text-sm uppercase tracking-wide">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-smokey text-white py-8">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <div className="text-3xl font-black mb-4">TEXAS GARAGE FIX</div>
          <div className="mb-4 space-x-6">
            <a href="/" className="hover:text-tn-orange transition-colors duration-300">HOME</a>
            <a href="/services" className="hover:text-tn-orange transition-colors duration-300">SERVICES</a>
            <a href="/about" className="hover:text-tn-orange transition-colors duration-300">ABOUT</a>
          </div>
          <p className="text-sm text-gray-400">&copy; 2024 Texas Garage Fix</p>
        </div>
      </footer>
    </div>
  );
}
