import React from "react";
import Link from "next/link";

const NameChangeReasons = () => {
  const nameChangeReasons = [
    {
      title: "Change of Name Due to Spelling Mistake",
      description: "Correct spelling errors in your legal documents and official records.",
      slug: "spelling-mistake",
      process: [
        "File an affidavit stating the correct spelling",
        "Publish in local newspaper",
        "Submit to Gazette of India",
        "Update all official documents"
      ]
    },
    {
      title: "Change of Name Due to Dislike of Current Name", 
      description: "Change your name for personal preference or cultural reasons.",
      slug: "dislike-current-name",
      process: [
        "Prepare affidavit with new name",
        "Newspaper publication",
        "Gazette notification",
        "Update identity documents"
      ]
    },
    {
      title: "Change of Name Due to Divorce",
      description: "Revert to maiden name or adopt a new name after divorce proceedings.",
      slug: "divorce",
      process: [
        "Obtain divorce decree",
        "File name change affidavit",
        "Publish in newspaper",
        "Update all records"
      ]
    },
    {
      title: "Change of Name Due to Child's Surname Change",
      description: "Update your child's surname for family unity or legal requirements.",
      slug: "child-surname-change", 
      process: [
        "Parental consent affidavit",
        "Birth certificate amendment",
        "Newspaper publication",
        "School records update"
      ]
    },
    {
      title: "Change of Name Due to Combining or Hyphenating Surnames",
      description: "Combine family names or create hyphenated surnames for marriage.",
      slug: "combining-hyphenating-surnames",
      process: [
        "Marriage certificate verification",
        "Combined name affidavit",
        "Publication process",
        "Document updates"
      ]
    },
    {
      title: "Change of Name After Marriage",
      description: "Adopt your spouse's surname or create a new combined family name.",
      slug: "after-marriage",
      process: [
        "Marriage certificate",
        "Name change affidavit",
        "Newspaper advertisement",
        "Update all documents"
      ]
    },
    {
      title: "Change Name on Property Card",
      description: "Update property documents with your new legal name.",
      slug: "property-card",
      process: [
        "Property ownership proof",
        "Name change documentation",
        "Revenue department application",
        "Updated property card"
      ]
    },
    {
      title: "Change of Name Due to Mistakes in School Certificates",
      description: "Correct name errors in educational certificates and academic records.",
      slug: "school-certificate-mistakes",
      process: [
        "School/Board application",
        "Correction affidavit",
        "Supporting documents",
        "Reissued certificates"
      ]
    },
    {
      title: "Change of Name After Adoption",
      description: "Update legal name following adoption procedures.",
      slug: "after-adoption",
      process: [
        "Adoption order",
        "Name change petition",
        "Court approval",
        "Document updates"
      ]
    },
    {
      title: "Change of Name Due to Religious Reasons",
      description: "Change name for religious conversion or spiritual purposes.",
      slug: "religious-reasons",
      process: [
        "Religious conversion certificate",
        "Name change affidavit",
        "Publication requirements",
        "Identity document updates"
      ]
    },
    {
      title: "Change of Name Due to Political Statement",
      description: "Update name for political or ideological expression.",
      slug: "political-statement",
      process: [
        "Statement of reasons",
        "Legal affidavit",
        "Publication process",
        "Official record updates"
      ]
    },
    {
      title: "Change of Name Due to Transgender Transition",
      description: "Legal name change to align with gender identity.",
      slug: "transgender-transition",
      process: [
        "Medical certificate",
        "Gender identity affidavit",
        "Court application",
        "Complete document update"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
              Name Change Reasons & Processes
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive guide to legal name change procedures in India. Choose your specific situation to understand the exact process and requirements.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {nameChangeReasons.map((reason, index) => (
              <Link 
                key={index} 
                href={`/name-change/${reason.slug}`}
                className="group block"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 h-full">
                  <h3 className="text-xl font-bold text-black mb-3 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {/* Process Preview */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-black mb-2">Process Overview:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {reason.process.slice(0, 3).map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start">
                          <span className="text-black mr-2">•</span>
                          {step}
                        </li>
                      ))}
                      {reason.process.length > 3 && (
                        <li className="text-black font-medium">+ {reason.process.length - 3} more steps</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="text-black font-medium text-sm">
                    View Complete Guide →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">
                Ready to Start Your Name Change Process?
              </h3>
              <p className="text-gray-600 mb-6">
                Get expert legal assistance for your name change. Our team will handle all the paperwork and ensure compliance with legal requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://wa.me/917506849422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#B8FF3B] text-black font-bold px-8 py-4 rounded-lg hover:bg-[#A3E635] transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.515z"/>
                  </svg>
                  WhatsApp
                </Link>
                <Link 
                  href="tel:+917506849422"
                  className="inline-block bg-white text-black font-medium px-8 py-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NameChangeReasons;