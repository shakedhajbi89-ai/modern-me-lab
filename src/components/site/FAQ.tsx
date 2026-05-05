import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "כמה זמן לוקח לבנות אתר?",
    a: "תלוי בהיקף הפרויקט. אתר עסק בסיסי לוקח בין 2 ל-5 ימי עבודה. אתר עם פאנל ניהול ופונקציות מתקדמות לוקח 5 עד 14 ימים. אנחנו נסכם לוח זמנים מדויק לפני שמתחילים.",
  },
  {
    q: "האם תהיה לי שליטה לעדכן את האתר אחרי שתסיימו?",
    a: "כן. בכל הפרויקטים אני בונה פאנל ניהול עצמאי שמאפשר לכם לעדכן תוכן, מחירים, תמונות ומה שצריך, בלי לתת לי שורה אחת של קוד. בלי תלות, בלי תשלומים חודשיים.",
  },
  {
    q: "כמה זה עולה?",
    a: "המחיר משתנה לפי הפרויקט והדרישות הספציפיות. אני נותן הצעת מחיר מסודרת אחרי שיחת היכרות קצרה שבה אני מבין מה אתם צריכים. השיחה עצמה ללא עלות וללא התחייבות.",
  },
  {
    q: "האם אתה לוקח גם פרויקטים קטנים?",
    a: "כן. אני עובד עם עסקים קטנים בישראל וחלק מהלקוחות שלי הם בעלי עסקים שמתחילים. אם הפרויקט מתאים לי ואני מאמין שאני יכול לעזור, אני אקח אותו.",
  },
  {
    q: "מה ההבדל בינך לבין סוכנות גדולה?",
    a: "סוכנות גדולה תיתן לכם תהליך מסודר אבל אתם תהיו לקוח מספר 47. אצלי, אתם הלקוח. כל החלטה עוברת דרכי, כל שורת קוד נכתבת על ידי, וכל שיחה היא איתי. זה אישי יותר. זה גמיש יותר. וזה לרוב גם נוח יותר במחיר.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-foreground">
            שאלות נפוצות
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            כל מה שחשוב לדעת לפני שמתחילים פרויקט
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl bg-white border overflow-hidden transition-all ${
                  isOpen
                    ? "border-[#0066ff]/30 shadow-[0_10px_40px_rgba(0,102,255,0.10)]"
                    : "border-black/10 shadow-[0_4px_18px_rgba(0,0,0,0.06)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 md:px-7 py-5 text-right"
                >
                  <span className="font-display font-bold text-base md:text-lg text-foreground leading-snug">
                    {f.q}
                  </span>
                  <span
                    className={`shrink-0 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "bg-[#0066ff] text-white rotate-45"
                        : "bg-[#0066ff]/10 text-[#0066ff] rotate-0"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-7 pb-6 text-muted-foreground text-[15px] leading-relaxed border-t border-black/5 pt-4">
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            יש לכם שאלה אחרת? אני כאן.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xl border border-[#0066ff]/30 hover:border-[#0066ff] hover:bg-[#0066ff] hover:text-white text-[#0066ff] px-6 py-3 text-sm font-semibold transition-all"
          >
            שאלו אותי ישירות
          </a>
        </div>
      </div>
    </section>
  );
}
