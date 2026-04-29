const steps = [
  {
    n: "01",
    title: "מתחיל מהבעיה, לא מהכלי",
    body: "לפני שכותבים שורת קוד אחת מבינים בדיוק מה לא עובד היום, איפה זמן הולך לאיבוד, ומה תיראה הצלחה. הצורך מגדיר את הכלי — לא להפך.",
  },
  {
    n: "02",
    title: "עובד מהר, מסדר ושוקף",
    body: "בלוק קצר של ספרינטים, פגישות סטטוס תכופות, גישה לאב־טיפוס בתוך ימים. אתה רואה התקדמות אמיתית — לא מצגות.",
  },
  {
    n: "03",
    title: "בונה לפי הצורך, לא לפי תבנית",
    body: "אין כאן 'פתרון מהמדף'. כל מערכת נתפרת לאיך שאתה עובד באמת, עם ארכיטקטורה שמחזיקה לאורך זמן וסקילה.",
  },
  {
    n: "04",
    title: "משתמש ב־AI שבאמת שווה ערך",
    body: "AI הוא כלי עוצמתי כשמשתמשים בו נכון. אני מתעדכן ובוחר את הטכנולוגיה הנכונה — לא מה שטרנדי השבוע.",
  },
];

export default function Method() {
  return (
    <section id="method" className="relative py-32">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <div className="mono text-xs text-primary mb-4">// 02 — איך אני עובד</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-gradient-brand">שיטה ברורה.</span>{" "}
            <span className="text-foreground">תוצאה מדויקת.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">
            אני עובד בפרק שלבים, מדידים ושמחים, מתוך מחויבות לתוצאה אמיתית.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden glow-border">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative bg-card p-8 lg:p-10 transition-all duration-500 hover:bg-secondary/50"
            >
              <div className="flex items-start gap-5">
                <div className="mono text-3xl font-bold text-gradient-brand opacity-80">{s.n}</div>
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">
                    {s.body}
                  </p>
                </div>
              </div>
              {/* Hover line */}
              <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-brand origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
