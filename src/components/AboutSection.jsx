// src/components/AboutSection.jsx

export default function AboutSection() {
  return (
    <section className="mt-2 rounded-xl border border-slate-200 bg-white/90 p-4 text-sm text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200">
      <div className="space-y-2">
        <h2 className="text-base font-semibold text-slate-900 dark:text-slate-50">
          Sobre o projeto
        </h2>
        <p>
          Esta aplicação foi criada para o contexto do{" "}
          <span className="font-medium">Futuro do Trabalho</span>, com foco em
          pessoas que tiveram suas profissões impactadas por automação, IA e
          novas tecnologias.
        </p>
        <p>
          Cada perfil representa uma jornada de{" "}
          <span className="font-medium">reskilling</span> (mudança de área) ou{" "}
          <span className="font-medium">upskilling</span> (aperfeiçoamento dentro
          da área), destacando habilidades técnicas, soft skills, experiências,
          cursos e trilhas recomendadas para a requalificação profissional.
        </p>
        <p>
          A ideia é mostrar que profissionais de funções consideradas “em
          extinção” podem se reposicionar no mercado, conectando sua experiência
          anterior com novas oportunidades em tecnologia, atendimento digital,
          logística 4.0, e-commerce e outros setores.
        </p>
      </div>
    </section>
  );
}
