import { Globe, Bot, Workflow, Cog } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "אתרים בהתאמה אישית",
    desc: "אתרי תדמית ונחיתה שמייצרים פניות. עיצוב פרימיום, מהירות מקסימלית, מותאמים לסלולר.",
    keywords: ["Web", "Landing", "SEO"],
  },
  {
    icon: Bot,
    title: "צ׳אטבוטים חכמים",
    desc: "בוטים שמדברים עם הלקוחות שלך בשפה שלך — עונים, מקבלים הזמנות, מתאמים פגישות.",
    keywords: ["AI Chatbot", "GPT", "WhatsApp"],
  },
  {
    icon: Workflow,
    title: "אוטומציות עסקיות",
    desc: "פעולות חוזרות שעבורן מבזבזים שעות — רצות אוטומטית ברקע, 24/7.",
    keywords: ["Automation", "Workflow", "n8n"],
  },
  {
    icon: Cog,
    title: "מערכות פנים-ארגוניות",
    desc: "כלי ניהול מותאמים בדיוק לעסק שלך. ניהול לקוחות, מלאי, הזמנות — בלי אקסלים.",
    keywords: ["Internal Tools", "CRM", "Dashboards"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 surface-soft">
      <div className="container-narrow">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.25em] text-[#0066ff] mb-5">
            <span className="h-px w-8 bg-[#0066ff]" />
            <span>השירותים</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-foreground">
            מה אפשר לבנות לך
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">
            כל פתרון נתפר לפי הצרכים של העסק שלך — לא תבניות, לא העתקות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl bg-white border border-black/[0.06] p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] hover:border-[#0066ff]/30"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066ff]/8 text-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-[15px] leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {s.keywords.map((k) => (
                      <span
                        key={k}
                        className="mono text-[10px] uppercase tracking-wider text-muted-foreground border border-black/[0.06] rounded-full px-2.5 py-1"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
