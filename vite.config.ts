import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["icons/icon-192.png", "icons/icon-512.png", "favicon.ico"],
      manifest: {
        name: "Portafolio Salvador Trenado",
        short_name: "PortafolioSTH",
        description:
          "Soy Salvador Trenado Hernández, estudiante de Ingeniería en Desarrollo y Gestión de Software Multiplataforma. Apasionado del desarrollo frontend, UI/UX, Scrum y creador de contenido en YouTube.",
        start_url: "/",
        display: "standalone",
        background_color: "#0f172a",
        theme_color: "#0ea5e9",
        orientation: "portrait",
        categories: ["portfolio", "frontend", "ui-ux", "scrum", "tecnología"],
        icons: [
          {
            src: "/icons/icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512.png",
            sizes: "512x512",
            type: "image/png",
          }
        ],
        shortcuts: [
          {
            name: "Proyectos 🚀",
            short_name: "Proyectos",
            description: "Explora mis proyectos destacados en React y UI/UX.",
            url: "/projects",
            icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }]
          },
          {
            name: "Sobre mí 👨‍💻",
            short_name: "Sobre mí",
            description: "Conoce mis skills, valores y trayectoria.",
            url: "/about",
            icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }]
          },
          {
            name: "Contacto ✉️",
            short_name: "Contacto",
            description: "Hablemos de tu proyecto o colaboremos juntos.",
            url: "/contact",
            icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }]
          },
          {
            name: "YouTube 🎥",
            short_name: "YouTube",
            description: "Mira mi contenido de gaming y tecnología.",
            url: "https://www.youtube.com/@DkTore1",
            icons: [{ src: "/icons/icon-192.png", sizes: "192x192" }]
          }
        ]
      }
    })
  ]
});
