import { Compass, Gauge, Layers, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "מתחיל מהבעיה, לא מהכלי",
    body: "לפני שכותבים שורת קוד אחת מבינים בדיוק מה לא עובד היום, איפה זמן הולך לאיבוד, ומה תיראה הצלחה. הצורך מגדיר את הכלי — לא להפך.",
  },
  {
    icon: Gauge,
    title: "עובד מהר, מסדר ושוקף",
    body: "בלוק קצר של ספרינטים, פגישות סטטוס תכופות, גישה לאב־טיפוס בתוך ימים. אתה רואה התקדמות אמיתית — לא מצגות.",
  },
  {
    icon: Layers,
    title: "בונה לפי הצורך, לא לפי תבנית",
    body: "אין כאן 'פתרון מהמדף'. כל מערכת נתפרת לאיך שאתה עובד באמת, עם ארכיטקטורה שמחזיקה לאורך זמן וסקילה.",
  },
  {
    icon: Sparkles,
    title: "משתמש ב־AI שבאמת שווה ערך",
    body: "AI הוא כלי עוצמתי כשמשתמשים בו נכון. אני מתעדכן ובוחר את הטכנולוגיה הנכונה — לא מה שטרנדי השבוע.",
  },
];

export default function Method() {
  return (
    <section id="method" className="relative py-32">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <div className="mono text-xs text-primary mb-4">// איך אני עובד</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            <span className="text-foreground">שיטה ברורה.</span>{" "}
            <em className="font-italic-serif text-primary">תוצאה מדויקת.</em>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground text-lg leading-relaxed">
            אני עובד בשלבים מדודים ושקופים, מתוך מחויבות לתוצאה אמיתית.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm p-8 lg:p-10 transition-all duration-700 hover:border-primary/40 hover:bg-card hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6 transition-all duration-700 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-2xl text-foreground mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-[1.8] text-[16px]">
                  {s.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
