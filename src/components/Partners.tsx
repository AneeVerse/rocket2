"use client";
import React from "react";
import Image from "next/image";

const Partners = () => {
  const partnerData = [
    {
      icon: "/images/partners/upload.svg",
      title: "Upload Documents",
      description: "Upload all the documents on Apply Name Change portal."
    },
    {
      icon: "/images/partners/affidavite drafting.svg", 
      title: "Affidavit Drafting",
      description: "Lawyer drafts the Affidavit."
    },
    {
      icon: "/images/partners/newspaper.svg",
      title: "Newspaper Advertisement", 
      description: "Name Change Ad is published in the local newspaper."
    },
    {
      icon: "/images/partners/gazette application.svg",
      title: "Gazette Application", 
      description: "Application filing at the Gazette of India."
    },
    {
      icon: "/images/partners/notification.svg",
      title: "Gazette Notification", 
      description: "The changed name is published in the gazette."
    }
  ];

  // Arrow component for process flow
  const Arrow = () => (
    <div className="hidden md:flex items-center justify-center">
      <div className="text-[#b8ff3b] text-2xl font-extrabold mt-4">→</div>
    </div>
  );

  return (
    <section className="bg-white py-16 lg:py-24 -mt-10">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4">
            How To Get Name Changed
          </h2>
        </div>

        {/* Process Flow - Horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-2">
          {partnerData.map((partner, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center max-w-[200px] mx-auto">
                {/* Icon Container */}
                <div className="mb-4">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-[#b8ff3b] rounded-xl flex items-center justify-center transition-colors duration-300">
                    <Image
                      src={partner.icon}
                      alt={partner.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg lg:text-xl font-bold text-black">
                    {partner.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {partner.description}
                  </p>
                </div>
              </div>
              
              {/* Add arrow between steps (except after the last one) */}
              {index < partnerData.length - 1 && <Arrow />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
