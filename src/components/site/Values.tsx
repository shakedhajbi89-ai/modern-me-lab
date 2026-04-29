import { Target, Compass, Shield, Flame } from "lucide-react";

const values = [
  { icon: Compass, title: "משובת לפני ביצוע", body: "אני לא מתחיל לבנות עד שהבנתי לעומק את התמונה. כל החלטה צריכה לעמוד על הצורך האמיתי — לא על הנחות." },
  { icon: Target, title: "דיוק נדירה לפרטים", body: "פרטים קטנים יוצרים חוויה שלמה. גופן, רווח, מיקרו־אנימציה, זמן תגובה — הכל נמדד ומכוון." },
  { icon: Shield, title: "תקשורת ישירה ואמינות", body: "ברור, על השולחן, בלי הפתעות. אם משהו מתעכב — אתה יודע. אם משהו עובד — אתה רואה." },
  { icon: Flame, title: "אחריות גם אחרי המסירה", body: "המוצר חי גם אחרי שהוא יוצא לאוויר. אני נשאר זמין, מתחזק, ומשפר לפי מה שלמדים בשטח." },
];

export default function Values() {
  return (
    <section id="values" className="relative py-32">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <div className="mono text-xs text-primary mb-4">// 03 — DNA</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-foreground">הערכים</span>{" "}
            <span className="text-gradient-brand">שמלווים אותי.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">
            אני עובד בכמה ערכים יסוד, מדויקים שלאורך — מהשלב הראשון ועד למסירה האחרונה.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="group relative rounded-2xl bg-card border border-border p-7 transition-all duration-500 hover:border-primary/40 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-brand opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10 -z-10" />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand/10 border border-primary/30 text-primary group-hover:scale-110 transition-transform">
                  <v.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{v.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
