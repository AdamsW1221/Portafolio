import { supabase } from "./supabaseClient";

export const KEEPALIVE_NAME = "__keepalive__";
const STORAGE_KEY = "portfolio_supabase_keepalive_date";

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getMsUntilMidnight() {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0,
    0,
    0,
    0
  );
  return midnight.getTime() - now.getTime();
}

/**
 * Inserta 1 comentario temporal en `portfolio_comments` y lo elimina de inmediato
 * para mantener activa la base de datos de Supabase.
 */
export async function runKeepAliveComment() {
  try {
    const { data, error: insertError } = await supabase
      .from("portfolio_comments")
      .insert({
        name: KEEPALIVE_NAME,
        message: `Keep-alive ping ${new Date().toISOString()}`,
      })
      .select("id")
      .single();

    if (insertError) throw insertError;

    if (data?.id) {
      await supabase.from("portfolio_comments").delete().eq("id", data.id);
    }

    // Limpieza por nombre en caso de que algún registro temporal previo haya quedado pendiente
    await supabase
      .from("portfolio_comments")
      .delete()
      .eq("name", KEEPALIVE_NAME);

    try {
      localStorage.setItem(STORAGE_KEY, getTodayKey());
    } catch {
      // Ignorar si localStorage no está disponible
    }

    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
}

/**
 * Programa la ejecución diaria a las 12:00 AM (medianoche)
 * y realiza 1 ping diario al abrir el portafolio si aún no se ha ejecutado hoy.
 */
export function startDailyKeepAlive() {
  let timeoutId = null;

  try {
    const lastRunDate = localStorage.getItem(STORAGE_KEY);
    if (lastRunDate !== getTodayKey()) {
      runKeepAliveComment();
    }
  } catch {
    runKeepAliveComment();
  }

  const scheduleNextMidnight = () => {
    const delay = getMsUntilMidnight();
    timeoutId = setTimeout(async () => {
      await runKeepAliveComment();
      scheduleNextMidnight();
    }, delay);
  };

  scheduleNextMidnight();

  return () => {
    if (timeoutId) clearTimeout(timeoutId);
  };
}
