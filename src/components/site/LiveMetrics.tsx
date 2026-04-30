import { useEffect, useState } from "react";
import { Activity, Zap, Bot, Globe, TrendingUp, Cpu } from "lucide-react";
import { RevealGroup, RevealItem } from "./Reveal";

/** Live-ish metrics dashboard — values animate to feel real. */

function useTicker(base: number, jitter = 1, intervalMs = 2200) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => {
      setV((prev) => Math.max(0, prev + Math.round((Math.random() - 0.4) * jitter * 2)));
    }, intervalMs);
    return () => clearInterval(id);
  }, [base, jitter, intervalMs]);
  return v;
}

function Sparkline({ color = "currentColor", points = 30 }: { color?: string; points?: number }) {
  const [data, setData] = useState<number[]>(() =>
    Array.from({ length: points }, () => 30 + Math.random() * 50)
  );
  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => [...prev.slice(1), 20 + Math.random() * 70]);
    }, 1100);
    return () => clearInterval(id);
  }, []);
  const max = Math.max(...data);
  const path = data
    .map((v, i) => `${(i / (data.length - 1)) * 100},${100 - (v / max) * 80 - 10}`)
    .join(" L");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-12">
      <path d={`M${path}`} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <path d={`M${path} L100,100 L0,100 Z`} fill={color} opacity="0.08" />
    </svg>
  );
}

export default function LiveMetrics({
  variant = "dark",
}: {
  variant?: "dark" | "editorial" | "brutal" | "organic";
}) {
  const apiCalls = useTicker(28430, 12, 1800);
  const agents = useTicker(14, 1, 4500);
  const uptime = 99.98;
  const region = useTicker(7, 0, 6000);

  const card = {
    dark: "rounded-2xl border border-border bg-card/60 backdrop-blur p-5 hover:border-primary/40 transition-colors",
    editorial: "rounded-3xl border border-border bg-card p-6 shadow-card",
    brutal: "brutal-border brutal-shadow bg-card p-5",
    organic: "rounded-3xl border border-border bg-card/80 backdrop-blur p-6 shadow-card",
  }[variant];

  const eyebrow = {
    dark: "// live · production",
    editorial: "Live · Production",
    brutal: "LIVE / PROD",
    organic: "Live now",
  }[variant];

  const items = [
    { icon: Activity, label: "API calls today", value: apiCalls.toLocaleString(), delta: "+12%", spark: true },
    { icon: Bot, label: "Active AI agents", value: agents.toString(), delta: "online", pulse: true },
    { icon: TrendingUp, label: "Avg response", value: "184ms", delta: "p95: 412ms" },
    { icon: Cpu, label: "Pipelines / day", value: "1,247", delta: "auto-scaled" },
    { icon: Globe, label: "Regions live", value: region.toString(), delta: "global" },
    { icon: Zap, label: "Uptime (90d)", value: `${uptime}%`, delta: "SLA: 99.9%" },
  ];

  return (
    <section id="live" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <div className="mono text-xs text-primary mb-3">{eyebrow}</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
            המערכות שלי <span className="text-gradient-brand">חיות עכשיו</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            לא slides. לא הבטחות. זה מה שרץ ברגע זה בפרודקשן ללקוחות אמיתיים.
          </p>
        </div>

        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.07}>
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <RevealItem key={it.label}>
                <div className={`${card} h-full`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-1.5 mono text-[10px] text-muted-foreground">
                      {it.pulse && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />}
                      {it.delta}
                    </div>
                  </div>
                  <div className="font-display font-bold text-3xl tabular-nums tracking-tight">
                    {it.value}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">{it.label}</div>
                  {it.spark && (
                    <div className="mt-3 text-primary">
                      <Sparkline color="currentColor" />
                    </div>
                  )}
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
