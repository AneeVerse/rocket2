import React from "react";

const WhyUs = () => {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Complete Legal Solution",
      description: "Everything handled in one place - from affidavit drafting and notarization to newspaper publishing and gazette notification. Our legal experts ensure full compliance with Indian name change laws and procedures."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Expert Support & Fast Processing",
      description: "Professional lawyers guide you through every step with transparent pricing and no hidden fees. Get your name change completed in 15-30 days with dedicated customer support and regular updates on your application status."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
            Why Choose Our Name Change Services
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We&apos;ve helped thousands successfully change their names with complete legal compliance. Our streamlined process eliminates confusion and ensures your name change is recognized across all official documents and government agencies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 lg:p-10 shadow-lg shadow-gray-200/50 drop-shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-gray-300/50 hover:drop-shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8FF3B]/10 to-[#B8FF3B]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>
    </section>
  );
};

export default WhyUs;