"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FileText, 
  Heart, 
  Users, 
  Baby, 
  UserPlus, 
  Home, 
  GraduationCap, 
  Shield, 
  Church, 
  Flag, 
  Sparkles,
  ChevronDown
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isServicesClicked, setIsServicesClicked] = useState(false);

  const services = [
    {
      title: "Change of Name Due to Spelling Mistake",
      description: "Correct spelling errors in your legal documents and official records.",
      slug: "spelling-mistake",
      icon: FileText
    },
    {
      title: "Change of Name Due to Dislike of Current Name",
      description: "Change your name for personal preference or cultural reasons.",
      slug: "dislike-current-name",
      icon: Heart
    },
    {
      title: "Change of Name Due to Divorce",
      description: "Revert to maiden name or adopt a new name after divorce proceedings.",
      slug: "divorce",
      icon: Users
    },
    {
      title: "Change of Name Due to Child's Surname Change",
      description: "Update your child's surname for family unity or legal requirements.",
      slug: "child-surname-change",
      icon: Baby
    },
    {
      title: "Change of Name Due to Combining or Hyphenating Surnames",
      description: "Combine family names or create hyphenated surnames for marriage.",
      slug: "combining-hyphenating-surnames",
      icon: UserPlus
    },
    {
      title: "Change of Name After Marriage",
      description: "Adopt your spouse's surname or create a new combined family name.",
      slug: "after-marriage",
      icon: Heart
    },
    {
      title: "Change Name on Property Card",
      description: "Update property documents with your new legal name.",
      slug: "property-card",
      icon: Home
    },
    {
      title: "Change of Name Due to Mistakes in School Certificates",
      description: "Correct name errors in educational certificates and academic records.",
      slug: "school-certificate-mistakes",
      icon: GraduationCap
    },
    {
      title: "Change of Name After Adoption",
      description: "Update legal name following adoption procedures.",
      slug: "after-adoption",
      icon: Shield
    },
    {
      title: "Change of Name Due to Religious Reasons",
      description: "Change name for religious conversion or spiritual purposes.",
      slug: "religious-reasons",
      icon: Church
    },
    {
      title: "Change of Name Due to Political Statement",
      description: "Update name for political or ideological expression.",
      slug: "political-statement",
      icon: Flag
    },
    {
      title: "Change of Name Due to Transgender Transition",
      description: "Legal name change to align with gender identity.",
      slug: "transgender-transition",
      icon: Sparkles
    }
  ];

  const navItems = [
    { name: "SERVICES", href: "#", hasDropdown: true },
    { name: "ABOUT", href: "/#about" },
    { name: "BIRTH CERTIFICATE", href: "/birth-certificate" },
    { name: "FAQ", href: "/#faq" },
    { name: "CONTACT US", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/nav-logo.png"
                alt="Stardom"
                width={125}
                height={23}
                className="h-8 w-auto"
              />
              <span className="ml-2 font-semibold text-black text-xl">NAME CHANGE GAZETTE</span>
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex justify-center flex-1">
            <div className="flex items-center space-x-5">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesHovered(true)}
                    >
                      <button 
                        className="text-gray-700 hover:text-black px-2 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                        onClick={() => setIsServicesHovered(false)}
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${isServicesHovered ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mega Menu */}
                      {isServicesHovered && (
                        <div 
                          className="fixed top-17 left-0 right-0 mt-2 w-full bg-white shadow-xl border border-gray-200 rounded-lg z-50"
                          onMouseEnter={() => setIsServicesHovered(true)}
                          onMouseLeave={() => setIsServicesHovered(false)}
                        >
                          <div className="max-w-[1490px] mx-auto p-8">
                            <div className="grid grid-cols-3 gap-6">
                              {services.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                  <Link
                                    key={service.slug}
                                    href={`/name-change/${service.slug}`}
                                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#B8FF3B]/10 transition-colors duration-200 group"
                                    onClick={() => setIsServicesClicked(false)}
                                  >
                                    <div className="w-12 h-12 bg-[#B8FF3B]/20 rounded-lg flex items-center justify-center group-hover:bg-[#B8FF3B]/30 transition-colors duration-200">
                                      <IconComponent className="w-6 h-6 text-[#4B5563]" />
                                    </div>
                                    <div className="flex-1">
                                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#374151] transition-colors duration-200">
                                        {service.title}
                                      </h4>
                                      <p className="text-xs text-gray-500 mt-1">
                                        {service.description.substring(0, 50)}...
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                              <Link
                                href="/name-change"
                                className="inline-flex items-center px-6 py-3 bg-[#B8FF3B] text-black text-sm font-semibold rounded-lg hover:bg-[#A3E635] transition-colors duration-200 shadow-sm hover:shadow-md"
                                onClick={() => setIsServicesHovered(false)}
                              >
                                View All Our Services
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-black px-2 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section with WhatsApp Icon */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* WhatsApp Icon */}
             <Link
               href="https://wa.me/+917506849422"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-center w-12 h-12 bg-[#B8FF3B] hover:bg-[#A3E635] rounded-full transition-colors duration-200 shadow-sm hover:shadow-md"
             >
              <svg
                 className="w-6 h-6 text-black"
                 fill="currentColor"
                 viewBox="0 0 24 24"
               >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </Link>
            
            {/* CTA Button */}
            <Link
              href="/#contact"
              className="bg-[#B8FF3B] text-black px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#A3E635] transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - Full Page */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white animate-slide-in">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-white">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/nav-logo.png"
                  alt="Stardom"
                  width={125}
                  height={23}
                  className="h-7 w-auto"
                />
                <span className="ml-2 font-semibold text-black text-lg">NAME CHANGE GAZETTE</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-200"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            {/* Navigation Menu */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className="space-y-1">
                {navItems.map((item, index) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div className="space-y-2">
                        <div className="group flex items-center px-4 py-3 text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300 ease-out animate-fade-in-up"
                             style={{ animationDelay: `${index * 100}ms` }}>
                          <span className="relative">
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </div>
                        <div className="ml-6 space-y-1">
                          {services.slice(0, 3).map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                href={`/name-change/${service.slug}`}
                                className="flex items-center px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition-all duration-200"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <IconComponent className="w-4 h-4 mr-3 text-[#B8FF3B]" />
                                <span className="truncate">{service.title}</span>
                              </Link>
                            );
                          })}
                          <Link
                            href="/name-change"
                            className="flex items-center px-4 py-2 text-sm text-[#B8FF3B] hover:text-[#A3E635] font-medium rounded-lg transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <span>View All Services</span>
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="group flex items-center px-4 py-3 text-lg font-medium text-gray-800 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300 ease-out animate-fade-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* CTA Button */}
              <div className="mt-8 px-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center w-full bg-[#B8FF3B] text-black px-6 py-4 rounded-2xl text-base font-semibold hover:bg-[#A3E635] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Book 30 Mins Free Meeting</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-8 py-6 border-t border-gray-100 bg-gray-50">
              <p className="text-center text-sm text-gray-500">
                © 2024 Stardom. Expert legal guidance.
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
