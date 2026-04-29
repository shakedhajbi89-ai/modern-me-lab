import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Heart, Compass, Sun, Mail, Linkedin, Github } from "lucide-react";

export default function Organic() {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Organic — Shaked M. Hajbi";
  }, []);

  return (
    <div className="theme-organic min-h-screen overflow-x-hidden relative">
      {/* Background blobs */}
      <div className="absolute top-20 -right-32 w-[500px] h-[500px] blob bg-[hsl(var(--organic-peach))] opacity-50 blur-3xl pointer-events-none animate-float" />
      <div className="absolute top-[30%] -left-40 w-[600px] h-[600px] blob-2 bg-[hsl(var(--organic-sage))] opacity-30 blur-3xl pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] blob bg-[hsl(var(--organic-sand))] opacity-50 blur-3xl pointer-events-none animate-float" style={{ animationDelay: "4s" }} />

      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[hsl(var(--background))]/70 border-b border-border/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 blob bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] items-center justify-center text-primary-foreground font-display text-base font-semibold">S</span>
            <div className="leading-tight">
              <div className="font-display text-lg">Shaked Hajbi</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">building gentle tools</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-2 rounded-full bg-card/60 border border-border px-3 py-2">
            {[
              { id: "about", l: "עליי" },
              { id: "method", l: "תהליך" },
              { id: "values", l: "ערכים" },
              { id: "work", l: "עבודות" },
              { id: "contact", l: "קשר" },
            ].map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full px-4 py-1.5 text-sm hover:bg-secondary transition-colors">
                {s.l}
              </a>
            ))}
          </nav>
          <Link to="/" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">← גרסאות</Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24 pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border px-5 py-2 mb-10 text-sm">
            <span className="flex h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
            <span className="text-muted-foreground">זמין לפרויקטים חדשים</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl leading-[1.05] tracking-tight">
            <span>קודם </span>
            <span className="italic text-[hsl(var(--accent))]">מדברים</span>
            <span>.</span>
            <br />
            <span>אחר־כך </span>
            <span className="relative inline-block italic">
              בונים
              <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 200 14" fill="none" preserveAspectRatio="none">
                <path d="M2 8 C 50 2, 100 12, 198 5" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" fill="none"/>
              </svg>
            </span>
            <span>.</span>
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-xl text-muted-foreground leading-relaxed">
            אני מתכנן ובונה כלים, אוטומציות ומוצרי AI מותאמים אישית — כאלה שמשנים התנהלות,
            מאיצים יומיום ומייצרים תוצאה אמיתית.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] text-primary-foreground px-8 py-4 text-base font-medium shadow-lg shadow-[hsl(var(--primary))]/20 hover:scale-[1.03] hover:shadow-xl transition-all">
              בוא נדבר
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border px-8 py-4 text-base font-medium hover:border-[hsl(var(--primary))]/40 transition-all">
              לעבודות שלי
              <ArrowLeft className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Floating cards preview */}
          <div className="mt-24 relative max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {[
                { l: "AI", t: "אוטומציה" },
                { l: "UX", t: "אפיון" },
                { l: "DEV", t: "פיתוח" },
              ].map((c, i) => (
                <div
                  key={c.l}
                  className="rounded-3xl bg-card border border-border p-6 lg:p-8 shadow-xl shadow-foreground/5 animate-float"
                  style={{ animationDelay: `${i * 0.7}s` }}
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{c.l}</div>
                  <div className="font-display text-2xl mt-2">{c.t}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="rounded-[3rem] bg-card/70 backdrop-blur-xl border border-border p-10 lg:p-16 shadow-xl shadow-foreground/5">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 01 / About</div>
                <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
                  מתכנן,
                  <br />
                  <span className="italic text-[hsl(var(--accent))]">בונה,</span>
                  <br />
                  מלווה.
                </h2>
              </div>
              <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed">
                <p className="text-2xl font-display italic">
                  אסטרטג, גיש סולוויינס ויזם של AI — שמתעסק בטכנולוגיה ומוצרים שעוזרים לחיות טוב יותר.
                </p>
                <p className="text-muted-foreground">
                  לאורך השנים בניתי אינטגרציות, אוטומציות ופלטפורמות שלמות — כל אחת מהן נולדה
                  מצורך אמיתי של אנשים, לא מ"מה שכיף לבנות".
                </p>
                <p className="text-muted-foreground">
                  אני מאמין ביציאה, לא בכפיפה. בריאות, גמישות, וחיוך — גם בתוך עומס.
                  בונה בכלים שאני מאמין בהם, מתעדכן באופן עקבי, ומחפש את הדרך הקצרה לתוצאה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 02 / Method</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
              שיטה <span className="italic text-[hsl(var(--accent))]">ברורה</span>.
              <br />
              תוצאה <span className="italic">מדויקת</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              אני עובד בשלבים מדידים — מתוך מחויבות לתוצאה אמיתית.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { n: "01", t: "מתחיל מהבעיה, לא מהכלי", b: "לפני שורת קוד, מבינים מה לא עובד היום ואיפה הזמן הולך לאיבוד.", c: "var(--organic-peach)" },
              { n: "02", t: "עובד מהר ושוקף", b: "ספרינטים קצרים, סטטוס תכוף, אב־טיפוס בתוך ימים. רואים התקדמות.", c: "var(--organic-sage)" },
              { n: "03", t: "בונה לפי הצורך", b: "אין פתרון מהמדף. כל מערכת נתפרת לאיך שאתה עובד באמת.", c: "var(--organic-sand)" },
              { n: "04", t: "AI שבאמת שווה ערך", b: "בוחר את הטכנולוגיה הנכונה, לא את הטרנדית.", c: "var(--organic-clay)" },
            ].map((s) => (
              <div key={s.n} className="group relative rounded-[2rem] bg-card border border-border p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/10">
                <div className="flex items-start gap-5">
                  <div className="shrink-0 h-14 w-14 blob flex items-center justify-center font-display text-xl" style={{ background: `hsl(${s.c} / 0.5)` }}>
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl mb-3">{s.t}</h3>
                    <p className="text-muted-foreground leading-relaxed">{s.b}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 03 / Values</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
              ערכים שמלווים <span className="italic text-[hsl(var(--accent))]">אותי</span>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { i: Compass, t: "מחשבה לפני ביצוע", b: "החלטה עומדת על צורך אמיתי." },
              { i: Sun, t: "דיוק לפרטים", b: "פרטים קטנים יוצרים חוויה שלמה." },
              { i: Heart, t: "תקשורת ישירה", b: "ברור, בלי הפתעות, באמת." },
              { i: Leaf, t: "אחריות אחרי המסירה", b: "המוצר חי, ואני נשאר לידו." },
            ].map((v) => (
              <div key={v.t} className="group rounded-[2rem] bg-card border border-border p-7 text-center hover:-translate-y-1 transition-all duration-500">
                <div className="mx-auto h-16 w-16 blob bg-gradient-to-br from-[hsl(var(--organic-peach))] to-[hsl(var(--organic-sage))] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <v.i className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 04 / Work</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
              דוגמאות <span className="italic text-[hsl(var(--accent))]">קטנות</span> לעבודות.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "Skill Prime", t: "Web Platform", d: "פלטפורמת לימוד עצמית מבוססת Claude.", c: "var(--organic-peach)" },
              { n: "ExpenseIQ", t: "Mobile App", d: "ניהול הוצאות חכם עם AI.", c: "var(--organic-sage)" },
              { n: "Madbeka", t: "Mobile App", d: "מדבקות פיזיות + דיגיטליות לסידור הבית.", c: "var(--organic-sand)" },
            ].map((p) => (
              <a key={p.n} href="#contact" className="group block rounded-[2rem] bg-card border border-border overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/10">
                <div className="aspect-[4/3] relative overflow-hidden" style={{ background: `hsl(${p.c} / 0.4)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 blob bg-card/80 backdrop-blur shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-center px-4">
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.t}</div>
                        <div className="font-display text-lg leading-tight mt-1">{p.n}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{p.n}</h3>
                  <p className="text-sm text-muted-foreground">{p.d}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm text-[hsl(var(--accent))] font-medium">
                    קרא עוד <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="rounded-[3rem] bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--primary))]/80 text-primary-foreground p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 blob bg-[hsl(var(--accent))]/40 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 blob-2 bg-[hsl(var(--organic-sand))]/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <div className="text-xs uppercase tracking-[0.25em] opacity-70 mb-4">— 05 / Get in touch</div>
                <h2 className="font-display text-5xl lg:text-7xl leading-[1] tracking-tight">
                  פחות רעש.
                  <br />
                  <span className="italic">יותר תוצאה.</span>
                </h2>
                <p className="mt-8 max-w-xl text-lg opacity-80 leading-relaxed">
                  ספר לי על הפרויקט — ואחזור אליך תוך 24 שעות. תהליך נעים, ברור, ומדויק.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
                {[
                  { i: Mail, l: "Email", v: "hajbishaked.96@gmail.com" },
                  { i: Linkedin, l: "LinkedIn", v: "linkedin/shaked" },
                  { i: Github, l: "GitHub", v: "github/shaked" },
                ].map((c) => (
                  <a key={c.l} href="#" className="group flex items-center gap-4 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 p-4 hover:bg-primary-foreground/20 transition-colors">
                    <div className="h-10 w-10 blob bg-primary-foreground/20 flex items-center justify-center">
                      <c.i className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest opacity-60">{c.l}</div>
                      <div className="text-sm">{c.v}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
            <div>© {new Date().getFullYear()} Shaked M. Hajbi · building tools that ship</div>
            <div className="italic font-display">crafted with care · in Haifa</div>
          </div>
        </div>
      </section>
    </div>
  );
}
