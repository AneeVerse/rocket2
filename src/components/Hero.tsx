"use client";
import React from "react";

const heroImages1 = [
  "/images/hero/683291cc4c6cf1f4e8e844fd_hero-img-1.png",
  "/images/hero/683291cc4c6cf1f4e8e844fa_hero-img-2.png",
  "/images/hero/683291cc4c6cf1f4e8e844f8_hero-img-3.png",
  "/images/hero/683291cc4c6cf1f4e8e844fb_hero-img-4.png",
];

const heroImages2 = [
  "/images/hero/683291cc4c6cf1f4e8e844fc_hero-img-5.png",
  "/images/hero/683291cc4c6cf1f4e8e844f9_hero-img-6.png",
  "/images/hero/683291cc4c6cf1f4e8e844fd_hero-img-1.png",
  "/images/hero/683291cc4c6cf1f4e8e844fa_hero-img-2.png",
];

const Hero = () => {
  return (
    <section className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pt-24 sm:pt-28 md:pt-32 mt-2 ">
      <div className="relative h-[88vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden rounded-3xl sm:rounded-[2rem] md:rounded-[2rem] lg:rounded-[2rem] bg-[#def8cb]">
        {/* Main Content Container */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                  The law firm of
                  <br />
                  choice for the
                  <br />
                  <span className="text-black">winners</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg">
                  With a commitment to excellence, Stardom provides expert legal
                  guidance and solutions tailored to your unique needs.
                </p>
                <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                  Get Started Now
                </button>
              </div>

              {/* Right Image Section - 2 Column Vertical Moving Cards */}
              <div className="relative w-96 lg:w-[28rem] xl:w-[32rem] h-[70vh] lg:h-[75vh] overflow-hidden">
                {/* First Column - Moving Up */}
                <div className="absolute left-0 w-[45%] h-full">
                  <div className="marquee-vertical-up">
                    <div className="space-y-5 lg:space-y-6">
                      {[...heroImages1, ...heroImages1].map((image, index) => (
                        <div
                          key={index}
                          className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          <img
                            src={image}
                            alt={`Hero image ${index + 1}`}
                            className="w-full h-56 sm:h-60 lg:h-64 xl:h-72 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Second Column - Moving Down */}
                <div className="absolute right-0 w-[45%] h-full">
                  <div className="marquee-vertical-down" style={{ animationDelay: '-25s' }}>
                    <div className="space-y-5 lg:space-y-6">
                      {[...heroImages2, ...heroImages2].map((image, index) => (
                        <div
                          key={index}
                          className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          <img
                            src={image}
                            alt={`Hero image ${index + 1}`}
                            className="w-full h-60 sm:h-64 lg:h-68 xl:h-76 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient Overlays for smooth edges */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#def8cb] to-transparent z-10 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#def8cb] to-transparent z-10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
