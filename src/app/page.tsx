import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Guide from "@/components/Guide";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Relax from "@/components/Relax";
import Secrets from "@/components/Secrets";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingActionButton from "@/components/FloatingActionButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Guide />
      <WhyUs />
      <Contact />
      <Blog />
         <FAQ />
      {/* <Relax />
      <Secrets /> */}
      <CTASection />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
