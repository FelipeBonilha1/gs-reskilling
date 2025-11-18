// src/App.jsx
import { useMemo, useState } from "react";
import profissionaisData from "./data/profissionais";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FiltersBar from "./components/FiltersBar";
import ProfessionalCard from "./components/ProfessionalCard";
import ProfessionalModal from "./components/ProfessionalModal";
import Footer from "./components/Footer";

function filtrarProfissionais(
  profissionais,
  searchTerm,
  areaFilter,
  tipoTransicaoFilter,
  riscoFilter
) {
  const term = searchTerm.toLowerCase().trim();

  return profissionais.filter((p) => {
    const atendeBusca =
      term === "" ||
      p.nome.toLowerCase().includes(term) ||
      p.area.toLowerCase().includes(term) ||
      p.habilidadesTecnicas.some((h) => h.toLowerCase().includes(term));

    const atendeArea = areaFilter === "todas" ? true : p.area === areaFilter;

    const atendeTipo =
      tipoTransicaoFilter === "todos"
        ? true
        : p.tipoTransicao === tipoTransicaoFilter;

    const atendeRisco =
      riscoFilter === "todos"
        ? true
        : p.nivelRiscoAutomacao === riscoFilter;

    return atendeBusca && atendeArea && atendeTipo && atendeRisco;
  });
}

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("todas");
  const [tipoTransicaoFilter, setTipoTransicaoFilter] = useState("todos");
  const [riscoFilter, setRiscoFilter] = useState("todos");
  const [selecionado, setSelecionado] = useState(null);

  const profissionaisFiltrados = useMemo(
    () =>
      filtrarProfissionais(
        profissionaisData,
        searchTerm,
        areaFilter,
        tipoTransicaoFilter,
        riscoFilter
      ),
    [searchTerm, areaFilter, tipoTransicaoFilter, riscoFilter]
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-50">
      <Header />

      <main className="mx-auto max-w-6xl space-y-4 px-4 py-6">
        <Hero totalProfs={profissionaisData.length} />

        <FiltersBar
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          areaFilter={areaFilter}
          onAreaFilterChange={setAreaFilter}
          tipoTransicaoFilter={tipoTransicaoFilter}
          onTipoTransicaoFilterChange={setTipoTransicaoFilter}
          riscoFilter={riscoFilter}
          onRiscoFilterChange={setRiscoFilter}
        />

        <section className="mt-4">
          {profissionaisFiltrados.length === 0 ? (
            <p className="rounded-lg border border-dashed border-slate-300 bg-white/70 px-4 py-6 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-400">
              Nenhum profissional encontrado com esses critérios. Tente ajustar
              a busca ou os filtros.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {profissionaisFiltrados.map((prof) => (
                <ProfessionalCard
                  key={prof.id}
                  profissional={prof}
                  onClick={() => setSelecionado(prof)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />

      {selecionado && (
        <ProfessionalModal
          profissional={selecionado}
          onClose={() => setSelecionado(null)}
        />
      )}
    </div>
  );
}
