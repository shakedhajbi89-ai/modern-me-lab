import { ArrowLeft, Sparkles, MessageCircle, Play } from "lucide-react";

const stats = [
  { v: "30+", l: "פרויקטים בהפקה" },
  { v: "8x", l: "האצה ממוצעת בתהליכים" },
  { v: "24h", l: "זמן תגובה ראשוני" },
  { v: "100%", l: "מותאם אישית" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Floating orbs */}
      <div className="absolute top-32 right-1/4 h-3 w-3 rounded-full bg-primary animate-float pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 h-2 w-2 rounded-full bg-accent animate-float pointer-events-none" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-1/3 right-1/3 h-2 w-2 rounded-full bg-primary/70 animate-float pointer-events-none" style={{ animationDelay: "3s" }} />

      <div className="container-narrow relative">
        {/* Eyebrow with live status */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-xs mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-foreground/90">זמין לפרויקטים חדשים — Q2 2026</span>
            <span className="h-3 w-px bg-border" />
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">AI · Automation · Full-Stack</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] animate-fade-in-up">
          <span className="block text-foreground">קודם <span className="text-gradient-brand">מדברים</span>.</span>
          <span className="block mt-2 text-foreground/90">
            אחר כך <span className="relative inline-block">
              <span className="text-gradient-brand">בונים</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 9 Q 50 2 100 6 T 198 4" stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7"/>
              </svg>
            </span>.
          </span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          אני מתכנן ובונה כלים דיגיטליים, אוטומציות ומוצרי AI מותאמים אישית.
          כאלה שמשנים התנהלות, מאיצים יומיום, ומייצרים תוצאה של ממש —
          <span className="text-foreground"> לא רק מצגות.</span>
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
            <span className="relative">בוא נדבר על הפרויקט</span>
            <ArrowLeft className="relative h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="https://wa.me/972500000000?text=היי%20שקד,%20ראיתי%20את%20האתר"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-7 py-4 text-base font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
          >
            <MessageCircle className="h-4 w-4 text-primary" />
            וואטסאפ
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-4 py-4 text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            צפה בעבודות
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-3xl border border-border bg-border/60 overflow-hidden glow-border animate-fade-in-up" style={{ animationDelay: "450ms" }}>
          {stats.map((s, i) => (
            <div key={s.l} className="bg-card/80 backdrop-blur p-6 text-center group hover:bg-card transition-colors" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="font-display font-bold text-3xl lg:text-4xl text-gradient-brand">{s.v}</div>
              <div className="mt-2 text-xs text-muted-foreground leading-snug">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 animate-fade-in" style={{ animationDelay: "600ms" }}>
          {["AI & Automation", "Shaped in Haifa", "Python · TS · React", "Production-grade"].map((tag) => (
            <div key={tag} className="mono text-xs text-muted-foreground/80 flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
