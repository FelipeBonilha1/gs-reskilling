// src/components/ProfessionalCard.jsx
export default function ProfessionalCard({ profissional, onClick }) {
  const {
    nome,
    foto,
    cargo,
    area,
    localizacao,
    habilidadesTecnicas,
    tipoTransicao,
    nivelRiscoAutomacao,
  } = profissional;

  const tipoLabel =
    tipoTransicao === "reskilling"
      ? "Reskilling"
      : tipoTransicao === "upskilling"
      ? "Upskilling"
      : "Transição";

  const riscoColor =
    nivelRiscoAutomacao === "alto"
      ? "bg-red-100 text-red-700 dark:bg-red-900/60 dark:text-red-100"
      : nivelRiscoAutomacao === "médio"
      ? "bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-100"
      : "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-100";

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex flex-col rounded-xl border border-slate-200 bg-white/90 p-4 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-500/70 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 dark:border-slate-800 dark:bg-slate-900/90"
    >
      <div className="flex items-start gap-3">
        <img
          src={foto}
          alt={`Foto de ${nome}`}
          className="h-12 w-12 flex-shrink-0 rounded-full object-cover ring-2 ring-blue-500/50"
        />
        <div className="flex flex-1 flex-col">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-50">
              {nome}
            </h2>
            <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:bg-blue-900/50 dark:text-blue-100">
              {tipoLabel}
            </span>
          </div>
          <p className="mt-0.5 text-xs font-medium text-slate-700 dark:text-slate-200">
            {cargo}
          </p>
          <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
            {area} • {localizacao}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {habilidadesTecnicas.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 dark:bg-slate-800 dark:text-slate-200 dark:group-hover:bg-blue-900/60 dark:group-hover:text-blue-100"
          >
            {skill}
          </span>
        ))}
        {habilidadesTecnicas.length > 3 && (
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            +{habilidadesTecnicas.length - 3}
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between text-[11px]">
        <span className={`inline-flex rounded-full px-2 py-0.5 font-medium ${riscoColor}`}>
          Risco: {nivelRiscoAutomacao}
        </span>
        <span className="text-slate-500 group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-300">
          Ver detalhes →
        </span>
      </div>
    </button>
  );
}
