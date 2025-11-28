'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
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
      <div className="bg-black text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="inline-block bg-orange-600 px-6 py-2 font-black text-sm mb-6 transform -rotate-1">
            HOUSTON'S GARAGE DOOR SPECIALISTS
          </div>
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-none">
            WHO<br/>
            WE ARE
          </h1>
          <p className="text-2xl max-w-3xl">
            Professional garage door repair and installation across Houston. Fast response. Fair prices.
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
              Now we're Houston's fastest-responding garage door service. Our techs are trained on all makes and models. We stock parts on every truck. We show up when we say we will.
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
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-black mb-3">FAST RESPONSE</h3>
              <p className="text-lg">
                We call you back in under 10 minutes. Most repairs done same day. No waiting around.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-black mb-3">FAIR PRICING</h3>
              <p className="text-lg">
                Upfront quotes. No hidden fees. No pressure. You know what you're paying before we start.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-black mb-3">ALL BRANDS</h3>
              <p className="text-lg">
                LiftMaster, Chamberlain, Genie, Craftsman - we fix them all. Parts on every truck.
              </p>
            </div>
            <div className="border-l-4 border-orange-600 pl-6">
              <h3 className="text-2xl font-black mb-3">24/7 EMERGENCY</h3>
              <p className="text-lg">
                Door stuck open at midnight? Spring broke on Sunday? We handle emergencies any time.
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mb-16 bg-gray-50 p-12 border-l-4 border-black">
          <h2 className="text-4xl font-black mb-6">WHERE WE WORK</h2>
          <p className="text-xl mb-6">
            We cover Houston and these counties:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg font-bold">
            {['Harris County', 'Montgomery County', 'Fort Bend County', 'Waller County', 'Brazoria County', 'Liberty County'].map((area, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-600"></div>
                {area}
              </div>
            ))}
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-4xl font-black mb-8">WHAT WE DO</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black text-white p-8">
              <h3 className="text-2xl font-black mb-4">REPAIRS</h3>
              <p className="text-lg">
                Springs, cables, panels, tracks, rollers - we fix it all. Same day.
              </p>
            </div>
            <div className="bg-black text-white p-8">
              <h3 className="text-2xl font-black mb-4">INSTALLATION</h3>
              <p className="text-lg">
                New garage doors for residential and commercial. Professional install.
              </p>
            </div>
            <div className="bg-black text-white p-8">
              <h3 className="text-2xl font-black mb-4">OPENERS</h3>
              <p className="text-lg">
                Repair or replace any brand. Smart upgrades available.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block bg-orange-600 text-white p-12 transform rotate-1">
            <h2 className="text-4xl font-black mb-4">
              READY TO GET STARTED?
            </h2>
            <p className="text-xl mb-8">
              Fill out the form. We'll call in 10 minutes.
            </p>
            <a
              href="/"
              className="inline-block bg-black text-white px-12 py-5 font-black text-xl hover:bg-gray-800 transition"
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
