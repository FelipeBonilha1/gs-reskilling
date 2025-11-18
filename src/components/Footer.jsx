// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-slate-50/80 py-4 text-xs text-slate-500 dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row">
        <p>
          Projeto acadêmico · Futuro do Trabalho · Plataforma de reskilling &amp;
          upskilling.
        </p>
        <p className="text-[11px]">
          Desenvolvido em React + Vite + Tailwind · Felipe Bonilha e Felipe Rodrigues
        </p> 
      </div>
    </footer>
  );
}
