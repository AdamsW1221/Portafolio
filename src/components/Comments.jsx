import { useEffect, useMemo, useState } from "react";
import { useIdiom } from "../contexts/ChangeIdiom";
import { supabase } from "../lib/supabaseClient";
import { CommentsLoader } from "./UI/CommentsLoader";

import { motion } from "framer-motion";
import { Reveal } from "./UI/Reveal";
import { StaggerList, StaggerItem } from "./UI/Stagger";

const PAGE_SIZE = 10;
const MAX_COMMENTS = 100;
const COOLDOWN_MS = 25_000;

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString();
  } catch {
    return iso;
  }
}

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-3 rounded-md font-semibold transition-colors
      bg-indigo-600 hover:bg-indigo-500 text-white disabled:bg-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed
      ${props.className ?? ""}`}
    >
      {children}
    </button>
  );
}

export const Comments = () => {
  const { currentIdiom } = useIdiom();

  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const [items, setItems] = useState([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");
  const [cooldownUntil, setCooldownUntil] = useState(0);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(total / PAGE_SIZE)),
    [total]
  );

  const formDisabled = total >= MAX_COMMENTS;

  async function fetchTotal() {
    const { count, error } = await supabase
      .from("portfolio_comments")
      .select("id", { count: "exact", head: true });

    if (error) throw error;
    return count ?? 0;
  }

  async function fetchPage(p) {
    const from = (p - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, error } = await supabase
      .from("portfolio_comments")
      .select("id,name,message,created_at")
      .order("created_at", { ascending: false })
      .range(from, to);

    if (error) throw error;
    return data ?? [];
  }

  async function refresh(p = page) {
    setLoading(true);
    setError("");

    const timer = setTimeout(() => setShowLoader(true), 600);

    try {
      const [cnt, data] = await Promise.all([fetchTotal(), fetchPage(p)]);
      setTotal(cnt);
      setItems(data);

      const newTotalPages = Math.max(1, Math.ceil(cnt / PAGE_SIZE));
      if (p > newTotalPages) {
        setPage(newTotalPages);
        const data2 = await fetchPage(newTotalPages);
        setItems(data2);
      }
    } catch (e) {
      setError(
        currentIdiom === "es"
          ? "No se pudieron cargar los comentarios."
          : "Could not load comments."
      );
    } finally {
      clearTimeout(timer);
      setShowLoader(false);
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    refresh(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    if (formDisabled) return;

    const now = Date.now();
    if (now < cooldownUntil) {
      setError(
        currentIdiom === "es"
          ? "Espera un momento antes de publicar otro comentario."
          : "Please wait a bit before posting again."
      );
      return;
    }

    const cleanName = name.trim();
    const cleanMsg = message.trim();

    if (cleanName.length < 2 || cleanName.length > 40) {
      setError(
        currentIdiom === "es"
          ? "El nombre debe tener entre 2 y 40 caracteres."
          : "Name must be 2–40 characters."
      );
      return;
    }

    if (cleanMsg.length < 3 || cleanMsg.length > 300) {
      setError(
        currentIdiom === "es"
          ? "El comentario debe tener entre 3 y 300 caracteres."
          : "Comment must be 3–300 characters."
      );
      return;
    }

    setSubmitting(true);
    try {
      const cnt = await fetchTotal();
      if (cnt >= MAX_COMMENTS) {
        setTotal(cnt);
        setError(
          currentIdiom === "es"
            ? "Se alcanzó el máximo de comentarios."
            : "Maximum comments reached."
        );
        return;
      }

      const { error } = await supabase.from("portfolio_comments").insert({
        name: cleanName,
        message: cleanMsg,
      });

      if (error) throw error;

      setName("");
      setMessage("");
      setCooldownUntil(Date.now() + COOLDOWN_MS);

      setPage(1);
      await refresh(1);
    } catch (e) {
      setError(
        currentIdiom === "es"
          ? "No se pudo publicar. Intenta de nuevo."
          : "Could not publish. Try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="divide-y divide-gray-800 mt-5">
      <Reveal className="mb-5 flex items-center justify-center lg:justify-start">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">
          {currentIdiom === "es" ? "Comentarios" : "Comments"}
        </h1>
      </Reveal>

      <div className="px-3 pb-10">
        <Reveal className="flex items-center justify-between gap-3 mt-6">
          <p className="text-gray-300 italic leading-7">
            {currentIdiom === "es"
              ? `Mostrando ${Math.min(total, MAX_COMMENTS)} de ${MAX_COMMENTS} (recientes → antiguos).`
              : `Showing ${Math.min(total, MAX_COMMENTS)} of ${MAX_COMMENTS} (newest → oldest).`}
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => refresh(page)}
            className="px-3 py-2 rounded-md bg-[#0c1322] text-white border border-gray-700 hover:border-indigo-500 transition-colors text-sm"
          >
            {currentIdiom === "es" ? "Actualizar" : "Refresh"}
          </motion.button>
        </Reveal>

        {!formDisabled ? (
          <Reveal>
            <form
              onSubmit={onSubmit}
              className="mt-6 bg-[#0c1322] border border-gray-800 rounded-md p-4"
            >
              <h3 className="text-white font-bold">
                {currentIdiom === "es" ? "Deja un comentario" : "Leave a comment"}
              </h3>

              <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#121c34] border border-gray-700 rounded-md px-3 py-3 text-white outline-none focus:border-indigo-500 transition-colors"
                  placeholder={currentIdiom === "es" ? "Tu nombre" : "Your name"}
                  maxLength={40}
                  disabled={submitting}
                />

                <div className="text-right text-gray-500 text-xs lg:flex lg:items-center lg:justify-end">
                  {currentIdiom === "es" ? "Máx. 100 comentarios." : "Max 100 comments."}
                </div>
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-3 w-full bg-[#121c34] border border-gray-700 rounded-md px-3 py-3 text-white outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder={
                  currentIdiom === "es"
                    ? "Escribe algo (máx. 300 caracteres)..."
                    : "Write something (max 300 chars)..."
                }
                maxLength={300}
                disabled={submitting}
              />

              {error ? <p className="text-red-400 mt-3 text-sm">{error}</p> : null}

              <div className="mt-4 flex items-center justify-end">
                <Button type="submit" disabled={submitting}>
                  {submitting
                    ? currentIdiom === "es"
                      ? "Publicando..."
                      : "Posting..."
                    : currentIdiom === "es"
                    ? "Publicar"
                    : "Publish"}
                </Button>
              </div>
            </form>
          </Reveal>
        ) : (
          <Reveal>
            <div className="mt-6 bg-[#0c1322] border border-gray-800 rounded-md p-4">
              <p className="text-gray-300 leading-7">
                {currentIdiom === "es"
                  ? "Se alcanzó el máximo de 100 comentarios. Solo se muestran los existentes."
                  : "The maximum of 100 comments has been reached. Only existing comments are shown."}
              </p>
            </div>
          </Reveal>
        )}

        <div className="mt-6 space-y-3">
          {loading && showLoader ? (
            <CommentsLoader
              title={currentIdiom === "es" ? "Despertando base de datos..." : "Waking up database..."}
              subtitle={
                currentIdiom === "es"
                  ? "Si estaba inactiva, puede tardar unos segundos."
                  : "If it was inactive, it may take a few seconds."
              }
            />
          ) : loading ? (
            <Reveal>
              <div className="bg-[#0c1322] border border-gray-800 rounded-md p-4">
                <p className="text-gray-300">{currentIdiom === "es" ? "Cargando..." : "Loading..."}</p>
              </div>
            </Reveal>
          ) : items.length === 0 ? (
            <Reveal>
              <div className="bg-[#0c1322] border border-gray-800 rounded-md p-4">
                <p className="text-gray-300">
                  {currentIdiom === "es"
                    ? "Todavía no hay comentarios. Sé el primero."
                    : "No comments yet. Be the first."}
                </p>
              </div>
            </Reveal>
          ) : (
            <StaggerList className="space-y-3">
              {items.map((c) => (
                <StaggerItem key={c.id}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#0c1322] border border-gray-800 rounded-md p-4 hover:border-indigo-500/60 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-indigo-500 italic font-bold">{c.name}</p>
                      <p className="text-gray-500 text-xs">{formatDate(c.created_at)}</p>
                    </div>
                    <p className="text-gray-300 mt-2 leading-7 whitespace-pre-wrap italic">
                      {c.message}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerList>
          )}
        </div>

        <Reveal className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="px-3 py-2 rounded-md bg-[#0c1322] text-white border border-gray-700 hover:border-indigo-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
          >
            {currentIdiom === "es" ? "Anterior" : "Prev"}
          </button>

          <span className="text-gray-300 text-sm">
            {currentIdiom === "es" ? "Página" : "Page"} {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page >= totalPages}
            className="px-3 py-2 rounded-md bg-[#0c1322] text-white border border-gray-700 hover:border-indigo-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
          >
            {currentIdiom === "es" ? "Siguiente" : "Next"}
          </button>
        </Reveal>
      </div>
    </div>
  );
};
