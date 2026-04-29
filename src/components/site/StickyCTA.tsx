import { useEffect, useState } from "react";
import { MessageCircle, ArrowLeft, X } from "lucide-react";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 800);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <>
      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/972500000000?text=היי%20שקד,%20ראיתי%20את%20האתר%20שלך"
        target="_blank"
        rel="noreferrer"
        className={`fixed bottom-6 right-6 z-40 group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-glow transition-all duration-500 hover:scale-110 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
        <MessageCircle className="relative h-6 w-6" />
      </a>

      {/* Bottom strip CTA */}
      <div
        className={`fixed bottom-6 left-6 z-40 max-w-sm transition-all duration-500 hidden md:block ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="relative rounded-2xl border border-border bg-card/95 backdrop-blur-xl p-4 shadow-card glow-border">
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 left-2 h-6 w-6 rounded-full hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            aria-label="סגור"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-3 pr-4">
            <div className="relative shrink-0">
              <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center font-display font-bold text-primary-foreground">
                S
              </div>
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-primary border-2 border-card animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-muted-foreground">זמין עכשיו</div>
              <div className="text-sm font-medium truncate">בוא נדבר על הפרויקט שלך</div>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-1 rounded-full bg-gradient-brand px-4 py-2 text-xs font-medium text-primary-foreground hover:scale-[1.05] transition-transform"
            >
              דבר איתי
              <ArrowLeft className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
