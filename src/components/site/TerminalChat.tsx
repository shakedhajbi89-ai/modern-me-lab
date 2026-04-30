import { useEffect, useRef, useState } from "react";
import { Send, Bot, User, Sparkles, X, MessageSquare } from "lucide-react";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "מה שקד יכול לבנות לי?",
  "כמה זמן לוקח לבנות AI agent?",
  "איך מתחילים?",
];

export default function TerminalChat({
  variant = "dark",
}: {
  variant?: "dark" | "editorial" | "brutal" | "organic";
}) {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content: "היי, אני Shaked.AI 🤖 — שאל אותי כל דבר על שקד, על מה הוא יכול לבנות, או איך מתחילים פרויקט.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send(text: string) {
    if (!text.trim() || loading) return;
    const userMsg: Msg = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat`;
      const resp = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].filter(m => m.role !== "assistant" || messages.indexOf(m) > 0),
        }),
      });

      if (resp.status === 429) {
        setMessages((m) => [...m, { role: "assistant", content: "⚠️ יותר מדי בקשות. נסה שוב בעוד דקה." }]);
        setLoading(false);
        return;
      }
      if (resp.status === 402) {
        setMessages((m) => [...m, { role: "assistant", content: "⚠️ מצטער, נגמרו הקרדיטים של ה-AI כרגע. דבר עם שקד בוואטסאפ!" }]);
        setLoading(false);
        return;
      }
      if (!resp.ok || !resp.body) throw new Error("stream failed");

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";
      setMessages((m) => [...m, { role: "assistant", content: "" }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        let nl: number;
        while ((nl = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, nl);
          buffer = buffer.slice(nl + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") break;
          try {
            const p = JSON.parse(json);
            const c = p.choices?.[0]?.delta?.content;
            if (c) {
              acc += c;
              setMessages((m) => {
                const next = [...m];
                next[next.length - 1] = { role: "assistant", content: acc };
                return next;
              });
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      setMessages((m) => [...m, { role: "assistant", content: "משהו השתבש. נסה שוב או דבר איתי בוואטסאפ." }]);
    } finally {
      setLoading(false);
    }
  }

  // Variant styling
  const wrap = {
    dark: "rounded-2xl border border-border bg-card overflow-hidden glow-border",
    editorial: "rounded-[2rem] border border-border bg-card overflow-hidden shadow-card",
    brutal: "brutal-border brutal-shadow bg-card overflow-hidden",
    organic: "rounded-[2rem] border border-border bg-card overflow-hidden shadow-card",
  }[variant];

  const titleClass = {
    dark: "mono text-xs",
    editorial: "text-sm tracking-wider",
    brutal: "mono text-xs uppercase font-black",
    organic: "text-sm",
  }[variant];

  return (
    <section id="chat" className="relative py-24">
      <div className="container-narrow">
        <div className="text-center mb-10">
          <div className="mono text-xs text-primary mb-3">// ask me anything</div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]">
            דבר עם <span className="text-gradient-brand">Shaked.AI</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            עוזר AI אמיתי שמכיר את שקד, את הפרויקטים, ואת מה שאפשר לבנות. שאל מה שרק תרצה.
          </p>
        </div>

        <div className={wrap}>
          {/* Terminal header */}
          <div className="flex items-center justify-between border-b border-border bg-secondary/40 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
              </div>
              <span className={`${titleClass} text-muted-foreground ml-3`}>shaked.ai — assistant.sh</span>
            </div>
            <div className="flex items-center gap-1.5 mono text-[10px] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              connected
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-[420px] overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`shrink-0 h-8 w-8 rounded-lg flex items-center justify-center ${
                  m.role === "user" ? "bg-secondary" : "bg-gradient-brand text-primary-foreground"
                }`}>
                  {m.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className={`max-w-[78%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-secondary text-foreground"
                    : "bg-primary/10 text-foreground border border-primary/20"
                }`}>
                  {m.content || (loading && i === messages.length - 1 ? <span className="inline-flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" style={{ animationDelay: "300ms" }} />
                  </span> : null)}
                </div>
              </div>
            ))}
          </div>

          {/* Suggestions */}
          {messages.length < 3 && (
            <div className="px-5 pb-3 flex flex-wrap gap-2">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  disabled={loading}
                  className="text-xs rounded-full border border-border bg-secondary/50 hover:bg-secondary px-3 py-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Sparkles className="inline h-3 w-3 mr-1 text-primary" />
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="border-t border-border p-3 flex items-center gap-2 bg-card"
          >
            <span className="mono text-primary text-sm pl-2">$</span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="שאל אותי כל דבר..."
              disabled={loading}
              className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="h-9 w-9 rounded-lg bg-gradient-brand text-primary-foreground flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
