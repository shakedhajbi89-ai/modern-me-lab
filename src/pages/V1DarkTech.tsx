import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Capabilities from "@/components/site/Capabilities";
import TechStack from "@/components/site/TechStack";
import Method from "@/components/site/Method";
import Work from "@/components/site/Work";
import Testimonials from "@/components/site/Testimonials";
import Values from "@/components/site/Values";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import StickyCTA from "@/components/site/StickyCTA";

import { Link } from "react-router-dom";

const V1DarkTech = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Shaked M. Hajbi — AI Engineer & Builder";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Link to="/" className="fixed top-5 left-5 z-[60] mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors bg-card/60 backdrop-blur border border-border rounded-full px-3 py-1.5">
        ← גרסאות
      </Link>
      <Nav />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Capabilities />
        <Method />
        <Work />
        <Testimonials />
        <Values />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <section id="faq" className="hidden" />
    </div>
  );
};

export default V1DarkTech;
