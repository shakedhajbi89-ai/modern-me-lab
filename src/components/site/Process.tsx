const steps = [
  { n: "01", title: "שיחה ראשונה", desc: "מתחילים בשיחת היכרות חינם — מבינים את העסק, הצרכים והיעדים. בלי התחייבות." },
  { n: "02", title: "אפיון ותכנון", desc: "מגדירים בדיוק מה נבנה, איך, וכמה זמן זה ייקח. הכל שקוף ומסודר על השולחן." },
  { n: "03", title: "בנייה", desc: "אני בונה את הפתרון בצמוד אליך — עם עדכונים שוטפים ויכולת לראות התקדמות." },
  { n: "04", title: "השקה ותמיכה", desc: "מעלים אונליין, מלמדים אותך לתפעל, ונשארים בקשר לתחזוקה ושיפורים." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-white">
      <div className="container-narrow">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.25em] text-[#0066ff] mb-5">
            <span className="h-px w-8 bg-[#0066ff]" />
            <span>איך עובדים</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-foreground">
            תהליך פשוט בארבעה שלבים
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="group relative rounded-2xl bg-[#f8f8f8] border border-black/[0.06] p-7 md:p-8 transition-all hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-baseline gap-4 mb-3">
                <span className="mono text-3xl font-bold text-[#0066ff]">{s.n}</span>
                <span className="h-px flex-1 bg-black/10" />
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
