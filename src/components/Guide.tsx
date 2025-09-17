import React from "react";
import Image from "next/image";

const Guide = () => {
  const services = [
    {
      icon: "/images/guide/64b530ea31e2d786aa9e9f92_Frame (4).svg",
      title: "Litigation expertise",
      description: "Our legal experts excel in litigation, representing your interests effectively in court."
    },
    {
      icon: "/images/guide/64b530eab35ad704e5f79072_Frame (3).svg",
      title: "Corporate Law",
      description: "Navigate the complexities of corporate law with our experienced attorneys by your side."
    },
    {
      icon: "/images/guide/64b530ea79d8457cbbc880b1_Frame (5).svg",
      title: "Contracts and agreements",
      description: "Ensure your contracts are airtight and legally sound."
    },
    {
      icon: "/images/guide/64b530ece610739cd032b7b0_Frame.svg",
      title: "Intellectual property",
      description: "Protect your creative assets with our intellectual property services."
    },
    {
      icon: "/images/guide/64b530eb869754706ce0af54_Frame (1).svg",
      title: "Real estate law",
      description: "Streamline your real estate transactions with our legal guidance."
    },
    {
      icon: "/images/guide/64b530ea5688adf367af3a98_Frame (2).svg",
      title: "Family law",
      description: "Resolve family disputes with compassion and professionalism."
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-[1450] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
          <h2 className="text-2xl lg:text-3xl xl:text-6xl font-bold text-black mb-6 lg:mb-0 leading-tight max-w-2xl">
            Your trusted legal landscape guide
          </h2>
          
          <button className="bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm whitespace-nowrap self-start">
            Learn More
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-x-12 lg:gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              {/* Icon and Title Row */}
              <div className="flex items-center gap-4 mb-3">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={28}
                  height={28}
                  className="w-7 h-7 flex-shrink-0"
                />
                <h3 className="text-lg lg:text-xl font-bold text-black leading-tight">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guide;
