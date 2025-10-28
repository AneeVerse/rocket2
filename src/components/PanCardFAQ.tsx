'use client';
import React, { useState } from 'react';

const PanCardFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does it take to update name on PAN card?",
      answer: "The PAN card name change process typically takes 7-15 working days from the date of application submission. Processing time may vary based on document verification and IT Department workload."
    },
    {
      question: "What is the fee for PAN card name correction?",
      answer: "The fee for PAN card name change is ₹110 for online applications and ₹85 for physical applications submitted at PAN centers. Additional courier charges may apply for home delivery."
    },
    {
      question: "Can I update my PAN card online?",
      answer: "Yes, you can update your PAN card name online through NSDL (www.tin-nsdl.com) or UTIITSL (www.utiitsl.com) portals. You need to fill Form 49A and upload required documents digitally."
    },
    {
      question: "What documents are required for PAN card name change?",
      answer: "Required documents include: Gazette notification of name change, name change affidavit, updated Aadhaar card, proof of address, recent photograph, marriage certificate (if applicable), and current PAN card copy."
    },
    {
      question: "Is gazette notification mandatory for PAN name change?",
      answer: "Yes, gazette notification is mandatory for PAN card name change as it serves as legal proof of your name change. The IT Department requires this document for processing your application."
    },
    {
      question: "Can I track my PAN card application status?",
      answer: "Yes, you can track your PAN card application status using the acknowledgment number provided after submission. Visit the NSDL or UTIITSL website and enter your acknowledgment number to check status."
    },
    {
      question: "What if my PAN card application gets rejected?",
      answer: "If your application is rejected, you'll receive a rejection letter with reasons. Common reasons include incomplete documents, mismatch in details, or poor document quality. You can reapply after addressing the issues."
    },
    {
      question: "Will my PAN number change after name update?",
      answer: "No, your PAN number remains the same. Only the name on the PAN card will be updated to reflect your new legal name. The 10-digit alphanumeric PAN number is permanent and doesn't change."
    },
    {
      question: "Can I use my old PAN card until the new one arrives?",
      answer: "Yes, you can continue using your old PAN card for transactions until you receive the updated one. However, ensure all other documents reflect your new name for consistency."
    },
    {
      question: "Do I need to inform my bank about PAN card name change?",
      answer: "Yes, you should inform your bank and other financial institutions about your PAN card name change to update their records and avoid any discrepancies in future transactions."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="pan-card-faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about PAN card name change process, 
            requirements, and procedures.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                  <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Help Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-[#B8FF3B]/10 to-white rounded-2xl p-8 border border-[#B8FF3B]/20">
            <h3 className="text-2xl font-bold text-black mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert team is here to help you with any questions about PAN card name change process. 
              Get personalized assistance and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918070905289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#B8FF3B] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#A6E635] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Chat on WhatsApp
              </a>
              <a 
                href="#pan-card-contact"
                className="inline-flex items-center justify-center bg-transparent text-black font-medium px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-[#B8FF3B] hover:bg-[#B8FF3B]/10 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanCardFAQ;