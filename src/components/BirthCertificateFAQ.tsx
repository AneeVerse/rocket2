"use client";

import React, { useState } from 'react';

const BirthCertificateFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What documents do I need to apply for a birth certificate in India?",
      answer: "Required documents include parents' Aadhaar cards, hospital discharge certificate or home birth proof, parents' marriage certificate, address proof at time of birth, and identity proof. For delayed registrations, additional affidavits and witness statements may be needed. We guide you on exact requirements based on your specific situation."
    },
    {
      question: "Can I get a birth certificate if my birth was never registered or I was born decades ago?",
      answer: "Yes, you can get either a delayed birth registration or Non-Availability Birth Certificate (NABC). For births not registered within 21 days, we handle delayed registration with municipal corporations or magistrate orders. If no birth record exists, we help obtain NABC certificates that serve as legal proof of birth for all official purposes."
    },
    {
      question: "How long does it take to get a birth certificate and what are the fees?",
      answer: "New registrations take 7-15 days, delayed registrations take 15-30 days, and duplicate certificates take 5-10 days. Fees vary by state from ₹25-₹200 for regular certificates, with additional charges for delayed registrations (₹2-₹1000 depending on delay period). We provide exact fees upfront with no hidden charges."
    },
    {
      question: "Can I apply for a birth certificate online or do I need to visit offices?",
      answer: "Many states offer online applications through portals like CRS (crsorgi.gov.in) and state municipal websites. However, document submission and verification often require physical visits. We handle both online applications and office visits on your behalf, ensuring all paperwork is properly submitted and processed according to local requirements."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - FAQ Content */}
          <div>
            {/* Header */}
            <div className="mb-8">
              
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 leading-tight">
                Birth Certificate FAQs
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                Get answers to the most common questions about birth certificate applications, processing times, and requirements across India.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-xl border-2 border-gray-200 hover:border-[#B8FF3B]/30 transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 lg:px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <h3 className="text-base lg:text-lg font-bold text-black pr-3 leading-tight">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-[#B8FF3B]/20 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-4 lg:px-6 pb-4">
                      <div className="pt-3 border-t border-gray-200">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:sticky lg:top-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#B8FF3B]/20 to-[#B8FF3B]/10 rounded-xl">
                <img
                  src="/images/hero/hero section images/Change.png"
                  alt="Birth Certificate Services"
                  className="w-full h-140 object-cover rounded-xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 bg-white rounded-xl p-3 shadow-lg border-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-semibold text-gray-800">Expert Support</span>
                </div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl p-3 shadow-lg border-2 border-gray-200">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-semibold text-gray-800">100% Legal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthCertificateFAQ;