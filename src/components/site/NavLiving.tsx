import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "services", label: "שירותים" },
  { id: "studio", label: "מי אני" },
  { id: "contact", label: "צור קשר" },
];

function BrandMark() {
  return (
    <a href="#top" className="flex items-center gap-2" dir="ltr" aria-label="Shaked AI Studio">
      <span className="font-display text-base font-normal tracking-tight text-foreground">
        Shaked
      </span>
      <span
        className="inline-block"
        style={{
          width: "3px",
          height: "20px",
          borderRadius: "999px",
          background: "linear-gradient(180deg, #1a1a1a, #404040, #1a1a1a)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
        }}
      />
      <span className="font-display text-base tracking-tight">
        <span className="text-[#0066ff] font-black">AI</span>
        <span className="text-foreground font-extrabold"> Studio</span>
      </span>
    </a>
  );
}

export default function NavLiving() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/[0.06] py-3"
          : "bg-transparent py-4"
      )}
    >
      <div className="container-narrow flex items-center justify-between gap-4">
        <BrandMark />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm font-medium text-foreground/75 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-lg bg-[#1a1a1a] hover:bg-black text-white text-sm font-semibold px-4 py-2 transition-all"
          >
            דברו איתי
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="פתח תפריט"
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-black/[0.08] text-foreground hover:bg-black/[0.04]"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="סגור תפריט"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <div className="absolute top-0 inset-x-0 bg-white shadow-xl rounded-b-3xl p-6 animate-slide-up-fade">
            <div className="flex items-center justify-between mb-8">
              <BrandMark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="סגור"
                className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-black/[0.04]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-semibold text-foreground border-b border-black/[0.05]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#1a1a1a] text-white text-base font-semibold px-4 py-3"
              >
                דברו איתי
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
