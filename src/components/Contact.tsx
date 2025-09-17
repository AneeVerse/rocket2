"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1450] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Content */}
          <div className="lg:pr-4">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-8 leading-tight">
              Relax and leave legal worries to us
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At Stardom Law Firm, we understand that legal issues can be a 
                significant source of stress. That&apos;s why we offer comprehensive 
                legal services designed to ease your burden and let you truly relax.
              </p>
              
              <p>
                At Stardom Law Firm, we understand that legal issues can be a 
                significant source of stress. That&apos;s why we offer comprehensive 
                legal services designed to ease your burden and let you truly relax.
              </p>
              
              <p>
                At Stardom Law Firm, we understand that legal issues can be a 
                significant source of stress. That&apos;s why we offer comprehensive 
                legal services designed to ease your burden and let you truly relax.
              </p>
            
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="relative">
            {/* Form Container with Shadow */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-18 py-12 lg:py-16 shadow-xl border border-gray-100">
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
                  className="w-full bg-[#B8FF3B] text-black font-bold py-4 px-6 rounded-lg hover:bg-[#A3E635] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02] focus:ring-2 focus:ring-[#B8FF3B] focus:ring-offset-2 outline-none"
                >
                  Send Message
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
