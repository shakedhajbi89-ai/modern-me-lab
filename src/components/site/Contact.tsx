import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("ההודעה נשלחה — אחזור אליך בהקדם.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-white">
      <div className="container-narrow">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.25em] text-[#0066ff] mb-5">
            <span className="h-px w-8 bg-[#0066ff]" />
            <span>צור קשר</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.1] text-foreground">
            בוא נדבר על הפרויקט שלך
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            שיחת היכרות חינם · תגובה תוך 24 שעות
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-black/[0.06] bg-white p-7 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <form onSubmit={onSubmit} className="space-y-4">
              <Input name="name" label="שם" placeholder="השם שלך" required />
              <Input name="email" type="email" label="אימייל" placeholder="you@example.com" required />
              <Input name="phone" type="tel" label="טלפון (אופציונלי)" placeholder="050-0000000" />
              <div>
                <label className="text-[12px] font-semibold text-foreground/70 mb-2 block">ספר על הפרויקט</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="סוג העסק, מה אתה צריך, תקציב משוער..."
                  required
                  className="w-full rounded-xl bg-[#f8f8f8] border border-black/[0.06] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0066ff] hover:bg-[#4d8eff] py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(0,102,255,0.3)] transition-all hover:scale-[1.01] disabled:opacity-60"
              >
                {loading ? "שולח..." : "שלח הודעה"}
              </button>
            </form>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-black/[0.06] bg-[#f8f8f8] p-7 md:p-8">
              <h3 className="font-display font-bold text-2xl mb-4 text-foreground">למה לבחור בי</h3>
              <ul className="space-y-3 text-[15px] text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1 font-bold">→</span>
                  <span><strong className="text-foreground">סטודיו אישי</strong> — אתה מדבר ישירות איתי, בלי תיווך.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1 font-bold">→</span>
                  <span><strong className="text-foreground">מומחה AI</strong> — משלב טכנולוגיות חדישות בכל פתרון.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#0066ff] mt-1 font-bold">→</span>
                  <span><strong className="text-foreground">מחירים שקופים</strong> — הצעת מחיר מסודרת בפגישה, בלי הפתעות.</span>
                </li>
              </ul>
            </div>

            <ContactCard icon={Mail} label="EMAIL" value="hajbishaked.96@gmail.com" href="mailto:hajbishaked.96@gmail.com" />
            <ContactCard icon={MapPin} label="LOCATION" value="חיפה · עובד עם כל הארץ" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-[12px] font-semibold text-foreground/70 mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-[#f8f8f8] border border-black/[0.06] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 transition-all"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-white px-6 py-4 transition-all hover:border-[#0066ff]/30 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066ff]/10 text-[#0066ff] group-hover:bg-[#0066ff] group-hover:text-white transition-colors">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm text-foreground truncate font-medium">{value}</div>
      </div>
    </a>
  );
}
