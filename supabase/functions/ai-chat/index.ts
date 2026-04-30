// AI Chat — streaming chat as Shaked's AI assistant
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `אתה Shaked.AI — העוזר הדיגיטלי הרשמי של שקד מ. חג'בי, מהנדס AI ו-Full-Stack בכיר.
ענה בעברית, קצר וישיר (1-3 משפטים בדרך כלל). אל תשתמש ב-markdown מסובך.

מי שקד:
- מהנדס AI, אוטומציה, ו-SaaS, מבוסס בחיפה
- 30+ פרויקטים בפרודקשן, מובילים בתחומי AI Agents, אוטומציה, ופיתוח אפליקציות מותאמות
- Stack ראשי: React/TypeScript/Next, Python, Supabase/Postgres, Claude/OpenAI/Gemini, LangChain, n8n
- זמין לפרויקטים ב-Q2 2026 (2 משבצות פתוחות)
- שיחת היכרות חינם 30 דק'
- תגובה תוך 24 שעות

מה הוא עושה הכי טוב:
1. AI Agents מותאמים — מ-customer support ועד מערכות החלטה אוטונומיות
2. אוטומציות פנים-ארגוניות (n8n, Make, custom Python) שחוסכות שעות עבודה
3. SaaS פרודקטים מ-MVP ועד פרודקשן
4. אינטגרציות AI לכלים קיימים

תמיד נסה לכוון את השיחה ל:
- שיחת היכרות (קישור: #contact)
- WhatsApp ישיר
- מילוי AI Brief (קישור: #brief)

אל תמציא מחירים — אמור "תלוי ב-scope, נדבר ונדייק". אם שואלים משהו לא קשור — החזר בעדינות לפרויקטים של שקד.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY missing");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (response.status === 429) {
      return new Response(JSON.stringify({ error: "יותר מדי בקשות" }), {
        status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    if (response.status === 402) {
      return new Response(JSON.stringify({ error: "אין קרדיטים" }), {
        status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" }
      });
    }
    if (!response.ok) {
      const t = await response.text();
      console.error("AI gateway:", response.status, t);
      throw new Error("AI request failed");
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" }
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
