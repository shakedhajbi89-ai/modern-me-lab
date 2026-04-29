import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpLeft, Mail, Linkedin, Github } from "lucide-react";

const sections = [
  { id: "about", label: "עליי" },
  { id: "method", label: "מתודולוגיה" },
  { id: "values", label: "ערכים" },
  { id: "work", label: "עבודות" },
  { id: "contact", label: "צור קשר" },
];

export default function Editorial() {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Editorial — Shaked M. Hajbi";
  }, []);

  return (
    <div className="theme-editorial min-h-screen overflow-x-hidden">
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[hsl(var(--background))]/80 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-display text-xl font-semibold tracking-tight">Shaked<span className="text-accent">.</span></span>
            <span className="hidden sm:block text-[11px] uppercase tracking-[0.2em] text-muted-foreground">— building tools that ship</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-muted-foreground hover:text-foreground transition-colors story-link">
                {s.label}
              </a>
            ))}
          </nav>
          <Link to="/" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">← גרסאות</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-32 lg:py-44">
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-12">
            VOL.01 — Issue 04 · Spring 2026
          </div>
          <h1 className="font-display text-[14vw] sm:text-[10vw] lg:text-[9rem] leading-[0.9] font-medium tracking-tighter">
            <span>קודם</span>{" "}
            <span className="font-italic-serif text-accent">מדברים</span>.
            <br />
            <span>אחר־כך</span>{" "}
            <span className="font-italic-serif">בונים</span>.
          </h1>

          <div className="mt-20 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-5">
              <div className="h-px w-16 bg-foreground mb-6" />
              <p className="text-xl leading-relaxed">
                מתכנן ובונה כלים דיגיטליים, אוטומציות ומוצרי AI מותאמים אישית.
                כאלה שמשנים התנהלות, מאיצים עבודה יומיומית ומייצרים תוצאה של ממש.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
              <a href="#contact" className="group inline-flex items-center justify-between rounded-none border-b-2 border-foreground py-4 text-lg font-display hover:bg-foreground hover:text-background hover:px-4 transition-all">
                בוא נדבר
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </a>
              <a href="#work" className="group inline-flex items-center justify-between border-b border-border py-4 text-lg font-display text-muted-foreground hover:text-foreground transition-colors">
                לעבודות שלי
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border py-5 overflow-hidden bg-secondary/40">
          <div className="flex gap-12 whitespace-nowrap animate-marquee text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span>AI Engineering</span><span>·</span>
                <span>Automation Architecture</span><span>·</span>
                <span>Product Strategy</span><span>·</span>
                <span>Full-Stack Development</span><span>·</span>
                <span className="font-italic-serif normal-case tracking-normal text-foreground">shaped in Haifa</span><span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 01 / about</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              מתכנן,
              <br />
              <span className="font-italic-serif">בונה,</span>
              <br />
              מלווה.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed">
            <p className="text-2xl font-display leading-snug">
              <span className="text-accent">"</span>אסטרטג, גיש סולוויינס ויזם של AI — שמתעסק בטכנולוגיה ובמוצרים שעוזרים לחיות יותר טוב.<span className="text-accent">"</span>
            </p>
            <p className="text-muted-foreground">
              במהלך השנים בניתי עוד טריבולוגיה, אינטגרציות ופלטפורמות שלמות — שיצרו ערך אמיתי
              בעבור עסקים, צוותים ואנשים פרטיים שרצו לעבוד אחרת.
            </p>
            <p className="text-muted-foreground">
              אני אוהב פשוט לפתח. בונה בכלי שאני מאמין בו, מתעדכן באופן עקבי, ומחפש כל הזמן את
              הדרך הקצרה והנכונה לתוצאה — לא את זו שמרשימה על נייר.
            </p>
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="py-32 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 02 / method</div>
              <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                שיטה <span className="font-italic-serif text-accent">ברורה.</span>
                <br />
                תוצאה <span className="font-italic-serif">מדויקת.</span>
              </h2>
            </div>
          </div>

          <div className="space-y-px bg-border">
            {[
              { n: "01", title: "מתחיל מהבעיה, לא מהכלי", body: "לפני שכותבים שורת קוד אחת מבינים בדיוק מה לא עובד היום, איפה הזמן הולך לאיבוד, ומה תיראה הצלחה." },
              { n: "02", title: "עובד מהר, מסדר ושוקף", body: "ספרינטים קצרים, פגישות סטטוס תכופות, גישה לאב־טיפוס בתוך ימים. אתה רואה התקדמות אמיתית — לא מצגות." },
              { n: "03", title: "בונה לפי הצורך, לא לפי תבנית", body: "אין כאן 'פתרון מהמדף'. כל מערכת נתפרת לאיך שאתה עובד באמת, עם ארכיטקטורה שמחזיקה לאורך זמן." },
              { n: "04", title: "משתמש ב־AI שבאמת שווה ערך", body: "AI הוא כלי עוצמתי כשמשתמשים בו נכון. אני בוחר את הטכנולוגיה הנכונה — לא מה שטרנדי השבוע." },
            ].map((s) => (
              <div key={s.n} className="bg-background grid lg:grid-cols-12 gap-8 px-2 py-10 group hover:bg-secondary/40 transition-colors">
                <div className="lg:col-span-2 font-display text-5xl text-accent">{s.n}</div>
                <h3 className="lg:col-span-4 font-display text-2xl leading-tight">{s.title}</h3>
                <p className="lg:col-span-6 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-3xl mb-20">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 03 / values</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              הערכים שמלווים <span className="font-italic-serif text-accent">אותי.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              { t: "מחשבה לפני ביצוע", b: "כל החלטה צריכה לעמוד על הצורך האמיתי — לא על הנחות או הרגלים." },
              { t: "דיוק נדיר לפרטים", b: "פרטים קטנים יוצרים חוויה שלמה. גופן, רווח, מיקרו־אנימציה — הכל נמדד." },
              { t: "תקשורת ישירה", b: "ברור, על השולחן, בלי הפתעות. אם משהו מתעכב — אתה יודע." },
              { t: "אחריות גם אחרי המסירה", b: "המוצר חי גם אחרי שהוא יוצא לאוויר. אני נשאר זמין ומתחזק." },
            ].map((v, i) => (
              <div key={v.t} className="bg-background p-10 group hover:bg-accent hover:text-accent-foreground transition-all duration-500">
                <div className="font-display text-5xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                <h3 className="font-display text-2xl mb-3">{v.t}</h3>
                <p className="opacity-70 leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 04 / selected work</div>
              <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                דוגמאות <span className="font-italic-serif text-accent">קטנות.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              כמה הצצות למוצרים שבניתי — אפיון, חוויה, פיתוח ואסטרטגיה.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: "Skill Prime", tag: "Web Platform", desc: "פלטפורמת לימוד עצמית מבוססת Claude.", n: "01" },
              { name: "ExpenseIQ", tag: "Mobile App", desc: "ניהול הוצאות עם בינה מלאכותית.", n: "02" },
              { name: "Madbeka", tag: "Mobile App", desc: "מדבקות פיזיות + דיגיטליות לסידור הבית.", n: "03" },
            ].map((p) => (
              <a key={p.name} href="#contact" className="group block">
                <div className="aspect-[4/5] bg-secondary border border-border overflow-hidden relative mb-4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display font-italic-serif text-7xl text-accent">{p.n}</div>
                      <div className="font-display text-2xl mt-2">{p.name}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-background font-display text-2xl flex items-center gap-2">
                      צפה בפרויקט <ArrowUpLeft className="h-5 w-5" />
                    </span>
                  </div>
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-xl">{p.name}</h3>
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground">{p.tag}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-4">— 05 / get in touch</div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
              פחות רעש.
              <br />
              <span className="font-italic-serif text-accent">יותר תוצאה.</span>
            </h2>
            <p className="mt-8 max-w-xl opacity-70 text-lg leading-relaxed">
              גישה ברורה. תוצאה מדויקת. ספר לי על הפרויקט — ואחזור אליך תוך 24 שעות.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-3 text-sm">
            {[
              { icon: Mail, label: "EMAIL", v: "hajbishaked.96@gmail.com" },
              { icon: Linkedin, label: "LINKEDIN", v: "linkedin/in/shaked" },
              { icon: Github, label: "GITHUB", v: "github/shaked" },
            ].map((c) => (
              <a key={c.label} href="#" className="group flex items-center justify-between border-b border-background/20 py-4 hover:border-accent transition-colors">
                <span className="flex items-center gap-3">
                  <c.icon className="h-4 w-4 opacity-60" />
                  <span className="opacity-60 text-[10px] uppercase tracking-[0.25em]">{c.label}</span>
                </span>
                <span className="font-display text-lg group-hover:text-accent transition-colors">{c.v}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-12 mt-24 pt-8 border-t border-background/20 flex flex-wrap items-center justify-between gap-4 text-xs opacity-60">
          <div>© {new Date().getFullYear()} Shaked M. Hajbi · building tools that ship</div>
          <div className="font-italic-serif text-base opacity-100">crafted with care · in Haifa</div>
        </div>
      </section>
    </div>
  );
}
