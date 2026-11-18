import { createClient } from "@supabase/supabase-js";

const KEEPALIVE_NAME = "__keepalive__";

export default async function handler(req, res) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({
      ok: false,
      error: "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in Vercel environment variables",
    });
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  try {
    const { data, error: insertError } = await supabase
      .from("portfolio_comments")
      .insert({
        name: KEEPALIVE_NAME,
        message: `Vercel Cron keep-alive ${new Date().toISOString()}`,
      })
      .select("id")
      .single();

    if (insertError) throw insertError;

    if (data?.id) {
      await supabase.from("portfolio_comments").delete().eq("id", data.id);
    }

    await supabase.from("portfolio_comments").delete().eq("name", KEEPALIVE_NAME);

    return res.status(200).json({
      ok: true,
      message: "Daily keep-alive comment inserted and deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error.message || "Error running keep-alive",
    });
  }
}
