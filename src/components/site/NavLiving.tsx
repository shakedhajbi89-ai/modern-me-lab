import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "services", label: "שירותים" },
  { id: "process", label: "תהליך" },
  { id: "for-whom", label: "למי" },
  { id: "contact", label: "צור קשר" },
];

export default function NavLiving() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("services");

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
        {/* Brand mark */}
        <a href="#top" className="group flex items-center gap-2.5" dir="ltr">
          <span className="font-display text-base font-medium tracking-tight text-foreground">
            Shaked
          </span>
          <span
            className="inline-block"
            style={{
              width: "3px",
              height: "20px",
              borderRadius: "999px",
              background: "linear-gradient(180deg, #0066ff, #4d8eff, #0066ff)",
              boxShadow: "0 0 8px rgba(0,102,255,0.5)",
            }}
          />
          <span className="font-display text-base tracking-tight">
            <span className="text-[#0066ff] font-black">AI</span>
            <span className="text-foreground font-extrabold"> Studio</span>
          </span>
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
                "relative rounded-full px-4 py-1.5 text-sm mono transition-colors",
                active === l.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {active === l.id && (
                <span className="absolute inset-0 -z-10 rounded-full bg-primary" />
              )}
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-xl bg-[#0066ff] hover:bg-[#4d8eff] text-white px-4 py-2 text-xs sm:text-sm font-semibold transition-all hover:scale-[1.03]"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-amber-pulse rounded-full bg-white/70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          בוא נדבר
        </a>
      </div>
    </header>
  );
}
