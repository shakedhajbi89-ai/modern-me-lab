import { Globe, Cog, Bot, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "אתרים מותאמים אישית לעסקים",
    desc: "אתר שמשקף את העסק שלכם, לא תבנית של אחרים. מותאם בדיוק למה שאתם צריכים, נטען מהר, מותאם נייד, ויעבוד לשנים רבות.",
  },
  {
    icon: Cog,
    title: "אוטומציות חכמות שעובדות בשבילכם",
    desc: "תהליכים שחוזרים על עצמם בעסק שלכם, אני מאוטמט אותם. שליחת מיילים, סנכרון לקוחות, עדכוני מלאי, דוחות אוטומטיים. כדי שתוכלו לעבוד פחות ולגדול יותר.",
  },
  {
    icon: Bot,
    title: "אפליקציות וצ׳אטבוטים עם AI",
    desc: "צ׳אטבוט שמבין את השפה של הלקוחות שלכם, אפליקציה שעובדת מהנייד, ושירות שמלווה את הלקוחות 24/7. הכל בנוי לעסק שלכם, לא ממשק גנרי.",
  },
  {
    icon: LayoutDashboard,
    title: "מערכות ניהול פנימיות לעסק",
    desc: "פאנל ניהול שמרכז את כל מה שהעסק שלכם עושה: לקוחות, הזמנות, מלאי, תשלומים, דוחות. במקום אחד, פשוט וברור.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-narrow">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-foreground">
            מה אני בונה
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            פתרונות מותאמים אישית, לא תבניות
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((s) => (
            <article
              key={s.title}
              className="group rounded-2xl bg-white border border-black/[0.06] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(0,0,0,0.10)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0066ff]/8 text-[#0066ff] mb-5 group-hover:bg-[#0066ff] group-hover:text-white transition-colors">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground leading-snug">{s.title}</h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
