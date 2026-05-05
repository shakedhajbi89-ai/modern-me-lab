import { Mail, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden text-foreground"
    >
      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,102,255,0.18), transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="container-narrow relative text-center max-w-2xl">
        <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-foreground">
          בואו נבנה משהו טוב יחד
        </h2>
        <p className="mt-5 text-foreground/70 text-base md:text-lg leading-relaxed">
          שיחת היכרות ללא עלות וללא התחייבות. תספרו לי על העסק, אני אספר לכם איך אני יכול לעזור.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/972528360660?text=היי%20שקד,%20אני%20מעוניין%20לדבר%20על%20פרויקט"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0066ff] hover:bg-[#4d8eff] text-white px-8 py-4 text-base font-semibold transition-all hover:scale-[1.03] shadow-[0_12px_40px_rgba(0,102,255,0.5)]"
            style={{ animation: "cta-pulse 3s ease-in-out infinite" }}
          >
            צרו קשר
          </a>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-foreground/75">
          <a
            href="https://wa.me/972528360660"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#0066ff] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="mailto:Shakedhajbi89@gmail.com?subject=פנייה דרך האתר"
            className="inline-flex items-center gap-2 hover:text-[#0066ff] transition-colors"
          >
            <Mail className="h-4 w-4" />
            Shaked AI Studio
          </a>
        </div>

        <div className="mt-16 text-xs text-foreground/50">
          © {new Date().getFullYear()} Shaked AI Studio · חריש, ישראל
        </div>
      </div>

      <style>{`
        @keyframes cta-pulse {
          0%, 100% { box-shadow: 0 12px 40px rgba(0,102,255,0.45); }
          50% { box-shadow: 0 12px 50px rgba(0,102,255,0.7); }
        }
      `}</style>
    </section>
  );
}
