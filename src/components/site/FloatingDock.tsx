import { useEffect, useState } from "react";
import { Accessibility, MessageCircle, X, Type, Contrast, Link2, MousePointer2, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

type Settings = {
  fontScale: number; // 1, 1.15, 1.3
  highContrast: boolean;
  reduceMotion: boolean;
  underlineLinks: boolean;
  bigCursor: boolean;
};

const DEFAULTS: Settings = {
  fontScale: 1,
  highContrast: false,
  reduceMotion: false,
  underlineLinks: false,
  bigCursor: false,
};

const STORAGE_KEY = "a11y-settings-v1";

function applySettings(s: Settings) {
  const root = document.documentElement;
  root.style.fontSize = `${s.fontScale * 100}%`;
  root.classList.toggle("a11y-contrast", s.highContrast);
  root.classList.toggle("a11y-reduce-motion", s.reduceMotion);
  root.classList.toggle("a11y-underline", s.underlineLinks);
  root.classList.toggle("a11y-big-cursor", s.bigCursor);
}

export default function FloatingDock({
  whatsappNumber = "972500000000",
  whatsappMessage = "היי שקד, ראיתי את האתר שלך",
}: {
  whatsappNumber?: string;
  whatsappMessage?: string;
}) {
  const [open, setOpen] = useState<null | "a11y">(null);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...JSON.parse(raw) } as Settings;
        setSettings(parsed);
        applySettings(parsed);
      }
    } catch {}
  }, []);

  const update = (patch: Partial<Settings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    applySettings(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {}
  };

  const reset = () => {
    setSettings(DEFAULTS);
    applySettings(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const waHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-glow"
      >
        דלג לתוכן הראשי
      </a>

      {/* Floating dock — bottom-left in RTL, fixed left */}
      <div className="fixed bottom-5 left-5 z-50 flex flex-col items-center gap-3">
        {/* WhatsApp */}
        <a
          href={waHref}
          target="_blank"
          rel="noreferrer"
          aria-label="צור קשר בוואטסאפ"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-card transition-all hover:scale-110 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping opacity-60" />
          <MessageCircle className="relative h-5 w-5" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground border border-border shadow-card opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            דבר איתי בוואטסאפ
          </span>
        </a>

        {/* Accessibility */}
        <button
          type="button"
          onClick={() => setOpen(open === "a11y" ? null : "a11y")}
          aria-label="הגדרות נגישות"
          aria-expanded={open === "a11y"}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-card border border-border text-foreground shadow-card transition-all hover:scale-110 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <Accessibility className="h-5 w-5" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground border border-border shadow-card opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            נגישות
          </span>
        </button>
      </div>

      {/* A11y panel */}
      {open === "a11y" && (
        <>
          <button
            type="button"
            aria-label="סגור פאנל נגישות"
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-[2px]"
          />
          <div
            role="dialog"
            aria-label="הגדרות נגישות"
            className="fixed bottom-24 left-5 z-50 w-[300px] rounded-2xl border border-border bg-card p-5 shadow-card animate-slide-up-fade"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-lg">נגישות</h3>
              <button
                type="button"
                onClick={() => setOpen(null)}
                aria-label="סגור"
                className="h-8 w-8 rounded-full hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Font size */}
            <div className="mb-4">
              <label className="flex items-center gap-2 text-xs mono text-muted-foreground mb-2">
                <Type className="h-3.5 w-3.5" /> גודל טקסט
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { v: 1, label: "א" },
                  { v: 1.15, label: "א+" },
                  { v: 1.3, label: "א++" },
                ].map((opt) => (
                  <button
                    key={opt.v}
                    type="button"
                    onClick={() => update({ fontScale: opt.v })}
                    className={cn(
                      "rounded-lg border px-3 py-2 text-sm transition-all",
                      settings.fontScale === opt.v
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/40"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggles */}
            <div className="space-y-2">
              <Toggle
                icon={<Contrast className="h-4 w-4" />}
                label="ניגודיות גבוהה"
                active={settings.highContrast}
                onClick={() => update({ highContrast: !settings.highContrast })}
              />
              <Toggle
                icon={<RotateCcw className="h-4 w-4" />}
                label="הפחתת אנימציות"
                active={settings.reduceMotion}
                onClick={() => update({ reduceMotion: !settings.reduceMotion })}
              />
              <Toggle
                icon={<Link2 className="h-4 w-4" />}
                label="הדגשת קישורים"
                active={settings.underlineLinks}
                onClick={() => update({ underlineLinks: !settings.underlineLinks })}
              />
              <Toggle
                icon={<MousePointer2 className="h-4 w-4" />}
                label="סמן גדול"
                active={settings.bigCursor}
                onClick={() => update({ bigCursor: !settings.bigCursor })}
              />
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-4 w-full rounded-lg border border-border bg-background py-2 text-xs mono text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
            >
              איפוס הגדרות
            </button>
          </div>
        </>
      )}
    </>
  );
}

function Toggle({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="switch"
      aria-checked={active}
      className={cn(
        "w-full flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-sm transition-all",
        active
          ? "border-primary bg-primary/10 text-foreground"
          : "border-border bg-background hover:border-primary/40 text-muted-foreground"
      )}
    >
      <span className="flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span
        className={cn(
          "relative h-5 w-9 rounded-full transition-colors",
          active ? "bg-primary" : "bg-secondary"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 h-4 w-4 rounded-full bg-card shadow transition-all",
            active ? "right-0.5" : "right-[18px]"
          )}
        />
      </span>
    </button>
  );
}
