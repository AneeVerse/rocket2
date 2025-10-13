import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BirthCertificateHero from '@/components/BirthCertificateHero';
import BirthCertificateServices from '@/components/BirthCertificateServices';
import BirthCertificateWhyUs from '@/components/BirthCertificateWhyUs';
import BirthCertificateFAQ from '@/components/BirthCertificateFAQ';
import BirthCertificateContact from '@/components/BirthCertificateContact';
import FloatingActionButton from '@/components/FloatingActionButton';

const BirthCertificatePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BirthCertificateHero />
      <BirthCertificateServices />
      <BirthCertificateWhyUs />
      <BirthCertificateFAQ />
      <BirthCertificateContact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default BirthCertificatePage;