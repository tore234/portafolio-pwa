import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ContactModal from "../components/ContactModal";

export default function ContactInfo() {
  const [openModal, setOpenModal] = useState(false);

  const redes = [
    {
      icon: <Mail className="w-10 h-10 text-sky-400" />,
      label: "Email",
      value: "trenadohernandezsalvador@gmail.com",
      action: () => setOpenModal(true), // abre modal
    },
    {
      icon: <Linkedin className="w-10 h-10 text-sky-400" />,
      label: "LinkedIn",
      value: "salvador-trenado",
      url: "https://www.linkedin.com/in/salvador-trenado-hern%C3%A1ndez-5995942aa/",
    },
    {
      icon: <Github className="w-10 h-10 text-sky-400" />,
      label: "GitHub",
      value: "tore234",
      url: "https://github.com/tore234",
    },
    {
      icon: <FileText className="w-10 h-10 text-sky-400" />,
      label: "Currículum",
      value: "Descargar CV",
      url: "/CV-Salvador-Trenado.pdf", // 👈 Asegúrate de poner tu PDF en /public
    },
  ];

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-4 py-16 text-center text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-12 text-sky-400 drop-shadow-lg"
      >
        📬 Conectemos
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {redes.map((r, i) =>
          r.action ? (
            <motion.button
              key={r.label}
              onClick={r.action}
              aria-label={`Abrir ${r.label}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.07 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl 
                         border border-slate-700 bg-slate-900/60 
                         hover:bg-gradient-to-br hover:from-sky-900 hover:to-slate-900 
                         transition-all duration-300 shadow-lg group"
            >
              <div className="transition-transform group-hover:scale-125 group-hover:rotate-6">
                {r.icon}
              </div>
              <span className="text-base font-medium text-slate-200">
                {r.label}
              </span>
              <span className="text-xs text-slate-400 break-all">{r.value}</span>
            </motion.button>
          ) : (
            <motion.a
              key={r.label}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ir a ${r.label}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.07 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl 
                         border border-slate-700 bg-slate-900/60 
                         hover:bg-gradient-to-br hover:from-sky-900 hover:to-slate-900 
                         transition-all duration-300 shadow-lg group"
            >
              <div className="transition-transform group-hover:scale-125 group-hover:rotate-6">
                {r.icon}
              </div>
              <span className="text-base font-medium text-slate-200">
                {r.label}
              </span>
              <span className="text-xs text-slate-400">{r.value}</span>
            </motion.a>
          )
        )}
      </div>

      {/* Modal dinámico para email */}
      <ContactModal open={openModal} onClose={() => setOpenModal(false)} />
    </section>
  );
}
