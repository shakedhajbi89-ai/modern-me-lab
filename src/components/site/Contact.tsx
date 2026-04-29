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
    <section id="contact" className="relative py-32">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10 glow-border relative">
            <div className="mono text-xs text-primary mb-3">// 05 — get in touch</div>
            <h3 className="font-display font-bold text-3xl mb-2">
              <span className="text-foreground">אספר לך מה</span>{" "}
              <span className="text-gradient-brand">אפשר לבנות.</span>
            </h3>
            <p className="text-muted-foreground text-sm mb-8">
              ספר לי קצת על הפרויקט — ואחזור אליך בתוך 24 שעות.
            </p>
            <form onSubmit={onSubmit} className="space-y-4">
              <Input name="name" label="שם" placeholder="השם שלך" required />
              <Input name="email" type="email" label="אימייל" placeholder="you@example.com" required />
              <div>
                <label className="mono text-[11px] text-muted-foreground mb-2 block">על מה תרצה לדבר</label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="פרויקט / רעיון / שאלה..."
                  required
                  className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.01] hover:shadow-[0_0_60px_hsl(var(--primary)/0.5)] disabled:opacity-60"
              >
                {loading ? "שולח..." : "שלח הודעה"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-8 glow-border relative">
              <div className="mono text-xs text-primary mb-3">// 06 — info</div>
              <h3 className="font-display font-bold text-3xl mb-6">
                <span className="text-foreground">פרטים</span>{" "}
                <span className="text-gradient-brand">שכדאי לדעת.</span>
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">→</span>
                  <span><strong className="text-foreground">AI Engineer · Full-Stack Developer</strong> מבסיס. בונה אוטומציות, סוכנים וכלים מותאמים.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">→</span>
                  <span><strong className="text-foreground">תגובה תוך 24 שעות.</strong> שיחת היכרות חינם · אפיון ראשוני ללא התחייבות.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-0.5">→</span>
                  <span>עובד מ<strong className="text-foreground">חיפה</strong> · משלוח בכל העולם · GMT+3</span>
                </li>
              </ul>
            </div>

            <ContactCard icon={Mail} label="EMAIL" value="hajbishaked.96@gmail.com" href="mailto:hajbishaked.96@gmail.com" />
            <ContactCard icon={Linkedin} label="LINKEDIN" value="לינקדאין" href="#" />
            <ContactCard icon={Github} label="GITHUB" value="shaked@github" href="#" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Input({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mono text-[11px] text-muted-foreground mb-2 block">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-background/60 border border-border px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

function ContactCard({ icon: Icon, label, value, href }: { icon: any; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-border bg-card px-6 py-4 transition-all hover:border-primary/40 hover:-translate-y-0.5"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand/10 border border-primary/30 text-primary group-hover:scale-110 transition-transform">
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="mono text-[10px] text-muted-foreground">{label}</div>
        <div className="text-sm text-foreground truncate">{value}</div>
      </div>
    </a>
  );
}
