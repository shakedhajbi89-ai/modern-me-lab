import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Star, Zap, Target, Shield } from "lucide-react";

export default function Brutal() {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Brutal — Shaked M. Hajbi";
  }, []);

  return (
    <div className="theme-brutal min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[hsl(var(--background))] border-b-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="brutal-border bg-[hsl(var(--brutal-yellow))] px-3 py-1 font-display text-lg">SHAKED</span>
            <span className="hidden sm:inline text-xs font-bold uppercase">/ AI ENGINEER</span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: "about", l: "עליי" },
              { id: "method", l: "מתודולוגיה" },
              { id: "work", l: "עבודות" },
              { id: "contact", l: "צור קשר" },
            ].map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-4 py-1.5 text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-colors">
                {s.l}
              </a>
            ))}
          </nav>
          <Link to="/" className="text-xs uppercase font-bold underline">גרסאות ←</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* decorative shapes */}
        <div className="absolute top-20 -left-12 w-48 h-48 bg-[hsl(var(--brutal-pink))] brutal-border rotate-12 hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[hsl(var(--brutal-blue))] brutal-border -rotate-6 hidden lg:block" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-[hsl(var(--brutal-lime))] brutal-border rotate-45 hidden lg:block" />

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="inline-flex items-center gap-2 brutal-border bg-[hsl(var(--brutal-yellow))] px-4 py-2 mb-8 font-bold text-sm uppercase">
            <Star className="h-4 w-4 fill-current" />
            זמין לפרויקטים חדשים — Q2 2026
          </div>
          <h1 className="font-display text-[14vw] sm:text-[10vw] lg:text-[9rem] leading-[0.85] uppercase">
            <span className="block">קודם</span>
            <span className="inline-block bg-[hsl(var(--brutal-lime))] px-4 brutal-border -rotate-1 my-2">מדברים.</span>
            <span className="block mt-4">אחר־כך</span>
            <span className="inline-block bg-[hsl(var(--brutal-pink))] px-4 brutal-border rotate-1 my-2">בונים.</span>
          </h1>

          <div className="mt-16 grid lg:grid-cols-12 gap-8">
            <p className="lg:col-span-7 text-xl lg:text-2xl font-bold leading-snug">
              מתכנן ובונה כלים דיגיטליים, אוטומציות ומוצרי AI מותאמים אישית.
              כאלה שמשנים התנהלות, מאיצים עבודה יומיומית, ומייצרים תוצאה של ממש —
              <span className="bg-[hsl(var(--brutal-yellow))] px-2"> לא רק מצגות.</span>
            </p>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4">
              <a href="#contact" className="brutal-border brutal-shadow bg-foreground text-background px-6 py-5 font-display text-2xl uppercase flex items-center justify-between">
                בוא נדבר <ArrowLeft className="h-6 w-6" />
              </a>
              <a href="#work" className="brutal-border brutal-shadow bg-background px-6 py-5 font-display text-2xl uppercase flex items-center justify-between">
                עבודות <ArrowLeft className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t-2 border-foreground bg-[hsl(var(--brutal-yellow))]">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="font-mono text-xs font-bold mb-4">[ 01 // ABOUT ]</div>
            <h2 className="font-display text-6xl lg:text-7xl uppercase leading-[0.85]">
              מי
              <br />
              <span className="bg-foreground text-background px-3 inline-block">אני?</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg font-medium leading-relaxed">
            <p className="text-2xl font-bold">
              אסטרטג. בונה. יזם של AI.
            </p>
            <p>
              אני מתעסק בטכנולוגיה ובמוצרים שעוזרים לאנשים לחיות ולעבוד יותר טוב.
              בניתי במהלך השנים אינטגרציות, אוטומציות ופלטפורמות שלמות — שכל אחת מהן
              נולדה מצורך אמיתי, לא מ"מה שהיה כיף לבנות".
            </p>
            <p>
              אני לא מאמין בדיבורים. אני מאמין בתוצאות שאפשר למדוד, להראות, ולהשתמש בהן
              ביום־יום. <span className="bg-background brutal-border px-2">תכלס.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="py-24 border-t-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="font-mono text-xs font-bold mb-4">[ 02 // PROCESS ]</div>
            <h2 className="font-display text-6xl lg:text-7xl uppercase leading-[0.85]">
              שיטה ברורה.
              <br />
              <span className="bg-[hsl(var(--brutal-blue))] text-background px-3 inline-block mt-2">תוצאה מדויקת.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { n: "01", t: "מתחיל מהבעיה", b: "לפני כל שורת קוד — מבינים מה לא עובד היום ואיפה הזמן הולך לאיבוד.", c: "var(--brutal-yellow)" },
              { n: "02", t: "עובד מהר", b: "ספרינטים קצרים, סטטוס שבועי, אב־טיפוס בתוך ימים. רואים התקדמות.", c: "var(--brutal-pink)" },
              { n: "03", t: "בונה מותאם", b: "אין פתרון מהמדף. כל מערכת נתפרת לאיך שאתה עובד באמת.", c: "var(--brutal-lime)" },
              { n: "04", t: "AI חכם, לא טרנדי", b: "בוחר את הטכנולוגיה הנכונה — לא את זו שכותבים עליה השבוע.", c: "var(--brutal-blue)" },
            ].map((s) => (
              <div key={s.n} className="brutal-border brutal-shadow bg-background p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="font-display text-5xl">{s.n}</div>
                  <div className="brutal-border w-12 h-12" style={{ background: `hsl(${s.c})` }} />
                </div>
                <h3 className="font-display text-2xl uppercase mb-3">{s.t}</h3>
                <p className="font-medium leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 03 // DNA ]</div>
            <h2 className="font-display text-6xl lg:text-7xl uppercase leading-[0.85]">
              הערכים שלי.
              <br />
              <span className="text-[hsl(var(--brutal-lime))]">לא לדיון.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { i: Target, t: "מחשבה לפני ביצוע", b: "החלטה עומדת על צורך אמיתי, לא על הנחות." },
              { i: Zap, t: "דיוק לפרטים", b: "פרטים קטנים יוצרים חוויה שלמה. הכל נמדד." },
              { i: Shield, t: "תקשורת ישירה", b: "ברור, על השולחן, בלי הפתעות. נקודה." },
              { i: Star, t: "אחריות אחרי מסירה", b: "המוצר חי. נשאר זמין, מתחזק, משפר." },
            ].map((v) => (
              <div key={v.t} className="border-2 border-background p-6 hover:bg-[hsl(var(--brutal-yellow))] hover:text-foreground transition-colors">
                <v.i className="h-8 w-8 mb-4" />
                <h3 className="font-display text-xl uppercase mb-2">{v.t}</h3>
                <p className="text-sm font-medium opacity-80">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 border-t-2 border-foreground bg-[hsl(var(--brutal-pink))]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="font-mono text-xs font-bold mb-4">[ 04 // PROJECTS ]</div>
            <h2 className="font-display text-6xl lg:text-7xl uppercase leading-[0.85]">עבודות נבחרות.</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {[
              { n: "Skill Prime", t: "Web Platform", d: "פלטפורמת לימוד עצמית מבוססת Claude.", c: "var(--brutal-yellow)" },
              { n: "ExpenseIQ", t: "Mobile App", d: "ניהול הוצאות עם בינה מלאכותית.", c: "var(--brutal-lime)" },
              { n: "Madbeka", t: "Mobile App", d: "מדבקות פיזיות + דיגיטליות לסידור הבית.", c: "var(--brutal-blue)" },
            ].map((p) => (
              <a key={p.n} href="#contact" className="brutal-border brutal-shadow bg-background block group">
                <div className="aspect-[4/3] flex items-center justify-center border-b-2 border-foreground" style={{ background: `hsl(${p.c})` }}>
                  <div className="text-center">
                    <div className="font-mono text-xs font-bold mb-2 uppercase">{p.t}</div>
                    <div className="font-display text-4xl uppercase">{p.n}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-medium mb-3">{p.d}</p>
                  <span className="font-display uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                    צפה <ArrowLeft className="h-4 w-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs font-bold mb-4">[ 05 // GET IN TOUCH ]</div>
            <h2 className="font-display text-6xl lg:text-8xl uppercase leading-[0.85]">
              פחות רעש.
              <br />
              <span className="bg-[hsl(var(--brutal-lime))] px-3 inline-block mt-2">יותר תוצאה.</span>
            </h2>
            <p className="mt-8 text-xl font-medium max-w-xl">
              ספר לי על הפרויקט — ואחזור אליך תוך 24 שעות.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-4">
            {[
              { i: Mail, l: "EMAIL", v: "hajbishaked.96@gmail.com", c: "var(--brutal-yellow)" },
              { i: Linkedin, l: "LINKEDIN", v: "linkedin/shaked", c: "var(--brutal-blue)" },
              { i: Github, l: "GITHUB", v: "github/shaked", c: "var(--brutal-pink)" },
            ].map((c) => (
              <a key={c.l} href="#" className="brutal-border brutal-shadow bg-background flex items-center gap-4 p-4">
                <div className="brutal-border w-12 h-12 flex items-center justify-center" style={{ background: `hsl(${c.c})` }}>
                  <c.i className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase">{c.l}</div>
                  <div className="font-display text-base">{c.v}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-20 pt-6 border-t-2 border-foreground flex flex-wrap items-center justify-between gap-4 text-sm font-bold uppercase">
          <div>© {new Date().getFullYear()} Shaked M. Hajbi</div>
          <div>building tools that ship · Haifa</div>
        </div>
      </section>
    </div>
  );
}
