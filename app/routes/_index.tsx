import { useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass =
    "relative hover:text-sky-400 transition-colors font-medium text-slate-200 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-sky-400 after:left-0 after:-bottom-1 hover:after:w-full after:transition-all";

  return (
    <>
      {/* 🔹 Menú flotante */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur border-b border-sky-600 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <NavLink to="/" className="font-bold text-lg text-sky-400">
            STH
          </NavLink>

          {/* Botón hamburguesa (solo en móviles) */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-sky-900"
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
          <nav className="hidden lg:flex gap-6 text-sm">
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

        {/* Menú mobile con animación */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="lg:hidden flex flex-col gap-4 px-4 pb-4 bg-black/95 backdrop-blur border-t border-sky-600"
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

      {/* 🔹 Contenido principal */}
      <section className="pt-28 grid gap-10 lg:grid-cols-2 items-center max-w-6xl mx-auto px-4 text-white relative">
        {/* Fondo dinámico */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.15),transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-[0_0_10px_rgba(0,200,255,0.6)]">
            Desarrollador —{" "}
            <span className="text-sky-400">Frontend & UX</span>
          </h1>
          <p className="mt-4 text-slate-300">
            Interfaces rápidas, accesibles y con impacto en negocio.
          </p>
          <div className="mt-6 flex gap-3">
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/projects"
                viewTransition
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-500 text-white shadow-[0_0_10px_rgba(0,200,255,0.6)] hover:shadow-[0_0_20px_rgba(0,200,255,0.9)] transition"
              >
                Ver proyectos
              </NavLink>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/contact"
                viewTransition
                className="px-4 py-2 rounded-lg border border-sky-600 text-sky-400 hover:bg-sky-900 transition"
              >
                Contáctame
              </NavLink>
            </motion.div>
          </div>
        </motion.div>

        {/* 🔹 Banner Proyectos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02, rotate: 1 }}
          className="aspect-video rounded-2xl border border-sky-600 overflow-hidden shadow-[0_0_15px_rgba(0,200,255,0.5)]"
        >
          <img
            src="/imagenes/banner-proyectos.jpg"
            alt="Banner proyectos de Salvador Trenado"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>
    </>
  );
}
