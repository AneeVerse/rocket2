"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Content */}
        <div className="mb-12">
          
          {/* Two-column layout with left-right spacing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Left Column - Main Text */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white leading-tight">
                  Get Your Birth Certificate Today
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Join thousands who&apos;ve obtained their birth certificates with professional assistance and complete legal compliance.
                </p>
              </div>
            </div>
            
            {/* Right Column - Navigation Links */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {/* Column 1 */}
                <div className="space-y-3">
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    About
                  </Link>
                  <Link href="/#social-mosaic" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    Gallery
                  </Link>
                </div>
                
                {/* Column 2 */}
                <div className="space-y-3">
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    Contact
                  </Link>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    FAQ
                  </Link>
                  <Link href="/#upcoming-events" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    Upcoming Events
                  </Link>
                </div>
                
                {/* Column 3 */}
                <div className="space-y-3">
                  <Link href="/#epic-destinations-section" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    Experiences
                  </Link>
                  <Link href="/#reviews-section" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    Testimonials
                  </Link>
                  <Link href="/#coaches-section" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm py-2 border-l-2 border-gray-700 hover:border-[#B8FF3B] pl-3 hover:pl-4 transition-all duration-200 block">
                    Team
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-6">
              {/* Instagram */}
              <a href="https://www.instagram.com/tigerterrain.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Email */}
              <a href="mailto:team.tigerterrain@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5L4 8V6l8 5 8-5v2z" />
                </svg>
              </a>
              
              {/* Phone */}
              <a href="tel:+917021015803" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              
              {/* WhatsApp */}
              <a href="https://wa.me/917021015803" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors duration-200 p-2 hover:bg-gray-800 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            
            {/* Left Side - Copyright */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <span className="text-sm text-gray-400">© 2025 Name change gazette. All rights reserved.</span>
            </div>

            {/* Center - Privacy Policy and Terms of Service */}
            <div className="flex items-center justify-center space-x-4 sm:space-x-6 text-sm text-gray-400 order-3 lg:order-2">
              <Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">Privacy Policy</Link>
              <span className="text-gray-600">|</span>
              <Link href="#" className="hover:text-white transition-colors duration-200 whitespace-nowrap">Terms of Service</Link>
            </div>

            {/* Right Side - Aneeverse Credit */}
            <div className="text-center lg:text-right order-1 lg:order-3">
              <a 
                href="https://www.aneeverse.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center lg:justify-end space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <span className="whitespace-nowrap">Designed & Managed by Aneeverse</span>
                <Image
                  src="/images/aneeverse-logo.svg"
                  alt="Aneeverse"
                  width={16}
                  height={16}
                  className=" brightness-0 invert flex-shrink-0"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}