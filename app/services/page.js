'use client';

import { useState } from 'react';

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "What Qualifies as an Emergency Garage Door Repair?",
      answer: "Any issue that prevents your garage door from opening or closing safely can be considered an emergency, especially if it poses a security risk, safety hazard, or major inconvenience to your daily routine."
    },
    {
      question: "How Quickly Can a Technician Arrive for an Emergency Repair?",
      answer: "We connect you with local contractors quickly. After you submit a request, a contractor will reach out and same-day service is available for most emergency repairs in the Houston metro area."
    },
    {
      question: "Can I Attempt to Repair My Garage Door on My Own?",
      answer: "We don't recommend it. Garage doors have high-tension springs and complex mechanisms that can cause serious injury if handled improperly. It's always best to leave emergency garage door repair to trained professionals."
    },
    {
      question: "Will My Garage Door Warranty Cover Emergency Repairs?",
      answer: "It depends on your door's manufacturer and warranty terms. Our team can help assess your coverage and provide a clear breakdown of the emergency garage door repair cost before starting any work."
    },
    {
      question: "Do Emergency Repair Services Include Fixing Garage Door Openers?",
      answer: "Yes! Our emergency services cover everything from broken springs and cables to malfunctioning garage door openers and remotes. Whatever's wrong, our contractors will get it fixed."
    },
    {
      question: "How Can I Maintain My Garage Door to Prevent Emergencies?",
      answer: "Schedule regular maintenance! We recommend professional tune-ups once or twice a year to lubricate parts, check alignment, tighten hardware, and prevent problems before they start."
    },
    {
      question: "What Should I Do If My Garage Door Is Stuck Open or Closed?",
      answer: "First, ensure the opener is plugged in and check the batteries in your remote. If the problem persists, don't try to force it – this can cause more damage. Call us right away, and we'll get your door working again safely."
    },
    {
      question: "How Do I Find the Best Emergency Garage Door Repair Near Me?",
      answer: "When you search online for same-day fast repair or emergency garage door replacement services, there's no shortage of options, but you need an expert team you can trust. Texas Garage Fix provides honest, fairly priced services that put customer satisfaction first."
    }
  ];

  const services = [
    {
      title: "Spring Replacement",
      // Coil/spring icon
      icon: (
        <svg className="w-16 h-16 mb-4 opacity-20 group-hover:opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12c0-2 2-4 2-4s0 2 2 2 2-2 2-2 0 2 2 2 2-2 2-2 0 2 2 2 2-2 2-2 0 2 2 2c2 0 2-2 2-2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8v8m16-8v8" />
        </svg>
      ),
      image: "linear-gradient(135deg, #FF8200 0%, #58595B 100%)",
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
      // Wrench/tools icon
      icon: (
        <svg className="w-16 h-16 mb-4 opacity-20 group-hover:opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
        </svg>
      ),
      image: "linear-gradient(135deg, #58595B 0%, #FF8200 100%)",
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
      // Remote control icon
      icon: (
        <svg className="w-16 h-16 mb-4 opacity-20 group-hover:opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 3h8c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm1 2v2h6V5H9zm0 4v2h6V9H9zm2 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm-4 0h2v2H7v-2zm8 0h2v2h-2v-2z" />
        </svg>
      ),
      image: "linear-gradient(135deg, #FF8200 50%, #58595B 50%)",
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
      // Garage door icon
      icon: (
        <svg className="w-16 h-16 mb-4 opacity-20 group-hover:opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v4H3V3zm0 5h18v4H3V8zm0 5h18v4H3v-4zm0 5h18v4H3v-4z" />
        </svg>
      ),
      image: "linear-gradient(180deg, #FF8200 0%, #58595B 100%)",
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
      // Alert/siren icon
      icon: (
        <svg className="w-16 h-16 mb-4 opacity-20 group-hover:opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.52 3.82 10.66 9 12 5.18-1.34 9-6.48 9-12V7l-10-5zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" />
        </svg>
      ),
      image: "radial-gradient(circle, #FF8200 0%, #58595B 100%)",
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
      // Building/warehouse icon
      icon: (
        <svg className="w-16 h-16 mb-4 opacity-20 group-hover:opacity-30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 1.1.9 2 2 2h2v3h12v-3h2c1.1 0 2-.9 2-2V7l-10-5zM8 18H6v-2h2v2zm0-4H6v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
        </svg>
      ),
      image: "linear-gradient(45deg, #58595B 25%, #FF8200 25%, #FF8200 50%, #58595B 50%, #58595B 75%, #FF8200 75%)",
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
            FULL SERVICE GARAGE DOOR EXPERTS
          </div>
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-none">
            WHAT WE FIX
          </h1>
          <p className="text-2xl max-w-3xl">
            Every type of garage door problem. We've got you covered.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-4 border-smokey p-8 hover:bg-tn-orange hover:text-white hover:border-tn-orange transition-all group relative overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transform rotate-45 translate-x-16 -translate-y-16"
                style={{ background: service.image }}
              ></div>
              {service.icon}
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
          <div className="inline-block bg-tn-orange text-white p-12 transform rotate-1">
            <h2 className="text-4xl font-black mb-4">
              NEED SERVICE TODAY?
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

        {/* Service Areas */}
        <div className="mt-16 border-l-4 border-smokey bg-gray-50 p-8">
          <h2 className="text-3xl font-black mb-4 text-smokey">WHERE WE WORK</h2>
          <p className="text-xl mb-4">Houston metro and surrounding counties:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Harris County', 'Montgomery County', 'Fort Bend County', 'Waller County', 'Brazoria County', 'Liberty County'].map((area, index) => (
              <div key={index} className="font-bold text-smokey">
                {area}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <div className="inline-block bg-smokey text-white px-6 py-2 font-black text-sm mb-6 transform rotate-1">
              EMERGENCY SERVICE AVAILABLE
            </div>
            <h2 className="text-5xl lg:text-6xl font-black text-smokey mb-4">
              GARAGE DOOR FAQs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Need answers about emergency garage door services? We've got you covered.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border-4 transition-all ${
                  openFaq === index
                    ? 'border-tn-orange bg-white'
                    : 'border-smokey bg-white hover:border-tn-orange'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span className="text-xl font-black text-smokey pr-4">{faq.question}</span>
                  <div
                    className={`w-10 h-10 flex-shrink-0 flex items-center justify-center transition-all ${
                      openFaq === index ? 'bg-tn-orange' : 'bg-smokey'
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 text-white transition-transform ${
                        openFaq === index ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-8 border-t-2 border-gray-100 pt-6">
                    <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">Still have questions?</p>
            <a
              href="/"
              className="inline-block bg-tn-orange text-white px-10 py-4 font-black text-lg hover:bg-opacity-90 transition"
            >
              CONTACT US NOW
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-smokey text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-tn-orange rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-tn-orange rounded-full translate-x-48 translate-y-48"></div>
        </div>
        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="border-r border-gray-600">
              <div className="text-5xl font-black text-tn-orange mb-2">500+</div>
              <div className="text-sm uppercase tracking-wide">Repairs This Month</div>
            </div>
            <div className="border-r border-gray-600">
              <div className="text-5xl font-black text-tn-orange mb-2">FAST</div>
              <div className="text-sm uppercase tracking-wide">Response Time</div>
            </div>
            <div>
              <div className="text-5xl font-black text-tn-orange mb-2">24/7</div>
              <div className="text-sm uppercase tracking-wide">Emergency Service</div>
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
            <p className="text-sm text-gray-600 mb-1">440 Cobia Dr, Katy, TX 77494</p>
            <p className="text-sm text-gray-500">&copy; 2025 Texas Garage Fix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
