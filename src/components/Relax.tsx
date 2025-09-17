import React from "react";
import Image from "next/image";

const Relax = () => {
  return (
    <section className="bg-gray-50 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:pr-8">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
              Relax and leave legal worries to us
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Stardom Law Firm, we understand that legal issues can be a 
              significant source of stress. That's why we offer comprehensive 
              legal services designed to ease your burden and let you truly relax.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {/* Personalized solutions */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">
                    <svg 
                      className="w-6 h-6 text-black" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-black">
                    Personalized solutions
                  </h3>
                </div>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  We recognize that every legal situation is unique. We take the time to 
                  understand your specific needs and provide tailored solutions.
                </p>
              </div>

              {/* Transparency */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">
                    <svg 
                      className="w-6 h-6 text-black" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-black">
                    Transparency
                  </h3>
                </div>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                  We believe in keeping our clients informed every step of the way. You'll 
                  have direct access to your attorney.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/relax/65035636c43285c35d00cf09_Rectangle 42011 (1).webp"
                alt="Professional woman working on laptop"
                width={600}
                height={500}
                className="w-full h-140 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Relax;
