/**
 * Editorial pull-quote about section.
 * No moving parts — large serif statement, italic emphasis.
 */
export default function AboutLiving() {
  return (
    <section id="about" className="relative py-32">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <div className="mono text-xs text-primary mb-4">// 01 — Profile</div>
            <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
              <p>
                <span className="text-foreground font-medium">Shaked M. Hajbi</span>
                <br />
                AI Engineer · Systems Builder
              </p>
              <p>
                ממוקם בישראל. עובד עם צוותים בין־לאומיים ולקוחות פרטיים. מתמחה בבניית מערכות
                AI שמתפקדות בפרודקשן — לא דמואים, לא prompts זרוקים.
              </p>
              <div className="pt-4 border-t border-border/60 grid grid-cols-2 gap-4 text-foreground">
                <div>
                  <div className="mono text-[10px] text-muted-foreground">בפרודקשן</div>
                  <div className="font-display text-2xl">30+</div>
                </div>
                <div>
                  <div className="mono text-[10px] text-muted-foreground">שנות ניסיון</div>
                  <div className="font-display text-2xl">7</div>
                </div>
                <div>
                  <div className="mono text-[10px] text-muted-foreground">Uptime</div>
                  <div className="font-display text-2xl">99.98%</div>
                </div>
                <div>
                  <div className="mono text-[10px] text-muted-foreground">תגובה</div>
                  <div className="font-display text-2xl">{"< 24h"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 lg:pr-4">
            <blockquote className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.2] tracking-tight text-foreground">
              <span className="text-primary">"</span>
              אני לא בונה <em className="font-italic-serif text-primary">צ'אטבוטים</em>.
              אני בונה{" "}
              <em className="font-italic-serif text-primary">מערכות שיודעות לקבל החלטות</em> —
              ולעבוד בלעדיי, בשקט, גם ב־3 לפנות בוקר.
              <span className="text-primary">"</span>
            </blockquote>
            <div className="mt-10 grid sm:grid-cols-2 gap-6 text-base text-muted-foreground leading-relaxed">
              <p>
                כל מערכת שאני מוסר עוברת מבחנים אמיתיים: לוגים, monitoring, fallbacks. לא
                "עובד אצלי" — <span className="text-foreground">עובד אצל הלקוח, לאורך זמן.</span>
              </p>
              <p>
                העבודה היא של מהנדס, לא של "פרומפט engineer". TypeScript, Postgres, agents,
                evals, observability. הדברים שעושים את ההבדל בין hype לבין תוצר.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
