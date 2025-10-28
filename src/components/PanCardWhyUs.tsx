import React from 'react';
import { Shield, Clock, Users, FileCheck, Phone, BarChart3, MessageCircle, Plus, TrendingUp, CheckCircle, Zap, Headphones } from 'lucide-react';

const PanCardWhyUs = () => {
  const features = [
    {
      icon: Shield,
      title: "100% Legal Compliance",
      description: "All processes follow Income Tax Department guidelines and NSDL/UTIITSL protocols for secure and legal PAN card updates.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast-track your PAN card name change with our streamlined process, typically completed within 7-15 working days.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Our experienced team provides step-by-step assistance and ensures error-free application submission.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: FileCheck,
      title: "Document Verification",
      description: "Thorough document review and verification to prevent rejections and ensure smooth approval process.",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Phone,
      title: "24/7 Support",
      description: "Round-the-clock customer support to address your queries and provide updates on application status.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Real-time tracking system to monitor your application status and receive timely updates on processing.",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const stats = [
    { number: "5000+", label: "PAN Cards Updated", icon: TrendingUp },
    { number: "99.8%", label: "Success Rate", icon: CheckCircle },
    { number: "7-15", label: "Days Processing", icon: Zap },
    { number: "24/7", label: "Customer Support", icon: Headphones }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
            Why Choose Our PAN Card Name Change Service?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We simplify the complex PAN card name change process with expert guidance, 
            ensuring your application is processed smoothly and efficiently.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="group text-center bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#B8FF3B]/30">
                <div className="flex justify-center mb-3">
                  <IconComponent 
                    size={48} 
                    className="text-[#B8FF3B] group-hover:scale-110 transition-transform duration-300" 
                  />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-black mb-2 group-hover:text-[#B8FF3B] transition-colors duration-300">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-transparent relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 relative z-10`}>
                  <IconComponent size={32} />
                </div>
                <h3 className="text-xl font-semibold text-black mb-4 group-hover:text-gray-800 transition-colors duration-300 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#B8FF3B] to-[#A6E635] rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
              Ready to Update Your PAN Card?
            </h3>
            <p className="text-lg text-black/80 mb-8 max-w-2xl mx-auto">
              Get started with our expert PAN card name change service today. 
              Our team will guide you through every step of the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918070905289" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-bold px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Start WhatsApp Chat
              </a>
              <a 
                href="#pan-card-contact"
                className="inline-flex items-center justify-center bg-white text-black font-medium px-8 py-4 rounded-lg border-2 border-black/20 hover:border-black hover:bg-black/5 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PanCardWhyUs;