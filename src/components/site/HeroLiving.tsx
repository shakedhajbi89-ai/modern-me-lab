import { ArrowLeft } from "lucide-react";

/**
 * Hero — premium animated logo "Shaked | AI Studio"
 * 8s cinematic loop on a vertical luxury gradient (light → dark).
 */
export default function HeroLiving() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{
        background:
          "linear-gradient(180deg, #f8f8f8 0%, #e0e0e0 35%, #888 60%, #2a2a2a 90%, #1a1a1a 100%)",
      }}
    >
      {/* soft fade into next light section */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-white" />

      {/* === LOGO STAGE (centerpiece) === */}
      <div className="relative flex-1 flex items-center justify-center px-6">
        <div
          className="relative studio-stage select-none"
          dir="ltr"
          aria-label="Shaked AI Studio"
        >
          {/* Blue radial glow behind logo (heartbeat moment) */}
          <div
            className="studio-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "120%",
              height: "260%",
              background:
                "radial-gradient(ellipse at center, rgba(0,102,255,0.35), transparent 60%)",
              filter: "blur(40px)",
            }}
          />

          <div className="relative flex items-center justify-center gap-4 md:gap-6">
            {/* SHAKED — slides into divider */}
            <div className="relative overflow-hidden flex justify-end" style={{ width: "min(40vw, 360px)" }}>
              <span
                className="studio-shaked block whitespace-nowrap font-normal leading-none"
                style={{
                  fontSize: "clamp(34px, 7vw, 70px)",
                  color: "#1a1a1a",
                  letterSpacing: "-0.02em",
                  textShadow: "0 6px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)",
                  fontFamily: "Inter, Heebo, system-ui, sans-serif",
                }}
              >
                Shaked
              </span>
            </div>

            {/* DIVIDER — stays exactly center */}
            <div
              className="studio-divider relative shrink-0"
              style={{
                width: "8px",
                height: "clamp(64px, 11vw, 120px)",
                borderRadius: "999px",
                background:
                  "linear-gradient(180deg, #0066ff 0%, #4d8eff 50%, #0066ff 100%)",
                boxShadow:
                  "0 0 24px rgba(0,102,255,0.6), 0 0 48px rgba(0,102,255,0.35)",
              }}
            />

            {/* AI STUDIO — slides into divider */}
            <div className="relative overflow-hidden flex justify-start" style={{ width: "min(56vw, 520px)" }}>
              <span
                className="studio-aistudio block whitespace-nowrap leading-none"
                style={{
                  fontSize: "clamp(50px, 10vw, 100px)",
                  letterSpacing: "-0.035em",
                  textShadow: "0 6px 12px rgba(0,0,0,0.15), 0 2px 4px rgba(0,0,0,0.1)",
                  fontFamily: "Inter, Heebo, system-ui, sans-serif",
                }}
              >
                <span style={{ color: "#0066ff", fontWeight: 900 }}>AI</span>
                <span style={{ color: "#1a1a1a", fontWeight: 800 }}> Studio</span>
              </span>
            </div>
          </div>
        </div>

        {/* Shimmer wave across the screen */}
        <div
          className="studio-shimmer pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* === Bottom line — tagline + CTA === */}
      <div className="relative pb-16 md:pb-20 px-6 text-center">
        <p
          className="text-white/85 mb-6 text-base md:text-lg font-medium"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
        >
          בונה דיגיטלי בעידן ה־<span className="text-[#4d8eff] font-bold">AI</span>
        </p>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-xl bg-[#0066ff] hover:bg-[#4d8eff] text-white px-7 py-3.5 text-base font-semibold transition-all hover:scale-[1.03] shadow-[0_8px_30px_rgba(0,102,255,0.45)]"
        >
          <span>בוא נדבר על הפרויקט שלך</span>
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        </a>
        <div className="mt-10 mono text-[10px] uppercase tracking-[0.3em] text-white/50">
          scroll ↓
        </div>
      </div>
    </section>
  );
}
