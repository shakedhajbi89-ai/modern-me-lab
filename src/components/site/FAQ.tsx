import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "כמה זמן לוקח לבנות מוצר?",
    a: "תלוי בהיקף — אב-טיפוס פונקציונלי תוך 1-2 שבועות, מוצר MVP מלא בתוך 4-8 שבועות. אני עובד בספרינטים קצרים עם הדגמה שבועית, כך שאתה רואה התקדמות אמיתית כל הזמן.",
  },
  {
    q: "מה התקציב הטיפוסי?",
    a: "כל פרויקט מתומחר אישית לפי היקף. אוטומציה ממוקדת מתחילה ב-3-5K, MVP מלא בטווח של 15-50K, ופלטפורמה מורכבת מעבר לכך. אני שקוף לחלוטין על מחיר ומה כלול בו.",
  },
  {
    q: "מה קורה אחרי שהמוצר עולה לאוויר?",
    a: "אני נשאר זמין לתחזוקה, באגים ושיפורים. אפשר להיכנס לרטיינר חודשי או לעבוד לפי שעה. אני לא מאמין ב-'בניתי ונעלמתי' — המוצר חי גם אחרי המסירה.",
  },
  {
    q: "איך אתה משתמש ב-AI בתהליך?",
    a: "AI הוא כלי, לא מטרה. אני משתמש בו איפה שהוא באמת מוסיף ערך — קטגוריזציה, חיפוש סמנטי, יצירת תוכן, סוכנים אוטונומיים. לא דוחף LLM לכל דבר רק כי זה טרנדי.",
  },
  {
    q: "אתה עובד עם צוות קיים או לבד?",
    a: "שניהם. אני עובד מצוין כ-Solo Builder על פרויקטים מקצה לקצה, אבל גם משתלב בצוות קיים כ-Tech Lead, יועץ ארכיטקטורה או CTO זמני.",
  },
  {
    q: "איפה הקוד נשמר?",
    a: "הכל ב-GitHub פרטי שאתה הבעלים שלו מהיום הראשון. תיעוד מלא, deploy אוטומטי, ובלי vendor lock-in. אתה תמיד יכול להמשיך עם כל מפתח אחר.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-32">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-16">
          <div className="mono text-xs text-primary mb-4">// 06 — FAQ</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight">
            <span className="text-foreground">שאלות </span>
            <span className="text-gradient-brand">נפוצות.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 hover:border-primary/40 transition-colors data-[state=open]:border-primary/40 data-[state=open]:shadow-glow"
            >
              <AccordionTrigger className="text-right hover:no-underline py-5 font-display font-semibold text-base lg:text-lg">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-[15px]">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
