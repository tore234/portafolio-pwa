import { useEffect, useState, type JSX } from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Rocket } from "lucide-react"; // 🔹 iconos de lucide

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
  private: boolean;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/tore234/repos")
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener repos");
        return res.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((repo) => !repo.private)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime()
          );
        setRepos(filtered);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-slate-400">⏳ Cargando proyectos...</p>;
  if (error) return <p className="text-red-400">❌ {error}</p>;

  // 🎨 Asignamos color, icono y emoji según el lenguaje
  const languageStyles: Record<
    string,
    { style: string; icon: JSX.Element; emoji: string }
  > = {
    JavaScript: {
      style: "bg-yellow-500/20 text-yellow-300 border-yellow-400/40",
      icon: <Code className="w-4 h-4" />,
      emoji: "⚡",
    },
    TypeScript: {
      style: "bg-blue-500/20 text-blue-300 border-blue-400/40",
      icon: <Code className="w-4 h-4" />,
      emoji: "🔷",
    },
    PHP: {
      style: "bg-purple-600/20 text-purple-300 border-purple-500/40",
      icon: <Database className="w-4 h-4" />,
      emoji: "🐘",
    },
    Astro: {
      style: "bg-pink-600/20 text-pink-300 border-pink-500/40",
      icon: <Globe className="w-4 h-4" />,
      emoji: "🌌",
    },
    Blade: {
      style: "bg-red-600/20 text-red-300 border-red-500/40",
      icon: <Rocket className="w-4 h-4" />,
      emoji: "🎯",
    },
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-sky-400">
        🚀 Mis Proyectos GitHub
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, i) => {
          const lang = repo.language || "Otro";
          const { style, icon, emoji } =
            languageStyles[lang] || {
              style: "bg-slate-700/30 text-slate-300 border-slate-600",
              icon: <Code className="w-4 h-4" />,
              emoji: "📦",
            };

          return (
            <motion.a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-5 hover:bg-slate-800 hover:shadow-sky-500/30 transition-all shadow-md"
            >
              {/* Nombre con emoji */}
              <h3 className="font-semibold text-sky-400 group-hover:text-sky-300 text-lg flex items-center gap-2">
                {emoji} {repo.name}
              </h3>

              {/* Descripción */}
              <p className="mt-2 text-sm text-slate-300 line-clamp-2">
                {repo.description || "Sin descripción 📭"}
              </p>

              {/* Lenguaje */}
              {lang && (
                <span
                  className={`inline-flex items-center gap-1 mt-3 text-xs px-2 py-1 rounded-full border ${style}`}
                >
                  {icon} {lang}
                </span>
              )}

              {/* Última actualización */}
              <p className="mt-3 text-xs text-slate-400 italic">
                ⏱ {new Date(repo.updated_at).toLocaleDateString()}
              </p>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
