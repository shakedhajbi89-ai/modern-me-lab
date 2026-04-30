import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpLeft, Mail, Linkedin, Github, Bot, Workflow, LayoutDashboard, Database, Sparkles, Code2, Quote, MessageCircle, X, TrendingUp, Users, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import LiveMetrics from "@/components/site/LiveMetrics";
import AIBriefGenerator from "@/components/site/AIBriefGenerator";
import CaseStudy from "@/components/site/CaseStudy";
import TerminalChat from "@/components/site/TerminalChat";
import Mastery from "@/components/site/Mastery";

const sections = [
  { id: "about", label: "עליי" },
  { id: "services", label: "יכולות" },
  { id: "method", label: "תהליך" },
  { id: "work", label: "עבודות" },
  { id: "faq", label: "שאלות" },
  { id: "contact", label: "צור קשר" },
];

const services = [
  { icon: Bot, title: "סוכני AI", desc: "סוכנים מבוססי Claude/GPT שמבינים, מחליטים ופועלים." },
  { icon: Workflow, title: "אוטומציות", desc: "Make, n8n, Zapier ו-API־ים — חוסכים שעות בשבוע." },
  { icon: LayoutDashboard, title: "מוצרי SaaS", desc: "פיתוח מקצה לקצה: אפיון, עיצוב, פיתוח Production." },
  { icon: Database, title: "Backend & Data", desc: "Postgres, Edge Functions, real-time. ארכיטקטורה שמחזיקה." },
  { icon: Sparkles, title: "אסטרטגיית מוצר", desc: "Discovery sprints, KPIs, ותעדוף MVP חכם." },
  { icon: Code2, title: "ייעוץ טכני", desc: "CTO זמני, Code review, החלטות תשתית וגיוס." },
];

const tools = ["Claude", "OpenAI", "Gemini", "Python", "TypeScript", "React", "Next.js", "Node.js", "Supabase", "Postgres", "Tailwind", "n8n", "Stripe", "Vercel", "LangChain"];

const projects = [
  { n: "01", name: "Skill Prime", tag: "Web Platform · AI", desc: "פלטפורמת לימוד עצמית מבוססת Claude — בונה תוכנית למידה מותאמת בכל נושא.", stack: ["React", "Claude", "Supabase", "Stripe"], metrics: [{ v: "1.2K+", l: "משתמשים" }, { v: "85%", l: "completion" }] },
  { n: "02", name: "ExpenseIQ", tag: "Mobile · FinTech", desc: "ניהול הוצאות עם AI — קטגוריזציה אוטומטית וחיזוי חריגות.", stack: ["React Native", "GPT-4V", "Node", "Postgres"], metrics: [{ v: "8x", l: "מהיר יותר" }, { v: "94%", l: "דיוק" }] },
  { n: "03", name: "Madbeka", tag: "Mobile + Physical", desc: "מדבקות פיזיות + דיגיטליות לסידור הבית. סורק מדבקה — רואה תוכן.", stack: ["Flutter", "QR/NFC", "Supabase", "Print API"], metrics: [{ v: "500+", l: "בתים" }, { v: "<3s", l: "סריקה" }] },
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
  { q: "איך אתה משתמש ב-AI?", a: "AI הוא כלי, לא מטרה. משתמש בו רק איפה שהוא באמת מוסיף ערך מדיד." },
  { q: "איפה הקוד נשמר?", a: "GitHub פרטי שאתה הבעלים שלו מהיום הראשון. בלי vendor lock-in." },
];

export default function Editorial() {
  const [showSticky, setShowSticky] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "Editorial — Shaked M. Hajbi";
    const onScroll = () => setShowSticky(window.scrollY > 800);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-muted-foreground hover:text-foreground transition-colors story-link">
                {s.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="text-xs uppercase tracking-widest border-b border-foreground pb-0.5 hover:text-accent hover:border-accent transition-colors">בוא נדבר ←</a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 py-24 lg:py-36">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              VOL.01 — Issue 04 · Spring 2026
            </div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span>זמין · Q2 2026</span>
            </div>
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
                כאלה שמשנים התנהלות, מאיצים יומיום, ומייצרים תוצאה של ממש —
                <span className="font-italic-serif"> לא רק מצגות.</span>
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-3">
              <a href="#contact" className="group inline-flex items-center justify-between rounded-none border-b-2 border-foreground py-4 text-lg font-display hover:bg-foreground hover:text-background hover:px-4 transition-all">
                בוא נדבר
                <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </a>
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between border-b border-border py-4 text-lg font-display hover:text-accent transition-colors">
                <span className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> WhatsApp</span>
                <ArrowLeft className="h-5 w-5" />
              </a>
              <a href="#work" className="group inline-flex items-center justify-between border-b border-border py-4 text-lg font-display text-muted-foreground hover:text-foreground transition-colors">
                לעבודות שלי
                <ArrowLeft className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {[
              { v: "30+", l: "פרויקטים בהפקה" },
              { v: "8x", l: "האצה ממוצעת" },
              { v: "24h", l: "תגובה ראשונית" },
              { v: "100%", l: "מותאם אישית" },
            ].map((s) => (
              <div key={s.l} className="bg-background p-8">
                <div className="font-display font-italic-serif text-5xl text-accent">{s.v}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-border py-5 overflow-hidden bg-secondary/40">
          <div className="flex gap-12 whitespace-nowrap animate-marquee text-sm uppercase tracking-[0.25em] text-muted-foreground">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-12 shrink-0">
                <span>AI Engineering</span><span>·</span>
                <span>Automation</span><span>·</span>
                <span>Product Strategy</span><span>·</span>
                <span>Full-Stack Development</span><span>·</span>
                <span className="font-italic-serif normal-case tracking-normal text-foreground">shaped in Haifa</span><span>·</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New AI sections */}
      <div className="border-t border-border">
        <AIBriefGenerator variant="editorial" />
      </div>
      <div className="border-t border-border bg-secondary/30">
        <LiveMetrics variant="editorial" />
      </div>
      <div className="border-t border-border">
        <CaseStudy variant="editorial" />
      </div>
      <div className="border-t border-border bg-secondary/30">
        <Mastery variant="editorial" />
      </div>
      <div className="border-t border-border">
        <TerminalChat variant="editorial" />
      </div>

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
              <span className="text-accent">"</span>אסטרטג, מהנדס תוכנה ויזם של AI — בונה טכנולוגיה ומוצרים שעוזרים לאנשים ועסקים לעבוד יותר טוב.<span className="text-accent">"</span>
            </p>
            <p className="text-muted-foreground">
              לאורך השנים בניתי אינטגרציות, אוטומציות ופלטפורמות שלמות — שיצרו ערך אמיתי
              לעסקים, צוותים ואנשים פרטיים שרצו לעבוד אחרת. כל אחת מהן נולדה מצורך אמיתי, לא מ"מה שכיף לבנות".
            </p>
            <p className="text-muted-foreground">
              אני אוהב פשוט לפתח. בונה בכלים שאני מאמין בהם, מתעדכן באופן עקבי, ומחפש את
              הדרך הקצרה והנכונה לתוצאה — לא את זו שמרשימה על נייר.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-6">
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 02 / capabilities</div>
              <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                מה אני יודע <span className="font-italic-serif text-accent">לבנות.</span>
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-lg text-muted-foreground self-end">
              ערימת יכולות שלמה — מאפיון אסטרטגי ועד פיתוח Production. כל פרויקט נבנה מהקצה הנכון, עם הכלי הנכון.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {services.map((s) => (
              <div key={s.title} className="bg-background p-10 group hover:bg-accent hover:text-accent-foreground transition-all duration-500">
                <s.icon className="h-7 w-7 mb-6" />
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="opacity-70 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-t border-border overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-8 text-center">
          <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">— stack · tools I work with daily</div>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...tools, ...tools].map((t, i) => (
              <div key={`${t}-${i}`} className="shrink-0 inline-flex items-center gap-2 border border-foreground/20 px-5 py-2 font-italic-serif text-base hover:border-accent hover:text-accent transition-colors">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section id="method" className="py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 03 / method</div>
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

      {/* Work */}
      <section id="work" className="py-32 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 04 / selected work</div>
              <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
                מוצרים <span className="font-italic-serif text-accent">בפרודקשן.</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              לא רק עיצובים יפים — מוצרים אמיתיים עם משתמשים, payments, ותחזוקה שוטפת.
            </p>
          </div>
          <div className="space-y-12">
            {projects.map((p) => (
              <div key={p.name} className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border last:border-0 group">
                <a href="#contact" className="lg:col-span-5 block aspect-[4/3] bg-background border border-border overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display font-italic-serif text-7xl text-accent">{p.n}</div>
                      <div className="font-display text-2xl mt-2">{p.name}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-foreground opacity-0 group-hover:opacity-95 transition-opacity duration-500 flex items-center justify-center">
                    <span className="text-background font-display text-xl flex items-center gap-2">
                      צפה בפרויקט <ArrowUpLeft className="h-5 w-5" />
                    </span>
                  </div>
                </a>
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-3">{p.tag}</div>
                  <h3 className="font-display text-4xl mb-4">{p.name}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[11px] uppercase tracking-wider border border-border px-3 py-1">{s}</span>
                    ))}
                  </div>
                  <div className="flex gap-12">
                    {p.metrics.map((m) => (
                      <div key={m.l}>
                        <div className="font-display font-italic-serif text-4xl text-accent">{m.v}</div>
                        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{m.l}</div>
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
      <section className="py-32 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-16">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 05 / words</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              מה אומרים <span className="font-italic-serif text-accent">לקוחות.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {testimonials.map((t) => (
              <div key={t.n} className="bg-background p-10">
                <Quote className="h-8 w-8 text-accent mb-6" />
                <p className="font-display text-xl leading-relaxed mb-8">"{t.q}"</p>
                <div className="pt-6 border-t border-border">
                  <div className="font-display text-lg">{t.n}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{t.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">— 06 / faq</div>
            <h2 className="font-display text-5xl lg:text-6xl leading-[0.95] tracking-tight">
              שאלות <span className="font-italic-serif text-accent">נפוצות.</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border border-border bg-background px-6">
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
      <section id="contact" className="py-32 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.3em] opacity-60 mb-4">— 07 / get in touch</div>
            <h2 className="font-display text-5xl lg:text-7xl leading-[0.95] tracking-tight">
              פחות רעש.
              <br />
              <span className="font-italic-serif text-accent">יותר תוצאה.</span>
            </h2>
            <p className="mt-8 max-w-xl opacity-70 text-lg leading-relaxed">
              שיחת היכרות של 30 דקות — חינם, בלי התחייבות. נצא ממנה עם הבנה ברורה
              של מה אפשר לבנות, כמה זה ייקח, וכמה זה יעלה.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="mailto:hajbishaked.96@gmail.com" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 text-lg font-display hover:scale-[1.03] transition-transform">
                <Mail className="h-5 w-5" /> שלח אימייל
              </a>
              <a href="https://wa.me/972500000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-background/40 px-8 py-4 text-lg font-display hover:bg-background hover:text-foreground transition-colors">
                <MessageCircle className="h-5 w-5" /> WhatsApp
              </a>
            </div>
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

      {/* Sticky CTA */}
      {!dismissed && (
        <>
          <a
            href="https://wa.me/972500000000"
            target="_blank"
            rel="noreferrer"
            className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-2xl transition-all duration-500 hover:scale-110 ${showSticky ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            aria-label="WhatsApp"
          >
            <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
            <MessageCircle className="relative h-6 w-6" />
          </a>
          <div className={`fixed bottom-6 left-6 z-40 hidden md:block transition-all duration-500 ${showSticky ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
            <div className="relative bg-background border border-foreground p-4 shadow-2xl max-w-sm">
              <button onClick={() => setDismissed(true)} className="absolute top-2 left-2 h-6 w-6 hover:bg-secondary flex items-center justify-center" aria-label="סגור">
                <X className="h-3 w-3" />
              </button>
              <div className="flex items-center gap-3 pr-4">
                <div className="h-10 w-10 rounded-full bg-foreground text-background flex items-center justify-center font-display">S</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">זמין עכשיו</div>
                  <div className="font-display text-base">בוא נדבר על הפרויקט</div>
                </div>
                <a href="#contact" className="bg-foreground text-background px-4 py-2 text-xs uppercase tracking-widest hover:bg-accent transition-colors">דבר איתי</a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
