import { useEffect } from "react";
import NavLiving from "@/components/site/NavLiving";
import HeroLiving from "@/components/site/HeroLiving";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import ForWhom from "@/components/site/ForWhom";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
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
    <div className="theme-living min-h-screen text-foreground overflow-x-hidden">
      <ScrollProgressBar />
      <NavLiving />
      <FloatingDock />
      <main id="main">
        <HeroLiving />
        <Reveal><Services /></Reveal>
        <Reveal y={40}><Process /></Reveal>
        <Reveal><ForWhom /></Reveal>
        <Reveal y={40}><Contact /></Reveal>
      </main>
      <Reveal y={20}><Footer /></Reveal>
    </div>
  );
};

export default StudioHome;
