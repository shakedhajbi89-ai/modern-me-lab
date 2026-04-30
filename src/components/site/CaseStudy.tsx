import { useRef, useState } from "react";
import { ArrowLeftRight } from "lucide-react";

type Case = {
  title: string;
  client: string;
  before: { label: string; metrics: { k: string; v: string }[]; visual: React.ReactNode };
  after: { label: string; metrics: { k: string; v: string }[]; visual: React.ReactNode };
  story: string;
  tech: string[];
};

const CASES: Case[] = [
  {
    title: "Support Ops → AI Agent",
    client: "Fintech, Series B",
    story: "צוות תמיכה של 12 איש שטיפל ב-2,400 פניות בשבוע. בנינו AI Agent שמטפל ב-78% מהפניות אוטומטית, מזהה בעיות מורכבות, ומעביר עם context מלא לאדם. הפניות 'הכואבות' באמת מטופלות מהר יותר.",
    tech: ["Claude 3.5", "Python", "Postgres", "n8n", "Slack API"],
    before: {
      label: "לפני",
      metrics: [
        { k: "זמן תגובה ממוצע", v: "4.2 שעות" },
        { k: "פניות / סוכן / יום", v: "32" },
        { k: "שביעות רצון (CSAT)", v: "3.8 / 5" },
      ],
      visual: (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 text-xs opacity-60">
              <div className="h-2 w-2 rounded-full bg-destructive" />
              <div className="h-2 flex-1 rounded-full bg-destructive/20" style={{ width: `${100 - i * 12}%` }} />
            </div>
          ))}
        </div>
      ),
    },
    after: {
      label: "אחרי",
      metrics: [
        { k: "זמן תגובה ממוצע", v: "8 שניות" },
        { k: "פניות מטופלות אוטומטית", v: "78%" },
        { k: "שביעות רצון (CSAT)", v: "4.7 / 5" },
      ],
      visual: (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
              <div className="h-2 flex-1 rounded-full bg-primary/40" />
            </div>
          ))}
        </div>
      ),
    },
  },
  {
    title: "Manual Reports → Auto Pipeline",
    client: "Marketing Agency",
    story: "כל יום ראשון, אנליסט בילה 6 שעות באיסוף נתונים מ-9 מקורות שונים והכנת דוחות ללקוחות. בניתי pipeline שמאסף, מנתח, ומפיק דוחות מותאמים אוטומטית — כולל insights כתובים ב-AI.",
    tech: ["Python", "BigQuery", "OpenAI", "Vercel Cron", "Notion API"],
    before: {
      label: "לפני",
      metrics: [
        { k: "זמן הכנת דוח", v: "6 שעות" },
        { k: "דוחות בשבוע", v: "8" },
        { k: "שגיאות ידניות", v: "12-15 / חודש" },
      ],
      visual: <div className="font-mono text-xs space-y-1 opacity-60"><div>📊 manual_v1.xlsx</div><div>📊 manual_v2.xlsx</div><div>📊 manual_FINAL.xlsx</div><div>📊 manual_FINAL_v2.xlsx</div></div>,
    },
    after: {
      label: "אחרי",
      metrics: [
        { k: "זמן הכנת דוח", v: "4 דקות" },
        { k: "דוחות בשבוע", v: "47" },
        { k: "שגיאות ידניות", v: "0" },
      ],
      visual: <div className="font-mono text-xs space-y-1"><div className="text-primary">▸ pipeline.run() ✓</div><div className="text-primary">▸ ai.summarize() ✓</div><div className="text-primary">▸ deliver.notion() ✓</div><div className="text-muted-foreground">scheduled · sun 06:00</div></div>,
    },
  },
];

export default function CaseStudy({
  variant = "dark",
}: {
  variant?: "dark" | "editorial" | "brutal" | "organic";
}) {
  const [active, setActive] = useState(0);
  const c = CASES[active];

  const wrap = {
    dark: "relative rounded-[2rem] border border-border bg-card overflow-hidden",
    editorial: "rounded-[2rem] border border-border bg-card shadow-card overflow-hidden",
    brutal: "brutal-border brutal-shadow bg-card overflow-hidden",
    organic: "rounded-[2rem] border border-border bg-card shadow-card overflow-hidden",
  }[variant];

  return (
    <section id="cases" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <div className="mono text-xs text-primary mb-3">// case studies</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
            לפני <ArrowLeftRight className="inline h-8 w-8 text-primary mx-2" /> אחרי
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            פרויקטים אמיתיים, מספרים אמיתיים. לחץ בין הקייסים.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CASES.map((cc, i) => (
            <button
              key={cc.title}
              onClick={() => setActive(i)}
              className={`rounded-full border px-5 py-2 text-sm transition-all ${
                i === active
                  ? "bg-primary text-primary-foreground border-primary shadow-glow"
                  : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {cc.title}
            </button>
          ))}
        </div>

        <div className={wrap}>
          {/* Header */}
          <div className="border-b border-border p-6 sm:p-8">
            <div className="mono text-xs text-muted-foreground">{c.client}</div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl mt-1">{c.title}</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">{c.story}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {c.tech.map((t) => (
                <span key={t} className="mono text-[10px] rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Before / After grid */}
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            <div className="p-6 sm:p-8 bg-destructive/5">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-2 w-2 rounded-full bg-destructive" />
                <span className="mono text-xs uppercase tracking-wider text-destructive">{c.before.label}</span>
              </div>
              <div className="space-y-3 mb-6">
                {c.before.metrics.map((m) => (
                  <div key={m.k} className="flex items-baseline justify-between gap-3 pb-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">{m.k}</span>
                    <span className="font-display font-bold text-xl tabular-nums">{m.v}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-secondary/30 p-4">{c.before.visual}</div>
            </div>

            <div className="p-6 sm:p-8 bg-primary/5">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span className="mono text-xs uppercase tracking-wider text-primary">{c.after.label}</span>
              </div>
              <div className="space-y-3 mb-6">
                {c.after.metrics.map((m) => (
                  <div key={m.k} className="flex items-baseline justify-between gap-3 pb-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">{m.k}</span>
                    <span className="font-display font-bold text-xl tabular-nums text-gradient-brand">{m.v}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl bg-secondary/30 p-4">{c.after.visual}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
