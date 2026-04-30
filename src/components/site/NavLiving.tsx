import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "Profile" },
  { id: "work", label: "Work" },
  { id: "live", label: "Live" },
  { id: "brief", label: "Brief" },
  { id: "contact", label: "Contact" },
];

export default function NavLiving() {
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
        {/* SH initials mark */}
        <a href="#top" className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-foreground/80 text-foreground font-display text-sm tracking-tight">
            SH
            <span className="absolute -inset-1 rounded-full border border-primary/0 group-hover:border-primary/40 transition-colors" />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="mono text-[10px] text-muted-foreground tracking-wider uppercase">
              calm.systems
            </span>
            <span className="font-display text-sm tracking-tight text-foreground">
              <em className="font-italic-serif">that think</em>
            </span>
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
          href="#brief"
          className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs sm:text-sm font-medium transition-all hover:scale-[1.03] hover:bg-primary/95"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-amber-pulse rounded-full bg-accent" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          התחל Brief
        </a>
      </div>
    </header>
  );
}
