'use client';
import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Clock, MapPin, Send, User, Smartphone, AtSign, MessageSquare, CheckCircle } from 'lucide-react';

const PanCardContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'pan-name-change',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'pan-name-change',
          message: ''
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for immediate assistance",
      contact: "+91 80709 05289",
      action: "tel:+918070905289",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      description: "Quick response via WhatsApp",
      contact: "+91 80709 05289",
      action: "https://wa.me/918070905289",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us your detailed query",
      contact: "info@namechangegazette.com",
      action: "mailto:info@namechangegazette.com",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="pan-card-contact" className="py-8 lg:py-12 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Get Expert Help with Your PAN Card Name Change
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to update your PAN card? Contact our expert team for personalized assistance 
            and guidance throughout the entire process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Contact Information */}
          <div className="space-y-8">
            
            {/* Contact Methods */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8FF3B] to-[#A6E635]  rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black">Contact Information</h3>
              </div>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.action}
                      target={method.action.startsWith('http') ? '_blank' : '_self'}
                      rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="group flex items-start space-x-5 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200 hover:shadow-lg"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">{method.title}</h4>
                        <p className="text-gray-600 text-sm mb-2 leading-relaxed">{method.description}</p>
                        <p className="text-[#B8FF3B] font-semibold text-lg group-hover:text-[#A6E635] transition-colors duration-300">{method.contact}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-black">Business Hours</h3>
              </div>
              
              <div className="space-y-4">
                {businessHours.map((hour, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-700 font-medium">{hour.day}</span>
                    <span className={`font-semibold ${hour.hours === 'Closed' ? 'text-red-500' : 'text-[#B8FF3B]'}`}>
                      {hour.hours}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black mb-1">Emergency Support</h4>
                    <p className="text-sm text-gray-600">For urgent queries, contact us via WhatsApp. We provide 24/7 support for critical issues.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gradient-to-br from-[#B8FF3B] to-[#A6E635] rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500">
              <div className="w-16 h-16 bg-black bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Need Immediate Assistance?</h3>
              <p className="text-black text-opacity-80 mb-6 leading-relaxed">
                Start your PAN card name change process today with our expert guidance.
              </p>
              <a
                href="https://wa.me/918070905289?text=Hi, I need help with PAN card name change"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-bold py-4 px-8 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Start WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-[#B8FF3B] to-[#A6E635] rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <MessageSquare className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-black">Send Us a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl  transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 group-hover:border-gray-300"
                    placeholder="Enter your full name *"
                  />
                </div>
                <div className="group">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl  transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 group-hover:border-gray-300"
                    placeholder="Enter your phone number *"
                  />
                </div>
              </div>
              
              <div className="group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl  transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 group-hover:border-gray-300"
                  placeholder="Enter your email address *"
                />
              </div>
              
              <div className="group">
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl  transition-all duration-300 bg-white text-gray-900 group-hover:border-gray-300"
                >
                  <option value="pan-name-change">PAN Card Name Change</option>
                  <option value="pan-correction">PAN Card Correction</option>
                  <option value="pan-duplicate">Duplicate PAN Card</option>
                  <option value="consultation">Free Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl  transition-all duration-300 bg-white text-gray-900 placeholder-gray-500 group-hover:border-gray-300 resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-[#B8FF3B] to-[#A6E635] text-black font-bold py-5 px-8 rounded-xl hover:from-[#A6E635] hover:to-[#95D62A] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanCardContact;