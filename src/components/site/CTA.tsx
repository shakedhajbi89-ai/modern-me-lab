export default function CTA() {
  return (
    <section className="relative py-32">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-12 md:p-20 text-center glow-border">
          <div className="absolute inset-0 bg-gradient-hero opacity-80" />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/30 blur-[120px]" />

          <div className="relative">
            <div className="mono text-xs text-primary mb-6">// less.noise</div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              <span className="text-foreground">פחות רעש.</span>
              <br />
              <span className="text-gradient-brand">יותר תוצאה.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-muted-foreground leading-relaxed">
              אני בונה פתרונות דיגיטליים מותאמים שעובדים עם הנתונים, המוצרים והמערכות שלך —
              לא נגדם. גילוי מדויק, אסטרטגיית מוצר ופיתוח שמשרתים מטרה אחת: להניע אותך קדימה.
            </p>
            <p className="mt-6 font-display font-semibold text-foreground text-lg">
              גישה ברורה. תוצאה מדויקת.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
