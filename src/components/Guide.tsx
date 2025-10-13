import React from "react";
import Link from "next/link";

const Guide = () => {
  const nameChangeReasons = [
    {
      title: "Change of Name Due to Spelling Mistake",
      description: "Correct spelling errors in your legal documents and official records.",
      slug: "spelling-mistake",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name Due to Dislike of Current Name",
      description: "Change your name for personal preference or cultural reasons.",
      slug: "dislike-current-name",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name Due to Divorce",
      description: "Revert to maiden name or adopt a new name after divorce proceedings.",
      slug: "divorce",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name Due to Child's Surname Change",
      description: "Update your child's surname for family unity or legal requirements.",
      slug: "child-surname-change",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name Due to Combining or Hyphenating Surnames",
      description: "Combine family names or create hyphenated surnames for marriage.",
      slug: "combining-hyphenating-surnames",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name After Marriage",
      description: "Adopt your spouse's surname or create a new combined family name.",
      slug: "after-marriage",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change Name on Property Card",
      description: "Update property documents with your new legal name.",
      slug: "property-card",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-6 4h6" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name Due to Mistakes in School Certificates",
      description: "Correct name errors in educational certificates and academic records.",
      slug: "school-certificate-mistakes",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name After Adoption",
      description: "Update legal name following adoption procedures.",
      slug: "after-adoption",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name Due to Religious Reasons",
      description: "Change name for religious conversion or spiritual purposes.",
      slug: "religious-reasons",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name Due to Political Statement",
      description: "Update name for political or ideological expression.",
      slug: "political-statement",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12h6m-6 4h6" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    },
    {
      title: "Change of Name Due to Transgender Transition",
      description: "Legal name change to align with gender identity.",
      slug: "transgender-transition",
      icon: (
        <svg className="w-6 h-6 text-[#B8FF3B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "from-white to-gray-50 border-gray-200"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 lg:py-24">
      <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
            Choose Your Reason for Name Change
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore the most common legal reasons for changing your name in India — including marriage, divorce, adoption, school certificate errors, and more. Learn the process and legal steps for each scenario with expert guidance.
          </p>
        </div>

        {/* Name Change Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {nameChangeReasons.map((reason, index) => (
            <Link 
              key={index} 
              href={`/name-change/${reason.slug}`}
              className="group block"
            >
              <div className={`bg-gradient-to-br ${reason.color} rounded-xl p-6 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-2 h-full border-2 hover:border-[#B8FF3B]/30`}>
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  {reason.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-black mb-3 leading-tight group-hover:text-gray-800 transition-colors duration-200">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {reason.description}
                </p>
                
                {/* CTA */}
                <div className="flex items-center text-black font-medium text-sm group-hover:text-[#B8FF3B] transition-colors duration-200">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Need Expert Legal Guidance?
              </h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our experienced legal team can help you navigate the name change process for any reason. Get personalized assistance and ensure your process is completed correctly with full legal compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center bg-[#B8FF3B] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#A6E635] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get Free Consultation
                </Link>
                <Link 
                  href="/"
                  className="inline-flex items-center justify-center bg-transparent text-white font-medium px-8 py-4 rounded-lg border-2 border-gray-600 hover:border-[#B8FF3B] hover:bg-[#B8FF3B]/10 transition-all duration-200"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
