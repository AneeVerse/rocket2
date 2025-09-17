"use client";
import React from "react";
import Image from "next/image";

const Partners = () => {
  const partnerData = [
    {
      icon: "/images/partners/683291cc4c6cf1f4e8e844f7_icon-2.svg",
      title: "Strategy That Scales",
      description: "Get a customized, proven roadmap tailored to your business stage."
    },
    {
      icon: "/images/partners/683291cc4c6cf1f4e8e844f5_icon-4.svg", 
      title: "Mindset for Leadership",
      description: "Elevate your thinking, decision-making, and confidence."
    },
    {
      icon: "/images/partners/68329944c6e3217f182ccc92_shopping-bag-black.svg",
      title: "Time-Saving Execution", 
      description: "Avoid guesswork with guided steps and faster results."
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24 -mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
            Your trusted legal partners
          </h2>
        </div>

         {/* Partners Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
           {partnerData.map((partner, index) => (
             <div key={index} className="flex items-start gap-4 group">
               {/* Icon Container */}
               <div className="flex-shrink-0">
                 <div className="w-14 h-14 lg:w-16 lg:h-16 bg-[#2a4f2a] rounded-xl flex items-center justify-center transition-colors duration-300">
                   <Image
                     src={partner.icon}
                     alt={partner.title}
                     width={28}
                     height={28}
                     className="w-7 h-7 lg:w-8 lg:h-8"
                   />
                 </div>
               </div>

               {/* Content */}
               <div className="flex-1 space-y-2">
                 <h3 className="text-lg lg:text-xl font-bold text-black">
                   {partner.title}
                 </h3>
                 <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                   {partner.description}
                 </p>
               </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
