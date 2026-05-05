import { MessageSquareText, Repeat2, UserCheck, ShoppingCart, BarChart3, MailOpen } from "lucide-react";

const tools = [
  { icon: MessageSquareText, label: "AI Chatbot" },
  { icon: Repeat2, label: "Workflow Automation" },
  { icon: UserCheck, label: "Client Management" },
  { icon: ShoppingCart, label: "Orders & Payments" },
  { icon: BarChart3, label: "Reports" },
  { icon: MailOpen, label: "Email Actions" },
];

export default function ToolsShowcase() {
  return (
    <section id="tools" className="relative py-16 md:py-24 overflow-hidden">
      <div className="container-narrow">
        {/* Mobile: horizontal carousel */}
        <div className="md:hidden -mx-6 px-6 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4" style={{ scrollbarWidth: "none" }}>
          {tools.map((t) => (
            <ToolCard key={t.label} {...t} className="snap-start shrink-0" style={{ width: "240px" }} />
          ))}
        </div>

        {/* Desktop: floating grid 3x2 */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {tools.map((t, i) => (
            <ToolCard
              key={t.label}
              {...t}
              className="hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.10)]"
              style={{
                animation: `tool-float 4s ease-in-out ${(i * 0.6).toFixed(2)}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes tool-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}

function ToolCard({
  icon: Icon,
  label,
  className = "",
  style,
}: {
  icon: any;
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-6 flex flex-col items-center justify-center gap-3 text-center transition-all duration-300 ${className}`}
      style={style}
    >
      <div className="flex h-10 w-10 items-center justify-center text-[#0066ff]">
        <Icon className="h-10 w-10" strokeWidth={1.5} />
      </div>
      <div className="text-sm font-semibold text-foreground" dir="ltr">{label}</div>
    </div>
  );
}
