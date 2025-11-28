'use client';

export default function ServicesPage() {
  const services = [
    {
      title: "Garage Door Repair",
      description: "Fast, reliable repairs for all makes and models of garage doors. We diagnose and fix issues quickly to get your door working smoothly again.",
      features: [
        "Broken spring replacement",
        "Cable repair and replacement",
        "Panel replacement and repair",
        "Track alignment and repair",
        "Roller replacement",
        "Emergency same-day repairs"
      ]
    },
    {
      title: "Garage Door Installation",
      description: "Professional installation of new garage doors for residential and commercial properties. Choose from a wide selection of styles and materials.",
      features: [
        "Residential garage door installation",
        "Commercial garage door installation",
        "Custom door options",
        "Energy-efficient doors",
        "Insulated garage doors",
        "Modern and traditional styles"
      ]
    },
    {
      title: "Spring Replacement",
      description: "Expert spring replacement services. Broken springs are the most common garage door problem and can be dangerous to repair yourself.",
      features: [
        "Torsion spring replacement",
        "Extension spring replacement",
        "High-cycle spring upgrades",
        "Same-day spring repair",
        "Warranty on all springs",
        "Safety inspection included"
      ]
    },
    {
      title: "Garage Door Opener Services",
      description: "Installation, repair, and replacement of all garage door opener brands including LiftMaster, Chamberlain, Genie, and more.",
      features: [
        "Opener installation",
        "Opener repair",
        "Smart opener upgrades",
        "Belt drive openers",
        "Chain drive openers",
        "Keypad and remote programming"
      ]
    },
    {
      title: "Commercial Garage Door Services",
      description: "Specialized commercial garage door services for businesses, warehouses, loading docks, and industrial facilities.",
      features: [
        "Roll-up door installation",
        "Loading dock door service",
        "High-speed door installation",
        "Commercial door maintenance",
        "Security door systems",
        "24/7 emergency commercial service"
      ]
    },
    {
      title: "Emergency Garage Door Repair",
      description: "24/7 emergency repair services for urgent garage door issues. We respond quickly to get your door working again.",
      features: [
        "24/7 emergency availability",
        "Same-day service",
        "Fast response times",
        "Off-track door repair",
        "Broken spring emergencies",
        "Door won't close/open repairs"
      ]
    },
    {
      title: "Garage Door Maintenance",
      description: "Regular maintenance keeps your garage door operating smoothly and prevents costly repairs. We offer comprehensive tune-up services.",
      features: [
        "Annual maintenance plans",
        "Safety inspections",
        "Lubrication service",
        "Hardware tightening",
        "Balance testing",
        "Preventive maintenance"
      ]
    },
    {
      title: "Garage Door Parts & Accessories",
      description: "We supply and install high-quality garage door parts and accessories to enhance functionality and security.",
      features: [
        "Weather stripping",
        "Bottom seals",
        "Windows and window inserts",
        "Decorative hardware",
        "Smart home integration",
        "Battery backup systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Our Garage Door Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Professional garage door repair, installation, and maintenance services throughout Houston and surrounding areas. Same-day service available.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow border-2 border-gray-100"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Garage Door Service Today?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our professional technicians are ready to help. Fast response times and same-day service available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg inline-block"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+18325551234"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition shadow-lg inline-block"
            >
              Call Now: (832) 555-1234
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Service Areas
          </h2>
          <p className="text-center text-gray-700 text-lg mb-6">
            We proudly serve Houston and surrounding counties:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {['Harris County', 'Montgomery County', 'Fort Bend County', 'Waller County', 'Brazoria County', 'Liberty County'].map((area, index) => (
              <div key={index} className="text-center py-3 px-4 bg-blue-50 rounded-lg">
                <span className="text-gray-800 font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Service</h3>
            <p className="text-gray-600">Same-day repairs available. Most jobs completed within hours.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Licensed & Insured</h3>
            <p className="text-gray-600">Fully licensed, bonded, and insured for your protection.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
            <p className="text-gray-600">100% satisfaction guarantee on all workmanship and parts.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-white mb-2">Texas Garage Fix</div>
          <p className="mb-4">Fast, professional garage door repair across Houston</p>
          <div className="mb-4">
            <a href="/" className="text-gray-400 hover:text-white mx-3">Home</a>
            <a href="/services" className="text-gray-400 hover:text-white mx-3">Services</a>
          </div>
          <p className="text-sm">&copy; 2024 Texas Garage Fix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
