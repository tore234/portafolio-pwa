import { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [promptEvent, setPromptEvent] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPromptEvent(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const installApp = () => {
    if (promptEvent) {
      promptEvent.prompt();
      promptEvent.userChoice.then((choice: any) => {
        if (choice.outcome === "accepted") {
          console.log("✅ App instalada");
        } else {
          console.log("❌ Usuario canceló");
        }
      });
    }
  };

  return (
    promptEvent && (
      <button
        onClick={installApp}
        className="fixed bottom-5 right-5 px-4 py-2 bg-sky-600 text-white rounded-lg shadow-lg hover:bg-sky-700 transition"
      >
        📲 Instalar App
      </button>
    )
  );
}
