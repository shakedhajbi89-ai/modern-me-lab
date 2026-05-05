import { useEffect } from "react";
import NavLiving from "@/components/site/NavLiving";
import HeroLiving from "@/components/site/HeroLiving";
import ToolsShowcase from "@/components/site/ToolsShowcase";
import Services from "@/components/site/Services";
import StudioNote from "@/components/site/StudioNote";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import { Reveal } from "@/components/site/Reveal";
import { ScrollProgressBar } from "@/components/site/Parallax";
import FloatingDock from "@/components/site/FloatingDock";

const StudioHome = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Shaked AI Studio — בונה דיגיטלי בעידן ה-AI";
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement("meta"), { name: "description" });
    meta.setAttribute(
      "content",
      "Shaked AI Studio — סטודיו פרימיום לבניית אתרים, אוטומציות, צ׳אטבוטים ומערכות AI מותאמות לעסקים קטנים בישראל."
    );
    document.head.appendChild(meta);
  }, []);

  return (
    <div className="theme-living min-h-screen text-foreground overflow-x-hidden relative">
      <div
        aria-hidden
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #f8f8f8 0%, #ffffff 15%, #ffffff 60%, #ededed 75%, #5a5a5a 92%, #3d3d3d 100%)",
        }}
      />
      <ScrollProgressBar />
      <NavLiving />
      <FloatingDock whatsappNumber="972528360660" />
      <main id="main">
        <HeroLiving />
        <Reveal><ToolsShowcase /></Reveal>
        <Reveal y={40}><Services /></Reveal>
        <Reveal><StudioNote /></Reveal>
        <Reveal y={40}><FAQ /></Reveal>
        <Reveal><FinalCTA /></Reveal>
      </main>
    </div>
  );
};

export default StudioHome;
