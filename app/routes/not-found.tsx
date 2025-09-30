export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-4">
      <h1 className="text-7xl font-extrabold text-sky-400 drop-shadow-lg">
        404
      </h1>
      <p className="mt-4 text-slate-400 text-lg">
        La página que buscas no existe 🚧
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-sky-600 hover:bg-sky-700 
                   rounded-lg text-white shadow-lg transition"
      >
        Volver al inicio
      </a>
    </main>
  );
}
