import { ArrowLeft, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-32">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container-narrow relative">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs mono">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-muted-foreground">AI Engineer · Automation Architect · Full-Stack</span>
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
          כאלה שמשנים את ההתנהלות, מאיצים עבודה יומיומית ומייצרים תוצאה של ממש —
          לא רק מצגות.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)]"
          >
            בוא נדבר
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
          >
            לעבודות שלי
            <ArrowLeft className="h-4 w-4 opacity-60 transition-all group-hover:opacity-100 group-hover:-translate-x-1" />
          </a>
        </div>

        {/* Tags */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 animate-fade-in" style={{ animationDelay: "500ms" }}>
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
