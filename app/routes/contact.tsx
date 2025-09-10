import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactInfo() {
  const redes = [
    {
      icon: <Mail className="w-10 h-10 text-red-400" />,
      label: "Email",
      url: "mailto:trenadohernandezsalvador@gmail.com",
    },
    {
      icon: <Linkedin className="w-10 h-10 text-blue-500" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/salvador-trenado-5995942aa/",
    },
    {
      icon: <Github className="w-10 h-10 text-slate-300" />,
      label: "GitHub",
      url: "https://github.com/tore234",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10 text-sky-400">📬 Contacto</h2>

      {/* Redes estáticas en grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {redes.map((r) => (
          <a
            key={r.label}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-4 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800/80 hover:scale-105 transition-all shadow-lg"
          >
            {r.icon}
            <span className="text-base font-medium text-slate-300">{r.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
