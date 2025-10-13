"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "ABOUT", href: "/#about" },
    { name: "BIRTH CERTIFICATE", href: "/birth-certificate" },
    { name: "BLOGS", href: "/#blogs" },
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
          <div className="hidden md:flex justify-center flex-1">
            <div className="flex items-center space-x-5">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-black px-2 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="bg-[#B8FF3B] text-black px-8 py-4 rounded-lg text-sm font-semibold hover:bg-[#A3E635] transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Book 30 Mins Free Meeting
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
        <div className="md:hidden fixed inset-0 z-50 bg-white animate-slide-in">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100 bg-white">
              <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/website-logo.svg"
                  alt="Stardom"
                  width={125}
                  height={23}
                  className="h-7 w-auto"
                />
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
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center px-4 py-6 text-3xl font-medium text-gray-800 hover:text-black hover:bg-gray-50 rounded-xl transition-all duration-300 ease-out animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                ))}
              </nav>
              
              {/* CTA Button */}
              <div className="mt-12 px-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
                <Link
                  href="/#contact"
                  className="flex items-center justify-center w-full bg-[#B8FF3B] text-black px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-[#A3E635] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
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
