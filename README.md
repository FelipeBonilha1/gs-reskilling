# Futuro em Recomeço – Plataforma de Reskilling & Upskilling

Aplicação desenvolvida para a **Global Solution – Front-End Design – Web Development (2º semestre/2025)**, alinhada ao tema:

> **O Futuro do Trabalho – Conectando pessoas, competências e propósito por meio da tecnologia.**

A proposta é construir uma **Single Page Application (SPA)** que apresenta perfis de profissionais cujas profissões foram impactadas por automação, IA e novas tecnologias, destacando suas jornadas de **reskilling** (mudança de área) e **upskilling** (aperfeiçoamento dentro da área).

---

##  Resumo do projeto

O projeto **Futuro em Recomeço** é uma plataforma web que:

- Exibe **cards de profissionais** com:
  - foto, nome, cargo atual, área de atuação e principais habilidades técnicas;
- Abre um **modal interativo** ao clicar em um card, mostrando:
  - informações pessoais e acadêmicas;
  - experiências profissionais (antes e depois da transição);
  - habilidades técnicas, soft skills e idiomas;
  - trilhas recomendadas de aprendizagem;
  - projetos e certificações;
- Possui **botões funcionais** no modal:
  - `⭐ Recomendar profissional` (simula recomendação via alerta);
  - `✉ Enviar mensagem` (simula envio de mensagem via alerta);
- Trabalha com um **arquivo JSON de profissionais** (70+ perfis gerados a partir de perfis base), com propriedades como:
  - `nome`, `foto`, `cargo`, `area`, `habilidadesTecnicas`,  
    `softSkills`, `experiencias`, `formacao`, `idiomas`,  
    `profissaoAnterior`, `tipoTransicao`, `nivelRiscoAutomacao`,  
    `trilhasRecomendadas`, `projetos`, `certificacoes` etc.;
- Inclui **barra de filtros e busca**:
  - busca por nome, área ou habilidades;
  - filtro por área de atuação;
  - filtro por tipo de transição: `reskilling` / `upskilling`;
  - filtro por nível de risco de automação (`alto`, `médio`, `baixo`);
- Implementa **modo claro/escuro** (dark mode) com persistência no `localStorage`;
- Tem layout **responsivo**, otimizado para:
  - mobile (1 coluna),
  - telas médias (2 colunas),
  - desktop (3 colunas).

O foco é mostrar, de forma visual e interativa, como profissionais de funções consideradas “em extinção” podem se reposicionar no mercado, conectando sua experiência anterior com novas competências.

---

##  Usuários e senhas

Este projeto **não possui autenticação** (login/senha).

Toda navegação é aberta, sem diferentes perfis de usuário.  
Os botões de ação do modal (`Recomendar profissional` e `Enviar mensagem`) simulam as ações através de mensagens (`alert`) apenas para fins de demonstração.

<<<<<<< HEAD
> ✅ **Não há usuários e senhas cadastrados.**
=======
> **Não há usuários e senhas cadastrados.**
>>>>>>> dafc20543efda89f681f09e6fa63cb4691c29bc8

---

##  Tecnologias utilizadas

- **React** (SPA, componentes, hooks)
- **Vite** (bundler / dev server)
- **JavaScript** (ES6+)
- **Tailwind CSS v4 + @tailwindcss/vite**
  - utilização de utilitários responsivos;
  - suporte a tema escuro via `@custom-variant` e classe `.dark`;
- **HTML5 / CSS3**
- JSON local para simular a “base de profissionais”

---

##  Estrutura básica do projeto

```text
.
├── public/
│   └── (assets estáticos, por exemplo logo do projeto)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FiltersBar.jsx
│   │   ├── ProfessionalCard.jsx
│   │   ├── ProfessionalModal.jsx
│   │   ├── AboutSection.jsx
│   │   ├── Footer.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   └── profissionais.js   # JSON com ~70 perfis
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md



# Instalação do projeto (passo a passo)

Pré-requisitos:

Node.js (versão LTS recomendada – 18+)

npm 

-git clone https://github.com/FelipeBonilha1/gs-reskilling.git
-cd gs-reskilling 
-npm install
-npm run dev



Nome completo	RM	Curso /     Turma
Felipe Bonilha	  RM562356	Engenharia de Software – 2º semestre
Felipe Rodrigues  RM565341  Engenharia de Software – 2º semestre
