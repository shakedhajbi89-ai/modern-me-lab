const tools = [
  "Claude", "OpenAI", "Gemini", "Python", "TypeScript", "React", "Next.js", "Vite",
  "Node.js", "Supabase", "Postgres", "Tailwind", "Framer Motion", "n8n", "Make",
  "Zapier", "Stripe", "Vercel", "Cloudflare", "LangChain", "Pinecone", "Redis",
];

export default function TechStack() {
  return (
    <section className="relative py-20 border-y border-border bg-card/40 overflow-hidden">
      <div className="container-narrow mb-10">
        <div className="text-center">
          <div className="mono text-xs text-primary mb-3">// stack</div>
          <p className="text-sm text-muted-foreground">
            הכלים שאני עובד איתם ביום-יום — רק כאלה שעמדו במבחן הפרודקשן
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...tools, ...tools].map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-5 py-2.5 mono text-sm text-foreground/90 hover:border-primary/40 hover:text-primary transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
