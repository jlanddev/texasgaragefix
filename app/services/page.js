'use client';

export default function ServicesPage() {
  const services = [
    {
      title: "Spring Replacement",
      icon: "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z",
      items: [
        "Torsion springs",
        "Extension springs",
        "High-cycle upgrades",
        "Same-day service",
        "All brands"
      ]
    },
    {
      title: "Garage Door Repair",
      icon: "M7 10l5 5 5-5z",
      items: [
        "Broken cables",
        "Damaged panels",
        "Track repair",
        "Roller replacement",
        "Off-track doors"
      ]
    },
    {
      title: "Opener Services",
      icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
      items: [
        "Opener repair",
        "New installation",
        "Smart upgrades",
        "Remote programming",
        "Belt & chain drive"
      ]
    },
    {
      title: "New Door Installation",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      items: [
        "Residential doors",
        "Commercial doors",
        "Insulated options",
        "Modern styles",
        "Perfect fit guaranteed"
      ]
    },
    {
      title: "Emergency Repairs",
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      items: [
        "Door won't close",
        "Security issues",
        "Broken springs",
        "Fast response",
        "Night & weekend service"
      ]
    },
    {
      title: "Commercial Service",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      items: [
        "Loading docks",
        "Roll-up doors",
        "High-speed doors",
        "Warehouse service",
        "Maintenance plans"
      ]
    }
  ];

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
            FULL SERVICE GARAGE DOOR EXPERTS
          </div>
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-none">
            WHAT WE FIX
          </h1>
          <p className="text-2xl max-w-3xl">
            Every type of garage door problem. Fast. No excuses.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-4 border-black p-8 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 opacity-10 group-hover:opacity-20 transform rotate-45 translate-x-16 -translate-y-16"></div>
              <svg className="w-16 h-16 mb-4 opacity-20 group-hover:opacity-30" fill="currentColor" viewBox="0 0 24 24">
                <path d={service.icon} />
              </svg>
              <h2 className="text-3xl font-black mb-6">
                {service.title}
              </h2>
              <div className="space-y-2">
                {service.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-current mt-2.5 flex-shrink-0"></div>
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-orange-600 text-white p-12 transform rotate-1">
            <h2 className="text-4xl font-black mb-4">
              NEED SERVICE TODAY?
            </h2>
            <p className="text-xl mb-8">
              Fill out the form. We call in 10 minutes.
            </p>
            <a
              href="/"
              className="inline-block bg-black text-white px-12 py-5 font-black text-xl hover:bg-gray-800 transition"
            >
              GET FREE QUOTE
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 border-l-4 border-black bg-gray-50 p-8">
          <h2 className="text-3xl font-black mb-4">WHERE WE WORK</h2>
          <p className="text-xl mb-4">Houston metro and surrounding counties:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Harris County', 'Montgomery County', 'Fort Bend County', 'Waller County', 'Brazoria County', 'Liberty County'].map((area, index) => (
              <div key={index} className="font-bold">
                {area}
              </div>
            ))}
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
