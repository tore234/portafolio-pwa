import { useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation"; // 👈 npm install react-type-animation

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass =
    "relative hover:text-sky-400 transition-colors font-medium text-slate-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-sky-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all";

  return (
    <>
      {/* 🔹 Navbar fijo */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-sky-600 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <NavLink
            to="/"
            className="font-bold text-xl text-sky-400 tracking-wide"
          >
            STH
          </NavLink>

          {/* Botón hamburguesa */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-sky-900 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6 text-sky-400" />
            ) : (
              <Menu className="w-6 h-6 text-sky-400" />
            )}
            <span className="sr-only">Abrir menú</span>
          </button>

          {/* Menú desktop */}
          <nav className="hidden lg:flex gap-8 text-sm">
            <NavLink to="/" viewTransition className={navLinkClass}>
              Inicio
            </NavLink>
            <NavLink to="/projects" viewTransition className={navLinkClass}>
              Proyectos
            </NavLink>
            <NavLink to="/about" viewTransition className={navLinkClass}>
              Sobre mí
            </NavLink>
            <NavLink to="/contact" viewTransition className={navLinkClass}>
              Contacto
            </NavLink>
          </nav>
        </div>

        {/* Menú mobile animado */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden flex flex-col gap-4 px-4 pb-4 bg-black/95 backdrop-blur-md border-t border-sky-600"
            >
              {["Inicio", "Proyectos", "Sobre mí", "Contacto"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={`/${item === "Inicio" ? "" : item.toLowerCase()}`}
                    viewTransition
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* 🔹 Hero */}
      <section className="pt-28 grid gap-12 lg:grid-cols-2 items-center max-w-6xl mx-auto px-4 text-white relative">
        {/* Fondo dinámico */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.12),transparent_70%)] animate-pulse pointer-events-none" />

        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_0_10px_rgba(0,200,255,0.5)]">
            Desarrollador{" "}
            <span className="text-sky-400">
              <TypeAnimation
                sequence={[
                  "Frontend",
                  2000,
                  "UX",
                  2000,
                  "React Dev",
                  2000,
                  "Creador de Contenido",
                  2000,
                  "Scrum Lover",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="mt-4 text-slate-300 text-lg md:text-xl">
            Creo interfaces rápidas, accesibles y con impacto real en los
            negocios 🚀
          </p>
          <p className="mt-2 text-slate-400 text-sm">
            Apasionado por React, UI/UX y metodologías ágiles.
          </p>

          {/* Badges de skills */}
          <div className="mt-4 flex flex-wrap gap-2">
            {["React ⚛️", "Tailwind 🎨", "GitHub 🐙", "Scrum 📈"].map(
              (tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border border-sky-500/30 bg-slate-800 text-sky-300"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  {tech}
                </motion.span>
              )
            )}
          </div>

          {/* Botones */}
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/projects"
                viewTransition
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(0,200,255,0.6)] hover:shadow-[0_0_18px_rgba(0,200,255,0.9)] transition"
              >
                Ver proyectos
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/contact"
                viewTransition
                className="px-5 py-2.5 rounded-lg border border-sky-600 text-sky-400 hover:bg-sky-900 transition"
              >
                Contáctame
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                href="/CV-Salvador-Trenado.pdf"
                download
                className="px-5 py-2.5 rounded-lg bg-slate-800 border border-sky-700 text-slate-300 hover:bg-slate-700 transition"
              >
                📄 Descargar CV
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Banner responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="relative z-10 aspect-[4/3] md:aspect-[16/9] rounded-2xl border border-sky-600 overflow-hidden shadow-[0_0_15px_rgba(0,200,255,0.4)]"
        >
          <img
            src="/imagenes/banner-proyectos.jpg"
            alt="Banner proyectos de Salvador Trenado"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Indicador scroll */}
      <div className="flex justify-center mt-10">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-sky-400"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </>
  );
}
