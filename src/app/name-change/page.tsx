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
      slug: "combining-surnames",
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
      slug: "school-certificates",
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
                Need Professional Legal Help?
              </h3>
              <p className="text-gray-600 mb-6">
                Our expert legal team handles all types of name change cases. Get personalized guidance and ensure your process is completed correctly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-block bg-black text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  href="/"
                  className="inline-block bg-white text-black font-medium px-8 py-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  Back to Home
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