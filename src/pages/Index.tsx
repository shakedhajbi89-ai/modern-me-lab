import { useEffect } from "react";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Method from "@/components/site/Method";
import Values from "@/components/site/Values";
import Work from "@/components/site/Work";
import CTA from "@/components/site/CTA";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Shaked M. Hajbi — AI Engineer · Building tools that ship";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "מתכנן ובונה כלים דיגיטליים, אוטומציות ומוצרי AI מותאמים אישית. גישה ברורה, תוצאה מדויקת.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <About />
        <Method />
        <Values />
        <Work />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
