import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("/",              "routes/_index.tsx"),        // Página principal
  route("projects",       "routes/projects.tsx"),      // Listado de proyectos
  route("projects/:slug", "routes/projects.$slug.tsx"),// Detalle por slug
  route("about",          "routes/about.tsx"),         // Sobre mí
  route("contact",        "routes/contact.tsx"),       // Contacto
  route("thank-you",      "routes/thank-you.tsx"),     // Gracias tras formulario
] satisfies RouteConfig;
