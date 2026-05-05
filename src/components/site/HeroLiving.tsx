import { ChevronDown } from "lucide-react";

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
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      {/* === LOGO STAGE (centerpiece) === */}
      <div className="relative flex-1 flex items-center justify-center px-6 pt-24">
        <div
          className="relative studio-stage select-none w-full max-w-[1100px]"
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

      {/* === Bottom: tagline + CTAs === */}
      <div className="relative pb-20 px-6 text-center">
        <p
          className="text-white/85 mb-7 text-sm md:text-base font-medium"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
          dir="rtl"
        >
          בונה דיגיטלי בעידן ה־<span className="text-[#4d8eff] font-bold">AI</span>
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl bg-[#0066ff] hover:bg-[#4d8eff] text-white px-7 py-3.5 text-sm md:text-base font-semibold transition-all hover:scale-[1.03] shadow-[0_8px_30px_rgba(0,102,255,0.45)]"
            style={{ animation: "hero-pulse 3.2s ease-in-out infinite" }}
          >
            בואו נדבר על הפרויקט שלכם
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 text-sm md:text-base font-semibold transition-all backdrop-blur-sm"
          >
            ראו מה אני בונה
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <ChevronDown
            className="h-5 w-5 text-white/50"
            style={{ animation: "scroll-bounce 2.4s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes hero-pulse {
          0%, 100% { box-shadow: 0 8px 30px rgba(0,102,255,0.40); }
          50% { box-shadow: 0 8px 40px rgba(0,102,255,0.65); }
        }
        @keyframes scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50% { transform: translateY(6px); opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
