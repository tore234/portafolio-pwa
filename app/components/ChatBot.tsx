// app/components/ChatBot.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Mensajes
interface Message {
  from: "user" | "bot";
  text: string;
  isHtml?: boolean; // permite renderizar links/botones
}

// Repositorios
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  language?: string;
}

// Preguntas rápidas
const predefinedQuestions = [
  "¿Cuáles son los proyectos?",
  "¿Quién eres?",
  "¿Cómo puedo contactarte?",
];

// Contacto
const contactInfo = [
  {
    label: "Email",
    url: "mailto:trenadohernandezsalvador@gmail.com",
    icon: "📧",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/salvador-trenado-5995942aa/",
    icon: "🔗",
  },
  {
    label: "GitHub",
    url: "https://github.com/tore234",
    icon: "💻",
  },
];

// Intents
const intents = {
  proyectos: ["proyectos", "repos", "trabajos"],
  about: ["quién eres", "eres", "sobre ti"],
  contacto: ["contacto", "contactarte", "contactarme", "contigo"],
};

// Helper
const matchIntent = (msg: string, keywords: string[]) =>
  keywords.some((kw) => msg.includes(kw));

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "¡Hola! Selecciona una pregunta para empezar 🚀" },
  ]);
  const [loading, setLoading] = useState(false);

  const handleUserMessage = async (msg: string) => {
    const lowerMsg = msg.toLowerCase();
    let reply: Message = { from: "bot", text: "No entendí tu pregunta 🤔" };

    setLoading(true);

    try {
      if (matchIntent(lowerMsg, intents.proyectos)) {
        const res = await fetch("https://api.github.com/users/tore234/repos");
        const data: Repo[] = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          reply = {
            from: "bot",
            text: data
              .slice(0, 5)
              .map(
                (repo) =>
                  `• <a href="${repo.html_url}" target="_blank" class="text-sky-600 underline">${repo.name}</a> ${
                    repo.language ? `(${repo.language})` : ""
                  }\n${repo.description || "Sin descripción"}`
              )
              .join("\n\n"),
            isHtml: true,
          };
        } else {
          reply = { from: "bot", text: "No encontré proyectos en tu GitHub 😅" };
        }
      } else if (matchIntent(lowerMsg, intents.about)) {
        reply = {
          from: "bot",
          text:
            "Soy <b>Salvador Trenado Hernández</b>, ingeniero en desarrollo y gestión de software 🚀",
          isHtml: true,
        };
      } else if (matchIntent(lowerMsg, intents.contacto)) {
        reply = {
          from: "bot",
          text: contactInfo
            .map(
              (c) =>
                `${c.icon} <a href="${c.url}" target="_blank" class="text-sky-600 underline">${c.label}</a>`
            )
            .join("<br/>"),
          isHtml: true,
        };
      }
    } catch (error) {
      reply = { from: "bot", text: "Hubo un problema al conectar con GitHub 🚨" };
    }

    setMessages((prev) => [
      ...prev,
      { from: "user", text: msg },
      reply,
    ]);
    setLoading(false);
  };

  const clearChat = () => {
    setMessages([
      { from: "bot", text: "Chat limpiado 🧹. Selecciona otra pregunta 👇" },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-80 h-[450px] bg-white text-gray-800 rounded-xl shadow-xl flex flex-col mb-3 border border-gray-200"
          >
            {/* Área de mensajes */}
            <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`px-3 py-2 rounded-lg max-w-[85%] ${
                    m.from === "user"
                      ? "ml-auto bg-sky-600 text-white text-right"
                      : "mr-auto bg-gray-100 text-gray-900"
                  }`}
                  dangerouslySetInnerHTML={{ __html: m.text }}
                />
              ))}
              {loading && (
                <div className="italic text-xs text-gray-400 animate-pulse">
                  •••
                </div>
              )}
            </div>

            {/* Preguntas rápidas */}
            <div className="border-t border-gray-200 p-2 flex flex-wrap gap-2">
              {predefinedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleUserMessage(q)}
                  disabled={loading}
                  className={`text-xs px-3 py-1 rounded-full transition ${
                    loading
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-sky-100 text-sky-700 hover:bg-sky-200"
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Botón limpiar */}
            <div className="border-t border-gray-200 p-2 flex justify-end">
              <button
                onClick={clearChat}
                className="text-xs bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Limpiar chat
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón burbuja */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-sky-600 hover:bg-sky-700 text-white rounded-full w-14 h-14 shadow-lg flex items-center justify-center text-2xl transition"
      >
        💬
      </button>
    </div>
  );
}
