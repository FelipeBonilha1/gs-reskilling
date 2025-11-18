// src/components/Hero.jsx
export default function Hero({ totalProfs }) {
  return (
    <section className="mb-4 rounded-2xl bg-linear-to-br from-blue-600 via-indigo-600 to-slate-900 px-4 py-6 text-slate-50 shadow-sm dark:from-slate-900 dark:via-indigo-800 dark:to-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2 md:max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-100/90">
            Futuro do trabalho · GS Web Dev
          </p>
          <h1 className="text-2xl font-semibold leading-tight md:text-3xl">
            Recriando caminhos para profissões em transformação.
          </h1>
          <p className="text-sm text-blue-50/90">
            Conheça histórias reais de reskilling e upskilling de profissionais
            impactados por automação, IA e novas tecnologias. Encontre talentos
            que estão reescrevendo sua trajetória no mercado.
          </p>
        </div>

        <div className="flex flex-row gap-3 md:flex-col md:items-end">
          <div className="rounded-xl bg-slate-950/40 px-4 py-3 text-right shadow-sm">
            <p className="text-[11px] uppercase tracking-wide text-blue-100/80">
              Profissionais mapeados
            </p>
            <p className="text-2xl font-semibold">
              {totalProfs}
              <span className="ml-1 text-sm font-normal text-blue-100/80">
                +
              </span>
            </p>
            <p className="text-[11px] text-blue-100/80">
              em jornadas de transição de carreira
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
