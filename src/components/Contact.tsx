"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          phoneNumber: ""
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
    <section id="contact" className="bg-white py-16 lg:py-24 scroll-mt-24">
      <div className="max-w-[1450] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="lg:pr-4">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-8 leading-tight">
              Get Expert Guidance For Your Name Change
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Ready to change your name legally? Our experienced legal team handles everything from affidavit drafting to gazette publication.
              </p>
              
              <p>
                Whether it&apos;s marriage, divorce, spelling corrections, or personal reasons - we make the complex legal process simple and stress-free. 
                Fill out the form below and get personalized guidance from our name change experts.
              </p>
              
              <p>
                All consultations are confidential and our process is 100% compliant with Indian legal requirements. 
                Get started today and take the first step toward your new legal identity.
              </p>
            
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="relative">
            {/* Form Container with Shadow */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-18 py-12 lg:py-16 shadow-xl border border-gray-100">
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

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#B8FF3B] focus:border-[#B8FF3B] outline-none transition-all duration-200 placeholder-gray-400"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#B8FF3B] focus:border-[#B8FF3B] outline-none transition-all duration-200 placeholder-gray-400"
                      required
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#B8FF3B] focus:border-[#B8FF3B] outline-none transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Phone Number Field */}
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="XXX-XXX-XXXX"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#B8FF3B] focus:border-[#B8FF3B] outline-none transition-all duration-200 placeholder-gray-400"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-bold py-4 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform focus:ring-2 focus:ring-[#B8FF3B] focus:ring-offset-2 outline-none ${
                    isSubmitting 
                      ? "bg-gray-400 text-gray-600 cursor-not-allowed" 
                      : "bg-[#B8FF3B] text-black hover:bg-[#A3E635] hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>

            {/* Optional: Decorative shadow behind form */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl transform translate-x-2 translate-y-2 -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
