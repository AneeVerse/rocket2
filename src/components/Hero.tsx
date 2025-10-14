"use client";
import React from "react";
import Link from "next/link";

const heroImages1 = [
  "/images/hero/hero section images/Change of Name After Marriage.png",
  "/images/hero/hero section images/Change of Name Due to Divorce.png",
  "/images/hero/hero section images/Change of Name Due to Religious Reasons.png",
  "/images/hero/hero section images/Change of Name Due to Spelling Mistake.png",
  "/images/hero/hero section images/Change of Name After Adoption.png",
  "/images/hero/hero section images/Change Name on Property Card.png",
];

const heroImages2 = [
  "/images/hero/hero section images/Change.png",
  "/images/hero/hero section images/Change of Name Due to Combining or Hyphenating Surnames.png",
  "/images/hero/hero section images/Change of Name Due to Dislike of Current Name.png",
  "/images/hero/hero section images/Change of Name Due to Mistakes in School Certificates.png",
  "/images/hero/hero section images/Change of Name Due to Political Statement.png",
  "/images/hero/hero section images/Change of Name Due to Transgender Transition.png",
];

const Hero = () => {
  return (
    <section className="min-h-screen bg-white p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 pt-24 sm:pt-28 md:pt-32 lg:mt-4 ">
      <div className="relative h-[88vh] sm:h-[75vh] lg:h-[85vh] overflow-hidden rounded-3xl sm:rounded-[2rem] md:rounded-[2rem] lg:rounded-[2rem] bg-[#def8cb] custom-height">
        {/* Main Content Container */}
        <div className="relative z-10 w-full h-full flex items-center mt-20 lg:mt-0">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="max-w-2xl text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
                  Change Your Name Legally
                  Simple, Secure, Fast
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Complete name change process with expert legal support. Get your affidavit, 
                  newspaper ads, and gazette notification handled professionally. Join thousands 
                  who&apos;ve successfully changed their names with full legal compliance.
                </p>
                <Link href="/#contact">
                  <button className="bg-black text-white px-12 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                    Apply Now
                  </button>
                </Link>
              </div>

              {/* Right Image Section - Horizontal scroll on Mobile, 2 Column on Desktop */}
              <div className="relative w-full lg:w-[28rem] xl:w-[32rem] h-[50vh] sm:h-[60vh] lg:h-[75vh] overflow-hidden mx-auto lg:mx-0 ">
                {/* Mobile: Horizontal Scrolling */}
                <div className="lg:hidden w-full h-full overflow-hidden mt-4 mb-8 sm:mb-10 custom-margin">
                  <div className="marquee-horizontal">
                    <div className="flex space-x-4 sm:space-x-5">
                      {[...heroImages1, ...heroImages1, ...heroImages2].map((image, index) => (
                        <div
                          key={index}
                          className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex-shrink-0"
                        >
                          <img
                            src={image}
                            alt={`Hero image ${index + 1}`}
                            className="w-48 sm:w-56 h-64 sm:h-72 object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop: Two Columns */}
                <div className="hidden lg:block w-full h-full">
                  {/* First Column - Moving Up */}
                  <div className="absolute left-0 w-[45%] h-full">
                    <div className="marquee-vertical-up">
                      <div className="space-y-6">
                        {[...heroImages1, ...heroImages1].map((image, index) => (
                          <div
                            key={index}
                            className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                          >
                            <img
                              src={image}
                              alt={`Hero image ${index + 1}`}
                              className="w-full h-64 xl:h-72 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Second Column - Moving Down */}
                  <div className="absolute right-0 w-[45%] h-full">
                    <div className="marquee-vertical-down" style={{ animationDelay: '-25s' }}>
                      <div className="space-y-6">
                        {[...heroImages2, ...heroImages2].map((image, index) => (
                          <div
                            key={index}
                            className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                          >
                            <img
                              src={image}
                              alt={`Hero image ${index + 1}`}
                              className="w-full h-68 xl:h-76 object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
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
