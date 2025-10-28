import React from 'react';
import { Heart, FileText, Edit3, Scale, Globe, Edit, Upload, CreditCard, BarChart3, CheckCircle, FileCheck, Users, Target } from 'lucide-react';

const PanCardServices = () => {
  const reasons = [
    {
      title: "Marriage",
      description: "Update PAN card after marriage with new surname",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Divorce", 
      description: "Revert to maiden name or change surname after divorce",
      icon: FileText,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Spelling Errors",
      description: "Correct spelling mistakes in name on PAN card",
      icon: Edit3,
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Legal Name Change",
      description: "Update PAN after official gazette name change",
      icon: Scale,
      color: "from-purple-500 to-violet-500"
    }
  ];

  const documents = [
    "Gazette Notification of Name Change",
    "Affidavit for Name Change",
    "Aadhaar Card (Updated with new name)",
    "Proof of Address (Utility bill, Bank statement)",
    "Recent Passport Size Photograph",
    "Marriage Certificate (if applicable)",
    "Divorce Decree (if applicable)",
    "Current PAN Card Copy"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Visit Official Portal",
      description: "Access NSDL (www.tin-nsdl.com) or UTIITSL (www.utiitsl.com) website",
      icon: "Globe",
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "2", 
      title: "Select PAN Correction Form",
      description: "Choose 'Changes or Correction in PAN Data' option and fill Form 49A",
      icon: "FileText",
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "3",
      title: "Fill New Details",
      description: "Enter your new legal name as per gazette notification",
      icon: "Edit",
      color: "from-purple-500 to-violet-500"
    },
    {
      step: "4",
      title: "Upload Documents",
      description: "Upload all required supporting documents in specified format",
      icon: "Upload",
      color: "from-orange-500 to-amber-500"
    },
    {
      step: "5",
      title: "Pay Processing Fee",
      description: "Pay applicable fee (₹110 for online, ₹85 for physical submission)",
      icon: "CreditCard",
      color: "from-pink-500 to-rose-500"
    },
    {
      step: "6",
      title: "Submit & Track",
      description: "Submit application and track status using acknowledgment number",
      icon: "BarChart3",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            PAN Card Name Change Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A PAN (Permanent Account Number) card is a crucial financial document issued by the Income Tax Department. 
            Updating your PAN card after a legal name change is essential for maintaining consistency across all official 
            records and ensuring smooth financial transactions, tax filings, and banking operations.
          </p>
        </div>

        {/* Reasons for Name Change */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center">
            Common Reasons for PAN Card Name Change
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="group bg-white rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-800 transition-colors duration-300">{reason.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center">
            Required Documents
          </h3>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((document, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl bg-white/70 hover:bg-white transition-all duration-300 hover:shadow-md group">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#B8FF3B] to-[#A6E635] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <CheckCircle size={20} className="text-black" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover:text-black transition-colors duration-300">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center">
            Step-by-Step PAN Card Update Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => {
              const getIconComponent = (iconName: string) => {
                const icons: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
                  Globe, FileText, Edit, Upload, CreditCard, BarChart3
                };
                return icons[iconName] || Globe;
              };
              const IconComponent = getIconComponent(step.icon);
              
              return (
                <div key={index} className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-3 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                      <IconComponent size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-black mb-3 group-hover:text-gray-800 transition-colors duration-300">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Highlights */}
        <div className="bg-gradient-to-br from-[#B8FF3B]/10 via-white to-[#A6E635]/5 rounded-3xl p-8 border border-[#B8FF3B]/20 shadow-xl">
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8 text-center">
            How Our Service Helps You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center bg-white/80 rounded-2xl p-6 hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8FF3B] to-[#A6E635] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <FileCheck size={32} className="text-black" />
              </div>
              <h4 className="text-lg font-semibold text-black mb-3">Documentation Support</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Complete assistance with document preparation, verification, and formatting as per IT Department requirements.</p>
            </div>
            <div className="group text-center bg-white/80 rounded-2xl p-6 hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8FF3B] to-[#A6E635] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Edit3 size={32} className="text-black" />
              </div>
              <h4 className="text-lg font-semibold text-black mb-3">Form Filling Assistance</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Expert guidance in filling Form 49A correctly to avoid rejections and ensure smooth processing.</p>
            </div>
            <div className="group text-center bg-white/80 rounded-2xl p-6 hover:bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-[#B8FF3B] to-[#A6E635] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                <Target size={32} className="text-black" />
              </div>
              <h4 className="text-lg font-semibold text-black mb-3">End-to-End Support</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Complete process management from application submission to tracking and receiving your updated PAN card.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanCardServices;