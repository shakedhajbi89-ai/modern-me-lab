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
import { Reveal } from "@/components/site/Reveal";
import { ScrollProgressBar } from "@/components/site/Parallax";
import FloatingDock from "@/components/site/FloatingDock";

import Method from "@/components/site/Method";
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
      <ScrollProgressBar />
      <NavLiving />
      <FloatingDock />
      <main id="main">
        <HeroLiving />
        <Reveal><AboutLiving /></Reveal>
        <Reveal y={40}><WorkLiving /></Reveal>
        <Reveal><LiveMetrics variant="organic" /></Reveal>
        <Reveal y={40}><AIBriefGenerator variant="organic" /></Reveal>
        <Reveal><Mastery variant="organic" /></Reveal>
        <Reveal><Method /></Reveal>
        <Reveal y={40}><CTALiving /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Reveal y={20}><Footer /></Reveal>
    </div>
  );
};

export default V1DarkTech;
