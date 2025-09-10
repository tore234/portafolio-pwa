import React from "react";
import { Code2, Palette, Rocket, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-16 text-white">
      {/* Encabezado con imagen */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
       <motion.img
  src="/imagenes/foto-formal.jpg" 
  alt="Foto Salvador Trenado Hernández"
  className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-transparent bg-gradient-to-r from-sky-500 via-pink-500 to-purple-500 p-[3px] shadow-xl object-cover"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{ scale: 1.1, rotate: 2 }}
  transition={{ duration: 0.6 }}
/>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 text-sky-400">
            👨‍💻 Sobre mí
          </h1>
          <p className="mt-3 text-slate-300 leading-relaxed">
            ¡Hola! Soy desarrollador web apasionado por crear aplicaciones modernas y funcionales. 
            Me encanta aprender nuevas tecnologías y mejorar mis habilidades cada día.
          </p>
        </div>
      </div>

      {/* Tarjetas animadas */}
      <div className="grid sm:grid-cols-2 gap-6">
        {[
          {
            title: "Frontend",
            icon: <Code2 className="w-6 h-6" />,
            color: "text-sky-400",
            border: "border-sky-500/30",
            shadow: "hover:shadow-sky-500/40",
            desc: "Desarrollo interfaces con React, Tailwind y animaciones.",
          },
          {
            title: "UI/UX",
            icon: <Palette className="w-6 h-6" />,
            color: "text-pink-400",
            border: "border-pink-500/30",
            shadow: "hover:shadow-pink-500/40",
            desc: "Diseño de experiencias intuitivas, accesibles y atractivas.",
          },
          {
            title: "Proyectos",
            icon: <Rocket className="w-6 h-6" />,
            color: "text-green-400",
            border: "border-green-500/30",
            shadow: "hover:shadow-green-500/40",
            desc: "Trabajo en equipo y gestión de proyectos académicos.",
          },
          {
            title: "Marketing",
            icon: <Megaphone className="w-6 h-6" />,
            color: "text-yellow-400",
            border: "border-yellow-500/30",
            shadow: "hover:shadow-yellow-500/40",
            desc: "Estrategias digitales, difusión de proyectos y presencia online.",
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.07 }}
            className={`p-6 rounded-xl border ${card.border} bg-slate-900/60 hover:bg-slate-800/80 transition-all shadow-lg ${card.shadow}`}
          >
            <h3
              className={`flex items-center gap-2 font-semibold text-lg ${card.color}`}
            >
              {card.icon} {card.title}
            </h3>
            <p className="text-sm text-slate-300 mt-2">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
