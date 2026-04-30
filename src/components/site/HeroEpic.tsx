import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ArrowLeft, Sparkles, MessageCircle, Play } from "lucide-react";
import NetworkGraph3D from "./NetworkGraph3D";

const stats = [
  { v: "30+", l: "פרויקטים בהפקה" },
  { v: "8x", l: "האצה ממוצעת" },
  { v: "99.98%", l: "Uptime SLA" },
  { v: "24h", l: "תגובה ראשונית" },
];

export default function HeroEpic() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 min-h-[100vh] flex flex-col justify-center">
      {/* 3D Network background */}
      <div className="absolute inset-0">
        <NetworkGraph3D />
      </div>
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-background/40 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="container-narrow relative">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 rounded-full glass px-4 py-2 text-xs mono">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-foreground/90">2 משבצות פתוחות · Q2 2026</span>
            <span className="h-3 w-px bg-border" />
            <Sparkles className="h-3 w-3 text-primary" />
            <span className="text-muted-foreground">AI · Automation · Full-Stack</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-center font-display font-bold tracking-tight text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] animate-fade-in-up">
          <span className="block text-foreground">בונה מערכות AI</span>
          <span className="block mt-2">
            <span className="text-gradient-brand">שעובדות בשקט.</span>
          </span>
          <span className="block mt-2 text-foreground/85 text-3xl sm:text-4xl lg:text-5xl">
            ומייצרות תוצאה <em className="font-italic-serif text-primary">בקול גדול</em>.
          </span>
        </h1>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: "150ms" }}>
          מהנדס AI ו-Full-Stack שהופך תהליכים מתישים למערכות אוטונומיות יציבות.
          לא prompts זרוקים — <span className="text-foreground">מערכות מהונדסות לפרודקשן</span>.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#brief"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-base font-medium text-primary-foreground shadow-glow transition-all hover:scale-[1.03] hover:shadow-[0_0_60px_hsl(var(--primary)/0.6)]"
          >
            <Sparkles className="h-4 w-4" />
            <span className="relative">צור Brief לפרויקט שלך</span>
            <ArrowLeft className="relative h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>
          <a
            href="#chat"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/40 backdrop-blur px-7 py-4 text-base font-medium text-foreground transition-all hover:border-primary/50 hover:bg-card"
          >
            <MessageCircle className="h-4 w-4 text-primary" />
            דבר עם Shaked.AI
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px rounded-3xl border border-border bg-border/60 overflow-hidden glow-border animate-fade-in-up" style={{ animationDelay: "450ms" }}>
          {stats.map((s) => (
            <div key={s.l} className="bg-card/80 backdrop-blur p-6 text-center group hover:bg-card transition-colors">
              <div className="font-display font-bold text-3xl lg:text-4xl text-gradient-brand">{s.v}</div>
              <div className="mt-2 text-xs text-muted-foreground leading-snug">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
