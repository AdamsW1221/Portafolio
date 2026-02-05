import { useMemo, useState } from "react";
import { useIdiom } from "../contexts/ChangeIdiom";
import { FaGithub, FaLinkedin, FaDev } from "react-icons/fa";
import { LuCopy, LuMail } from "react-icons/lu";
import emailjs from "@emailjs/browser";

import { motion } from "framer-motion";
import { Reveal } from "./UI/Reveal";
import { StaggerList, StaggerItem } from "./UI/Stagger";

const EMAIL = "adamswever122132@gmail.com";

const LINKS = [
  { name: "GitHub", href: "https://github.com/AdamsW1221", Icon: FaGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/adamsw1221/", Icon: FaLinkedin },
  { name: "Dev.to", href: "https://dev.to/adamsw1221", Icon: FaDev },
];

function LinkButton({ href, Icon, label }) {
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
      <Icon className="w-4 h-4" />
      {label}
    </motion.a>
  );
}

export const Contact = () => {
  const { currentIdiom } = useIdiom();

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const emailJsReady = useMemo(() => {
    return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
  }, [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY]);

  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // ignore
    }
  };

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    const cleanName = name.trim();
    const cleanEmail = fromEmail.trim();
    const cleanMsg = message.trim();

    setSending(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: cleanName,
          email: cleanEmail,
          message: cleanMsg,
          title: "Contact Us",
          time: new Date().toLocaleString(),
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus({
        type: "success",
        text:
          currentIdiom === "es"
            ? "Mensaje enviado. Te responderé lo antes posible."
            : "Message sent. I’ll reply as soon as possible.",
      });

      setName("");
      setFromEmail("");
      setMessage("");
    } catch (err) {
      setStatus({
        type: "error",
        text:
          currentIdiom === "es"
            ? "No se pudo enviar. Intenta de nuevo."
            : "Could not send. Try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="divide-y divide-gray-800 mt-5">
      <Reveal className="mb-5 flex items-center justify-center lg:justify-start">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-white to-40% text-3xl font-semibold ml-5">
          {currentIdiom === "es" ? "Contáctame" : "Contact"}
        </h1>
      </Reveal>

      <div className="px-3 pb-10">
        <Reveal>
          <p className="text-gray-300 mt-6 text-center lg:text-left italic leading-7">
            {currentIdiom === "es"
              ? "Si te interesa colaborar o tienes una oportunidad, escríbeme."
              : "If you'd like to collaborate or have an opportunity, reach out."}
          </p>
        </Reveal>

        <StaggerList className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0c1322] border border-gray-800 rounded-md p-4 hover:border-indigo-500/60 transition-colors"
            >
              <h3 className="text-white font-bold flex items-center gap-2">
                <LuMail className="w-5 h-5 text-indigo-500" />
                {currentIdiom === "es" ? "Email" : "Email"}
              </h3>

              <div className="mt-3 flex items-center justify-between gap-3">
                <p className="text-gray-200 font-semibold break-all">{EMAIL}</p>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={copyEmail}
                  className="px-3 py-2 rounded-md bg-[#121c34] text-white border border-gray-700 hover:border-indigo-500 transition-colors inline-flex items-center gap-2 text-sm"
                >
                  <LuCopy className="w-4 h-4" />
                  {currentIdiom === "es" ? "Copiar" : "Copy"}
                </motion.button>
              </div>

              <p className="text-gray-400 mt-3 text-sm leading-6">
                {currentIdiom === "es"
                  ? "Respondo más rápido si incluyes: rol, stack y alcance del proyecto."
                  : "Faster replies if you include: role, stack and project scope."}
              </p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0c1322] border border-gray-800 rounded-md p-4 hover:border-indigo-500/60 transition-colors"
            >
              <h3 className="text-white font-bold">
                {currentIdiom === "es" ? "Redes" : "Links"}
              </h3>

              <div className="mt-4 flex flex-wrap gap-2">
                {LINKS.map((l) => (
                  <LinkButton key={l.name} href={l.href} Icon={l.Icon} label={l.name} />
                ))}
              </div>

              <p className="text-gray-400 mt-3 text-sm leading-6">
                {currentIdiom === "es"
                  ? "También puedes ver mis proyectos y artículos."
                  : "You can also check my projects and posts."}
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerList>

        <Reveal>
          <div className="mt-6 bg-[#0c1322] border border-gray-800 rounded-md p-4">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-white font-bold">
                {currentIdiom === "es" ? "Mensaje" : "Message"}
              </h3>

              {!emailJsReady ? (
                <span className="text-xs px-2 py-1 rounded border border-gray-700 text-gray-400 italic">
                  {currentIdiom === "es" ? "EmailJS no configurado" : "EmailJS not configured"}
                </span>
              ) : null}
            </div>

            <form onSubmit={onSubmit} className="mt-4 grid grid-cols-1 gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-[#121c34] border border-gray-700 rounded-md px-3 py-3 text-white outline-none focus:border-indigo-500 transition-colors"
                placeholder={currentIdiom === "es" ? "Tu nombre" : "Your name"}
                maxLength={50}
                disabled={sending}
              />

              <input
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                className="bg-[#121c34] border border-gray-700 rounded-md px-3 py-3 text-white outline-none focus:border-indigo-500 transition-colors"
                placeholder={currentIdiom === "es" ? "Tu email" : "Your email"}
                maxLength={120}
                disabled={sending}
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="bg-[#121c34] border border-gray-700 rounded-md px-3 py-3 text-white outline-none focus:border-indigo-500 transition-colors resize-none"
                placeholder={
                  currentIdiom === "es"
                    ? "Cuéntame sobre tu idea / proyecto..."
                    : "Tell me about your idea / project..."
                }
                maxLength={1200}
                disabled={sending}
              />

              {status.text ? (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {status.text}
                </p>
              ) : null}

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="submit"
                disabled={sending || !emailJsReady}
                className="bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold rounded-md px-4 py-3 disabled:bg-gray-700 disabled:text-gray-300 disabled:cursor-not-allowed"
              >
                {sending
                  ? currentIdiom === "es"
                    ? "Enviando..."
                    : "Sending..."
                  : currentIdiom === "es"
                  ? "Enviar"
                  : "Send"}
              </motion.button>
            </form>

            <p className="text-gray-500 mt-3 text-xs">
              {currentIdiom === "es"
                ? "El formulario usa EmailJS. El email del visitante queda como Reply-To."
                : "This form uses EmailJS. Visitor email is used as Reply-To."}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
