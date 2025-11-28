'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-4">
        <div className="container mx-auto flex items-center justify-between max-w-6xl">
          <a href="/" className="text-2xl font-bold text-blue-600">Texas Garage Fix</a>
          <div className="flex gap-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 font-semibold">Home</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 font-semibold">Services</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-semibold">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            About Texas Garage Fix
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            Your trusted partner for professional garage door repair and installation services throughout Houston and surrounding areas.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Company Story */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p>
              Texas Garage Fix is a leading provider of garage door repair and installation services in the Houston metropolitan area. With years of experience serving residential and commercial customers, we've built a reputation for quality workmanship, fast service, and customer satisfaction.
            </p>
            <p>
              Our team of certified technicians is trained to handle all types of garage door issues, from simple repairs to complete installations. We work with all major brands and can service any make or model of garage door and opener.
            </p>
            <p>
              We understand that a malfunctioning garage door is more than just an inconvenience—it's a security concern and can disrupt your daily routine. That's why we offer same-day service and emergency repairs to get your garage door working properly as quickly as possible.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Texas Garage Fix?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast, Reliable Service</h3>
              <p className="text-gray-700">
                We offer same-day service with typical response times of 10 minutes or less. Our technicians arrive on time and work efficiently to minimize disruption to your schedule.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Licensed & Insured</h3>
              <p className="text-gray-700">
                All our technicians are fully licensed, bonded, and insured. We comply with all local regulations and safety standards to protect you and your property.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Satisfaction Guaranteed</h3>
              <p className="text-gray-700">
                We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with our service, we'll make it right.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
              <p className="text-gray-700">
                No hidden fees or surprise charges. We provide upfront, honest pricing before any work begins. You'll know exactly what you're paying for.
              </p>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Areas We Serve
          </h2>
          <p className="text-center text-gray-700 text-lg mb-8">
            We proudly serve Houston and the following counties:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {['Harris County', 'Montgomery County', 'Fort Bend County', 'Waller County', 'Brazoria County', 'Liberty County'].map((area, index) => (
              <div key={index} className="text-center py-3 px-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <span className="text-gray-800 font-semibold">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Commitment */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Our Commitment to You
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg">
            <p>
              At Texas Garage Fix, we're committed to providing exceptional service at every step. From your initial contact through completion of the job, we prioritize your satisfaction and peace of mind.
            </p>
            <p>
              We use only high-quality parts and materials, and our technicians stay current with the latest industry techniques and safety protocols. Whether it's a simple spring replacement or a complete garage door installation, you can count on us for professional, reliable service.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Contact us today for fast, professional garage door service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition shadow-lg inline-block"
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
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-white mb-2">Texas Garage Fix</div>
          <p className="mb-4">Fast, professional garage door repair across Houston</p>
          <div className="mb-4">
            <a href="/" className="text-gray-400 hover:text-white mx-3">Home</a>
            <a href="/services" className="text-gray-400 hover:text-white mx-3">Services</a>
            <a href="/about" className="text-gray-400 hover:text-white mx-3">About</a>
          </div>
          <p className="text-sm">&copy; 2024 Texas Garage Fix. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
