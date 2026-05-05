const audiences = [
  { emoji: "🍕", title: "עסקי מזון", desc: "מסעדות, בתי קפה, פיצריות, קייטרינג" },
  { emoji: "💼", title: "שירותים מקומיים", desc: "מספרות, קליניקות, סטודיואים, מאמנים" },
  { emoji: "🎨", title: "פרילנסרים", desc: "מעצבים, צלמים, יועצים, אנשי מקצוע" },
  { emoji: "🛍️", title: "עסקים קטנים", desc: "חנויות בוטיק, מותגים מקומיים, יזמים" },
];

export default function ForWhom() {
  return (
    <section id="for-whom" className="relative py-24 md:py-32 surface-soft">
      <div className="container-narrow">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.25em] text-[#0066ff] mb-5">
            <span className="h-px w-8 bg-[#0066ff]" />
            <span>למי זה מתאים</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-foreground">
            עובד עם עסקים קטנים שרוצים לגדול
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl bg-white border border-black/[0.06] p-6 text-center transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] hover:border-[#0066ff]/30"
            >
              <div className="text-4xl mb-3" aria-hidden>{a.emoji}</div>
              <h3 className="font-display font-bold text-base mb-1 text-foreground">{a.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
