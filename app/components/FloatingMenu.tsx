// app/components/FloatingMenu.tsx
import { useState } from "react";
import AccessiblePanel from "./AccessiblePanel";
import { Menu } from "lucide-react";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-sky-600 text-white shadow-lg hover:bg-sky-700"
        aria-label="Abrir menú de accesibilidad"
      >
        <Menu className="w-6 h-6" />
      </button>

      <AccessiblePanel open={open} onClose={() => setOpen(false)} />
    </>
  );
}
