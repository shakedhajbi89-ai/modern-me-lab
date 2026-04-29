import { Bot, Workflow, LayoutDashboard, Database, Sparkles, Code2 } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "סוכני AI ותהליכי LLM",
    desc: "סוכנים שמבינים תוכן, מקבלים החלטות ומבצעים פעולות — מבוססי Claude / GPT / Gemini.",
    bullets: ["RAG על מסמכים פנימיים", "Function calling ו-Tools", "סוכנים מרובי-שלבים"],
    color: "from-primary/30 to-primary/0",
  },
  {
    icon: Workflow,
    title: "אוטומציות ואינטגרציות",
    desc: "חיבור מערכות שלא מדברות זו עם זו, החלפת עבודה ידנית בתהליך אוטומטי שעובד 24/7.",
    bullets: ["Make / n8n / Zapier", "API־ים מותאמים", "Webhooks ו-CRON"],
    color: "from-accent/30 to-accent/0",
  },
  {
    icon: LayoutDashboard,
    title: "מוצרי SaaS ופלטפורמות",
    desc: "פיתוח מקצה לקצה — מאפיון מוצר, דרך עיצוב UX/UI ועד פיתוח Production-grade.",
    bullets: ["React / Next / Vite", "Auth, Payments, RLS", "Mobile-first UX"],
    color: "from-primary/30 to-accent/30",
  },
  {
    icon: Database,
    title: "Backend ו-Data",
    desc: "ארכיטקטורה שמחזיקה: בסיסי נתונים, queues, real-time ו-Edge Functions.",
    bullets: ["Supabase / Postgres", "Edge & Serverless", "Real-time WebSockets"],
    color: "from-accent/30 to-primary/30",
  },
  {
    icon: Sparkles,
    title: "אסטרטגיית מוצר",
    desc: "מתחילים מהבעיה — לא מהכלי. אפיון, mapping, KPIs ותעדוף ב-MVP חכם.",
    bullets: ["Discovery sprints", "User journey mapping", "Roadmap מדיד"],
    color: "from-primary/20 to-primary/0",
  },
  {
    icon: Code2,
    title: "ייעוץ טכני / CTO זמני",
    desc: "ליווי טכני שוטף לסטארטאפים בשלב מוקדם — סקירת קוד, החלטות תשתית, גיוס.",
    bullets: ["Tech stack decisions", "Code review", "Hiring & scaling"],
    color: "from-accent/20 to-accent/0",
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="relative py-32">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <div className="mono text-xs text-primary mb-4">// 02 — Capabilities</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-foreground">מה אני יודע </span>
            <span className="text-gradient-brand">לבנות.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">
            ערימת יכולות שלמה — מאפיון אסטרטגי ועד פיתוח Production. כל פרויקט נבנה מהקצה הנכון, עם הכלי הנכון.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative rounded-3xl border border-border bg-card overflow-hidden p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 grid-bg opacity-0 group-hover:opacity-20 transition-opacity" />

              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 mono text-xs text-muted-foreground/90">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
