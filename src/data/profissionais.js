// src/data/profissionais.js
const profissionais = [
  {
    id: 1,
    nome: "Ana Souza",
    foto: "https://i.pravatar.cc/150?img=47",
    cargo: "Analista de Suporte em TI Júnior",
    resumo:
      "Em transição de cobradora de ônibus para a área de tecnologia, focada em suporte e infraestrutura básica.",
    localizacao: "São Paulo / SP",
    area: "Tecnologia",
    habilidadesTecnicas: ["Suporte N1", "Windows", "Redes básicas"],
    softSkills: ["Comunicação", "Resiliência", "Trabalho em equipe"],
    experiencias: [
      {
        empresa: "TransPaulista",
        cargo: "Cobradora de ônibus",
        inicio: "2015-03",
        fim: "2023-02",
        descricao:
          "Atendimento diário a passageiros, conferência de pagamentos e apoio a pessoas idosas e com deficiência.",
      },
      {
        empresa: "Tech Help",
        cargo: "Estagiária de Suporte em TI",
        inicio: "2023-08",
        fim: null,
        descricao:
          "Atendimento de chamados internos, instalação de softwares, suporte remoto e abertura de tickets.",
      },
    ],
    formacao: [
      {
        curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        instituicao: "Faculdade São Lucas",
        ano: 2025,
      },
    ],
    projetos: [
      {
        titulo: "Sistema interno de chamados",
        link: "https://github.com/exemplo/ana-chamados",
        descricao:
          "Protótipo simples de sistema de abertura e acompanhamento de chamados para pequenas empresas.",
      },
    ],
    certificacoes: ["Suporte Técnico em TI - Plataforma Z", "IT Essentials"],
    idiomas: [
      {
        idioma: "Inglês",
        nivel: "Intermediário",
      },
    ],
    areaInteresses: ["Suporte em TI", "Redes", "Segurança da Informação"],

    profissaoAnterior: "Cobradora de ônibus",
    tipoTransicao: "reskilling",
    novoRumoProfissional: "Suporte em TI",
    nivelRiscoAutomacao: "alto",
    trilhasRecomendadas: [
      "Curso de Suporte Técnico em TI",
      "Fundamentos de Redes",
      "Lógica de Programação",
    ],
  },
  {
    id: 2,
    nome: "Carlos Lima",
    foto: "https://i.pravatar.cc/150?img=32",
    cargo: "Especialista em Atendimento Omnichannel",
    resumo:
      "Ex-operador de caixa em varejo físico, hoje focado em atendimento digital e análise de jornada do cliente.",
    localizacao: "Campinas / SP",
    area: "Atendimento & Experiência do Cliente",
    habilidadesTecnicas: ["CRM", "Chatbots", "Métricas de atendimento"],
    softSkills: ["Empatia", "Escuta ativa", "Resolução de conflitos"],
    experiencias: [
      {
        empresa: "Mercado Central",
        cargo: "Operador de caixa",
        inicio: "2014-01",
        fim: "2022-11",
        descricao:
          "Registro de compras, atendimento direto ao público, operação de caixa e apoio à organização de loja.",
      },
      {
        empresa: "ClickAtende",
        cargo: "Analista de Atendimento Digital",
        inicio: "2023-02",
        fim: null,
        descricao:
          "Atendimento via chat e redes sociais, integração com chatbots e análise de feedback de clientes.",
      },
    ],
    formacao: [
      {
        curso: "Tecnólogo em Gestão Comercial",
        instituicao: "FATEC",
        ano: 2020,
      },
    ],
    projetos: [
      {
        titulo: "Mapa de jornada do cliente",
        link: "",
        descricao:
          "Projeto interno para mapear pontos de atrito da jornada em canais físicos e digitais.",
      },
    ],
    certificacoes: ["Atendimento ao Cliente Omnichannel - Escola X"],
    idiomas: [
      {
        idioma: "Espanhol",
        nivel: "Básico",
      },
    ],
    areaInteresses: [
      "Experiência do Cliente (CX)",
      "Ferramentas de CRM",
      "Chatbots e automação de atendimento",
    ],

    profissaoAnterior: "Operador de caixa",
    tipoTransicao: "reskilling",
    novoRumoProfissional: "Atendimento Omnichannel",
    nivelRiscoAutomacao: "alto",
    trilhasRecomendadas: [
      "Fundamentos de CRM",
      "Atendimento Omnichannel",
      "Introdução a Chatbots",
    ],
  },
  {
    id: 3,
    nome: "Mariana Alves",
    foto: "https://i.pravatar.cc/150?img=15",
    cargo: "Supervisora de Operações Logísticas",
    resumo:
      "Profissional de logística fazendo upskilling para atuar com dados, automação e sistemas de gestão.",
    localizacao: "Curitiba / PR",
    area: "Logística",
    habilidadesTecnicas: ["ERP Logístico", "Excel avançado", "Power BI"],
    softSkills: ["Liderança", "Planejamento", "Visão sistêmica"],
    experiencias: [
      {
        empresa: "TransLog",
        cargo: "Auxiliar de logística",
        inicio: "2013-06",
        fim: "2017-12",
        descricao:
          "Controle de estoque, conferência de notas e apoio na roteirização básica de entregas.",
      },
      {
        empresa: "TransLog",
        cargo: "Supervisora de operações",
        inicio: "2018-01",
        fim: null,
        descricao:
          "Gestão de equipe, análise de indicadores, roteirização de entregas e integração com sistemas de rastreio.",
      },
    ],
    formacao: [
      {
        curso: "Tecnólogo em Logística",
        instituicao: "Universidade Positivo",
        ano: 2016,
      },
    ],
    projetos: [
      {
        titulo: "Painel de indicadores logísticos",
        link: "",
        descricao:
          "Dashboard em Power BI com indicadores de prazo de entrega, OTIF e taxa de devolução.",
      },
    ],
    certificacoes: ["Logística 4.0", "Power BI para negócios"],
    idiomas: [
      {
        idioma: "Inglês",
        nivel: "Avançado",
      },
    ],
    areaInteresses: [
      "Logística 4.0",
      "Automação de armazéns",
      "Análise de dados aplicada à logística",
    ],

    profissaoAnterior: "Auxiliar de logística",
    tipoTransicao: "upskilling",
    novoRumoProfissional: "Operações logísticas orientadas a dados",
    nivelRiscoAutomacao: "médio",
    trilhasRecomendadas: [
      "Excel avançado para negócios",
      "Introdução a Power BI",
      "Fundamentos de Logística 4.0",
    ],
  },
  {
    id: 4,
    nome: "João Pereira",
    foto: "https://i.pravatar.cc/150?img=60",
    cargo: "Analista de Dados Júnior",
    resumo:
      "Migrou de atendente de telemarketing para área de dados, focado em análise básica e criação de relatórios.",
    localizacao: "Rio de Janeiro / RJ",
    area: "Tecnologia",
    habilidadesTecnicas: ["Excel", "SQL básico", "Power BI"],
    softSkills: ["Comunicação", "Persistência", "Curiosidade"],
    experiencias: [
      {
        empresa: "CallCenter BR",
        cargo: "Atendente de telemarketing",
        inicio: "2016-02",
        fim: "2022-06",
        descricao:
          "Atendimento ativo e receptivo, registro de contatos e atualização de base de clientes.",
      },
      {
        empresa: "DataSimple",
        cargo: "Estagiário em Análise de Dados",
        inicio: "2023-01",
        fim: null,
        descricao:
          "Construção de relatórios simples, dashboards e tratamento inicial de bases de dados.",
      },
    ],
    formacao: [
      {
        curso: "Tecnólogo em Ciência de Dados",
        instituicao: "Universidade Carioca",
        ano: 2025,
      },
    ],
    projetos: [
      {
        titulo: "Dashboard de churn de clientes",
        link: "",
        descricao:
          "Painel para acompanhar cancelamentos e principais motivos de saída de clientes.",
      },
    ],
    certificacoes: ["Fundamentos de SQL", "Introdução à Ciência de Dados"],
    idiomas: [
      {
        idioma: "Inglês",
        nivel: "Básico",
      },
    ],
    areaInteresses: [
      "Análise de dados",
      "Visualização de dados",
      "Automação de relatórios",
    ],

    profissaoAnterior: "Atendente de telemarketing",
    tipoTransicao: "reskilling",
    novoRumoProfissional: "Análise de Dados",
    nivelRiscoAutomacao: "alto",
    trilhasRecomendadas: [
      "SQL para iniciantes",
      "Power BI do zero",
      "Fundamentos de Estatística",
    ],
  },
  {
    id: 5,
    nome: "Luciana Ferreira",
    foto: "https://i.pravatar.cc/150?img=5",
    cargo: "Consultora de Vendas Digitais",
    resumo:
      "Ex-vendedora de loja física que se especializou em vendas online e social selling.",
    localizacao: "Belo Horizonte / MG",
    area: "Vendas & Marketing",
    habilidadesTecnicas: ["Social selling", "Ferramentas de CRM", "Copy básica"],
    softSkills: ["Negociação", "Empatia", "Proatividade"],
    experiencias: [
      {
        empresa: "Moda Center",
        cargo: "Vendedora de loja",
        inicio: "2012-04",
        fim: "2021-09",
        descricao:
          "Atendimento ao cliente, organização de vitrine, apoio a inventário e pós-venda básico.",
      },
      {
        empresa: "LojaDigital",
        cargo: "Consultora de Vendas Digitais",
        inicio: "2022-01",
        fim: null,
        descricao:
          "Atendimento em canais digitais, uso de CRM e estratégias de vendas pelo WhatsApp e redes sociais.",
      },
    ],
    formacao: [
      {
        curso: "Tecnólogo em Marketing",
        instituicao: "UNI-BH",
        ano: 2018,
      },
    ],
    projetos: [
      {
        titulo: "Estratégia de vendas via Instagram",
        link: "",
        descricao:
          "Planejamento e execução de campanhas simples de venda usando stories e directs.",
      },
    ],
    certificacoes: ["Marketing Digital Básico", "Vendas em Redes Sociais"],
    idiomas: [
      {
        idioma: "Inglês",
        nivel: "Básico",
      },
    ],
    areaInteresses: [
      "E-commerce",
      "Social selling",
      "Experiência do cliente",
    ],

    profissaoAnterior: "Vendedora de loja física",
    tipoTransicao: "reskilling",
    novoRumoProfissional: "Vendas Digitais",
    nivelRiscoAutomacao: "médio",
    trilhasRecomendadas: [
      "Marketing Digital para iniciantes",
      "CRM na prática",
      "Copywriting básico",
    ],
  },
  {
    id: 6,
    nome: "Rafael Costa",
    foto: "https://i.pravatar.cc/150?img=20",
    cargo: "Técnico em Manutenção de Equipamentos Automatizados",
    resumo:
      "Saiu da função de operador de linha repetitiva para cuidar de manutenção de máquinas e sistemas automatizados.",
    localizacao: "São Bernardo do Campo / SP",
    area: "Indústria & Manutenção",
    habilidadesTecnicas: ["Manutenção preventiva", "CLP básico", "Leitura de diagramas"],
    softSkills: ["Atenção a detalhes", "Trabalho em equipe", "Responsabilidade"],
    experiencias: [
      {
        empresa: "Fábrica XYZ",
        cargo: "Operador de linha de produção",
        inicio: "2013-05",
        fim: "2020-10",
        descricao:
          "Operação de máquinas repetitivas, controle de qualidade básico e registro de ocorrências.",
      },
      {
        empresa: "Fábrica XYZ",
        cargo: "Técnico em manutenção",
        inicio: "2021-02",
        fim: null,
        descricao:
          "Manutenção de equipamentos, inspeções de rotina e apoio em projetos de automação.",
      },
    ],
    formacao: [
      {
        curso: "Técnico em Mecatrônica",
        instituicao: "SENAI",
        ano: 2020,
      },
    ],
    projetos: [
      {
        titulo: "Otimização de parada de máquina",
        link: "",
        descricao:
          "Projeto interno para reduzir o tempo de parada em manutenções corretivas.",
      },
    ],
    certificacoes: ["NR-10", "NR-12", "Automação Industrial Básica"],
    idiomas: [
      {
        idioma: "Inglês",
        nivel: "Básico",
      },
    ],
    areaInteresses: [
      "Automação industrial",
      "Robótica básica",
      "Manutenção preditiva",
    ],

    profissaoAnterior: "Operador de linha de produção",
    tipoTransicao: "upskilling",
    novoRumoProfissional: "Manutenção de equipamentos automatizados",
    nivelRiscoAutomacao: "médio",
    trilhasRecomendadas: [
      "Introdução à Mecatrônica",
      "Automação industrial básica",
      "Segurança em máquinas",
    ],
  },

  // 👉 Depois você continua adicionando até chegar nos ~60 perfis.
];

export default profissionais;
