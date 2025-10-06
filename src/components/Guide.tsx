import React from "react";
import Link from "next/link";

const Guide = () => {
  const nameChangeReasons = [
    {
      title: "Change of Name Due to Spelling Mistake",
      description: "Correct spelling errors in your legal documents and official records.",
      slug: "spelling-mistake"
    },
    {
      title: "Change of Name Due to Dislike of Current Name",
      description: "Change your name for personal preference or cultural reasons.",
      slug: "dislike-current-name"
    },
    {
      title: "Change of Name Due to Divorce",
      description: "Revert to maiden name or adopt a new name after divorce proceedings.",
      slug: "divorce"
    },
    {
      title: "Change of Name Due to Child's Surname Change",
      description: "Update your child's surname for family unity or legal requirements.",
      slug: "child-surname-change"
    },
    {
      title: "Change of Name Due to Combining or Hyphenating Surnames",
      description: "Combine family names or create hyphenated surnames for marriage.",
      slug: "combining-surnames"
    },
    {
      title: "Change of Name After Marriage",
      description: "Adopt your spouse's surname or create a new combined family name.",
      slug: "after-marriage"
    },
    {
      title: "Change Name on Property Card",
      description: "Update property documents with your new legal name.",
      slug: "property-card"
    },
    {
      title: "Change of Name Due to Mistakes in School Certificates",
      description: "Correct name errors in educational certificates and academic records.",
      slug: "school-certificates"
    },
    {
      title: "Change of Name After Adoption",
      description: "Update legal name following adoption procedures.",
      slug: "after-adoption"
    },
    {
      title: "Change of Name Due to Religious Reasons",
      description: "Change name for religious conversion or spiritual purposes.",
      slug: "religious-reasons"
    },
    {
      title: "Change of Name Due to Political Statement",
      description: "Update name for political or ideological expression.",
      slug: "political-statement"
    },
    {
      title: "Change of Name Due to Transgender Transition",
      description: "Legal name change to align with gender identity.",
      slug: "transgender-transition"
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1450] mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 h-full">
                <h3 className="text-lg font-bold text-black mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
                <div className="mt-4 text-black font-medium text-sm">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">
              Need Expert Legal Guidance?
            </h3>
            <p className="text-gray-600 mb-6">
              Our experienced legal team can help you navigate the name change process for any reason. Get personalized assistance today.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-black text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Get Free Consultation
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Guide;
