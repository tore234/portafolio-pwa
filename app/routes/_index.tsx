import type { MetaFunction } from "react-router";
import { useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

// ✅ Meta para manifest y theme-color
export const meta: MetaFunction = () => {
  return [
    { title: "Portafolio Salvador Trenado" },
    {
      name: "description",
      content:
        "Portafolio profesional de Salvador Trenado Hernández. Frontend React ⚛️, UI/UX 🎨, Scrum 📈 y creador de contenido 🎥.",
    },
    { name: "theme-color", content: "#0ea5e9" },
    { rel: "manifest", href: "/manifest.json" },
  ];
};

export default function Index() {
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
            {["Inicio", "Proyectos", "Sobre mí", "Contacto"].map((item) => (
              <NavLink
                key={item}
                to={`/${item === "Inicio" ? "" : item.toLowerCase()}`}
                viewTransition
                className={navLinkClass}
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Menú mobile animado */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden flex flex-col gap-4 px-4 pb-6 bg-black/95 backdrop-blur-md border-t border-sky-600"
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.15),transparent_70%)] animate-pulse pointer-events-none" />

        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center lg:text-left order-1 lg:order-none"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_0_10px_rgba(0,200,255,0.5)]">
            Desarrollador{" "}
            <span className="text-sky-400 block md:inline">
              <TypeAnimation
                sequence={[
                  "Frontend ⚛️",
                  2000,
                  "UX 🎨",
                  2000,
                  "React Dev 🚀",
                  2000,
                  "Creador de Contenido 🎥",
                  2000,
                  "Scrum Lover 📈",
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
          <p className="mt-2 text-slate-400 text-sm md:text-base">
            Apasionado por React, UI/UX y metodologías ágiles.
          </p>

          {/* Badges de skills */}
          <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2">
            {["React ⚛️", "Tailwind 🎨", "GitHub 🐙", "Scrum 📈"].map(
              (tech, i) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 text-xs md:text-sm rounded-full border border-sky-500/30 bg-slate-800 text-sky-300 shadow hover:bg-sky-700/40 transition"
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
          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/projects"
                viewTransition
                className="inline-flex items-center justify-center min-w-[140px] px-5 py-2.5 rounded-lg 
                 bg-gradient-to-r from-sky-600 to-cyan-500 text-white 
                 shadow-[0_0_12px_rgba(0,200,255,0.6)] 
                 hover:shadow-[0_0_18px_rgba(0,200,255,0.9)] transition"
              >
                🚀 Ver proyectos
              </NavLink>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/contact"
                viewTransition
                className="inline-flex items-center justify-center min-w-[140px] px-5 py-2.5 rounded-lg 
                 border border-sky-600 text-sky-400 
                 hover:bg-sky-900 transition"
              >
                ✉️ Contáctame
              </NavLink>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <a
                href="/CV-Salvador-Trenado.pdf"
                download
                className="inline-flex items-center justify-center min-w-[140px] px-5 py-2.5 rounded-lg 
                 bg-gradient-to-r from-slate-700 to-slate-600 text-white 
                 shadow-[0_0_12px_rgba(100,100,100,0.6)] 
                 hover:shadow-[0_0_18px_rgba(150,150,150,0.9)] 
                 hover:from-slate-600 hover:to-slate-500 
                 border border-slate-500 transition"
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
          className="relative z-10 aspect-[16/9] max-w-md mx-auto lg:max-w-full lg:mx-0 rounded-2xl border border-sky-600 overflow-hidden shadow-[0_0_15px_rgba(0,200,255,0.4)] backdrop-blur-lg bg-slate-900/30 order-2 lg:order-none"
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
