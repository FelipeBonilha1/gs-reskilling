// src/components/Header.jsx
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-slate-50/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 text-sm font-bold text-white shadow-sm">
             <img
              src="/icon.work.png" // coloca esse arquivo na pasta public/
              alt="Logo Futuro em Recomeço"
              className="h-5 w-5 object-contain"
              />

          </div>

          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              Futuro em Recomeço
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Histórias de reskilling &amp; upskilling
            </span>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </header>
  );
}
