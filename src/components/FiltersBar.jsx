export default function FiltersBar({
  searchTerm,
  onSearchChange,
  areaFilter,
  onAreaFilterChange,
  tipoTransicaoFilter,
  onTipoTransicaoFilterChange,
  riscoFilter,
  onRiscoFilterChange,
}) {
  return (
    <section className="space-y-3 rounded-xl border border-slate-200 bg-white/80 p-4 shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/80">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Profissionais em transição
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Explore trajetórias de requalificação e descubra novas
            possibilidades de carreira.
          </p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))]">
        <input
          type="text"
          placeholder="Buscar por nome, habilidade ou área..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500"
        />

        <select
          value={areaFilter}
          onChange={(e) => onAreaFilterChange(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-900"
        >
          <option value="todas">Área (todas)</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Atendimento & Experiência do Cliente">
            Atendimento & CX
          </option>
          <option value="Logística">Logística</option>
          <option value="Vendas & Marketing">Vendas & Marketing</option>
          <option value="Indústria & Manutenção">Indústria & Manutenção</option>
        </select>

        <select
          value={tipoTransicaoFilter}
          onChange={(e) => onTipoTransicaoFilterChange(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-900"
        >
          <option value="todos">Tipo de transição</option>
          <option value="reskilling">Reskilling</option>
          <option value="upskilling">Upskilling</option>
        </select>

        <select
          value={riscoFilter}
          onChange={(e) => onRiscoFilterChange(e.target.value)}
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40 dark:border-slate-700 dark:bg-slate-900"
        >
          <option value="todos">Risco de automação</option>
          <option value="alto">Alto</option>
          <option value="médio">Médio</option>
          <option value="baixo">Baixo</option>
        </select>
      </div>
    </section>
  );
}
