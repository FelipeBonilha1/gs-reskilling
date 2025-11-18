import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white/70 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur-sm transition hover:border-slate-400 hover:bg-white dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-slate-500"
    >
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px]">
        {isDark ? "🌙" : "☀️"}
      </span>
      <span>{isDark ? "Modo escuro" : "Modo claro"}</span>
    </button>
  );
}
