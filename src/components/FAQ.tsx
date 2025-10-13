"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
                <Link href="https://wa.me/919920540535" target="_blank" rel="noopener noreferrer">
                  <button className="inline-flex items-center justify-center bg-[#B8FF3B] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#A6E635] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                    </svg>
                    WhatsApp
                  </button>
                </Link>
                <Link href="tel:+919920540535">
                  <button className="inline-flex items-center justify-center bg-transparent text-white font-medium px-8 py-4 rounded-lg border-2 border-gray-600 hover:border-[#B8FF3B] hover:bg-[#B8FF3B]/10 transition-all duration-200">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;