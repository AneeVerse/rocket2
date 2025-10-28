import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PanCardHero from '@/components/PanCardHero';
import PanCardServices from '@/components/PanCardServices';
import PanCardWhyUs from '@/components/PanCardWhyUs';
import PanCardFAQ from '@/components/PanCardFAQ';
import PanCardContact from '@/components/PanCardContact';
import FloatingActionButton from '@/components/FloatingActionButton';

const PanCardPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <PanCardHero />
      <PanCardServices />
      <PanCardWhyUs />
      <PanCardFAQ />
      <PanCardContact />
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default PanCardPage;