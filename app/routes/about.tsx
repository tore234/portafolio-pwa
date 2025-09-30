import React from "react";
import {
  Code2,
  Palette,
  Rocket,
  Megaphone,
  Youtube,
  Gamepad2,
  BookOpen,
  Dumbbell,
  Bike,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "React / Frontend", level: 85, color: "bg-sky-500" },
  { name: "UI/UX & Tailwind", level: 80, color: "bg-pink-500" },
  { name: "Scrum / Trabajo en equipo", level: 90, color: "bg-green-500" },
  { name: "GitHub / Control de versiones", level: 75, color: "bg-yellow-500" },
];

// ✅ Valores personales
const valores = ["Responsable", "Organizado", "Respetuoso", "Honesto"];

// 🎮 Pasatiempos dinámicos
const hobbies = [
  {
    title: "Creador en YouTube",
    icon: <Youtube className="w-6 h-6 text-red-500" />,
    desc: "Genero contenido sobre gaming y tecnología.",
    url: "https://www.youtube.com/@DkTore1",
  },
  {
    title: "Gaming",
    icon: <Gamepad2 className="w-6 h-6 text-purple-400" />,
    desc: "Apasionado de los videojuegos como espacio creativo y de aprendizaje.",
  },
  {
    title: "Aprendizaje",
    icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
    desc: "Siempre tomando cursos online para mejorar mis habilidades.",
  },
  {
    title: "Boxeo",
    icon: <Dumbbell className="w-6 h-6 text-orange-400" />,
    desc: "Practico boxeo para mantener disciplina, enfoque y energía.",
  },
  {
    title: "Ciclismo",
    icon: <Bike className="w-6 h-6 text-cyan-400" />,
    desc: "Me gusta salir en bicicleta para mantenerme activo y despejar la mente.",
  },
  {
    title: "Filosofía",
    icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    desc: "Me apasiona reflexionar sobre la vida, la ética y el conocimiento.",
  },
];

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
            Soy <span className="text-sky-400 font-semibold">Salvador Trenado Hernández</span>, 
            tengo 21 años y estudio en la{" "}
            <span className="text-sky-400">Universidad Tecnológica del Oriente de Michoacán</span>. 
            Estoy por graduarme como ingeniero en Desarrollo y Gestión de Software Multiplataforma 🚀. 
            Me apasiona el desarrollo frontend, UI/UX y aprender metodologías como Scrum.
          </p>
        </div>
      </div>

      {/* Tarjetas animadas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {[
          {
            title: "Frontend",
            icon: <Code2 className="w-6 h-6" />,
            color: "text-sky-400",
            border: "border-sky-500/30",
            shadow: "hover:shadow-sky-500/40",
            desc: "React, Tailwind y animaciones modernas.",
          },
          {
            title: "UI/UX",
            icon: <Palette className="w-6 h-6" />,
            color: "text-pink-400",
            border: "border-pink-500/30",
            shadow: "hover:shadow-pink-500/40",
            desc: "Diseños accesibles e interfaces intuitivas.",
          },
          {
            title: "Proyectos",
            icon: <Rocket className="w-6 h-6" />,
            color: "text-green-400",
            border: "border-green-500/30",
            shadow: "hover:shadow-green-500/40",
            desc: "Gestión académica y proyectos colaborativos.",
          },
          {
            title: "Marketing",
            icon: <Megaphone className="w-6 h-6" />,
            color: "text-yellow-400",
            border: "border-yellow-500/30",
            shadow: "hover:shadow-yellow-500/40",
            desc: "Estrategias digitales y difusión online.",
          },
        ].map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
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

      {/* Habilidades con barras */}
      <h2 className="text-2xl font-bold text-sky-400 mb-6">⚡ Skills</h2>
      <div className="space-y-4 mb-12">
        {skills.map((skill, i) => (
          <div key={i}>
            <p className="text-sm text-slate-300 mb-1">{skill.name}</p>
            <div className="w-full bg-slate-800 rounded-full h-3">
              <motion.div
                className={`h-3 rounded-full ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: i * 0.2 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Valores personales */}
      <h2 className="text-2xl font-bold text-sky-400 mb-6">🌟 Valores personales</h2>
      <div className="flex flex-wrap gap-3 mb-16">
        {valores.map((valor, i) => (
          <motion.span
            key={i}
            className="px-4 py-2 rounded-full bg-slate-800 border border-sky-500/30 text-sky-300 text-sm shadow hover:bg-sky-600 hover:text-white transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {valor}
          </motion.span>
        ))}
      </div>

      {/* Pasatiempos dinámicos */}
      <h2 className="text-2xl font-bold text-sky-400 mb-6">🎮 Pasatiempos</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbies.map((hobby, i) => (
          <motion.a
            key={hobby.title}
            href={hobby.url || "#"}
            target={hobby.url ? "_blank" : "_self"}
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="p-6 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 transition-all shadow-lg"
          >
            <h3 className="flex items-center gap-2 font-semibold text-lg text-slate-200">
              {hobby.icon} {hobby.title}
            </h3>
            <p className="text-sm text-slate-400 mt-2">{hobby.desc}</p>
          </motion.a>
        ))}
      </div>
    </main>
  );
}
