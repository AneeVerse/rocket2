"use client";
import React, { useState } from "react";
import Image from "next/image";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the complete process to legally change my name in India?",
      answer: "The legal process involves three main steps: creating a notarized affidavit stating your name change, publishing advertisements in local newspapers (one English, one regional), and getting official gazette notification. We handle all paperwork and filings for you."
    },
    {
      question: "How long does the entire name change process take?",
      answer: "The complete process typically takes 15 to 30 days from application to gazette publication, depending on documentation completeness and government processing times. We track your application daily and provide regular updates."
    },
    {
      question: "What documents do I need to provide for name change?",
      answer: "You need valid ID proof (Aadhaar, PAN card, or passport), address proof, and reason documentation if applicable (marriage certificate, divorce decree, etc.). We'll guide you on exact requirements based on your specific situation."
    },
    {
      question: "Is gazette notification mandatory for legal name change?",
      answer: "Yes, gazette publication is legally required to validate your new name across all official records, government documents, and ID proofs. Without gazette notification, your name change won't be legally recognized for updating official documents."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#B8FF3B]/20 to-[#B8FF3B]/10 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most common questions about the legal name change process in India. Our experts have compiled comprehensive information to help you understand every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border-2 border-gray-200 hover:border-[#B8FF3B]/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#B8FF3B]/20 rounded-xl"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-black pr-4 leading-tight">
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 transition-all duration-300 ${
                      openIndex === index ? 'bg-[#B8FF3B] rotate-180' : 'hover:bg-gray-200'
                    }`}>
                      <svg 
                        className={`w-5 h-5 transition-colors duration-300 ${
                          openIndex === index ? 'text-black' : 'text-gray-600'
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Element */}
          <div className="lg:pl-8">
            <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/hero/hero section images/Change.png"
                alt="Name Change Process"
                width={500}
                height={300}
                className="w-160 h-130 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Start Your Name Change Process?
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Join thousands of satisfied customers who have successfully changed their names with our expert legal assistance and complete documentation support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center justify-center bg-[#B8FF3B] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#A6E635] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Start Application
                </button>
                <button className="inline-flex items-center justify-center bg-transparent text-white font-medium px-8 py-4 rounded-lg border-2 border-gray-600 hover:border-[#B8FF3B] hover:bg-[#B8FF3B]/10 transition-all duration-200">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;