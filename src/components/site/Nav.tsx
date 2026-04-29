import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "עליי" },
  { id: "services", label: "יכולות" },
  { id: "method", label: "תהליך" },
  { id: "work", label: "עבודות" },
  { id: "faq", label: "שאלות" },
  { id: "contact", label: "צור קשר" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container-narrow flex items-center justify-between gap-4">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground font-display font-bold text-sm shadow-glow">
            SH
            <span className="absolute inset-0 rounded-xl bg-gradient-brand opacity-0 blur-md transition-opacity group-hover:opacity-70" />
          </span>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-semibold text-sm tracking-tight">Shaked M. Hajbi</span>
            <span className="mono text-[10px] text-muted-foreground">building.tools.that.ship</span>
          </div>
        </a>

        <nav
          className={cn(
            "hidden lg:flex items-center gap-1 rounded-full glass px-2 py-1.5 transition-all duration-500",
            scrolled && "shadow-card"
          )}
        >
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm transition-colors",
                active === l.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active === l.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-brand shadow-glow" />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-4 py-2 text-xs sm:text-sm transition-all hover:border-primary/60 hover:shadow-glow"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          זמין לפרויקטים
        </a>
      </div>
    </header>
  );
}
