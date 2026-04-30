import { ArrowUpLeft } from "lucide-react";

/**
 * Editorial-style case studies. One bold metric per project.
 * No moving parts inside cards — the editorial weight does the work.
 */
const projects = [
  {
    n: "01",
    name: "Skill Prime",
    kicker: "AI Learning Platform",
    lead: "פלטפורמה שבונה תוכנית למידה אישית בכל נושא. ה־AI מתאים את עצמו לקצב התלמיד, יוצר תרגילים ומלווה כל שלב.",
    metric: { v: "85%", l: "completion rate" },
    stack: ["Claude", "React", "Supabase", "Stripe"],
    year: "2025",
  },
  {
    n: "02",
    name: "ExpenseIQ",
    kicker: "FinTech · Mobile",
    lead: "מצלמים חשבונית — היא נכנסת מסווגת, מנותחת, ומתויגת. דוחות חודשיים שכותבים את עצמם.",
    metric: { v: "8×", l: "מהיר מסידור ידני" },
    stack: ["GPT-4 Vision", "React Native", "Postgres"],
    year: "2025",
  },
  {
    n: "03",
    name: "Madbeka",
    kicker: "Hybrid · Physical + Digital",
    lead: "מדבקות פיזיות עם זהות דיגיטלית. סורקים — רואים תוכן, רשימות, היסטוריית רכישה. הזמנת חידוש בלחיצה.",
    metric: { v: "500+", l: "בתים בשימוש פעיל" },
    stack: ["Flutter", "QR + NFC", "Supabase"],
    year: "2024",
  },
];

export default function WorkLiving() {
  return (
    <section id="work" className="relative py-32">
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-16 gap-6 flex-wrap">
          <div>
            <div className="mono text-xs text-primary mb-4">// 03 — Selected Work</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight max-w-2xl">
              עבודות שחיות <em className="font-italic-serif text-primary">בפרודקשן</em>.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground leading-relaxed">
            לא mockups. לא concept. כל אחת מהן רצה עכשיו, עם משתמשים אמיתיים ותחזוקה שוטפת.
          </p>
        </div>

        <div className="space-y-px border-y border-border">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href="#contact"
              className="group block py-10 lg:py-14 border-b border-border last:border-b-0 transition-colors hover:bg-card/50"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                <div className="lg:col-span-1 mono text-xs text-muted-foreground tabular-nums">
                  {p.n}
                </div>
                <div className="lg:col-span-5">
                  <div className="mono text-[11px] text-primary mb-2">{p.kicker}</div>
                  <h3 className="font-display text-3xl lg:text-5xl leading-[1.05] tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {p.name}
                    <ArrowUpLeft className="inline-block h-6 w-6 lg:h-8 lg:w-8 ml-2 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-x-1 group-hover:translate-y-1" />
                  </h3>
                </div>
                <div className="lg:col-span-4 text-muted-foreground leading-relaxed">
                  {p.lead}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="mono text-[10px] rounded-full border border-border bg-card px-2.5 py-1 text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 text-right">
                  <div className="font-display text-4xl lg:text-5xl text-primary tabular-nums leading-none">
                    {p.metric.v}
                  </div>
                  <div className="mt-2 mono text-[10px] text-muted-foreground">
                    {p.metric.l}
                  </div>
                  <div className="mt-3 mono text-[10px] text-muted-foreground/70">
                    {p.year}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
