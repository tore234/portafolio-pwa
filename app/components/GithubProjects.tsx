import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
};

export default function GithubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/tore234/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-slate-400">Cargando proyectos...</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-sky-400">🚀 Mis Proyectos</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo, i) => (
          <motion.a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-700 bg-slate-900/60 p-5 hover:bg-slate-800 transition-all shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Nombre del repo */}
            <h3 className="font-semibold text-sky-400 group-hover:text-sky-300">
              {repo.name}
            </h3>

            {/* Descripción */}
            <p className="mt-2 text-sm text-slate-300">
              {repo.description || "Sin descripción"}
            </p>

            {/* Lenguaje principal */}
            <p className="mt-3 text-xs text-slate-400 italic">
              {repo.language || "No especificado"}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
