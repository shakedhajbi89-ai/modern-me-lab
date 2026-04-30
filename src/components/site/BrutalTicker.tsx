import { Sparkles, Zap, Rocket, Bot, Star, Flame } from "lucide-react";

const items = [
  { i: Sparkles, t: "AI AGENTS IN PRODUCTION" },
  { i: Zap, t: "8X FASTER DELIVERY" },
  { i: Rocket, t: "SHIPPING WEEKLY" },
  { i: Bot, t: "CLAUDE · GPT · GEMINI" },
  { i: Star, t: "30+ PROJECTS DELIVERED" },
  { i: Flame, t: "Q2 2026 — 2 SLOTS LEFT" },
];

export default function BrutalTicker({
  bg = "var(--brutal-pink)",
  reverse = false,
}: { bg?: string; reverse?: boolean }) {
  const all = [...items, ...items, ...items];
  return (
    <div
      className="border-y-2 border-foreground overflow-hidden py-4"
      style={{ background: `hsl(${bg})` }}
    >
      <div
        className={`flex gap-8 whitespace-nowrap ${reverse ? "animate-marquee-reverse" : "animate-marquee-fast"}`}
      >
        {all.map((it, i) => {
          const Icon = it.i;
          return (
            <div key={i} className="shrink-0 inline-flex items-center gap-3 font-display text-2xl uppercase">
              <Icon className="h-6 w-6" />
              <span>{it.t}</span>
              <span className="text-foreground">/</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
