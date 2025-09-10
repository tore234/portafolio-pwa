// app/components/AccessiblePanel.tsx
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function AccessiblePanel({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false);

  // Para evitar errores en SSR
  useEffect(() => {
    setMounted(true);
  }, []);

  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const increaseFont = () => setFontSize((f) => Math.min(f + 2, 28));
  const decreaseFont = () => setFontSize((f) => Math.max(f - 2, 12));

  const toggleContrast = () => {
    setHighContrast((c) => !c);
    document.documentElement.classList.toggle("contrast", !highContrast);
  };

  const toggleDarkMode = () => {
    setDarkMode((d) => !d);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const speakText = () => {
    const utterance = new SpeechSynthesisUtterance(
      "Accesibilidad activa: puedes aumentar el tamaño de fuente, activar alto contraste o modo oscuro."
    );
    speechSynthesis.speak(utterance);
  };

  if (!mounted) return null;

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className="mx-auto max-w-sm w-full rounded-lg bg-white dark:bg-slate-900 p-6 shadow-lg focus:outline-none"
          style={{ fontSize: `${fontSize}px` }}
        >
          <div className="flex justify-between items-center mb-4">
            <Dialog.Title className="text-lg font-semibold text-sky-600">
              ♿ Opciones de accesibilidad
            </Dialog.Title>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Cerrar panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex gap-2">
              <button
                onClick={decreaseFont}
                className="px-3 py-2 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                🔽 Reducir fuente
              </button>
              <button
                onClick={increaseFont}
                className="px-3 py-2 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                🔼 Aumentar fuente
              </button>
            </div>

            <button
              onClick={toggleContrast}
              className="w-full px-4 py-2 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              🎨 {highContrast ? "Desactivar contraste" : "Activar alto contraste"}
            </button>

            <button
              onClick={toggleDarkMode}
              className="w-full px-4 py-2 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              🌙 {darkMode ? "Modo claro" : "Modo oscuro"}
            </button>

            <button
              onClick={speakText}
              className="w-full px-4 py-2 rounded-md border hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              📢 Activar lector de texto
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
