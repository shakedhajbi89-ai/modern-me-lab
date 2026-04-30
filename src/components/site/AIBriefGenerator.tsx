import { useState } from "react";
import { Sparkles, Loader2, ArrowLeft, Check, AlertCircle } from "lucide-react";

type Brief = {
  title: string;
  summary: string;
  phases: { name: string; duration: string; deliverables: string[] }[];
  stack: string[];
  estimate_weeks: string;
  estimate_range_ils: string;
  risks: string[];
  next_step: string;
};

const PRESETS = [
  "צ'אטבוט תמיכה לאתר eCommerce שיודע לענות על הזמנות, החזרות ומעקב משלוחים, מחובר ל-Shopify",
  "אוטומציה שמסכמת פגישות Zoom ושולחת follow-up אוטומטי ב-Gmail + מעדכנת CRM",
  "MVP ל-SaaS שמנתח חוזים PDF ומחזיר סיכום + סיכונים בעברית, עם billing דרך Stripe",
];

export default function AIBriefGenerator({
  variant = "dark",
}: {
  variant?: "dark" | "editorial" | "brutal" | "organic";
}) {
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState<Brief | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    if (desc.trim().length < 15) {
      setError("ספר לי קצת יותר על הפרויקט (לפחות משפט)");
      return;
    }
    setLoading(true);
    setError(null);
    setBrief(null);
    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-brief`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ description: desc }),
      });
      const data = await resp.json();
      if (!resp.ok) {
        setError(data.error || "משהו השתבש, נסה שוב");
        return;
      }
      setBrief(data.brief);
      setTimeout(() => {
        document.getElementById("brief-result")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } catch (e) {
      setError("שגיאת רשת — נסה שוב");
    } finally {
      setLoading(false);
    }
  }

  const wrap = {
    dark: "relative rounded-[2rem] border border-border bg-card overflow-hidden glow-border",
    editorial: "rounded-[2rem] border border-border bg-card shadow-card",
    brutal: "brutal-border brutal-shadow bg-card",
    organic: "rounded-[2rem] border border-border bg-card shadow-card",
  }[variant];

  return (
    <section id="brief" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs mono mb-5">
            <Sparkles className="h-3 w-3 text-primary" />
            <span>AI Brief Generator · 30 שניות</span>
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
            תכנון פרויקט אמיתי. <br />
            <span className="text-gradient-brand">בלי לחכות לפגישה.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            ספר לי במשפט מה אתה רוצה לבנות — ה-AI שלי יחזיר לך scope, שלבים, stack מומלץ, ואומדן זמן ומחיר. בחינם, מיידי.
          </p>
        </div>

        <div className={`${wrap} p-6 sm:p-10`}>
          {/* Background glow */}
          {variant === "dark" && (
            <>
              <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-primary/20 blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />
            </>
          )}

          <div className="relative">
            <label className="block mono text-xs text-muted-foreground mb-2">
              // describe your project
            </label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="לדוגמה: צ'אטבוט תמיכה לאתר שיודע לענות על שאלות הזמנות, מחובר ל-Shopify ול-Gmail..."
              rows={4}
              className="w-full bg-secondary/40 border border-border rounded-2xl p-4 text-base resize-none outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
            />

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground self-center">השראה:</span>
              {PRESETS.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setDesc(p)}
                  type="button"
                  className="text-xs rounded-full border border-border bg-secondary/40 hover:bg-secondary px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  דוגמה {i + 1}
                </button>
              ))}
            </div>

            {error && (
              <div className="mt-4 flex items-center gap-2 text-sm text-destructive">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">
                ⚡ בממוצע 8 שניות · ללא רישום · 100% פרטי
              </div>
              <button
                onClick={generate}
                disabled={loading || desc.trim().length < 5}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.03] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    מנתח את הפרויקט...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    צור Brief מלא
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Result */}
        {brief && (
          <div id="brief-result" className="mt-8 animate-fade-in-up">
            <div className={`${wrap} p-6 sm:p-10`}>
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="mono text-xs text-primary mb-2">// AI-generated brief</div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl">{brief.title}</h3>
                  <p className="mt-2 text-muted-foreground">{brief.summary}</p>
                </div>
                <div className="shrink-0 text-right">
                  <div className="mono text-[10px] text-muted-foreground mb-1">אומדן</div>
                  <div className="font-display font-bold text-xl text-gradient-brand">{brief.estimate_range_ils}</div>
                  <div className="mono text-xs text-muted-foreground mt-1">{brief.estimate_weeks} שבועות</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="mono text-xs text-primary mb-3">// phases</h4>
                  <div className="space-y-3">
                    {brief.phases.map((p, i) => (
                      <div key={i} className="rounded-xl border border-border bg-secondary/30 p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <span className="mono text-[10px] rounded-full bg-primary/20 text-primary px-2 py-0.5">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div className="font-medium">{p.name}</div>
                          </div>
                          <div className="mono text-[10px] text-muted-foreground">{p.duration}</div>
                        </div>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {p.deliverables.map((d, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mono text-xs text-primary mb-3">// stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {brief.stack.map((s) => (
                        <span key={s} className="mono text-xs rounded-full border border-border bg-secondary/50 px-3 py-1.5">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="mono text-xs text-primary mb-3">// notes</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {brief.risks.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-accent mt-1">·</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-muted-foreground">
                  <span className="text-foreground font-medium">צעד הבא:</span> {brief.next_step}
                </div>
                <a
                  href="#contact"
                  className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.03] transition-transform"
                >
                  קבע שיחה לדייק
                  <ArrowLeft className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
