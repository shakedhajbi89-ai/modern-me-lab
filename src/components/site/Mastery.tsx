import { Award, ShieldCheck, Star } from "lucide-react";

const STACK = [
  { name: "Claude / Anthropic", level: 95, badge: "Expert" },
  { name: "OpenAI / GPT", level: 95, badge: "Expert" },
  { name: "React + TypeScript", level: 98, badge: "Expert" },
  { name: "Python + FastAPI", level: 92, badge: "Expert" },
  { name: "Supabase + Postgres", level: 90, badge: "Production" },
  { name: "n8n / Make Automation", level: 88, badge: "Production" },
  { name: "LangChain / Agents", level: 85, badge: "Production" },
  { name: "Vercel + Edge", level: 87, badge: "Production" },
];

const BADGES = [
  { name: "Anthropic Builder", icon: Award },
  { name: "Vercel Pro", icon: ShieldCheck },
  { name: "Supabase Partner", icon: Star },
  { name: "OpenAI API", icon: Award },
];

export default function Mastery({
  variant = "dark",
}: {
  variant?: "dark" | "editorial" | "brutal" | "organic";
}) {
  const wrap = {
    dark: "rounded-2xl border border-border bg-card/60 backdrop-blur p-6",
    editorial: "rounded-3xl border border-border bg-card p-6 shadow-card",
    brutal: "brutal-border brutal-shadow bg-card p-5",
    organic: "rounded-3xl border border-border bg-card p-6 shadow-card",
  }[variant];

  return (
    <section id="mastery" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <div className="mono text-xs text-primary mb-3">// stack mastery</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
            לא רק <em className="font-italic-serif">מכיר</em>. <span className="text-gradient-brand">שולט.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            רק כלים שעמדו במבחן הפרודקשן אצל לקוחות אמיתיים. כל מספר משקף שעות אמת בקוד.
          </p>
        </div>

        {/* Badges row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {BADGES.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.name} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 hover:border-primary/40 transition-colors">
                <Icon className="h-4 w-4 text-primary" />
                <span className="text-sm">{b.name}</span>
              </div>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className={wrap}>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {STACK.map((s) => (
              <div key={s.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{s.name}</span>
                    <span className="mono text-[10px] rounded-full bg-primary/10 text-primary px-2 py-0.5">
                      {s.badge}
                    </span>
                  </div>
                  <span className="mono text-xs text-muted-foreground tabular-nums">{s.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-brand rounded-full transition-all duration-1000"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          רמות מבוססות על: שעות אמת, מספר פרויקטים בפרודקשן, ועומק שינוי קוד-מקור.
        </div>
      </div>
    </section>
  );
}
