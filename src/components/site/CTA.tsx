import { ArrowLeft, MessageCircle, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-32">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 md:p-16 lg:p-20 text-center glow-border">
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
          <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-accent/30 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-foreground/90">2 משבצות פנויות ל-Q2</span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight">
              <span className="text-foreground">פחות רעש.</span>
              <br />
              <span className="text-gradient-brand">יותר תוצאה.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-muted-foreground leading-relaxed text-lg">
              שיחת היכרות של 30 דקות — חינם, בלי התחייבות. נצא ממנה עם הבנה ברורה
              של מה אפשר לבנות, כמה זה ייקח, וכמה זה יעלה.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.05] hover:shadow-[0_0_80px_hsl(var(--primary)/0.6)]"
              >
                <Calendar className="h-4 w-4" />
                קבע שיחה
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
              <a
                href="https://wa.me/972500000000?text=היי%20שקד"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-7 py-4 text-base font-medium hover:border-primary/50 transition-all"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                שלח הודעה ב-WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs mono text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-primary" />ללא התחייבות</span>
              <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-primary" />תגובה תוך 24 שעות</span>
              <span className="flex items-center gap-1.5"><span className="h-1 w-1 rounded-full bg-primary" />NDA זמין במידת הצורך</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
