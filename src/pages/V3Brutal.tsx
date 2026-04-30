import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Linkedin, Github, Star, Zap, Target, Shield, Bot, Workflow, LayoutDashboard, Database, Sparkles, Code2, Quote, MessageCircle, X, TrendingUp, Users } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LiveMetrics from "@/components/site/LiveMetrics";
import AIBriefGenerator from "@/components/site/AIBriefGenerator";
import CaseStudy from "@/components/site/CaseStudy";
import TerminalChat from "@/components/site/TerminalChat";
import Mastery from "@/components/site/Mastery";
import BrutalTicker from "@/components/site/BrutalTicker";
import CountUp from "@/components/site/CountUp";

const services = [
  { icon: Bot, title: "סוכני AI", desc: "סוכנים מבוססי Claude/GPT שמבינים, מחליטים ופועלים.", c: "var(--brutal-yellow)" },
  { icon: Workflow, title: "אוטומציות", desc: "Make, n8n, Zapier ו-API־ים — חוסכים שעות בשבוע.", c: "var(--brutal-pink)" },
  { icon: LayoutDashboard, title: "מוצרי SaaS", desc: "פיתוח מקצה לקצה — אפיון, עיצוב, פיתוח Production.", c: "var(--brutal-lime)" },
  { icon: Database, title: "Backend & Data", desc: "Postgres, Edge Functions, real-time. ארכיטקטורה שמחזיקה.", c: "var(--brutal-blue)" },
  { icon: Sparkles, title: "אסטרטגיית מוצר", desc: "Discovery sprints, KPIs, ותעדוף MVP חכם.", c: "var(--brutal-yellow)" },
  { icon: Code2, title: "ייעוץ טכני", desc: "CTO זמני, Code review, החלטות תשתית וגיוס.", c: "var(--brutal-pink)" },
];

const tools = ["CLAUDE", "OPENAI", "GEMINI", "PYTHON", "TYPESCRIPT", "REACT", "NEXT.JS", "NODE", "SUPABASE", "POSTGRES", "TAILWIND", "N8N", "STRIPE", "VERCEL"];

const projects = [
  { n: "Skill Prime", t: "WEB · AI", d: "פלטפורמת לימוד עצמית מבוססת Claude — תוכנית למידה מותאמת בכל נושא.", c: "var(--brutal-yellow)", stack: ["React", "Claude", "Supabase"], metrics: [{ v: "1.2K+", l: "USERS" }, { v: "85%", l: "DONE" }] },
  { n: "ExpenseIQ", t: "MOBILE · FINTECH", d: "ניהול הוצאות עם AI. קטגוריזציה אוטומטית, חיזוי חריגות.", c: "var(--brutal-lime)", stack: ["React Native", "GPT-4V", "Postgres"], metrics: [{ v: "8X", l: "FASTER" }, { v: "94%", l: "ACCURACY" }] },
  { n: "Madbeka", t: "MOBILE + PHYSICAL", d: "מדבקות פיזיות + דיגיטליות לסידור הבית. סורק — רואה תוכן.", c: "var(--brutal-blue)", stack: ["Flutter", "QR/NFC", "Supabase"], metrics: [{ v: "500+", l: "HOMES" }, { v: "<3S", l: "SCAN" }] },
];

const testimonials = [
  { q: "שקד הביא בתוך 3 שבועות מערכת שחיכינו לה חצי שנה. הבין את הצורך עוד לפני שהסברנו.", n: "דניאל כ.", r: "מנכ\"ל, SAAS", c: "var(--brutal-yellow)" },
  { q: "הוא לא בנה מה שאמרנו — בנה את מה שבאמת היינו צריכים. הבדל ענק.", n: "מיכל ש.", r: "HEAD OF PRODUCT", c: "var(--brutal-pink)" },
  { q: "האוטומציה חוסכת לנו 20 שעות בשבוע. החזר השקעה תוך חודש.", n: "יואב ר.", r: "מייסד, סוכנות", c: "var(--brutal-lime)" },
];

const faqs = [
  { q: "כמה זמן לוקח לבנות מוצר?", a: "אב-טיפוס תוך 1-2 שבועות, MVP מלא תוך 4-8 שבועות. ספרינטים קצרים עם הדגמה שבועית." },
  { q: "מה התקציב הטיפוסי?", a: "אוטומציה ממוקדת 3-5K, MVP מלא 15-50K, פלטפורמה מורכבת מעבר. שקיפות מלאה." },
  { q: "מה קורה אחרי המסירה?", a: "אני נשאר זמין לתחזוקה, באגים ושיפורים. רטיינר חודשי או לפי שעה." },
  { q: "איך אתה משתמש ב-AI?", a: "AI הוא כלי, לא מטרה. רק איפה שהוא באמת מוסיף ערך מדיד." },
  { q: "איפה הקוד נשמר?", a: "GitHub פרטי שאתה הבעלים שלו מהיום הראשון. בלי vendor lock-in." },
];

export default function Brutal() {
  const [showSticky, setShowSticky] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Brutal — Shaked M. Hajbi";
    const onScroll = () => setShowSticky(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
              { id: "services", l: "יכולות" },
              { id: "method", l: "תהליך" },
              { id: "work", l: "עבודות" },
              { id: "faq", l: "שאלות" },
            ].map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-4 py-1.5 text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-colors">
                {s.l}
              </a>
            ))}
          </nav>
          <a href="#contact" className="brutal-border bg-foreground text-background px-4 py-1.5 text-xs font-bold uppercase">בוא נדבר</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* animated bg shapes */}
        <div className="absolute top-20 -left-12 w-48 h-48 bg-[hsl(var(--brutal-pink))] brutal-border rotate-12 hidden lg:block animate-bounce-soft" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[hsl(var(--brutal-blue))] brutal-border -rotate-6 hidden lg:block animate-bounce-soft" style={{ animationDelay: "1.2s" }} />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-[hsl(var(--brutal-lime))] brutal-border rotate-45 hidden lg:block animate-spin-slow" />
        <div className="absolute top-40 right-1/4 w-16 h-16 brutal-border hidden lg:block animate-color-cycle" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-[hsl(var(--brutal-yellow))] brutal-border hidden lg:block animate-bounce-soft" style={{ animationDelay: "0.6s" }} />

        <div className="mx-auto max-w-7xl px-6 relative">
          <div className="inline-flex items-center gap-2 brutal-border bg-[hsl(var(--brutal-yellow))] px-4 py-2 mb-8 font-bold text-sm uppercase animate-slide-up-fade">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            זמין · 2 משבצות פנויות ל-Q2 2026
          </div>
          <h1 className="font-display text-[14vw] sm:text-[10vw] lg:text-[9rem] leading-[0.85] uppercase">
            <span className="block animate-slide-up-fade" style={{ animationDelay: "0.05s" }}>קודם</span>
            <span className="inline-block bg-[hsl(var(--brutal-lime))] px-4 brutal-border -rotate-1 my-2 animate-wiggle">מדברים.</span>
            <span className="block mt-4 animate-slide-up-fade" style={{ animationDelay: "0.2s" }}>אחר־כך</span>
            <span className="inline-block bg-[hsl(var(--brutal-pink))] px-4 brutal-border rotate-1 my-2 animate-wiggle" style={{ animationDelay: "0.5s" }}>בונים.</span>
          </h1>

          <div className="mt-16 grid lg:grid-cols-12 gap-8">
            <p className="lg:col-span-7 text-xl lg:text-2xl font-bold leading-snug animate-slide-up-fade" style={{ animationDelay: "0.35s" }}>
              מתכנן ובונה כלים דיגיטליים, אוטומציות ומוצרי AI מותאמים אישית.
              כאלה שמשנים התנהלות, מאיצים יומיום, ומייצרים תוצאה של ממש —
              <span className="bg-[hsl(var(--brutal-yellow))] px-2"> לא רק מצגות.</span>
            </p>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-4 animate-slide-up-fade" style={{ animationDelay: "0.5s" }}>
              <a href="#contact" className="brutal-border brutal-shadow bg-foreground text-background px-6 py-5 font-display text-2xl uppercase flex items-center justify-between group">
                <span>בוא נדבר</span>
                <ArrowLeft className="h-6 w-6 transition-transform group-hover:-translate-x-2" />
              </a>
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="brutal-border brutal-shadow bg-[hsl(var(--brutal-lime))] px-6 py-5 font-display text-2xl uppercase flex items-center justify-between group">
                <span className="flex items-center gap-2"><MessageCircle className="h-5 w-5 animate-wiggle" /> WHATSAPP</span>
                <ArrowLeft className="h-6 w-6 transition-transform group-hover:-translate-x-2" />
              </a>
              <a href="#work" className="brutal-border brutal-shadow bg-background px-6 py-5 font-display text-2xl uppercase flex items-center justify-between group">
                <span>עבודות</span>
                <ArrowLeft className="h-6 w-6 transition-transform group-hover:-translate-x-2" />
              </a>
            </div>
          </div>

          {/* Stats — animated counters */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { v: 30, suffix: "+", l: "פרויקטים", c: "var(--brutal-yellow)" },
              { v: 8, suffix: "X", l: "מהיר יותר", c: "var(--brutal-pink)" },
              { v: 24, suffix: "H", l: "תגובה", c: "var(--brutal-lime)" },
              { v: 100, suffix: "%", l: "מותאם", c: "var(--brutal-blue)" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="brutal-border brutal-shadow p-6 text-center transition-transform hover:-translate-y-1 hover:rotate-1"
                style={{ background: `hsl(${s.c})`, animationDelay: `${i * 0.08}s` }}
              >
                <div className="font-display text-5xl uppercase">
                  <CountUp to={s.v} suffix={s.suffix} />
                </div>
                <div className="text-xs font-bold uppercase mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live ticker */}
      <BrutalTicker bg="var(--brutal-yellow)" />

      {/* New AI sections */}
      <div className="border-t-2 border-foreground bg-[hsl(var(--brutal-pink))]/30">
        <AIBriefGenerator variant="brutal" />
      </div>
      <div className="border-t-2 border-foreground bg-[hsl(var(--brutal-yellow))]/40">
        <LiveMetrics variant="brutal" />
      </div>
      <div className="border-t-2 border-foreground">
        <CaseStudy variant="brutal" />
      </div>
      <div className="border-t-2 border-foreground bg-[hsl(var(--brutal-lime))]/30">
        <Mastery variant="brutal" />
      </div>
      <div className="border-t-2 border-foreground bg-[hsl(var(--brutal-blue))]/20">
        <TerminalChat variant="brutal" />
      </div>

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
              בניתי לאורך השנים אינטגרציות, אוטומציות ופלטפורמות שלמות — שכל אחת מהן
              נולדה מצורך אמיתי, לא מ"מה שהיה כיף לבנות".
            </p>
            <p>
              אני לא מאמין בדיבורים. אני מאמין בתוצאות שאפשר למדוד, להראות, ולהשתמש בהן
              ביום־יום. <span className="bg-background brutal-border px-2">תכלס.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="font-mono text-xs font-bold mb-4">[ 02 // CAPABILITIES ]</div>
            <h2 className="font-display text-6xl lg:text-7xl uppercase leading-[0.85]">
              מה אני יודע
              <br />
              <span className="bg-[hsl(var(--brutal-lime))] px-3 inline-block mt-2">לבנות.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="brutal-border brutal-shadow bg-background p-7 transition-all duration-200 hover:-translate-y-2 hover:rotate-[-1deg]"
              >
                <div
                  className="brutal-border w-14 h-14 flex items-center justify-center mb-5 transition-transform group-hover:rotate-12"
                  style={{ background: `hsl(${s.c})` }}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl uppercase mb-3">{s.title}</h3>
                <p className="font-medium leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack marquee */}
      <section className="py-12 border-t-2 border-foreground bg-foreground text-background overflow-hidden">
        <div className="flex gap-6 animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((t, i) => (
            <div key={`${t}-${i}`} className="shrink-0 inline-flex items-center gap-3 font-display text-3xl uppercase">
              <span>{t}</span>
              <span className="text-[hsl(var(--brutal-lime))]">★</span>
            </div>
          ))}
        </div>
      </section>

      {/* Reverse ticker */}
      <BrutalTicker bg="var(--brutal-blue)" reverse />

      {/* Method */}
      <section id="method" className="py-24 border-t-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="font-mono text-xs font-bold mb-4">[ 03 // PROCESS ]</div>
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
              <div key={s.n} className="brutal-border brutal-shadow bg-background p-8 transition-all duration-200 hover:-translate-y-2 hover:rotate-1">
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

      {/* Work */}
      <section id="work" className="py-24 border-t-2 border-foreground bg-[hsl(var(--brutal-pink))]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="font-mono text-xs font-bold mb-4">[ 04 // PROJECTS ]</div>
            <h2 className="font-display text-6xl lg:text-7xl uppercase leading-[0.85]">עבודות נבחרות.</h2>
          </div>
          <div className="space-y-6">
            {projects.map((p) => (
              <div key={p.n} className="brutal-border brutal-shadow bg-background grid lg:grid-cols-12 gap-0 transition-all duration-200 hover:-translate-y-1 hover:translate-x-1">
                <div className="lg:col-span-4 brutal-border lg:border-y-0 lg:border-r-0 lg:border-l-2 aspect-[4/3] lg:aspect-auto flex items-center justify-center" style={{ background: `hsl(${p.c})` }}>
                  <div className="text-center p-6">
                    <div className="font-mono text-xs font-bold mb-2 uppercase">{p.t}</div>
                    <div className="font-display text-4xl uppercase">{p.n}</div>
                  </div>
                </div>
                <div className="lg:col-span-8 p-7">
                  <p className="font-bold text-lg mb-4">{p.d}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="brutal-border bg-background px-3 py-1 text-xs font-bold uppercase">{s}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-foreground">
                    {p.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display text-4xl uppercase">{m.v}</div>
                        <div className="text-xs font-bold uppercase mt-1">{m.l}</div>
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
      <section className="py-24 border-t-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="font-mono text-xs font-bold mb-4">[ 05 // VOICES ]</div>
            <h2 className="font-display text-6xl lg:text-7xl uppercase leading-[0.85]">
              מה אומרים
              <br />
              <span className="bg-[hsl(var(--brutal-yellow))] px-3 inline-block mt-2">לקוחות.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.n} className="brutal-border brutal-shadow bg-background p-7 transition-all duration-200 hover:-translate-y-2 hover:rotate-1">
                <Quote className="h-8 w-8 mb-4" />
                <p className="font-bold leading-relaxed mb-6 text-lg">"{t.q}"</p>
                <div className="flex items-center gap-3 pt-4 border-t-2 border-foreground">
                  <div className="brutal-border w-10 h-10 flex items-center justify-center font-display" style={{ background: `hsl(${t.c})` }}>{t.n[0]}</div>
                  <div>
                    <div className="font-display text-base">{t.n}</div>
                    <div className="text-xs font-bold uppercase">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t-2 border-foreground bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16">
            <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 06 // DNA ]</div>
            <h2 className="font-display text-6xl lg:text-7xl uppercase leading-[0.85]">
              הערכים שלי.
              <br />
              <span className="text-[hsl(var(--brutal-lime))]">לא לדיון.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { i: Target, t: "מחשבה לפני ביצוע", b: "החלטה עומדת על צורך אמיתי." },
              { i: Zap, t: "דיוק לפרטים", b: "פרטים קטנים יוצרים חוויה." },
              { i: Shield, t: "תקשורת ישירה", b: "ברור, על השולחן, נקודה." },
              { i: Star, t: "אחריות אחרי מסירה", b: "המוצר חי. נשאר זמין." },
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

      {/* FAQ */}
      <section id="faq" className="py-24 border-t-2 border-foreground bg-[hsl(var(--brutal-lime))]">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <div className="font-mono text-xs font-bold mb-4">[ 07 // QUESTIONS ]</div>
            <h2 className="font-display text-6xl uppercase leading-[0.85]">שאלות נפוצות.</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="brutal-border bg-background px-6">
                <AccordionTrigger className="text-right hover:no-underline py-5 font-display text-lg uppercase">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-medium leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t-2 border-foreground">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs font-bold mb-4">[ 08 // GET IN TOUCH ]</div>
            <h2 className="font-display text-6xl lg:text-8xl uppercase leading-[0.85]">
              פחות רעש.
              <br />
              <span className="bg-[hsl(var(--brutal-lime))] px-3 inline-block mt-2">יותר תוצאה.</span>
            </h2>
            <p className="mt-8 text-xl font-medium max-w-xl">
              שיחת היכרות 30 דק׳ — חינם, בלי התחייבות. נצא ממנה עם הבנה ברורה של מה אפשר לבנות.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:hajbishaked.96@gmail.com" className="brutal-border brutal-shadow bg-foreground text-background px-6 py-4 font-display text-xl uppercase">שלח אימייל ←</a>
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="brutal-border brutal-shadow bg-[hsl(var(--brutal-lime))] px-6 py-4 font-display text-xl uppercase">WHATSAPP ←</a>
            </div>
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

      {/* Sticky */}
      {!dismissed && showSticky && (
        <>
          <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 brutal-border brutal-shadow bg-[hsl(var(--brutal-lime))] h-14 w-14 flex items-center justify-center hover:scale-110 transition-transform" aria-label="WhatsApp">
            <MessageCircle className="h-6 w-6" />
          </a>
          <div className="fixed bottom-6 left-6 z-40 hidden md:block max-w-sm">
            <div className="brutal-border brutal-shadow bg-background p-4 relative">
              <button onClick={() => setDismissed(true)} className="absolute top-2 left-2 brutal-border bg-[hsl(var(--brutal-yellow))] h-6 w-6 flex items-center justify-center" aria-label="סגור">
                <X className="h-3 w-3" />
              </button>
              <div className="flex items-center gap-3 pr-6">
                <div className="brutal-border bg-[hsl(var(--brutal-yellow))] h-10 w-10 flex items-center justify-center font-display">S</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase">זמין עכשיו</div>
                  <div className="font-display text-sm uppercase">בוא נדבר</div>
                </div>
                <a href="#contact" className="brutal-border bg-foreground text-background px-3 py-1.5 text-xs font-bold uppercase">דבר</a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
