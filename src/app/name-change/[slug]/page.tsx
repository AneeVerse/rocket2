import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface NameChangeReason {
  title: string;
  description: string;
  slug: string;
  detailedProcess: string[];
  requiredDocuments: string[];
  timeline: string;
  tips: string[];
  heroImage: string;
}

const nameChangeReasons: NameChangeReason[] = [
  {
    title: "Change of Name Due to Spelling Mistake",
    description: "Correct spelling errors in your legal documents and official records. This is one of the most common and straightforward name change procedures in India.",
    slug: "spelling-mistake",
    heroImage: "/images/hero/hero section images/Change of Name Due to Spelling Mistake.png",
    detailedProcess: [
      "Prepare a notarized affidavit stating the correct spelling, incorrect spelling, and reason for change",
      "Gather all original documents that contain the incorrect spelling as evidence",
      "Publish a name change advertisement in two local newspapers (one English, one regional language)",
      "Submit the affidavit, newspaper publications, and supporting documents to the Department of Publication",
      "Wait for the gazette notification to be published (typically 1-2 months)",
      "Obtain certified copies of the gazette notification",
      "Update all official documents including Aadhaar, PAN, passport, and bank records"
    ],
    requiredDocuments: [
      "Notarized affidavit on stamp paper stating the name change",
      "Original birth certificate with incorrect spelling",
      "Educational certificates (10th, 12th, graduation)",
      "Aadhaar card and PAN card",
      "Passport (if applicable)",
      "Address proof documents",
      "Two passport-size photographs",
      "Newspaper advertisement copies"
    ],
    timeline: "2-4 months",
    tips: [
      "Ensure the affidavit clearly mentions both incorrect and correct spellings",
      "Keep multiple certified copies of all documents for future use",
      "Choose newspapers with wide circulation for better legal validity",
      "Start the process early as gazette publication can take time",
      "Maintain consistency in the new spelling across all applications"
    ]
  },
  {
    title: "Change of Name Due to Dislike of Current Name",
    description: "Change your name for personal preference, cultural reasons, or religious beliefs. Every Indian citizen has the legal right to choose their preferred name.",
    slug: "dislike-current-name",
    heroImage: "/images/hero/hero section images/Change of Name Due to Dislike of Current Name.png",
    detailedProcess: [
      "Decide on your new name ensuring it complies with legal naming guidelines",
      "Prepare a detailed notarized affidavit explaining the reason for name change",
      "Publish name change advertisement in local newspapers for public notice",
      "Submit all required documents to the Department of Publication for gazette processing",
      "Wait for the mandatory objection period and gazette publication",
      "Collect certified copies of the gazette notification",
      "Update all official documents and records with the new name"
    ],
    requiredDocuments: [
      "Notarized affidavit stating old name, new name, and reason for change",
      "Birth certificate",
      "Educational certificates and mark sheets",
      "Aadhaar card and PAN card",
      "Passport (if applicable)",
      "Address proof documents",
      "Two passport-size photographs",
      "Newspaper publication copies"
    ],
    timeline: "3-5 months",
    tips: [
      "Choose a name that is not offensive, misleading, or controversial",
      "Avoid names of famous personalities, deities, or historical figures",
      "Ensure the new name is easy to pronounce and spell for official purposes",
      "Consider the professional and social impact of the name change",
      "Inform family and friends about the legal name change process"
    ]
  },
  {
    title: "Change of Name Due to Divorce",
    description: "Revert to your maiden name or adopt a completely new name after divorce proceedings. This helps in establishing a fresh legal identity post-separation.",
    slug: "divorce",
    heroImage: "/images/hero/hero section images/Change of Name Due to Divorce.png",
    detailedProcess: [
      "Obtain certified copies of the final divorce decree from the family court",
      "Prepare a notarized affidavit stating your intention to change name post-divorce",
      "Publish the name change notice in local newspapers as per legal requirements",
      "Submit divorce decree, affidavit, and other documents to gazette authorities",
      "Complete the mandatory waiting period for public objections",
      "Receive gazette notification confirming the legal name change",
      "Update all official documents, bank accounts, and employment records"
    ],
    requiredDocuments: [
      "Certified copy of divorce decree from the court",
      "Original marriage certificate",
      "Birth certificate",
      "Current identity documents (Aadhaar, PAN, passport)",
      "Address proof documents",
      "Notarized affidavit for name change",
      "Passport-size photographs",
      "Newspaper advertisement copies"
    ],
    timeline: "2-4 months",
    tips: [
      "Ensure the divorce decree is final and not under appeal",
      "Keep original marriage certificate for reference during the process",
      "Inform your employer and HR department about the ongoing name change",
      "Update children's school records if their surname is also changing",
      "Consider the impact on joint assets and property documents"
    ]
  },
  {
    title: "Change of Name Due to Child's Surname Change",
    description: "Update your child's surname for family unity, adoption, or legal requirements. Special procedures and parental consent are required for minors under 18.",
    slug: "child-surname-change",
    heroImage: "/images/hero/hero section images/Change.png",
    detailedProcess: [
      "Obtain written consent from both parents or legal guardians",
      "Prepare a notarized affidavit for the minor's name change with parental signatures",
      "Gather the child's birth certificate and educational documents",
      "Submit application with consent letters to local authorities",
      "Publish the name change notice in newspapers as required by law",
      "Complete the objection period without any valid legal challenges",
      "Apply for gazette notification with all supporting documents and parental consent"
    ],
    requiredDocuments: [
      "Child's original birth certificate",
      "Both parents' identity documents (Aadhaar, PAN, passport)",
      "Notarized consent letter from both parents",
      "Child's school certificates and academic records",
      "Address proof of the family",
      "Passport-size photographs of the child",
      "Notarized affidavit for name change",
      "Court order (if parents are divorced or separated)"
    ],
    timeline: "3-5 months",
    tips: [
      "Both parents must provide written and notarized consent",
      "Consider the child's age, understanding, and emotional readiness",
      "Update school records immediately after receiving gazette notification",
      "Keep multiple copies of all consent documents for future reference",
      "Consult with the child if they are old enough to understand the implications"
    ]
  },
  {
    title: "Change of Name After Marriage",
    description: "Adopt your spouse's surname, create a hyphenated name, or choose a completely new family name after marriage. This is a common practice for establishing marital identity.",
    slug: "after-marriage",
    heroImage: "/images/hero/hero section images/Change of Name After Marriage.png",
    detailedProcess: [
      "Obtain a certified copy of your marriage certificate from the registrar",
      "Prepare a notarized affidavit stating your pre-marriage and post-marriage names",
      "Submit the application to local authorities (SDM or District Collector)",
      "Publish marriage and name change notice in local newspapers",
      "Wait for the mandatory 30-day public notice period to complete",
      "Apply for gazette notification with marriage certificate and other documents",
      "Update all official documents including Aadhaar, PAN, passport, and bank accounts"
    ],
    requiredDocuments: [
      "Certified marriage certificate from registrar",
      "Birth certificates of both spouses",
      "Current identity documents (Aadhaar, PAN, voter ID)",
      "Address proof (joint or individual)",
      "Passport-size photographs",
      "Notarized affidavit for name change",
      "Wedding invitation card (optional supporting document)"
    ],
    timeline: "2-3 months",
    tips: [
      "Start the name change process within 6 months of marriage for easier processing",
      "Keep the marriage certificate safe as it's required for all future updates",
      "Inform your employer and HR department about the name change process",
      "Update bank accounts, insurance policies, and investment documents",
      "Consider keeping some documents in your maiden name for continuity"
    ]
  },
  {
    title: "Change of Name Due to Combining or Hyphenating Surnames",
    description: "Combine both spouses' surnames or create a hyphenated family name to maintain both family identities after marriage or for cultural reasons.",
    slug: "combining-hyphenating-surnames",
    heroImage: "/images/hero/hero section images/Change of Name Due to Combining or Hyphenating Surnames.png",
    detailedProcess: [
      "Decide on the exact format of the combined or hyphenated surname",
      "Prepare a notarized affidavit explaining the reason for surname combination",
      "Gather marriage certificate and identity documents of both spouses",
      "Publish the name change advertisement in local newspapers",
      "Submit all documents to the Department of Publication for gazette processing",
      "Wait for gazette notification confirming the new combined surname",
      "Update all official records with the new hyphenated or combined surname"
    ],
    requiredDocuments: [
      "Marriage certificate (if applicable)",
      "Birth certificates of both individuals",
      "Current identity documents (Aadhaar, PAN, passport)",
      "Notarized affidavit explaining the surname combination",
      "Address proof documents",
      "Passport-size photographs",
      "Newspaper advertisement copies"
    ],
    timeline: "3-4 months",
    tips: [
      "Ensure the combined name is not too long for official document purposes",
      "Check with banks and institutions about their policies on hyphenated names",
      "Consider the practical implications for signatures and official forms",
      "Maintain consistency in the hyphenation format across all documents",
      "Inform both families about the decision to combine surnames"
    ]
  },
  {
    title: "Change Name on Property Card",
    description: "Update your name on property documents, land records, and revenue records after a legal name change. This ensures property ownership reflects your current legal identity.",
    slug: "property-card",
    heroImage: "/images/hero/hero section images/Change Name on Property Card.png",
    detailedProcess: [
      "Complete the legal name change process and obtain gazette notification",
      "Visit the local Tehsildar or Village Revenue Officer (VRO) office",
      "Submit application for name change in property records with required documents",
      "Pay the prescribed fees for record modification",
      "Provide gazette notification and other supporting documents as proof",
      "Wait for verification and approval from revenue authorities",
      "Collect updated property documents with the new name"
    ],
    requiredDocuments: [
      "Gazette notification of name change",
      "Original property documents (sale deed, title deed)",
      "Revenue records (pahani, survey settlement)",
      "Identity proof with new name (updated Aadhaar, PAN)",
      "Address proof documents",
      "Notarized affidavit for name change",
      "Passport-size photographs"
    ],
    timeline: "1-3 months",
    tips: [
      "Complete the gazette name change process before applying for property record updates",
      "Keep multiple copies of the gazette notification for various property documents",
      "Update property tax records and municipal records simultaneously",
      "Inform banks if the property is mortgaged or used as collateral",
      "Consider updating property insurance policies with the new name"
    ]
  },
  {
    title: "Change of Name Due to Mistakes in School Certificates",
    description: "Correct name errors in educational certificates, mark sheets, and academic records. This is crucial for higher education and employment verification.",
    slug: "school-certificate-mistakes",
    heroImage: "/images/hero/hero section images/Change of Name Due to Mistakes in School Certificates.png",
    detailedProcess: [
      "Identify all educational documents with incorrect name spellings",
      "Contact the respective educational boards or institutions",
      "Submit application for name correction with supporting documents",
      "Provide notarized affidavit explaining the correct name and reason for error",
      "Pay prescribed fees for certificate correction or reissuance",
      "Wait for verification and processing by educational authorities",
      "Collect corrected certificates and update all academic records"
    ],
    requiredDocuments: [
      "Original certificates with incorrect names",
      "Birth certificate with correct name",
      "Notarized affidavit explaining the name discrepancy",
      "Identity proof documents (Aadhaar, PAN)",
      "School leaving certificate or transfer certificate",
      "Passport-size photographs",
      "Fee payment receipts"
    ],
    timeline: "2-6 months",
    tips: [
      "Start with the earliest certificate (10th standard) and work chronologically",
      "Keep detailed records of all applications and reference numbers",
      "Contact the school or college administration for guidance on the process",
      "Some boards may require gazette notification for major name changes",
      "Update higher education records after correcting school certificates"
    ]
  },
  {
    title: "Change of Name After Adoption",
    description: "Update the adopted child's name to reflect their new family identity. This involves legal procedures to establish the new parent-child relationship and name change.",
    slug: "after-adoption",
    heroImage: "/images/hero/hero section images/Change of Name After Adoption.png",
    detailedProcess: [
      "Complete the legal adoption process through family court",
      "Obtain certified copy of the adoption order from the court",
      "Prepare notarized affidavit for the child's name change post-adoption",
      "Submit adoption order and name change application to authorities",
      "Publish name change notice in newspapers as per legal requirements",
      "Apply for gazette notification with adoption documents",
      "Update birth certificate, school records, and all official documents"
    ],
    requiredDocuments: [
      "Certified copy of adoption order from family court",
      "Child's original birth certificate",
      "Adoptive parents' identity documents",
      "Notarized affidavit for name change",
      "Address proof of adoptive family",
      "Passport-size photographs of the child",
      "School certificates (if applicable)",
      "Medical records and vaccination certificates"
    ],
    timeline: "4-6 months",
    tips: [
      "Ensure the adoption process is legally complete before starting name change",
      "Consider the child's emotional attachment to their original name",
      "Update school records and inform teachers about the name change",
      "Keep adoption documents secure as they may be needed for future reference",
      "Consider counseling support for the child during this transition"
    ]
  },
  {
    title: "Change of Name Due to Religious Reasons",
    description: "Change your name due to religious conversion, spiritual beliefs, or cultural practices. This reflects your new religious identity and personal faith journey.",
    slug: "religious-reasons",
    heroImage: "/images/hero/hero section images/Change of Name Due to Religious Reasons.png",
    detailedProcess: [
      "Prepare a detailed notarized affidavit explaining the religious reason for name change",
      "Gather supporting documents related to religious conversion (if applicable)",
      "Publish name change advertisement in local newspapers",
      "Submit affidavit and supporting documents to gazette authorities",
      "Complete the mandatory waiting period for public objections",
      "Receive gazette notification confirming the religious name change",
      "Update all official documents to reflect your new religious identity"
    ],
    requiredDocuments: [
      "Notarized affidavit stating religious reason for name change",
      "Religious conversion certificate (if applicable)",
      "Birth certificate and current identity documents",
      "Letter from religious authority or spiritual leader",
      "Address proof documents",
      "Passport-size photographs",
      "Newspaper advertisement copies"
    ],
    timeline: "3-5 months",
    tips: [
      "Clearly explain the religious significance of the name change in your affidavit",
      "Obtain supporting letters from religious leaders or community members",
      "Be prepared to provide additional documentation if requested by authorities",
      "Consider the social and professional implications of the name change",
      "Inform family and community members about your decision respectfully"
    ]
  },
  {
    title: "Change of Name Due to Political Statement",
    description: "Change your name to reflect political beliefs, social causes, or ideological statements. This is a form of personal expression protected under constitutional rights.",
    slug: "political-statement",
    heroImage: "/images/hero/hero section images/Change of Name Due to Political Statement.png",
    detailedProcess: [
      "Ensure the new name complies with legal guidelines and is not offensive",
      "Prepare a comprehensive notarized affidavit explaining your political motivation",
      "Publish name change advertisement in newspapers for public awareness",
      "Submit application with detailed explanation to gazette authorities",
      "Be prepared for additional scrutiny due to the political nature",
      "Complete the extended waiting period for public objections",
      "Receive gazette notification after thorough review by authorities"
    ],
    requiredDocuments: [
      "Detailed notarized affidavit explaining political reasons",
      "Current identity documents (Aadhaar, PAN, passport)",
      "Birth certificate and educational certificates",
      "Address proof documents",
      "Character certificate from local authorities",
      "Passport-size photographs",
      "Newspaper advertisement copies"
    ],
    timeline: "4-8 months",
    tips: [
      "Ensure the new name is not inflammatory or likely to cause public disorder",
      "Be prepared for additional verification and background checks",
      "Consider the long-term implications on your professional and personal life",
      "Consult with legal experts familiar with political name change cases",
      "Maintain respectful communication with authorities throughout the process"
    ]
  },
  {
    title: "Change of Name Due to Transgender Transition",
    description: "Update your name to reflect your gender identity as part of transgender transition. This is an important step in legal gender recognition and personal authenticity.",
    slug: "transgender-transition",
    heroImage: "/images/hero/hero section images/Change.png",
    detailedProcess: [
      "Obtain gender recognition certificate from competent authority",
      "Prepare notarized affidavit stating your gender transition and name change",
      "Gather medical certificates and psychological evaluation reports",
      "Submit application with gender identity documents to authorities",
      "Publish name change notice in newspapers as per legal requirements",
      "Apply for gazette notification with transgender identity documents",
      "Update all official documents including Aadhaar, PAN, and passport with new name and gender"
    ],
    requiredDocuments: [
      "Gender recognition certificate or transgender identity card",
      "Medical certificates from qualified doctors",
      "Psychological evaluation reports",
      "Notarized affidavit for name and gender change",
      "Current identity documents",
      "Address proof documents",
      "Passport-size photographs",
      "Newspaper advertisement copies"
    ],
    timeline: "3-6 months",
    tips: [
      "Consult with transgender rights organizations for guidance and support",
      "Ensure you have proper medical documentation for gender transition",
      "Be prepared for sensitivity training needs among processing authorities",
      "Consider legal assistance from lawyers experienced in transgender rights",
      "Connect with support groups during this important life transition"
    ]
  }
];

interface PageProps {
  params: {
    slug: string;
  };
}

export default function NameChangeReasonPage({ params }: PageProps) {
  const reason = nameChangeReasons.find(r => r.slug === params.slug);

  if (!reason) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content - Left Side */}
            <div className="flex-1 lg:pr-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {reason.title}
              </h1>
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                {reason.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                 <button className="bg-[#B8FF3B] hover:bg-[#A3E635] text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md">
                   Get Started
                 </button>
                 <button className="border-2 border-[#B8FF3B] text-black hover:bg-[#B8FF3B] hover:text-black px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                   Learn More
                 </button>
               </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="flex-1 lg:pl-8">
              <div className="relative">
                <img 
                  src={reason.heroImage} 
                  alt={reason.title}
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Header Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1450] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title and Description */}
          <div className="mb-12">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6 leading-tight">
              {reason.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {reason.description}
            </p>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900">Expected Timeline</h3>
              </div>
              <p className="text-2xl font-bold text-blue-800">{reason.timeline}</p>
              <p className="text-sm text-blue-600 mt-1">From application to completion</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-6">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-green-900">Legal Process</h3>
              </div>
              <p className="text-lg font-semibold text-green-800">Gazette Notification Required</p>
              <p className="text-sm text-green-600 mt-1">Official government publication</p>
            </div>
          </div>

          {/* Process Overview */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Complete Process Overview</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Follow this comprehensive step-by-step guide to successfully complete your name change process. 
                Each step is designed to ensure legal compliance and smooth processing.
              </p>
            </div>
            
            <div className="space-y-6">
              {reason.detailedProcess.map((step, index) => (
                <div key={index} className="flex items-start bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-black to-gray-700 text-white rounded-xl flex items-center justify-center text-lg font-bold mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-black mb-2">Step {index + 1}</h4>
                    <p className="text-gray-700 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Required Documents */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Required Documents Checklist</h2>
              <p className="text-gray-600">
                Ensure you have all these documents ready before starting your application process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reason.requiredDocuments.map((doc, index) => (
                <div key={index} className="flex items-start bg-gray-50 rounded-lg p-4 border border-gray-100">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Tips */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4">Expert Tips & Best Practices</h2>
              <p className="text-gray-600">
                Professional advice to help you navigate the name change process smoothly and avoid common pitfalls.
              </p>
            </div>
            
            <div className="space-y-4">
              {reason.tips.map((tip, index) => (
                <div key={index} className="flex items-start bg-white rounded-lg p-6 shadow-sm border border-amber-100">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mr-4 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 leading-relaxed font-medium">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h4 className="text-lg font-semibold text-black mb-3">How long does the entire process take?</h4>
                <p className="text-gray-700">The complete name change process typically takes {reason.timeline}, including gazette publication and document updates. The timeline may vary based on government processing times and completeness of your application.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h4 className="text-lg font-semibold text-black mb-3">Is gazette notification mandatory?</h4>
                <p className="text-gray-700">Yes, gazette notification is mandatory for legal name changes in India. It provides official government recognition of your name change and is required for updating all official documents.</p>
              </div>
              <div className="border-b border-gray-100 pb-6">
                <h4 className="text-lg font-semibold text-black mb-3">Can I track my application status?</h4>
                <p className="text-gray-700">Yes, most state governments provide online tracking systems for gazette applications. You can track your application status using the reference number provided during submission.</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-black mb-3">What if my application gets rejected?</h4>
                <p className="text-gray-700">If your application is rejected, you will receive a detailed reason. You can address the issues mentioned and reapply with corrected documents. Common reasons include incomplete documentation or non-compliance with naming guidelines.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">
                Ready to Start Your Name Change Process?
              </h3>
              <p className="text-gray-600 mb-6">
                Get expert legal assistance for your name change. Our team will handle all the paperwork and ensure compliance with legal requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-block bg-black text-white font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Get Expert Help
                </Link>
                <Link 
                  href="/name-change"
                  className="inline-block bg-white text-black font-medium px-8 py-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200"
                >
                  View All Reasons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

// Generate static params for all name change reasons
export async function generateStaticParams() {
  return nameChangeReasons.map((reason) => ({
    slug: reason.slug,
  }));
}