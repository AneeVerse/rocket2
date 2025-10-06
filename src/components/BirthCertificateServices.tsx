import React from 'react';

const BirthCertificateServices = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      title: "New Birth Registration",
      description: "Register births within 21 days of birth with municipal corporations. Complete documentation support for hospital and home births.",
      features: ["Hospital birth certificates", "Home birth registration", "Municipal corporation filing", "Fast 7-15 day processing"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Delayed Birth Registration",
      description: "Register births that occurred years ago with magistrate orders and proper legal procedures. Handle complex delayed cases.",
      features: ["Magistrate order assistance", "Affidavit preparation", "Witness statements", "15-30 day processing"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Duplicate Birth Certificate",
      description: "Get certified copies of existing birth certificates for lost or damaged originals. Quick processing with verified records.",
      features: ["Lost certificate replacement", "Damaged certificate renewal", "Multiple certified copies", "5-10 day processing"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "NABC Certificate",
      description: "Non-Availability Birth Certificate for cases where no birth record exists. Legal alternative accepted by all government agencies.",
      features: ["No birth record cases", "Legal proof of birth", "Government acceptance", "Alternative documentation"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
      title: "NRI Birth Certificate",
      description: "Special assistance for Non-Resident Indians seeking birth certificates for overseas requirements and citizenship applications.",
      features: ["Overseas documentation", "Embassy requirements", "Citizenship applications", "International validity"]
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Birth Certificate Correction",
      description: "Correct errors in existing birth certificates including name spelling, date corrections, and parent information updates.",
      features: ["Name corrections", "Date modifications", "Parent info updates", "Legal amendments"]
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B8FF3B]/20 to-[#B8FF3B]/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
            Complete Birth Certificate Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Professional assistance for all types of birth certificate requirements across India. From new registrations to complex delayed cases, we handle everything with complete legal compliance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#B8FF3B]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B8FF3B]/20 to-[#B8FF3B]/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-black mb-4 group-hover:text-gray-900 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <svg className="w-4 h-4 mr-3 text-[#B8FF3B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default BirthCertificateServices;