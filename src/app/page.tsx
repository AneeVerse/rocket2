import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Guide from "@/components/Guide";
import Relax from "@/components/Relax";
import Secrets from "@/components/Secrets";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Guide />
      <Contact />
      <Blog />
      <Relax />
      <Secrets />
    </div>
  );
}
