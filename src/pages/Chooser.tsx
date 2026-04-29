import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpLeft } from "lucide-react";

const variants = [
  {
    n: "01",
    path: "/v1",
    name: "Dark Tech",
    sub: "Futuristic · Neon glow",
    desc: "רקע כהה, גרדיאנטים זוהרים בציאן/ויולט, גריד טכנולוגי, glass morphism — מתאים לפוזישנינג של AI Engineer חדשני.",
    tags: ["Cyan + Violet", "Glow effects", "Space Grotesk", "Glass UI"],
    preview: (
      <div className="absolute inset-0 bg-[hsl(230_25%_6%)] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(hsl(230_20%_14%) 1px, transparent 1px), linear-gradient(90deg, hsl(230_20%_14%) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5 }} />
        <div className="absolute top-1/3 -right-10 h-40 w-40 rounded-full bg-[hsl(174_90%_55%)]/40 blur-3xl" />
        <div className="absolute bottom-1/3 -left-10 h-40 w-40 rounded-full bg-[hsl(270_90%_65%)]/40 blur-3xl" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="font-mono text-[9px] text-[hsl(174_90%_55%)] mb-2">// AI · AUTOMATION</div>
            <div className="font-bold text-2xl bg-gradient-to-r from-[hsl(174_90%_55%)] to-[hsl(270_90%_65%)] bg-clip-text text-transparent">קודם מדברים.</div>
            <div className="font-bold text-2xl text-white">אחר־כך בונים.</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    n: "02",
    path: "/v2",
    name: "Editorial Minimal",
    sub: "Refined · Magazine-style",
    desc: "לבן/קרם, סריף יוקרתי (Fraunces), טיפוגרפיה ענקית, גריד מובנה — תחושת יוקרה של מותג בוטיק. סטייל Linear/Vercel.",
    tags: ["Cream + Black", "Fraunces serif", "Italic accents", "Marquee"],
    preview: (
      <div className="absolute inset-0 bg-[hsl(38_35%_96%)] overflow-hidden">
        <div className="absolute inset-x-0 top-3 px-4 flex justify-between text-[8px] uppercase tracking-widest text-[hsl(20_8%_38%)]">
          <span>VOL.01</span><span>SPRING '26</span>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="text-center" style={{ fontFamily: "Fraunces, Georgia, serif" }}>
            <div className="text-3xl leading-none text-[hsl(20_14%_8%)]">קודם <em className="text-[hsl(14_80%_52%)]">מדברים</em>.</div>
            <div className="text-3xl leading-none text-[hsl(20_14%_8%)] mt-1">אחר־כך <em>בונים</em>.</div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 border-t border-[hsl(30_20%_85%)] py-2 text-[8px] uppercase tracking-[0.2em] text-[hsl(20_8%_38%)] text-center">
          AI · AUTOMATION · STRATEGY · DEV
        </div>
      </div>
    ),
  },
  {
    n: "03",
    path: "/v3",
    name: "Bold Brutalist",
    sub: "Loud · Confident",
    desc: "צבעים צעקניים (צהוב/ורוד/ליים/כחול), מסגרות שחורות עבות, צללים אופסט, טיפוגרפיה מסיבית. אומר 'אני כאן ומסעיר'.",
    tags: ["Yellow + Pink + Lime", "Archivo Black", "Hard shadows", "No-nonsense"],
    preview: (
      <div className="absolute inset-0 bg-[hsl(50_100%_96%)] overflow-hidden p-3">
        <div className="absolute top-2 right-2 w-12 h-12 bg-[hsl(340_95%_70%)] border-2 border-black rotate-12" />
        <div className="absolute bottom-3 left-3 w-10 h-10 bg-[hsl(220_95%_60%)] border-2 border-black -rotate-6" />
        <div className="relative h-full flex flex-col items-center justify-center" style={{ fontFamily: "'Archivo Black', sans-serif" }}>
          <div className="text-2xl uppercase text-black leading-none">קודם</div>
          <div className="text-2xl uppercase bg-[hsl(90_95%_55%)] border-2 border-black px-2 -rotate-1 my-1">מדברים.</div>
          <div className="text-2xl uppercase text-black leading-none">אחר־כך</div>
          <div className="text-2xl uppercase bg-[hsl(340_95%_70%)] border-2 border-black px-2 rotate-1 mt-1">בונים.</div>
        </div>
      </div>
    ),
  },
  {
    n: "04",
    path: "/v4",
    name: "Organic Soft",
    sub: "Warm · Approachable",
    desc: "צורות אורגניות (blobs), גרדיאנטים רכים בטונים חמים (אפרסק/חכליל/חמרא), סריף עם איטליק. תחושת חמימות וקרבה אנושית.",
    tags: ["Peach + Sage + Sand", "Fraunces + Jakarta", "Floating blobs", "Soft shadows"],
    preview: (
      <div className="absolute inset-0 bg-[hsl(36_50%_97%)] overflow-hidden">
        <div className="absolute -top-6 -right-6 h-24 w-24 bg-[hsl(18_80%_78%)]/60 blur-2xl" style={{ borderRadius: "70% 30% 50% 50%" }} />
        <div className="absolute -bottom-6 -left-6 h-28 w-28 bg-[hsl(145_25%_65%)]/40 blur-2xl" style={{ borderRadius: "40% 60% 70% 30%" }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" style={{ fontFamily: "Fraunces, Georgia, serif" }}>
            <div className="text-3xl text-[hsl(200_20%_18%)]">קודם <em className="text-[hsl(18_75%_55%)]">מדברים</em>.</div>
            <div className="text-3xl text-[hsl(200_20%_18%)] mt-1">אחר־כך <em>בונים</em>.</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Chooser() {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "he";
    document.title = "בחר גרסה — Shaked M. Hajbi";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="container-narrow relative py-20 lg:py-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs mono mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-muted-foreground">4 directions · pick your vibe</span>
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            <span className="text-foreground">בחר את </span>
            <span className="text-gradient-brand">הסגנון</span>
            <br />
            <span className="text-foreground">שמתאים לך.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            ארבע גרסאות שונות של האתר האישי שלך — כל אחת עם DNA עיצובי משלה.
            לחץ על כל גרסה כדי לחוות אותה במלואה.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {variants.map((v) => (
            <Link
              key={v.path}
              to={v.path}
              className="group relative rounded-3xl border border-border bg-card overflow-hidden hover:-translate-y-1 transition-all duration-500 hover:shadow-card hover:border-primary/40"
            >
              {/* Preview */}
              <div className="relative aspect-[16/10] border-b border-border overflow-hidden">
                {v.preview}
                <div className="absolute top-3 right-3 mono text-[10px] bg-background/80 backdrop-blur border border-border rounded-full px-2 py-0.5 text-muted-foreground">
                  {v.n}
                </div>
              </div>
              {/* Body */}
              <div className="p-6 lg:p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-2xl">{v.name}</h3>
                    <div className="mono text-[11px] text-primary mt-1">{v.sub}</div>
                  </div>
                  <ArrowUpLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-all group-hover:-translate-x-1 group-hover:translate-y-1" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{v.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {v.tags.map((t) => (
                    <span key={t} className="mono text-[10px] rounded-full bg-secondary border border-border px-2.5 py-1 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>אחרי שבחרת — נדייק ונשפר את הגרסה הנבחרת ביחד.</p>
        </div>
      </div>
    </div>
  );
}
