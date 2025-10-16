"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          service: ""
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

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-50 to-white py-8 lg:py-12 scroll-mt-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Content */}
          <div>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl lg:text-3xl  font-bold text-black mb-4 leading-tight">
                Get Expert Guidance For Your Name Change
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Ready to change your name legally? Our experienced legal team handles everything from affidavit drafting to gazette publication.
              </p>
              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Whether it&apos;s marriage, divorce, spelling corrections, or personal reasons - we make the complex legal process simple and stress-free. 
                Fill out the form below and get personalized guidance from our name change experts.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                All consultations are confidential and our process is 100% compliant with Indian legal requirements. 
                Get started today and take the first step toward your new legal identity.
              </p>
            </div>

            {/* Services Offered */}
            <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="text-base font-bold text-black mb-3">Services Offered</h4>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#B8FF3B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="text-sm text-gray-600">Name Change / Gazzet Certificate, Income Certificate, Domicile Certificate, Passport</p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-6 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="text-base font-bold text-black mb-3">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#B8FF3B] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Seawood Corner, 116, Nerul East, Sector 25, Nerul, Navi Mumbai, Maharashtra 400706
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#B8FF3B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-base text-gray-600">7506849422</p>
                </div>
              </div>
            </div>
            </div>

        
          {/* Right Contact Form */}
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
                {/* Name Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-semibold text-black mb-1">
                      First name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-semibold text-black mb-1">
                      Last name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-black mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-black mb-1">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="XXX-XXX-XXXX"
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900 placeholder-gray-500"
                    required
                  />
                </div>

                {/* Service Selection Field */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold text-black mb-1">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:border-[#B8FF3B] focus:outline-none transition-colors duration-200 text-sm bg-white text-gray-900"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="Name Change Certificate">Name Change Certificate</option>
                    <option value="Birth Certificate">Birth Certificate</option>
                    <option value="Marriage Certificate">Marriage Certificate</option>
                    <option value="Gazette Certificate">Gazette Certificate</option>
                    <option value="Income Certificate">Income Certificate</option>
                    <option value="Domicile Certificate">Domicile Certificate</option>
                    <option value="Passport Services">Passport Services</option>
                    <option value="Death Certificate">Death Certificate</option>
                    <option value="Caste Certificate">Caste Certificate</option>
                    <option value="Non-Criminal Certificate">Non-Criminal Certificate</option>
                    <option value="Age Certificate">Age Certificate</option>
                    <option value="Nationality Certificate">Nationality Certificate</option>
                  </select>
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
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Apply Now
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
