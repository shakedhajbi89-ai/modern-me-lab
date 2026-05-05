import { ChevronDown } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

export default function HeroLiving() {
  return (
    <section
      id="top"
      className="relative overflow-hidden min-h-screen flex flex-col"
      style={{ background: "#1a1a1a" }}
    >
      {/* Animated logo fills the stage */}
      <div className="relative flex-1 min-h-[600px]">
        <AnimatedLogo />
      </div>

      {/* Bottom: tagline + CTAs */}
      <div className="relative pb-20 px-6 text-center bg-[#1a1a1a]">
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
            className="inline-flex items-center justify-center rounded-xl bg-[#0066ff] hover:bg-[#4d8eff] text-white px-7 py-3.5 text-sm md:text-base font-semibold transition-all hover:scale-[1.03] shadow-[0_8px_30px_rgba(0,102,255,0.45)] min-h-[44px]"
            style={{ animation: "hero-pulse 3.2s ease-in-out infinite" }}
          >
            בואו נדבר על הפרויקט שלכם
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 text-sm md:text-base font-semibold transition-all backdrop-blur-sm min-h-[44px]"
          >
            ראו מה אני בונה
          </a>
        </div>

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
