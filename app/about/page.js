'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-cream px-6 py-3 flex items-center justify-between">
        <a href="/">
          <img src="/logo.png" alt="Texas Garage Fix" className="h-14" />
        </a>
        <div className="flex items-center gap-8">
          <a href="tel:4696403864" className="bg-tn-orange text-white font-bold text-sm tracking-wider hidden sm:block px-4 py-2 hover:bg-opacity-90 transition">Call Us Anytime! (469) 640-3864</a>
          <div className="flex gap-6 text-sm font-bold uppercase tracking-wide">
            <a href="/" className="text-smokey hover:text-tn-orange transition">HOME</a>
            <a href="/services" className="text-smokey hover:text-tn-orange transition">SERVICES</a>
            <a href="/about" className="text-smokey hover:text-tn-orange transition">ABOUT</a>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-smokey text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="inline-block bg-tn-orange px-6 py-2 font-black text-sm mb-6 transform -rotate-1">
            HOUSTON'S GARAGE DOOR SPECIALISTS
          </div>
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-none">
            WHO<br/>
            WE ARE
          </h1>
          <p className="text-2xl max-w-3xl">
            Professional garage door repair and installation across Houston. Available when you need us. Fair prices.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Story */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl font-black mb-8">THE STORY</h2>
          <div className="space-y-6 text-xl leading-relaxed">
            <p>
              We started Texas Garage Fix because we saw a problem: homeowners getting ripped off by overpriced, slow garage door companies. We knew there was a better way.
            </p>
            <p>
              Now we connect Houston homeowners with trusted local garage door pros. Our techs are trained on all makes and models. We stock parts on every truck. We show up when we say we will.
            </p>
            <p>
              No games. No upselling. Just honest work at fair prices.
            </p>
          </div>
        </div>

        {/* Why Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-8">WHY CHOOSE US</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 border-tn-orange pl-6 relative group">
              <div className="absolute -left-1 top-0 w-8 h-8 bg-tn-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-black mb-3">EASY CONNECT</h3>
              <p className="text-lg">
                Get connected with local contractors easily. Fill out a form and get a quote.
              </p>
            </div>
            <div className="border-l-4 border-tn-orange pl-6 relative group">
              <div className="absolute -left-1 top-0 w-8 h-8 bg-tn-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-black mb-3">FAIR PRICING</h3>
              <p className="text-lg">
                Upfront quotes. No hidden fees. No pressure. You know what you're paying before we start.
              </p>
            </div>
            <div className="border-l-4 border-tn-orange pl-6 relative group">
              <div className="absolute -left-1 top-0 w-8 h-8 bg-tn-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-black mb-3">ALL BRANDS</h3>
              <p className="text-lg">
                LiftMaster, Chamberlain, Genie, Craftsman - we fix them all. Parts on every truck.
              </p>
            </div>
            <div className="border-l-4 border-tn-orange pl-6 relative group">
              <div className="absolute -left-1 top-0 w-8 h-8 bg-tn-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-2xl font-black mb-3">ALL SERVICES</h3>
              <p className="text-lg">
                Door stuck? Spring broke? We connect you with pros who handle all garage door issues.
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16 bg-gray-50 p-12 border-l-4 border-smokey">
          <h2 className="text-4xl font-black mb-6">WHERE WE WORK</h2>
          <p className="text-xl mb-6">
            We cover Houston and these counties:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg font-bold">
            {['Harris County', 'Montgomery County', 'Fort Bend County', 'Waller County', 'Brazoria County', 'Liberty County'].map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tn-orange"></div>
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-8">WHAT WE DO</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-smokey text-white p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tn-orange opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <svg className="w-12 h-12 mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
              <h3 className="text-2xl font-black mb-4">REPAIRS</h3>
              <p className="text-lg">
                Springs, cables, panels, tracks, rollers - we connect you with pros who fix it all.
              </p>
            </div>
            <div className="bg-smokey text-white p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tn-orange opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <svg className="w-12 h-12 mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h3 className="text-2xl font-black mb-4">INSTALLATION</h3>
              <p className="text-lg">
                New garage doors for residential and commercial. Professional install.
              </p>
            </div>
            <div className="bg-smokey text-white p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-tn-orange opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <svg className="w-12 h-12 mb-4 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
              <h3 className="text-2xl font-black mb-4">OPENERS</h3>
              <p className="text-lg">
                Repair or replace any brand. Smart upgrades available.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-tn-orange text-white p-12 transform rotate-1">
            <h2 className="text-4xl font-black mb-4">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl mb-8">
              Fill out the form. Get connected with a local pro.
            </p>
            <a
              href="/"
              className="inline-block bg-smokey text-white px-12 py-5 font-black text-xl hover:bg-gray-800 transition"
            >
              GET FREE QUOTE
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="border-r border-gray-700">
              <div className="text-5xl font-black text-tn-orange mb-2">500+</div>
              <div className="text-sm uppercase tracking-wide">Repairs This Month</div>
            </div>
            <div className="border-r border-gray-700">
              <div className="text-5xl font-black text-tn-orange mb-2">6</div>
              <div className="text-sm uppercase tracking-wide">Counties Served</div>
            </div>
            <div>
              <div className="text-5xl font-black text-tn-orange mb-2">100%</div>
              <div className="text-sm uppercase tracking-wide">Free Quotes</div>
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
