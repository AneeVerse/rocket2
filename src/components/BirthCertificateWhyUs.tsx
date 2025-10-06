import React from 'react';

const BirthCertificateWhyUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "All Types of Birth Certificates",
      description: "Handle new registrations within 21 days, delayed registrations for births years old, duplicate certificates for lost originals, and NABC certificates when no birth record exists. Complete support for hospital births, home births, and NRI applications with proper documentation.",
      stats: "6 Types Covered"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Expert Legal Guidance & Fast Processing",
      description: "Professional assistance with municipal corporation applications, magistrate orders for delayed cases, affidavit preparation, and document verification. Get your certificate in 7-30 days depending on type with transparent pricing and regular status updates throughout the process.",
      stats: "7-30 Days Processing"
    }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "All India Coverage",
      description: "Service available across all states and union territories"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "100% Legal Compliance",
      description: "Government-approved processes with full confidentiality"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Expert Documentation",
      description: "Professional handling of all paperwork and applications"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Fast Processing",
      description: "Quick turnaround times with regular status updates"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Round-the-clock assistance and query resolution"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Transparent Pricing",
      description: "No hidden charges with upfront cost disclosure"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Certificates Processed" },
    { number: "28", label: "States Covered" },
    { number: "99.8%", label: "Success Rate" },
    { number: "15", label: "Years Experience" }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B8FF3B]/20 to-[#B8FF3B]/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
            Why Choose Our Birth Certificate Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&apos;ve successfully processed thousands of birth certificate applications across all Indian states and cities. Our expert team understands the complex requirements for different types of birth certificates and ensures your application is completed correctly the first time.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200 hover:border-[#B8FF3B]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B8FF3B]/20 to-[#B8FF3B]/10 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-black group-hover:text-gray-900 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <span className="text-sm font-semibold text-[#B8FF3B] bg-[#B8FF3B]/10 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#B8FF3B]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#B8FF3B]/20 to-[#B8FF3B]/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-bold text-black group-hover:text-gray-900 transition-colors duration-300">
                  {benefit.title}
                </h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 lg:p-12 border-2 border-gray-200">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#B8FF3B]/10 to-[#B8FF3B]/5 rounded-2xl p-8 lg:p-12 border-2 border-[#B8FF3B]/20">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Ready to Get Your Birth Certificate?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
              Join thousands of satisfied customers who have obtained their birth certificates through our professional services. Start your application today!
            </p>
            <button className="inline-flex items-center justify-center bg-[#B8FF3B] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#A6E635] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Apply for Birth Certificate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthCertificateWhyUs;