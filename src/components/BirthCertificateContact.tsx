"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const BirthCertificateContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    certificateType: '',
    birthYear: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitStatus("");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setSubmitMessage(result.message);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          certificateType: '',
          birthYear: '',
          message: ''
        });
      } else {
        setSubmitStatus("error");
        setSubmitMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setSubmitMessage("Failed to send message. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const allServices = [
    'Name Change Certificate',
    'Birth Certificate',
    'Marriage Certificate',
    'Gazette Certificate',
    'Income Certificate',
    'Domicile Certificate',
    'Passport Services',
    'Death Certificate',
    'Caste Certificate',
    'Non-Criminal Certificate',
    'Age Certificate',
    'Nationality Certificate'
  ];

  const certificateTypes = [
    'New Birth Registration',
    'Delayed Birth Registration',
    'Duplicate Birth Certificate',
    'NABC Certificate',
    'NRI Birth Certificate',
    'Birth Certificate Correction'
  ];

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana',
    'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
    'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir',
    'Ladakh', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep', 'Puducherry'
  ];

  return (
    <section id="birth-certificate-contact" className="bg-gradient-to-br from-gray-50 to-white py-8 lg:py-12">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Content */}
          <div>
            {/* Header */}
            <div className="mb-6">
             
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-4 leading-tight">
                Start Your Birth Certificate Application
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Need a birth certificate for passport, school admission, job applications, or government services? Our certified professionals handle all types of birth certificate applications across India. Whether you need a new registration, duplicate copy, delayed registration after years, or Non-Availability Birth Certificate (NABC), we ensure complete legal compliance and fast processing.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Fill out the form below to get personalized guidance from our document experts. We handle everything from municipal corporation applications to magistrate orders for delayed cases. All applications are processed with full confidentiality and government-approved procedures. Get your legally valid birth certificate without the bureaucratic hassles.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our experienced team has successfully processed over 10,000+ birth certificate applications across all Indian states and union territories. We understand the unique requirements of each state&apos;s registration system and ensure your application meets all legal standards for acceptance by government authorities, educational institutions, and international organizations.
              </p>
            </div>

            {/* Services Offered */}
            <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-black mb-3">Services Offered</h4>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#B8FF3B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Name Change / Gazzet Certificate, Income Certificate, Domicile Certificate, Passport</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="text-lg font-bold text-black mb-3">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B8FF3B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-black">Address:</p>
                    <p className="text-sm text-gray-600">Seawood Corner, 116, Nerul East, Sector 25, Nerul, Navi Mumbai, Maharashtra 400706</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#B8FF3B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-black">Phone:</p>
                    <p className="text-sm text-gray-600">+91 8070905289</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "100% Legal Compliance",
                  description: "Government-approved processes"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Fast Processing",
                  description: "7-30 days depending on type"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Full Confidentiality",
                  description: "Secure document handling"
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Expert Support",
                  description: "Professional guidance throughout"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-[#B8FF3B]/20 to-[#B8FF3B]/10 rounded-lg flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black mb-1">{benefit.title}</h4>
                    <p className="text-xs text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                  Get Free Consultation
                </h3>
                <p className="text-sm text-gray-600">
                  Fill out the form and our experts will contact you within 24 hours with personalized guidance.
                </p>
              </div>

              {/* Success/Error Message */}
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${
                  submitStatus === "success" 
                    ? "bg-green-50 border border-green-200 text-green-800" 
                    : "bg-red-50 border border-red-200 text-red-800"
                }`}>
                  <div className="flex items-center">
                    {submitStatus === "success" ? (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    <span className="font-medium">{submitMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-black mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-black mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-black mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 placeholder-gray-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-black mb-1">
                    Service Required
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 appearance-none cursor-pointer hover:border-gray-300"
                    >
                      <option value="" className="text-gray-500">Select a service</option>
                      {allServices.map((service) => (
                        <option key={service} value={service} className="text-gray-900">{service}</option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Certificate Type and Birth Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="certificateType" className="block text-xs font-semibold text-black mb-1">
                      Certificate Type *
                    </label>
                    <div className="relative">
                      <select
                        id="certificateType"
                        name="certificateType"
                        value={formData.certificateType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 appearance-none cursor-pointer hover:border-gray-300"
                      >
                        <option value="" className="text-gray-500">Select type</option>
                        {certificateTypes.map((type) => (
                          <option key={type} value={type} className="text-gray-900">{type}</option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="birthYear" className="block text-xs font-semibold text-black mb-1">
                      Birth Year *
                    </label>
                    <input
                      type="number"
                      id="birthYear"
                      name="birthYear"
                      value={formData.birthYear}
                      onChange={handleInputChange}
                      required
                      min="1900"
                      max={new Date().getFullYear()}
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 placeholder-gray-500"
                      placeholder="1990"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-black mb-1">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 resize-none text-sm bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Please provide any additional details about your birth certificate requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-sm ${
                    isSubmitting 
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed" 
                      : "bg-[#B8FF3B] text-black hover:bg-[#A6E635] hover:-translate-y-1"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Application...
                    </div>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Start My Application
                    </>
                  )}
                </button>

                
                  
                
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Need Help Choosing Section */}
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 lg:p-12 border-2 border-gray-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Need Help Choosing the Right Service?
            </h3>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
              Our experts will analyze your specific situation and recommend the best approach for obtaining your birth certificate quickly and legally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/918070905289" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex items-center justify-center bg-[#B8FF3B] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#A6E635] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </button>
              </Link>
              <Link href="tel:+918070905289">
                <button className="inline-flex items-center justify-center bg-transparent text-black font-medium px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-[#B8FF3B] hover:bg-[#B8FF3B]/10 transition-all duration-200">
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
    </section>
  );
};

export default BirthCertificateContact;