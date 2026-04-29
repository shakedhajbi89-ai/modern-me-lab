import { ArrowUpLeft, TrendingUp, Users, Zap } from "lucide-react";

const projects = [
  {
    name: "Skill Prime",
    tag: "Web Platform · AI",
    desc: "פלטפורמת לימוד עצמית מבוססת Claude — בונה תוכנית למידה מותאמת אישית בכל נושא, יוצרת תרגילים, ומלווה את התלמיד שלב-שלב.",
    stack: ["React", "Claude API", "Supabase", "Stripe"],
    metrics: [
      { icon: Users, v: "1.2K+", l: "משתמשים פעילים" },
      { icon: TrendingUp, v: "85%", l: "completion rate" },
    ],
    color: "from-primary/40 to-accent/20",
    accent: "primary",
  },
  {
    name: "ExpenseIQ",
    tag: "Mobile App · FinTech",
    desc: "אפליקציה לניהול הוצאות עם AI — קטגוריזציה אוטומטית של חשבוניות מצולמות, דוחות חודשיים והתראות חכמות על חריגות.",
    stack: ["React Native", "GPT-4 Vision", "Node.js", "Postgres"],
    metrics: [
      { icon: Zap, v: "8x", l: "מהיר מסידור ידני" },
      { icon: TrendingUp, v: "94%", l: "דיוק קטגוריזציה" },
    ],
    color: "from-accent/40 to-primary/20",
    accent: "accent",
  },
  {
    name: "Madbeka",
    tag: "Mobile + Physical",
    desc: "מערכת מדבקות פיזיות + דיגיטליות לסידור הבית. סורק מדבקה בסמרטפון רואה תוכן, רשימה וזמן רכישה. הזמנת מדבקות ישירות מהאפליקציה.",
    stack: ["Flutter", "QR + NFC", "Supabase", "Print API"],
    metrics: [
      { icon: Users, v: "500+", l: "בתים מסודרים" },
      { icon: Zap, v: "<3s", l: "סריקה לתוכן" },
    ],
    color: "from-primary/30 to-accent/30",
    accent: "primary",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-32">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <div className="mono text-xs text-primary mb-4">// 04 — Selected Work</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-foreground">מוצרים שבניתי </span>
            <span className="text-gradient-brand">בפרודקשן.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">
            לא רק עיצובים יפים על Figma — אלה מוצרים אמיתיים עם משתמשים, payments, ותחזוקה שוטפת.
          </p>
        </div>

        <div id="outcomes" className="space-y-6">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="group relative grid lg:grid-cols-12 gap-6 rounded-3xl border border-border bg-card overflow-hidden p-6 lg:p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Visual */}
              <div className={`lg:col-span-5 relative aspect-[4/3] lg:aspect-auto rounded-2xl bg-gradient-to-br ${p.color} overflow-hidden border border-border/50`}>
                <div className="absolute inset-0 grid-bg opacity-30" />
                <div className="absolute inset-6 rounded-xl bg-background/80 backdrop-blur border border-border/60 flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.03]">
                  <div className="text-center px-6">
                    <div className="mono text-[10px] text-muted-foreground mb-2">{p.tag}</div>
                    <div className="font-display font-bold text-3xl text-gradient-brand">{p.name}</div>
                    <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-brand" />
                  </div>
                </div>
                <div className={`absolute -inset-10 bg-${p.accent}/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              </div>

              {/* Body */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="mono text-[10px] text-primary mb-1">{p.tag}</div>
                      <h3 className="font-display font-bold text-2xl lg:text-3xl">{p.name}</h3>
                    </div>
                    <ArrowUpLeft className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-x-1 group-hover:translate-y-1 shrink-0" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {p.stack.map((s) => (
                      <span key={s} className="mono text-[10px] rounded-full bg-secondary border border-border px-2.5 py-1 text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-border">
                  {p.metrics.map((m) => (
                    <div key={m.l} className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-xl bg-gradient-brand/20 border border-primary/30 flex items-center justify-center">
                        <m.icon className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-display font-bold text-lg leading-none">{m.v}</div>
                        <div className="text-[11px] text-muted-foreground mt-1">{m.l}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inline CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:border-primary/50 hover:bg-card/80 transition-all group"
          >
            יש לך רעיון דומה?
            <span className="text-primary font-semibold">בוא נדבר</span>
            <ArrowUpLeft className="h-4 w-4 text-primary transition-transform group-hover:-translate-x-1 group-hover:translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
