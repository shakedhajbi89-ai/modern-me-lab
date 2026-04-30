import { ArrowLeft, Calendar, MessageCircle } from "lucide-react";

export default function CTALiving() {
  return (
    <section className="relative py-32">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 md:p-20 text-center shadow-card">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px] animate-breathe pointer-events-none" />
          <div className="absolute -bottom-32 right-0 h-[20rem] w-[20rem] rounded-full bg-accent/15 blur-[120px] animate-breathe-slow pointer-events-none" />
          <div className="absolute inset-0 paper-grain opacity-50 pointer-events-none" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs mono mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-amber-pulse" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-foreground/80">2 משבצות פנויות · Q2</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.05] tracking-tight max-w-3xl mx-auto">
              <span className="text-foreground">בוא נבנה משהו</span>
              <br />
              <em className="font-italic-serif text-primary">שחושב.</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-muted-foreground leading-relaxed text-lg">
              30 דקות. בלי התחייבות. נצא עם הבנה ברורה של מה אפשר לבנות, כמה זה ייקח, וכמה זה יעלה.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.02] hover:bg-primary/95"
              >
                <Calendar className="h-4 w-4" />
                קבע שיחה
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </a>
              <a
                href="https://wa.me/972500000000?text=היי%20שקד"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-7 py-4 text-base font-medium hover:border-primary/40 transition-all"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-primary" />
                ללא התחייבות
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-primary" />
                תגובה תוך 24 שעות
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-primary" />
                NDA זמין
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
