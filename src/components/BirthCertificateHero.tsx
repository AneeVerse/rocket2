import React from 'react';
import Image from 'next/image';

const BirthCertificateHero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 relative mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-[#B8FF3B]/10 text-black px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Government Approved Process
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 leading-tight">
              Get Your Birth Certificate - 
              <span className="text-[#B8FF3B] block">Fast, Legal, Hassle-Free</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Complete birth certificate services for new registrations, duplicate copies, delayed registrations, and NABC certificates. Expert assistance for all India locations with government-approved processes and guaranteed delivery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="inline-flex items-center justify-center bg-[#B8FF3B] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#A6E635] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Apply for Birth Certificate Now
              </button>
              <button className="inline-flex items-center justify-center bg-transparent text-black font-medium px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-[#B8FF3B] hover:bg-[#B8FF3B]/10 transition-all duration-200">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Get Free Consultation
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                All India Coverage
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                100% Legal Compliance
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Fast Processing
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <Image
                src="/images/hero/hero section images/Change.png"
                alt="Birth Certificate Services"
                width={500}
                height={350}
                className="w-full h-140 object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#B8FF3B]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-black text-xs">Guaranteed</p>
                  <p className="text-gray-600 text-xs">Legal Validity</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-[#B8FF3B]/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-black text-xs">7-30 Days</p>
                  <p className="text-gray-600 text-xs">Processing Time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthCertificateHero;