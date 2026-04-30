import { useEffect, useRef } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";

/**
 * Living System hero — quiet base, one alive element:
 * organic gradient blobs that follow the cursor slowly.
 * Tagline-only headline. "SH" mark in nav (not here).
 */
export default function HeroLiving() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 50, ty = 50, cx = 50, cy = 50;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width) * 100;
      ty = ((e.clientY - r.top) / r.height) * 100;
    };
    const tick = () => {
      cx += (tx - cx) * 0.04;
      cy += (ty - cy) * 0.04;
      el.style.setProperty("--mx", `${cx}%`);
      el.style.setProperty("--my", `${cy}%`);
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden pt-40 pb-32 min-h-[92vh] flex flex-col justify-center"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%" }}
    >
      {/* Mouse-reactive organic gradient — the one alive element */}
      <div
        className="absolute inset-0 pointer-events-none transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(60rem 50rem at var(--mx) var(--my), hsl(var(--primary) / 0.18), transparent 60%), radial-gradient(40rem 40rem at calc(100% - var(--mx)) calc(100% - var(--my)), hsl(var(--accent) / 0.14), transparent 60%)",
        }}
      />
      {/* Breathing blobs */}
      <div className="absolute -top-24 -right-24 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[120px] animate-breathe pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[120px] animate-breathe-slow pointer-events-none" />
      <div className="absolute inset-0 paper-grain opacity-60 pointer-events-none" />

      <div className="container-narrow relative">
        {/* Eyebrow */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-xs mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-amber-pulse" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-foreground/80">2 משבצות פתוחות · Q2 2026</span>
            <span className="h-3 w-px bg-border" />
            <span className="text-muted-foreground">AI · Systems · Calm by design</span>
          </div>
        </div>

        {/* Tagline-only headline */}
        <h1 className="text-center font-display tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.02] animate-fade-in-up max-w-5xl mx-auto">
          <span className="block text-foreground">בונה מערכות AI</span>
          <span className="block mt-3">
            <em className="font-italic-serif text-primary">שחושבות</em>
            <span className="text-foreground"> במקומך.</span>
          </span>
        </h1>

        <p
          className="mx-auto mt-10 max-w-2xl text-center text-lg sm:text-xl text-muted-foreground leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          לא עוד אוטומציה. <span className="text-foreground">תשתית AI שמייצרת תוצאה </span>
          בזמן שאתה ישן. שקטה, יציבה, ותחת שליטה מלאה.
        </p>

        {/* CTA */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <a
            href="#brief"
            className="group relative inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.02] hover:bg-primary/95"
          >
            <Sparkles className="h-4 w-4" />
            <span>קבל Brief לפרויקט שלך</span>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-7 py-4 text-base font-medium text-foreground transition-all hover:border-primary/40 hover:bg-card"
          >
            ראה עבודות נבחרות
          </a>
        </div>

        {/* Whisper line */}
        <div
          className="mt-20 flex items-center justify-center gap-3 mono text-[11px] text-muted-foreground animate-fade-in-up"
          style={{ animationDelay: "500ms" }}
        >
          <span className="h-px w-12 bg-border" />
          <span>scroll · the system breathes</span>
          <span className="h-px w-12 bg-border" />
        </div>
      </div>
    </section>
  );
}
