import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "שקד הביא לנו בתוך 3 שבועות מערכת שחיכינו לה חצי שנה. הבין את הצורך עוד לפני שהסברנו.",
    name: "דניאל כ.",
    role: "מנכ\"ל, חברת SaaS",
  },
  {
    quote: "הוא לא בנה לנו מה שאמרנו — הוא בנה את מה שבאמת היינו צריכים. וזה הבדל ענק.",
    name: "מיכל ש.",
    role: "Head of Product",
  },
  {
    quote: "האוטומציה שהוא בנה חוסכת לנו 20 שעות בשבוע. החזר השקעה תוך חודש.",
    name: "יואב ר.",
    role: "מייסד, סוכנות שיווק",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <div className="mono text-xs text-primary mb-4">// 05 — Words</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-foreground">מה אומרים </span>
            <span className="text-gradient-brand">לקוחות.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="group relative rounded-3xl border border-border bg-card p-7 hover:-translate-y-1 hover:border-primary/40 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <p className="text-foreground/90 leading-relaxed mb-6 text-[15px]">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-gradient-brand flex items-center justify-center font-display font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
