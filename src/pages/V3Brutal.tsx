import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Mail, Linkedin, Github, Star, Zap, Target, Shield, Bot, Workflow, LayoutDashboard, Database, Sparkles, Code2, Quote, MessageCircle, X, Download, MapPin, Calendar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LiveMetrics from "@/components/site/LiveMetrics";
import AIBriefGenerator from "@/components/site/AIBriefGenerator";
import CaseStudy from "@/components/site/CaseStudy";
import TerminalChat from "@/components/site/TerminalChat";
import Mastery from "@/components/site/Mastery";
import CountUp from "@/components/site/CountUp";

const services = [
  { icon: Bot, title: "סוכני AI", desc: "סוכנים מבוססי Claude/GPT שמבינים, מחליטים ופועלים — לא רק עונים." },
  { icon: Workflow, title: "אוטומציות", desc: "Make, n8n, Zapier ו-API־ים מותאמים — חוסכים שעות בשבוע." },
  { icon: LayoutDashboard, title: "מוצרי SaaS", desc: "פיתוח מקצה לקצה — אפיון, עיצוב, פיתוח Production." },
  { icon: Database, title: "Backend & Data", desc: "Postgres, Edge Functions, real-time. ארכיטקטורה שמחזיקה." },
  { icon: Sparkles, title: "אסטרטגיית מוצר", desc: "Discovery sprints, KPIs ותעדוף MVP חכם." },
  { icon: Code2, title: "ייעוץ טכני", desc: "CTO זמני, Code review, החלטות תשתית וגיוס." },
];

const tools = ["CLAUDE", "OPENAI", "GEMINI", "PYTHON", "TYPESCRIPT", "REACT", "NEXT.JS", "NODE", "SUPABASE", "POSTGRES", "TAILWIND", "N8N", "STRIPE", "VERCEL"];

const projects = [
  {
    n: "Skill Prime",
    t: "WEB · AI PLATFORM",
    year: "2025",
    role: "Product · Design · Engineering",
    d: "פלטפורמת לימוד עצמית מבוססת Claude — בונה תוכנית למידה מותאמת אישית בכל נושא, יוצרת תרגילים, ומלווה את התלמיד שלב־שלב.",
    stack: ["React", "Claude API", "Supabase", "Stripe", "Vercel"],
    metrics: [{ v: 1200, suffix: "+", l: "USERS" }, { v: 85, suffix: "%", l: "COMPLETION" }, { v: 4.8, suffix: "/5", l: "RATING" }],
  },
  {
    n: "ExpenseIQ",
    t: "MOBILE · FINTECH",
    year: "2024",
    role: "Full-stack · AI",
    d: "ניהול הוצאות עם AI — קטגוריזציה אוטומטית של חשבוניות מצולמות, דוחות חודשיים והתראות חכמות על חריגות.",
    stack: ["React Native", "GPT-4 Vision", "Node", "Postgres"],
    metrics: [{ v: 8, suffix: "X", l: "FASTER" }, { v: 94, suffix: "%", l: "ACCURACY" }, { v: 30, suffix: "K+", l: "RECEIPTS" }],
  },
  {
    n: "Madbeka",
    t: "MOBILE + PHYSICAL",
    year: "2024",
    role: "Product · Engineering",
    d: "מערכת מדבקות פיזיות + דיגיטליות לסידור הבית. סורק מדבקה — רואה תוכן, רשימה וזמן רכישה. הזמנת מדבקות ישירות מהאפליקציה.",
    stack: ["Flutter", "QR/NFC", "Supabase", "Print API"],
    metrics: [{ v: 500, suffix: "+", l: "HOMES" }, { v: 3, suffix: "S", l: "SCAN→VIEW" }, { v: 12, suffix: "K", l: "STICKERS" }],
  },
];

const testimonials = [
  { q: "שקד הביא בתוך 3 שבועות מערכת שחיכינו לה חצי שנה. הבין את הצורך עוד לפני שהסברנו.", n: "דניאל כ.", r: "מנכ\"ל, SaaS B2B" },
  { q: "הוא לא בנה מה שאמרנו — בנה את מה שבאמת היינו צריכים. הבדל ענק.", n: "מיכל ש.", r: "Head of Product" },
  { q: "האוטומציה חוסכת לנו 20 שעות בשבוע. החזר השקעה תוך חודש.", n: "יואב ר.", r: "מייסד, סוכנות דיגיטל" },
];

const faqs = [
  { q: "כמה זמן לוקח לבנות מוצר?", a: "אב-טיפוס תוך 1-2 שבועות, MVP מלא תוך 4-8 שבועות. ספרינטים קצרים עם הדגמה שבועית." },
  { q: "מה התקציב הטיפוסי?", a: "אוטומציה ממוקדת 3-5K, MVP מלא 15-50K, פלטפורמה מורכבת מעבר. שקיפות מלאה — בלי הפתעות." },
  { q: "מה קורה אחרי המסירה?", a: "אני נשאר זמין לתחזוקה, באגים ושיפורים. רטיינר חודשי או לפי שעה — לבחירתך." },
  { q: "איך אתה משתמש ב-AI?", a: "AI הוא כלי, לא מטרה. רק איפה שהוא באמת מוסיף ערך מדיד — אחרת זה רעש." },
  { q: "איפה הקוד נשמר?", a: "GitHub פרטי שאתה הבעלים שלו מהיום הראשון. בלי vendor lock-in. בלי תלות." },
];

export default function Brutal() {
  const [showSticky, setShowSticky] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Shaked M. Hajbi — AI Engineer & Product Builder";
    const onScroll = () => setShowSticky(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="theme-brutal min-h-screen overflow-x-hidden">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-[hsl(var(--background))]/95 backdrop-blur border-b border-foreground/15">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="brutal-border bg-foreground text-background h-9 w-9 flex items-center justify-center font-display text-base">SH</span>
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-sm">SHAKED M. HAJBI</div>
              <div className="font-mono text-[10px] uppercase opacity-60">AI Engineer · Product Builder</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: "about", l: "עליי" },
              { id: "services", l: "יכולות" },
              { id: "work", l: "עבודות" },
              { id: "method", l: "תהליך" },
              { id: "faq", l: "שאלות" },
            ].map((s) => (
              <a key={s.id} href={`#${s.id}`} className="px-4 py-1.5 text-xs font-bold uppercase tracking-wide hover:text-[hsl(var(--brutal-ochre))] transition-colors">
                {s.l}
              </a>
            ))}
          </nav>
          <a href="#contact" className="brutal-border bg-foreground text-background px-4 py-1.5 text-xs font-bold uppercase">בוא נדבר</a>
        </div>
      </header>

      {/* Hero — business card */}
      <section className="relative py-20 lg:py-28 overflow-hidden paper-grain">
        {/* Subtle, slow-moving accent shape */}
        <div className="absolute top-32 -left-20 w-64 h-64 brutal-border rotate-[8deg] hidden lg:block opacity-50" style={{ background: "hsl(var(--brutal-yellow) / 0.5)" }} />
        <div className="absolute bottom-10 right-8 w-40 h-40 brutal-border rounded-full hidden lg:block opacity-40" style={{ background: "hsl(var(--brutal-lime) / 0.4)" }} />

        <div className="mx-auto max-w-7xl px-6 relative">
          {/* Status row */}
          <div className="flex flex-wrap items-center gap-3 mb-10 animate-slide-up-fade">
            <div className="inline-flex items-center gap-2 brutal-border bg-card px-3 py-1.5 font-mono text-[11px] font-bold uppercase">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[hsl(var(--brutal-ochre))] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[hsl(var(--brutal-ochre))]" />
              </span>
              זמין · Q2 2026
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase opacity-70">
              <MapPin className="h-3 w-3" /> Haifa, IL
            </div>
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase opacity-70">
              <Calendar className="h-3 w-3" /> 6+ שנות ניסיון
            </div>
          </div>

          {/* Headline */}
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="font-mono text-xs font-bold uppercase tracking-widest opacity-60 mb-4">[ Portfolio · 2026 ]</div>
              <h1 className="font-display text-[12vw] sm:text-[8vw] lg:text-[7rem] leading-[0.88] uppercase">
                <span className="block animate-slide-up-fade">Building</span>
                <span className="font-serif-display italic font-normal lowercase block text-[hsl(var(--brutal-ochre))] animate-slide-up-fade" style={{ animationDelay: "0.1s" }}>thoughtful</span>
                <span className="block animate-slide-up-fade" style={{ animationDelay: "0.2s" }}>AI Products.</span>
              </h1>
              <p className="mt-10 max-w-2xl text-lg lg:text-xl font-medium leading-relaxed opacity-85 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
                מתכנן, מעצב ובונה מוצרי AI, אוטומציות וכלים דיגיטליים שעובדים בפרודקשן —
                לא דמואים, לא הבטחות. <span className="bg-[hsl(var(--brutal-yellow))] px-1.5">תוצאות מדידות.</span>
              </p>
            </div>

            {/* Business card panel */}
            <div className="lg:col-span-4 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              <div className="brutal-border brutal-shadow bg-card p-6">
                <div className="flex items-center gap-3 pb-4 border-b border-foreground/15">
                  <div className="brutal-border bg-[hsl(var(--brutal-ochre))] text-background h-12 w-12 flex items-center justify-center font-display text-lg">SH</div>
                  <div>
                    <div className="font-display text-base leading-tight">Shaked M. Hajbi</div>
                    <div className="font-mono text-[10px] uppercase opacity-60">AI Engineer · Product Builder</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 opacity-60" /> hajbishaked.96@gmail.com</div>
                  <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 opacity-60" /> Haifa, Israel · Remote</div>
                  <div className="flex items-center gap-2"><Github className="h-3.5 w-3.5 opacity-60" /> github.com/shaked</div>
                </div>
                <div className="mt-5 flex flex-col gap-2">
                  <a href="#contact" className="brutal-border bg-foreground text-background px-4 py-2.5 text-xs font-bold uppercase flex items-center justify-between group">
                    <span>קבע שיחת היכרות</span>
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </a>
                  <a href="#work" className="brutal-border bg-card px-4 py-2.5 text-xs font-bold uppercase flex items-center justify-between group">
                    <span>צפה בעבודות</span>
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/15 brutal-border">
            {[
              { v: 30, suffix: "+", l: "פרויקטים בפרודקשן" },
              { v: 6, suffix: "+", l: "שנות ניסיון" },
              { v: 12, suffix: "K+", l: "שעות שנחסכו ללקוחות" },
              { v: 100, suffix: "%", l: "מותאם אישית" },
            ].map((s) => (
              <div key={s.l} className="bg-card p-6 lg:p-8 transition-colors hover:bg-[hsl(var(--brutal-yellow))]/30">
                <div className="font-display text-4xl lg:text-5xl">
                  <CountUp to={s.v} suffix={s.suffix} />
                </div>
                <div className="text-xs font-bold uppercase mt-2 opacity-70 tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Brief — primary CTA */}
      <div className="border-t border-foreground/15 bg-card/50">
        <AIBriefGenerator variant="brutal" />
      </div>

      {/* About */}
      <section id="about" className="py-24 border-t border-foreground/15">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 01 — ABOUT ]</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.9]">
              מי
              <br />
              <span className="font-serif-display italic font-normal lowercase text-[hsl(var(--brutal-ochre))]">אני?</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-lg font-medium leading-relaxed">
            <p className="text-2xl font-display">אסטרטג. בונה. יזם של AI.</p>
            <p className="opacity-85">
              אני מתעסק בטכנולוגיה ובמוצרים שעוזרים לאנשים לחיות ולעבוד יותר טוב. בניתי לאורך השנים אינטגרציות,
              אוטומציות ופלטפורמות שלמות — שכל אחת מהן נולדה מצורך אמיתי, לא מ"מה שהיה כיף לבנות".
            </p>
            <p className="opacity-85">
              אני לא מאמין בדיבורים. אני מאמין בתוצאות שאפשר למדוד, להראות, ולהשתמש בהן ביום־יום.
            </p>
            <div className="pt-4 flex flex-wrap gap-2">
              {["AI Engineering", "Product Strategy", "Full-stack", "UX/UI", "Automations"].map((t) => (
                <span key={t} className="brutal-border bg-card px-3 py-1 text-xs font-bold uppercase">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-foreground/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-3xl">
            <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 02 — CAPABILITIES ]</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.9]">
              מה אני יודע
              <br />
              <span className="font-serif-display italic font-normal lowercase text-[hsl(var(--brutal-ochre))]">לבנות.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/15 brutal-border">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-7 transition-colors hover:bg-[hsl(var(--brutal-yellow))]/25 group">
                <div className="brutal-border w-12 h-12 flex items-center justify-center mb-5 bg-card group-hover:bg-[hsl(var(--brutal-ochre))] group-hover:text-background transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl uppercase mb-3">{s.title}</h3>
                <p className="font-medium leading-relaxed opacity-80 text-[15px]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work — hero section */}
      <section id="work" className="py-28 border-t border-foreground/15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 03 — SELECTED WORK ]</div>
              <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.88]">
                עבודות
                <br />
                <span className="font-serif-display italic font-normal lowercase text-[hsl(var(--brutal-ochre))]">נבחרות.</span>
              </h2>
              <p className="mt-6 text-lg opacity-75 max-w-xl">
                שלושה מוצרים שיצאו לפרודקשן — עם משתמשים אמיתיים, payments, ותחזוקה שוטפת.
              </p>
            </div>
            <div className="font-mono text-xs uppercase opacity-60">
              03 / 30+ projects
            </div>
          </div>

          <div className="space-y-10">
            {projects.map((p, i) => (
              <article
                key={p.n}
                className="group brutal-border bg-card grid lg:grid-cols-12 overflow-hidden transition-all duration-300 hover:brutal-shadow"
              >
                {/* Visual */}
                <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto border-b lg:border-b-0 lg:border-l border-foreground/15 overflow-hidden">
                  <div className="absolute inset-0 paper-grain" style={{ background: i % 2 === 0 ? "hsl(var(--brutal-yellow) / 0.6)" : "hsl(var(--brutal-lime) / 0.5)" }} />
                  <div className="absolute inset-6 brutal-border bg-card flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
                    <div className="font-mono text-[10px] font-bold uppercase opacity-60 mb-2">{p.t}</div>
                    <div className="font-display text-4xl lg:text-5xl uppercase">{p.n}</div>
                    <div className="font-mono text-[10px] uppercase opacity-50 mt-3">{p.year} · {p.role}</div>
                  </div>
                </div>

                {/* Body */}
                <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div>
                        <div className="font-mono text-[10px] font-bold uppercase opacity-60 mb-1">CASE {String(i + 1).padStart(2, "0")} · {p.year}</div>
                        <h3 className="font-display text-3xl lg:text-4xl uppercase">{p.n}</h3>
                      </div>
                      <ArrowUpRight className="h-6 w-6 transition-transform group-hover:rotate-12 group-hover:-translate-y-1 shrink-0" />
                    </div>
                    <p className="text-lg font-medium leading-relaxed opacity-85 mb-6">{p.d}</p>
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {p.stack.map((s) => (
                        <span key={s} className="brutal-border bg-background px-2.5 py-1 text-[10px] font-bold uppercase font-mono">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-foreground/15">
                    {p.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display text-3xl lg:text-4xl">
                          <CountUp to={m.v} suffix={m.suffix} />
                        </div>
                        <div className="text-[10px] font-bold uppercase mt-1 opacity-60 tracking-wider font-mono">{m.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="#contact" className="inline-flex items-center gap-3 brutal-border bg-foreground text-background px-8 py-4 font-display text-lg uppercase brutal-shadow group">
              <span>יש לך פרויקט דומה?</span>
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Case Study deep-dive */}
      <div className="border-t border-foreground/15 bg-card/40">
        <CaseStudy variant="brutal" />
      </div>

      {/* Mastery / certifications */}
      <div className="border-t border-foreground/15">
        <Mastery variant="brutal" />
      </div>

      {/* Tech stack — refined marquee */}
      <section className="py-10 border-y border-foreground/15 bg-foreground text-background overflow-hidden">
        <div className="font-mono text-[10px] uppercase tracking-widest opacity-50 text-center mb-4">— Tools & Technologies —</div>
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((t, i) => (
            <div key={`${t}-${i}`} className="shrink-0 inline-flex items-center gap-4 font-display text-2xl uppercase">
              <span>{t}</span>
              <span className="text-[hsl(var(--brutal-ochre))]">◆</span>
            </div>
          ))}
        </div>
      </section>

      {/* Method */}
      <section id="method" className="py-24 border-t border-foreground/15">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 04 — PROCESS ]</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.9]">
              שיטה ברורה.
              <br />
              <span className="font-serif-display italic font-normal lowercase text-[hsl(var(--brutal-ochre))]">תוצאה מדויקת.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/15 brutal-border">
            {[
              { n: "01", t: "מתחיל מהבעיה", b: "לפני כל שורת קוד — מבינים מה לא עובד היום ואיפה הזמן הולך לאיבוד." },
              { n: "02", t: "עובד מהר", b: "ספרינטים קצרים, סטטוס שבועי, אב־טיפוס בתוך ימים. רואים התקדמות." },
              { n: "03", t: "בונה מותאם", b: "אין פתרון מהמדף. כל מערכת נתפרת לאיך שאתה עובד באמת." },
              { n: "04", t: "AI חכם, לא טרנדי", b: "בוחר את הטכנולוגיה הנכונה — לא את זו שכותבים עליה השבוע." },
            ].map((s) => (
              <div key={s.n} className="bg-card p-7 transition-colors hover:bg-[hsl(var(--brutal-yellow))]/25">
                <div className="font-display text-4xl text-[hsl(var(--brutal-ochre))] mb-4">{s.n}</div>
                <h3 className="font-display text-xl uppercase mb-3">{s.t}</h3>
                <p className="font-medium leading-relaxed opacity-80 text-sm">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live metrics */}
      <div className="border-t border-foreground/15 bg-card/40">
        <LiveMetrics variant="brutal" />
      </div>

      {/* Terminal chat */}
      <div className="border-t border-foreground/15">
        <TerminalChat variant="brutal" />
      </div>

      {/* Testimonials */}
      <section className="py-24 border-t border-foreground/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 05 — VOICES ]</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.9]">
              מה אומרים
              <br />
              <span className="font-serif-display italic font-normal lowercase text-[hsl(var(--brutal-ochre))]">לקוחות.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-foreground/15 brutal-border">
            {testimonials.map((t) => (
              <div key={t.n} className="bg-card p-7">
                <Quote className="h-7 w-7 mb-4 text-[hsl(var(--brutal-ochre))]" />
                <p className="font-medium leading-relaxed mb-6 text-[15px]">"{t.q}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-foreground/15">
                  <div className="brutal-border w-10 h-10 flex items-center justify-center font-display bg-[hsl(var(--brutal-yellow))]">{t.n[0]}</div>
                  <div>
                    <div className="font-display text-sm">{t.n}</div>
                    <div className="text-[10px] font-bold uppercase opacity-60 font-mono">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 border-t border-foreground/15 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-xs font-bold mb-4 opacity-50">[ 06 — DNA ]</div>
            <h2 className="font-display text-5xl lg:text-6xl uppercase leading-[0.9]">
              הערכים שלי.
              <br />
              <span className="font-serif-display italic font-normal lowercase text-[hsl(var(--brutal-ochre))]">לא לדיון.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-background/15">
            {[
              { i: Target, t: "מחשבה לפני ביצוע", b: "החלטה עומדת על צורך אמיתי." },
              { i: Zap, t: "דיוק לפרטים", b: "פרטים קטנים יוצרים חוויה." },
              { i: Shield, t: "תקשורת ישירה", b: "ברור, על השולחן, נקודה." },
              { i: Star, t: "אחריות אחרי מסירה", b: "המוצר חי. נשאר זמין." },
            ].map((v) => (
              <div key={v.t} className="bg-foreground p-6 hover:bg-[hsl(var(--brutal-ochre))] transition-colors">
                <v.i className="h-7 w-7 mb-4" />
                <h3 className="font-display text-lg uppercase mb-2">{v.t}</h3>
                <p className="text-sm opacity-75">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-foreground/15">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12">
            <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 07 — QUESTIONS ]</div>
            <h2 className="font-display text-5xl uppercase leading-[0.9]">
              שאלות
              <span className="font-serif-display italic font-normal lowercase text-[hsl(var(--brutal-ochre))]"> נפוצות.</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="brutal-border bg-card px-6">
                <AccordionTrigger className="text-right hover:no-underline py-5 font-display text-base uppercase">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-medium leading-relaxed pb-5 opacity-85">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-foreground/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs font-bold mb-4 opacity-60">[ 08 — GET IN TOUCH ]</div>
            <h2 className="font-display text-5xl lg:text-7xl uppercase leading-[0.9]">
              פחות רעש.
              <br />
              <span className="font-serif-display italic font-normal lowercase text-[hsl(var(--brutal-ochre))]">יותר תוצאה.</span>
            </h2>
            <p className="mt-8 text-lg font-medium max-w-xl opacity-85">
              שיחת היכרות 30 דק׳ — חינם, בלי התחייבות. נצא ממנה עם הבנה ברורה של מה אפשר לבנות.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="mailto:hajbishaked.96@gmail.com" className="brutal-border brutal-shadow bg-foreground text-background px-6 py-3.5 font-display text-base uppercase inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> שלח אימייל
              </a>
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="brutal-border brutal-shadow bg-[hsl(var(--brutal-ochre))] text-background px-6 py-3.5 font-display text-base uppercase inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 space-y-3">
            {[
              { i: Mail, l: "EMAIL", v: "hajbishaked.96@gmail.com" },
              { i: Linkedin, l: "LINKEDIN", v: "linkedin/shaked" },
              { i: Github, l: "GITHUB", v: "github/shaked" },
            ].map((c) => (
              <a key={c.l} href="#" className="brutal-border bg-card flex items-center gap-4 p-4 hover:bg-[hsl(var(--brutal-yellow))]/30 transition-colors">
                <div className="brutal-border w-10 h-10 flex items-center justify-center bg-card">
                  <c.i className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-mono text-[10px] font-bold uppercase opacity-60">{c.l}</div>
                  <div className="font-display text-sm">{c.v}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 ml-auto opacity-60" />
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 mt-20 pt-6 border-t border-foreground/15 flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase opacity-70 font-mono">
          <div>© {new Date().getFullYear()} Shaked M. Hajbi · All rights reserved</div>
          <div>Building tools that ship · Haifa, IL</div>
        </div>
      </section>

      {/* Sticky */}
      {!dismissed && showSticky && (
        <>
          <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-40 brutal-border brutal-shadow bg-[hsl(var(--brutal-ochre))] text-background h-12 w-12 flex items-center justify-center hover:scale-105 transition-transform" aria-label="WhatsApp">
            <MessageCircle className="h-5 w-5" />
          </a>
          <div className="fixed bottom-6 left-6 z-40 hidden md:block max-w-xs">
            <div className="brutal-border brutal-shadow bg-card p-3 relative">
              <button onClick={() => setDismissed(true)} className="absolute top-1.5 left-1.5 brutal-border bg-card h-5 w-5 flex items-center justify-center" aria-label="סגור">
                <X className="h-3 w-3" />
              </button>
              <div className="flex items-center gap-3 pr-5">
                <div className="brutal-border bg-[hsl(var(--brutal-ochre))] text-background h-9 w-9 flex items-center justify-center font-display text-sm">SH</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase opacity-70">זמין עכשיו</div>
                  <div className="font-display text-xs uppercase">בוא נדבר</div>
                </div>
                <a href="#contact" className="brutal-border bg-foreground text-background px-2.5 py-1 text-[10px] font-bold uppercase">דבר</a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
