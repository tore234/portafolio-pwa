import { useState, useEffect } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import "./app.css";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// 🔹 Safe wrapper para evitar errores en SSR
function SafeAnimatePresence({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? <AnimatePresence>{children}</AnimatePresence> : null;
}

// 🔗 Fuentes y estilos globales
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-dvh bg-black text-white font-sans">
        {/* Header con navegación */}
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/90 border-b border-sky-600 shadow-md">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <NavLink
              to="/"
              className="font-bold tracking-tight text-lg text-sky-400"
            >
              STH
            </NavLink>

            {/* Botón hamburguesa (móvil) */}
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
              <NavLink to="/" viewTransition className="hover:text-sky-400">
                Inicio
              </NavLink>
              <NavLink
                to="/projects"
                viewTransition
                className="hover:text-sky-400"
              >
                Proyectos
              </NavLink>
              <NavLink to="/about" viewTransition className="hover:text-sky-400">
                Sobre mí
              </NavLink>
              <NavLink
                to="/contact"
                viewTransition
                className="hover:text-sky-400"
              >
                Contacto
              </NavLink>
            </nav>
          </div>

          {/* Menú móvil con animación */}
          <SafeAnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="lg:hidden flex flex-col gap-4 px-4 pb-4 bg-black/95 backdrop-blur border-t border-sky-600"
              >
                <NavLink
                  to="/"
                  viewTransition
                  className="hover:text-sky-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Inicio
                </NavLink>
                <NavLink
                  to="/projects"
                  viewTransition
                  className="hover:text-sky-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Proyectos
                </NavLink>
                <NavLink
                  to="/about"
                  viewTransition
                  className="hover:text-sky-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Sobre mí
                </NavLink>
                <NavLink
                  to="/contact"
                  viewTransition
                  className="hover:text-sky-400"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </NavLink>
              </motion.nav>
            )}
          </SafeAnimatePresence>
        </header>

        {/* Contenido */}
        <main className="pt-28 mx-auto max-w-6xl px-4 py-10">{children}</main>

        {/* Footer */}
        <footer className="border-t border-sky-600 bg-black/95 text-slate-400">
          <div className="mx-auto max-w-6xl px-4 py-8 text-xs">
            © {new Date().getFullYear()}{" "}
            <span className="text-sky-400">STH</span>. Todos los derechos
            reservados.
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

// 🚨 ErrorBoundary estilizado
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const is404 = isRouteErrorResponse(error) && error.status === 404;

  return (
    <main className="pt-24 px-4 text-center">
      <h1 className="text-5xl font-bold text-sky-400">
        {is404 ? "404" : "Error"}
      </h1>
      <p className="mt-4 text-slate-400">
        {is404
          ? "Lo sentimos, no encontramos esta página."
          : "Ha ocurrido un error inesperado."}
      </p>
      <NavLink
        to="/"
        viewTransition
        className="inline-block mt-6 px-5 py-2 rounded-lg bg-sky-600 text-white hover:opacity-90"
      >
        Volver al inicio
      </NavLink>
      {import.meta.env.DEV && error instanceof Error && (
        <pre className="mt-6 w-full max-w-2xl mx-auto text-left text-xs bg-gray-900 p-4 rounded-lg overflow-x-auto text-red-400">
          <code>{error.stack}</code>
        </pre>
      )}
    </main>
  );
}
