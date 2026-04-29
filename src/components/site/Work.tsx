import { ArrowUpLeft } from "lucide-react";

const projects = [
  {
    name: "Skill Prime",
    tag: "Web Platform",
    desc: "פלטפורמת לימוד עצמית מבוססת Claude — בונה תוכנית למידה מותאמת אישית בכל נושא.",
    color: "from-primary/30 to-accent/20",
    accent: "border-primary/40",
  },
  {
    name: "ExpenseIQ",
    tag: "Mobile App",
    desc: "אפליקציה לניהול הוצאות עם בינה מלאכותית — קטגוריזציה, דוחות והתראות חכמות.",
    color: "from-accent/30 to-primary/20",
    accent: "border-accent/40",
  },
  {
    name: "Madbeka",
    tag: "Mobile App",
    desc: "מערכת מדבקות פיזיות + דיגיטליות לסידור הבית — סורק בסמרטפון רואה תוכן.",
    color: "from-primary/40 to-accent/30",
    accent: "border-primary/40",
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-32">
      <div className="container-narrow">
        <div className="text-center mb-20">
          <div className="mono text-xs text-primary mb-4">// 04 — Work</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-foreground">דוגמאות קטנות</span>{" "}
            <span className="text-gradient-brand">לעבודות.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-2xl text-muted-foreground">
            כמה הצצות למוצרים שבניתי — מהן עוצמת אפיון, חוויית משתמש, פיתוח ואסטרטגיית מוצר.
          </p>
        </div>

        <div id="outcomes" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href="#contact"
              className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card"
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60 transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="absolute inset-0 grid-bg opacity-30" />

              {/* Mock device frame */}
              <div className="absolute inset-x-12 top-12 bottom-32 rounded-2xl bg-background/60 backdrop-blur border border-border/60 shadow-card flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <div className="text-center px-6">
                  <div className="mono text-[10px] text-muted-foreground mb-3">{p.tag}</div>
                  <div className="font-display font-bold text-2xl text-gradient-brand">{p.name}</div>
                  <div className="mt-4 mx-auto h-1 w-12 rounded-full bg-gradient-brand opacity-60" />
                </div>
              </div>

              {/* Footer */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.desc}</p>
                  </div>
                  <ArrowUpLeft className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:-translate-x-1 group-hover:translate-y-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
