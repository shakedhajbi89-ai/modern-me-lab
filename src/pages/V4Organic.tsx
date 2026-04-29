import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Heart, Compass, Sun, Mail, Linkedin, Github, Bot, Workflow, LayoutDashboard, Database, Sparkles, Code2, Quote, MessageCircle, X, TrendingUp, Users, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  { icon: Bot, title: "סוכני AI", desc: "סוכנים מבוססי Claude/GPT שמבינים, מחליטים ופועלים.", c: "var(--organic-peach)" },
  { icon: Workflow, title: "אוטומציות", desc: "Make, n8n, Zapier ו-API־ים — חוסכים שעות בשבוע.", c: "var(--organic-sage)" },
  { icon: LayoutDashboard, title: "מוצרי SaaS", desc: "פיתוח מקצה לקצה — אפיון, עיצוב, פיתוח Production.", c: "var(--organic-sand)" },
  { icon: Database, title: "Backend & Data", desc: "Postgres, Edge Functions, real-time. ארכיטקטורה שמחזיקה.", c: "var(--organic-clay)" },
  { icon: Sparkles, title: "אסטרטגיית מוצר", desc: "Discovery sprints, KPIs, ותעדוף MVP חכם.", c: "var(--organic-peach)" },
  { icon: Code2, title: "ייעוץ טכני", desc: "CTO זמני, Code review, החלטות תשתית וגיוס.", c: "var(--organic-sage)" },
];

const tools = ["Claude", "OpenAI", "Gemini", "Python", "TypeScript", "React", "Next.js", "Node.js", "Supabase", "Postgres", "Tailwind", "n8n", "Stripe", "Vercel", "LangChain"];

const projects = [
  { n: "Skill Prime", t: "Web · AI", d: "פלטפורמת לימוד עצמית מבוססת Claude — תוכנית למידה מותאמת בכל נושא.", c: "var(--organic-peach)", stack: ["React", "Claude", "Supabase"], metrics: [{ i: Users, v: "1.2K+", l: "משתמשים" }, { i: TrendingUp, v: "85%", l: "completion" }] },
  { n: "ExpenseIQ", t: "Mobile · FinTech", d: "ניהול הוצאות עם AI. קטגוריזציה אוטומטית וחיזוי חריגות.", c: "var(--organic-sage)", stack: ["React Native", "GPT-4V", "Postgres"], metrics: [{ i: Zap, v: "8x", l: "מהיר יותר" }, { i: TrendingUp, v: "94%", l: "דיוק" }] },
  { n: "Madbeka", t: "Mobile + Physical", d: "מדבקות פיזיות + דיגיטליות לסידור הבית. סורק — רואה תוכן.", c: "var(--organic-sand)", stack: ["Flutter", "QR/NFC", "Supabase"], metrics: [{ i: Users, v: "500+", l: "בתים" }, { i: Zap, v: "<3s", l: "סריקה" }] },
];

const testimonials = [
  { q: "שקד הביא לנו בתוך 3 שבועות מערכת שחיכינו לה חצי שנה. הבין את הצורך עוד לפני שהסברנו.", n: "דניאל כ.", r: "מנכ\"ל, חברת SaaS" },
  { q: "הוא לא בנה מה שאמרנו — בנה את מה שבאמת היינו צריכים. הבדל ענק.", n: "מיכל ש.", r: "Head of Product" },
  { q: "האוטומציה חוסכת לנו 20 שעות בשבוע. החזר השקעה תוך חודש.", n: "יואב ר.", r: "מייסד, סוכנות" },
];

const faqs = [
  { q: "כמה זמן לוקח לבנות מוצר?", a: "אב-טיפוס תוך 1-2 שבועות, MVP מלא תוך 4-8 שבועות. ספרינטים קצרים עם הדגמה שבועית." },
  { q: "מה התקציב הטיפוסי?", a: "אוטומציה ממוקדת 3-5K, MVP מלא 15-50K, פלטפורמה מורכבת מעבר. שקיפות מלאה על מחיר." },
  { q: "מה קורה אחרי המסירה?", a: "אני נשאר זמין לתחזוקה, באגים ושיפורים. רטיינר חודשי או לפי שעה." },
  { q: "איך אתה משתמש ב-AI?", a: "AI הוא כלי, לא מטרה. רק איפה שהוא באמת מוסיף ערך מדיד." },
  { q: "איפה הקוד נשמר?", a: "GitHub פרטי שאתה הבעלים שלו מהיום הראשון. בלי vendor lock-in." },
];

export default function Organic() {
  const [showSticky, setShowSticky] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Organic — Shaked M. Hajbi";
    const onScroll = () => setShowSticky(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
              { id: "services", l: "יכולות" },
              { id: "method", l: "תהליך" },
              { id: "work", l: "עבודות" },
              { id: "faq", l: "שאלות" },
            ].map((s) => (
              <a key={s.id} href={`#${s.id}`} className="rounded-full px-4 py-1.5 text-sm hover:bg-secondary transition-colors">
                {s.l}
              </a>
            ))}
          </nav>
          <a href="#contact" className="rounded-full bg-[hsl(var(--primary))] text-primary-foreground px-5 py-2 text-sm hover:scale-105 transition-transform">בוא נדבר</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-24 pb-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border px-5 py-2 mb-10 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--primary))] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
            </span>
            <span className="text-muted-foreground">זמין · 2 משבצות פנויות ל-Q2 2026</span>
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
            מתכנן ובונה כלים, אוטומציות ומוצרי AI מותאמים אישית — כאלה שמשנים התנהלות,
            מאיצים יומיום, ומייצרים תוצאה אמיתית.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] text-primary-foreground px-8 py-4 text-base font-medium shadow-lg shadow-[hsl(var(--primary))]/20 hover:scale-[1.05] hover:shadow-xl transition-all">
              בוא נדבר
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            </a>
            <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] text-accent-foreground px-8 py-4 text-base font-medium hover:scale-[1.05] transition-all">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border px-8 py-4 text-base font-medium hover:border-[hsl(var(--primary))]/40 transition-all">
              לעבודות
              <ArrowLeft className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: "30+", l: "פרויקטים בהפקה", c: "var(--organic-peach)" },
              { v: "8x", l: "האצה ממוצעת", c: "var(--organic-sage)" },
              { v: "24h", l: "תגובה ראשונית", c: "var(--organic-sand)" },
              { v: "100%", l: "מותאם אישית", c: "var(--organic-clay)" },
            ].map((s) => (
              <div key={s.l} className="rounded-3xl bg-card/80 backdrop-blur border border-border p-6 hover:-translate-y-1 transition-all">
                <div className="h-3 w-12 mx-auto mb-4 rounded-full" style={{ background: `hsl(${s.c})` }} />
                <div className="font-display text-4xl italic">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-2">{s.l}</div>
              </div>
            ))}
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
                  אסטרטג, מהנדס תוכנה ויזם של AI — בונה טכנולוגיה ומוצרים שעוזרים לחיות ולעבוד טוב יותר.
                </p>
                <p className="text-muted-foreground">
                  לאורך השנים בניתי אינטגרציות, אוטומציות ופלטפורמות שלמות — כל אחת מהן נולדה
                  מצורך אמיתי של אנשים, לא מ"מה שכיף לבנות".
                </p>
                <p className="text-muted-foreground">
                  בונה בכלים שאני מאמין בהם, מתעדכן באופן עקבי, ומחפש את הדרך הקצרה לתוצאה.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 02 / Capabilities</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
              מה אני יודע <span className="italic text-[hsl(var(--accent))]">לבנות.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              ערימת יכולות שלמה — מאפיון אסטרטגי ועד פיתוח Production.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.title} className="group rounded-[2rem] bg-card border border-border p-7 hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/10">
                <div className="h-14 w-14 blob flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ background: `hsl(${s.c} / 0.6)` }}>
                  <s.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-16 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 mb-8 text-center">
          <p className="text-sm text-muted-foreground italic font-display">הכלים שאני עובד איתם ביום-יום</p>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[hsl(var(--background))] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(var(--background))] to-transparent z-10" />
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...tools, ...tools].map((t, i) => (
              <div key={`${t}-${i}`} className="shrink-0 inline-flex items-center gap-2 rounded-full bg-card/80 backdrop-blur border border-border px-5 py-2.5 text-sm hover:border-[hsl(var(--accent))]/60 hover:text-[hsl(var(--accent))] transition-colors">
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 03 / Method</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
              שיטה <span className="italic text-[hsl(var(--accent))]">ברורה</span>.
              <br />
              תוצאה <span className="italic">מדויקת</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { n: "01", t: "מתחיל מהבעיה, לא מהכלי", b: "לפני שורת קוד, מבינים מה לא עובד היום ואיפה הזמן הולך לאיבוד.", c: "var(--organic-peach)" },
              { n: "02", t: "עובד מהר ושוקף", b: "ספרינטים קצרים, סטטוס תכוף, אב־טיפוס בתוך ימים.", c: "var(--organic-sage)" },
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

      {/* Work */}
      <section id="work" className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 04 / Work</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
              מוצרים <span className="italic text-[hsl(var(--accent))]">בפרודקשן</span>.
            </h2>
          </div>
          <div className="space-y-8">
            {projects.map((p) => (
              <div key={p.n} className="group grid lg:grid-cols-12 gap-6 rounded-[2.5rem] bg-card border border-border p-6 lg:p-8 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-foreground/10">
                <div className="lg:col-span-5 aspect-[4/3] rounded-[2rem] relative overflow-hidden" style={{ background: `hsl(${p.c} / 0.5)` }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-32 w-32 blob bg-card/80 backdrop-blur shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <div className="text-center px-4">
                        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{p.t}</div>
                        <div className="font-display text-lg leading-tight mt-1">{p.n}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--accent))] mb-2">{p.t}</div>
                    <h3 className="font-display text-3xl mb-3">{p.n}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{p.d}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {p.stack.map((s) => (
                        <span key={s} className="text-xs rounded-full bg-secondary px-3 py-1 text-muted-foreground">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-5 border-t border-border">
                    {p.metrics.map((m) => (
                      <div key={m.l} className="flex items-center gap-3">
                        <div className="h-10 w-10 blob bg-[hsl(var(--accent))]/20 flex items-center justify-center">
                          <m.i className="h-4 w-4 text-[hsl(var(--accent))]" />
                        </div>
                        <div>
                          <div className="font-display text-xl italic">{m.v}</div>
                          <div className="text-xs text-muted-foreground">{m.l}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 05 / Words</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
              מה אומרים <span className="italic text-[hsl(var(--accent))]">לקוחות</span>.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={t.n} className="rounded-[2rem] bg-card border border-border p-7 hover:-translate-y-1 transition-all duration-500">
                <Quote className="h-8 w-8 text-[hsl(var(--accent))]/60 mb-4" />
                <p className="text-foreground/90 leading-relaxed mb-6 font-display italic">"{t.q}"</p>
                <div className="flex items-center gap-3 pt-5 border-t border-border">
                  <div className="h-10 w-10 blob bg-gradient-to-br from-[hsl(var(--organic-peach))] to-[hsl(var(--organic-sage))] flex items-center justify-center font-display">{t.n[0]}</div>
                  <div>
                    <div className="font-medium text-sm">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="text-center mb-20">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 06 / Values</div>
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

      {/* FAQ */}
      <section id="faq" className="relative py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--accent))] mb-4">— 07 / FAQ</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[1] tracking-tight">
              שאלות <span className="italic text-[hsl(var(--accent))]">נפוצות</span>.
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="rounded-[2rem] border border-border bg-card px-6 hover:border-[hsl(var(--accent))]/40 transition-colors">
                <AccordionTrigger className="text-right hover:no-underline py-5 font-display text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
                <div className="text-xs uppercase tracking-[0.25em] opacity-70 mb-4">— 08 / Get in touch</div>
                <h2 className="font-display text-5xl lg:text-7xl leading-[1] tracking-tight">
                  פחות רעש.
                  <br />
                  <span className="italic">יותר תוצאה.</span>
                </h2>
                <p className="mt-8 max-w-xl text-lg opacity-80 leading-relaxed">
                  שיחת היכרות 30 דק׳ — חינם, בלי התחייבות. נצא ממנה עם הבנה ברורה של מה אפשר לבנות.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="mailto:hajbishaked.96@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--accent))] text-accent-foreground px-7 py-3.5 text-base hover:scale-105 transition-transform">
                    <Mail className="h-4 w-4" /> שלח אימייל
                  </a>
                  <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur border border-primary-foreground/30 px-7 py-3.5 text-base hover:bg-primary-foreground/25 transition-colors">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
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

      {/* Sticky */}
      {!dismissed && showSticky && (
        <>
          <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(var(--accent))] text-accent-foreground shadow-2xl hover:scale-110 transition-transform" aria-label="WhatsApp">
            <span className="absolute inset-0 rounded-full bg-[hsl(var(--accent))]/40 animate-ping" />
            <MessageCircle className="relative h-6 w-6" />
          </a>
          <div className="fixed bottom-6 left-6 z-40 hidden md:block max-w-sm">
            <div className="rounded-3xl bg-card/95 backdrop-blur-xl border border-border p-4 shadow-2xl relative">
              <button onClick={() => setDismissed(true)} className="absolute top-2 left-2 h-6 w-6 rounded-full hover:bg-secondary flex items-center justify-center text-muted-foreground" aria-label="סגור">
                <X className="h-3 w-3" />
              </button>
              <div className="flex items-center gap-3 pr-4">
                <div className="h-10 w-10 blob bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center font-display text-primary-foreground">S</div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground">זמין עכשיו</div>
                  <div className="text-sm font-display">בוא נדבר על הפרויקט</div>
                </div>
                <a href="#contact" className="rounded-full bg-[hsl(var(--primary))] text-primary-foreground px-4 py-2 text-xs hover:scale-105 transition-transform">דבר איתי</a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
