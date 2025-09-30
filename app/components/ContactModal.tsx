import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_yzqctgv", // 👈 tu serviceID
        "template_sf2m3a9", // 👈 tu templateID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "mFIt57Qoh8MTLA-iJ" // 👈 tu publicKey
      );

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      alert("❌ Error al enviar mensaje. Intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white text-gray-900 rounded-xl shadow-lg p-6 w-full max-w-md"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-sky-600">📩 Envíame un mensaje</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 text-lg"
              >
                ✖
              </button>
            </div>

            {/* Form */}
            {sent ? (
              <div className="text-center py-10">
                <p className="text-green-600 font-medium">
                  ✅ ¡Tu mensaje fue enviado con éxito!
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-sky-500"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Tu correo"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-sky-500"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje..."
                  required
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-sky-500"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
