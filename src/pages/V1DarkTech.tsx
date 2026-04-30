import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavLiving from "@/components/site/NavLiving";
import HeroLiving from "@/components/site/HeroLiving";
import AboutLiving from "@/components/site/AboutLiving";
import WorkLiving from "@/components/site/WorkLiving";
import CTALiving from "@/components/site/CTALiving";
import LiveMetrics from "@/components/site/LiveMetrics";
import Mastery from "@/components/site/Mastery";
import AIBriefGenerator from "@/components/site/AIBriefGenerator";

import Method from "@/components/site/Method";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const V1DarkTech = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Shaked M. Hajbi — Calm AI Systems That Think";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Shaked M. Hajbi — מהנדס AI שבונה מערכות שקטות, יציבות ואוטונומיות לפרודקשן. AI engineering, agents, automation."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="theme-living min-h-screen text-foreground overflow-x-hidden">
      <Link
        to="/"
        className="fixed top-5 left-5 z-[60] mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors bg-card/70 backdrop-blur border border-border rounded-full px-3 py-1.5"
      >
        ← גרסאות
      </Link>
      <NavLiving />
      <main>
        <HeroLiving />
        <AboutLiving />
        <WorkLiving />
        <LiveMetrics variant="organic" />
        <AIBriefGenerator variant="organic" />
        <Mastery variant="organic" />
        <Method />
        <Testimonials />
        <FAQ />
        <CTALiving />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default V1DarkTech;
