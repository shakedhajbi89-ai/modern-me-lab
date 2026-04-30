// AI Brief Generator — generates project scope+estimate from a short description
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `אתה עוזר של שקד מ. חג'בי — מהנדס AI, Automation ו-Full-Stack מהשורה הראשונה.
המשימה שלך: לקרוא תיאור קצר של פרויקט מלקוח פוטנציאלי ולהחזיר scope מקצועי, ברור וקצר בעברית.

עליך להחזיר JSON עם המבנה הבא בדיוק (ללא markdown, ללא טקסט נוסף):
{
  "title": "כותרת קצרה לפרויקט",
  "summary": "משפט אחד שמסכם את מה שהבנת",
  "phases": [
    { "name": "שם שלב", "duration": "X שבועות", "deliverables": ["...", "..."] }
  ],
  "stack": ["טכנולוגיה1", "טכנולוגיה2"],
  "estimate_weeks": "X-Y",
  "estimate_range_ils": "₪XX,XXX – ₪YY,YYY",
  "risks": ["סיכון/הנחה 1", "סיכון/הנחה 2"],
  "next_step": "המלצה לצעד הבא"
}

הנחיות:
- 2-4 שלבים, ריאליסטי
- stack: 3-6 כלים רלוונטיים מתוך React, TypeScript, Supabase, Python, OpenAI/Claude, n8n, LangChain, Postgres, Stripe, Vercel
- מחיר: ₪15-50k ל-MVP, ₪50-150k לפרויקט בינוני, ₪150-400k לגדול
- שבועות: בין 2-16
- בעברית, ישיר, מקצועי, ללא buzzwords`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { description } = await req.json();
    if (!description || description.length < 10) {
      return new Response(JSON.stringify({ error: "תיאור קצר מדי" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: description },
        ],
        tools: [{
          type: "function",
          function: {
            name: "create_brief",
            description: "Create a structured project brief",
            parameters: {
              type: "object",
              properties: {
                title: { type: "string" },
                summary: { type: "string" },
                phases: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      duration: { type: "string" },
                      deliverables: { type: "array", items: { type: "string" } }
                    },
                    required: ["name", "duration", "deliverables"]
                  }
                },
                stack: { type: "array", items: { type: "string" } },
                estimate_weeks: { type: "string" },
                estimate_range_ils: { type: "string" },
                risks: { type: "array", items: { type: "string" } },
                next_step: { type: "string" }
              },
              required: ["title", "summary", "phases", "stack", "estimate_weeks", "estimate_range_ils", "risks", "next_step"]
            }
          }
        }],
        tool_choice: { type: "function", function: { name: "create_brief" } }
      }),
    });

    if (response.status === 429) {
      return new Response(JSON.stringify({ error: "יותר מדי בקשות, נסה שוב בעוד דקה" }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    if (response.status === 402) {
      return new Response(JSON.stringify({ error: "אין יותר קרדיטים זמינים" }), {
        status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    if (!response.ok) {
      const t = await response.text();
      console.error("AI gateway:", response.status, t);
      throw new Error("AI request failed");
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall) throw new Error("No tool call in response");
    const brief = JSON.parse(toolCall.function.arguments);

    return new Response(JSON.stringify({ brief }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (e) {
    console.error("brief error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
