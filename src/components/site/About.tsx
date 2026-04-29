export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sticky title */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="mono text-xs text-primary mb-4">// 01 — עליי</div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
              <span className="text-foreground">מתכנן,</span>
              <br />
              <span className="text-gradient-brand">בונה,</span>
              <br />
              <span className="text-foreground">מלווה.</span>
            </h2>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-8 text-lg leading-relaxed">
            <p className="relative pl-6 border-l-2 border-primary/40">
              אני <span className="text-foreground font-medium">אסטרטג, גיש סולוויינס, איש עסקים ויזם של AI</span> —
              שמתעסק בטכנולוגיה ומוצרים אישיים שעוזרים לי לחיות יותר טוב.
            </p>
            <p className="text-muted-foreground">
              במהלך השנים בניתי עוד טריבולוגיה, בהן אינטגרציה — אוטו עכשיו פלסטיק של עברית, באמת
              עניין לאינשנים שיתפסו בניין מסוים שלא וצרים — שלא תפסו אישי, אלא נכנס בעיני אנשי
              שלא בעצמי.
            </p>
            <p className="text-muted-foreground">
              אני אוהב פשוט לטפס לפיתוח. בונה גילוי לחתוך עצמן ויעיל גמור — שלא, אוטומטיש לאורך
              סטים, של טפסים שאסיים לאישית. אני מאמין ביציאה ולא בכפיכה — בריאות, גיל סיף לחויה,
              גם בלי להריץ.
            </p>
            <p className="text-muted-foreground">
              אני בונה בכלים מסוימים מתוך עיני, בלי תאוריות, וגם באנשים מאמינים על אדם ולמטהאלי,
              מנדידעלים, סטרואלאמים שלי — לא תחנות.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
