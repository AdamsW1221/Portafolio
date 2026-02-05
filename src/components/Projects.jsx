import { useEffect, useMemo, useState } from "react";
import { useIdiom } from "../contexts/ChangeIdiom";
import { FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";
import { Reveal } from "./UI/Reveal";
import { StaggerList, StaggerItem } from "./UI/Stagger";

const GH_USER = "AdamsW1221";
const PAGE_SIZE = 6;

const PROJECT_OVERRIDES = {
  TaskNavigator: {
    title: "TaskNavigator",
    desc_es:
      "App de tareas full-stack con Django REST Framework + React. Incluye CRUD, API REST y UI para gestionar tareas.",
    desc_en:
      "Full-stack task app with Django REST Framework + React. CRUD, REST API and UI to manage tasks.",
    tags: ["Django REST", "React", "CRUD", "API REST", "SQLite"],
    demo: null,
    status: "Public",
    featured: true,
  },
  Ancestral: {
    title: "Ancestral",
    desc_es:
      "Herramienta para verificar si un correo estuvo expuesto en filtraciones, consumiendo una API externa y mostrando resultados de forma clara.",
    desc_en:
      "Tool to check whether an email was exposed in known data breaches, consuming an external API and presenting results clearly.",
    tags: ["JavaScript", "Tailwind", "Security", "API Integration", "Responsive"],
    demo: null,
    status: "Public",
    featured: true,
  },
  ChatSocketIO: {
    title: "ChatSocketIO",
    desc_es:
      "Chat en tiempo real con Node.js + Express + Socket.IO. UI con Tailwind y eventos del sistema (usuarios conectados/desconectados).",
    desc_en:
      "Real-time chat with Node.js + Express + Socket.IO. Tailwind UI and system events (connect/disconnect).",
    tags: ["Node.js", "Express", "Socket.IO", "Real-time", "Tailwind"],
    demo: null,
    status: "Public",
    featured: true,
  },
  "Ip-Locator": {
    title: "IP Locator",
    desc_es:
      "CLI en Python para consultar datos de IP pública. Integra fuentes online y muestra la información en consola de forma ordenada.",
    desc_en:
      "Python CLI to fetch public IP information. Integrates online sources and prints clean console output.",
    tags: ["Python", "CLI", "Requests", "Automation"],
    demo: null,
    status: "Public",
    featured: true,
  },
  FriendChat: {
    title: "FriendChat",
    desc_es:
      "Chat por consola en Python usando sockets para comunicación en tiempo real (cliente/servidor).",
    desc_en:
      "Console chat in Python using sockets for real-time client/server communication.",
    tags: ["Python", "Sockets", "Networking", "CLI"],
    demo: null,
    status: "Public",
    featured: false,
  },
  ChatbotIA: {
    title: "ChatbotIA",
    desc_es:
      "Chatbot en Python que utiliza la API de OpenAI para generar respuestas a partir de prompts del usuario.",
    desc_en:
      "Python chatbot using the OpenAI API to generate responses from user prompts.",
    tags: ["Python", "OpenAI API", "CLI", "AI"],
    demo: null,
    status: "Public",
    featured: false,
  },
};

function guessTags(repo) {
  const name = (repo.name || "").toLowerCase();
  const lang = repo.language || "";

  const tags = [];
  if (lang) tags.push(lang);

  if (name.includes("django")) tags.push("Django");
  if (name.includes("next")) tags.push("Next.js");
  if (name.includes("react")) tags.push("React");
  if (name.includes("socket")) tags.push("Sockets");
  if (name.includes("chat")) tags.push("Chat");
  if (name.includes("api")) tags.push("API");
  if (name.includes("cli")) tags.push("CLI");

  return Array.from(new Set(tags)).slice(0, 6);
}

function formatDateOnly(iso) {
  try {
    return new Date(iso).toLocaleDateString();
  } catch {
    return iso;
  }
}

function Tag({ children }) {
  return (
    <span className="px-3 py-1 rounded-md bg-[#0c1322] text-gray-200 text-sm border border-gray-700">
      {children}
    </span>
  );
}

function ButtonLink({ href, children, disabled }) {
  if (disabled) {
    return (
      <span className="px-3 py-2 rounded-md bg-[#0c1322] text-gray-500 border border-gray-700 cursor-not-allowed inline-flex items-center gap-2 text-sm">
        {children}
      </span>
    );
  }

  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="px-3 py-2 rounded-md bg-[#0c1322] text-white border border-gray-700 hover:border-indigo-500 transition-colors inline-flex items-center gap-2 text-sm"
    >
      {children}
    </motion.a>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-[#0c1322] border border-gray-800 rounded-md p-4 animate-pulse">
      <div className="flex items-start justify-between gap-3">
        <div className="space-y-2 w-full">
          <div className="h-4 bg-gray-800 rounded w-1/3"></div>
          <div className="h-3 bg-gray-800 rounded w-1/5"></div>
        </div>
        <div className="flex gap-2">
          <div className="h-9 w-20 bg-gray-800 rounded"></div>
          <div className="h-9 w-20 bg-gray-800 rounded"></div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 bg-gray-800 rounded w-full"></div>
        <div className="h-3 bg-gray-800 rounded w-5/6"></div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        <div className="h-7 w-20 bg-gray-800 rounded"></div>
        <div className="h-7 w-24 bg-gray-800 rounded"></div>
        <div className="h-7 w-16 bg-gray-800 rounded"></div>
      </div>
    </div>
  );
}

export const Projects = () => {
  const { currentIdiom } = useIdiom();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  async function fetchRepos() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=updated`
      );

      if (!res.ok) throw new Error("GitHub API error");
      const data = await res.json();

      const filtered = (data || [])
        .filter((r) => !r.fork)
        .filter((r) => r.name.toLowerCase() !== GH_USER.toLowerCase())
        .filter((r) => !r.archived);

      setRepos(filtered);
    } catch (e) {
      setError(
        currentIdiom === "es"
          ? "No se pudieron cargar los proyectos desde GitHub."
          : "Could not load projects from GitHub."
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mergedProjects = useMemo(() => {
    const list = repos.map((r) => {
      const ov = PROJECT_OVERRIDES[r.name] || null;

      const title = ov?.title || r.name;
      const desc_es =
        ov?.desc_es ||
        (r.description ? r.description : "Proyecto en GitHub (descripción pendiente).");
      const desc_en =
        ov?.desc_en ||
        (r.description ? r.description : "GitHub project (description pending).");

      const tags = ov?.tags || guessTags(r);
      const status = ov?.status || (r.private ? "Private" : "Public");

      return {
        key: r.name,
        title,
        desc_es,
        desc_en,
        tags,
        repo: r.html_url,
        demo: ov?.demo || (r.homepage ? r.homepage : null),
        status,
        featured: Boolean(ov?.featured),
        language: r.language || null,
        updated_at: r.updated_at,
        pushed_at: r.pushed_at,
      };
    });

    const sorted = list.sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      const da = new Date(a.pushed_at || a.updated_at).getTime();
      const db = new Date(b.pushed_at || b.updated_at).getTime();
      return db - da;
    });

    return sorted;
  }, [repos]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(mergedProjects.length / PAGE_SIZE));
  }, [mergedProjects.length]);

  const pageItems = useMemo(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    return mergedProjects.slice(from, to);
  }, [mergedProjects, page]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [totalPages, page]);

  return (
    <div className="divide-y divide-gray-800 mt-5">
      <Reveal className="mb-5 flex items-center justify-center lg:justify-start">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">
          {currentIdiom === "es" ? "Proyectos" : "Projects"}
        </h1>
      </Reveal>

      <div className="px-3 pb-10">
        <Reveal className="flex items-center justify-between gap-3 mt-6">
          <p className="text-gray-300 text-center lg:text-left italic leading-7">
            {currentIdiom === "es"
              ? "estos son mis proyectos mas recientes"
              : "these are my most recent projects"}
          </p>

          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={fetchRepos}
            className="px-3 py-2 rounded-md bg-[#0c1322] text-white border border-gray-700 hover:border-indigo-500 transition-colors text-sm"
          >
            {currentIdiom === "es" ? "Actualizar" : "Refresh"}
          </motion.button>
        </Reveal>

        {error ? (
          <Reveal>
            <div className="mt-6 bg-[#0c1322] border border-gray-800 rounded-md p-4">
              <p className="text-red-400">{error}</p>
            </div>
          </Reveal>
        ) : null}

        <StaggerList className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : pageItems.map((p) => (
                <StaggerItem key={p.key}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.99 }}
                    transition={{ duration: 0.2 }}
                    className="bg-[#0c1322] border border-gray-800 rounded-md p-4 hover:border-indigo-500/60 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-white font-bold text-lg">{p.title}</h3>

                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <p className="text-indigo-500 text-sm font-semibold italic">
                            {p.status}
                          </p>

                          {p.language ? (
                            <span className="text-xs px-2 py-1 rounded border border-gray-700 text-gray-300">
                              {p.language}
                            </span>
                          ) : null}

                          {p.updated_at ? (
                            <span className="text-xs text-gray-500 italic">
                              {currentIdiom === "es" ? "Actualizado:" : "Updated:"}{" "}
                              {formatDateOnly(p.updated_at)}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <ButtonLink href={p.repo} disabled={!p.repo}>
                          <FaGithub className="w-4 h-4" />
                          {currentIdiom === "es" ? "Repo" : "Repo"}
                        </ButtonLink>
                      </div>
                    </div>

                    <p className="text-gray-300 mt-3 leading-7">
                      {currentIdiom === "es" ? p.desc_es : p.desc_en}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {p.tags.map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
        </StaggerList>

        {!loading && mergedProjects.length > PAGE_SIZE ? (
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
        ) : null}
      </div>
    </div>
  );
};
