export const personal = {
  name: 'Paulo Nobre Junior',
  title: 'Engenheiro de Software',
  location: 'Brasil',
  email: 'paulonobrejunior@outlook.com',
  phone: '+55 21 98061-1149',
  linkedin: 'https://www.linkedin.com/in/paulonobrejr/',
  github: 'https://github.com/paulonobrejr',
  cv: '/Paulo Nobre Junior-resume.pdf',
  summary:
    'Engenheiro de Software com 5+ anos em desenvolvimento backend escalável utilizando PHP (Laravel) e tecnologias em nuvem (AWS). Especialista em design de APIs RESTful seguras e modernização de sistemas legados, resultando em 30% de redução em dívida técnica e 25% de melhoria no desempenho das aplicações. Experiência em microsserviços e entregas ágeis em equipes internacionais.',
}

export const experience = [
  {
    company: 'Symplicity',
    role: 'Engenheiro de Software',
    period: 'Nov 2022 – Mar 2026',
    location: 'Remoto',
    bullets: [
      'Estruturou, desenvolveu e implementou aplicações web internas e APIs RESTful usando PHP e MySQL, contribuindo para escalabilidade, segurança e manutenibilidade a longo prazo do sistema.',
      'Liderou iniciativas de modernização em sistemas PHP legados, refatorando caminhos críticos de código, atualizando versões do PHP e melhorando a qualidade do código para reduzir dívida técnica e aumentar a confiabilidade da plataforma.',
      'Planejou e arquitetou APIs REST integrando serviços internos e sistemas de terceiros, garantindo contratos de API claros, fluxo de dados consistente e comportamento previsível entre componentes distribuídos.',
      'Melhorou a estabilidade e o desempenho da aplicação com suporte a testes unitários (PHPUnit), monitoramento de problemas em produção e proposição de otimizações direcionadas com base em padrões de uso reais.',
      'Criou e manteve documentação técnica cobrindo arquitetura de sistemas, regras de negócio e fluxos de desenvolvimento, apoiando onboarding e compartilhamento de conhecimento entre equipes de engenharia.',
      'Mentorou estagiários e engenheiros júnior em PHP, programação orientada a objetos e arquitetura da plataforma interna, além de atuar como entrevistador técnico para funções backend e full-stack.',
    ],
    tags: ['PHP', 'MySQL', 'PHPUnit', 'REST APIs', 'Documentação'],
  },
  {
    company: 'Amirom Express',
    role: 'Engenheiro de Software',
    period: 'Ago 2025 – Jan 2026',
    location: 'Remoto',
    bullets: [
      'Arquitetou e entregou uma plataforma SaaS de logística internacional ponta a ponta usando arquitetura de microsserviços escalável, suportando operações em tempo real, multi-tenancy e controle de acesso baseado em funções (RBAC).',
      'Responsável pelas decisões arquiteturais e pelo desenvolvimento full-stack de uma aplicação web de alto desempenho com Next.js 14 (SSR), React 18, TypeScript e Node.js, garantindo SEO otimizado, escalabilidade e segurança de nível de produção.',
      'Implementou padrões de segurança enterprise, incluindo autenticação JWT com cookies HTTP-only, 2FA, proteção CSRF, mecanismos de bloqueio de conta e melhores práticas alinhadas à OWASP.',
      'Projetou e otimizou bancos de dados relacionais complexos (MySQL + Sequelize), resolvendo problemas de queries N+1 e implementando indexação estratégica, reduzindo o tempo de carregamento do dashboard de 3,2s para 0,8s.',
      'Construiu dashboards em tempo real e análises processando 10.000+ registros de envios com desempenho sub-segundo, permitindo visibilidade operacional através de gráficos dinâmicos, KPIs e filtragem avançada.',
      'Alcançou impacto mensurável: 1.000+ envios internacionais mensais, 70% de redução na entrada manual de dados e expansão de parceiros via isolamento de dados multi-stakeholder com white-label.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'Microsserviços', 'JWT', 'AWS'],
  },
  {
    company: 'Afilio',
    role: 'Engenheiro de Software',
    period: 'Jun 2020 – Jul 2022',
    location: 'Rio de Janeiro',
    bullets: [
      'Liderou a modernização de uma plataforma ERP central reconstruindo o frontend com Vue.js e Quasar, e integrando APIs PHP Laravel em uma arquitetura de microsserviços, melhorando significativamente a usabilidade, o desempenho e a escalabilidade.',
      'Desenvolveu e aprimorou serviços backend em PHP Laravel, introduzindo novos recursos, resolvendo problemas em produção e gerenciando persistência de dados com MySQL e MongoDB em ambientes Docker.',
      'Gerenciou implantações em múltiplos ambientes (desenvolvimento, staging e produção) usando AWS, CLI Linux e Git para controle de versão, garantindo lançamentos confiáveis e eficiência operacional.',
      'Promovido a Engenheiro de Desenvolvimento de Software em reconhecimento ao maior escopo e impacto, trabalhando em equipes Agile (Scrum/Kanban) para garantir entrega consistente e alinhamento multifuncional.',
    ],
    tags: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
  },
]

export const education = {
  school: 'Estácio de Sá',
  degree: 'Bacharelado em Ciência da Computação',
  period: '2019 – 2023',
}

export const skills = [
  {
    category: 'Back-end',
    items: ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'JWT', 'PHPUnit', 'Microsserviços', 'OpenAPI'],
  },
  {
    category: 'Front-end',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'TailwindCSS', 'HTML', 'Zustand'],
  },
  {
    category: 'Banco de Dados',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Sequelize', 'SQL', 'NoSQL', 'Otimização de BD', 'Design de Schema'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['AWS', 'Docker', 'Git', 'GitLab CI', 'CI/CD', 'Linux', 'Server Side Rendering'],
  },
  {
    category: 'Práticas',
    items: ['Agile', 'TDD', 'Scrum', 'Kanban', 'Mentoria', 'Documentação', 'Code Review'],
  },
]

export const projects = [
  {
    name: 'Amirom Express — SaaS de Logística',
    description:
      'Plataforma de logística internacional ponta a ponta com dashboards em tempo real, multi-tenancy, RBAC e análises processando 10.000+ registros de envios com desempenho sub-segundo.',
    tags: ['Next.js 14', 'React 18', 'TypeScript', 'Node.js', 'MySQL', 'Microsserviços', 'AWS'],
    github: null,
    live: null,
  },
  {
    name: 'Modernização de ERP — Afilio',
    description:
      'Reconstrução do frontend ERP legado com Vue.js e Quasar, integração de APIs de microsserviços PHP Laravel e gerenciamento de implantações AWS em múltiplos ambientes.',
    tags: ['Vue.js', 'Quasar', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'Docker'],
    github: null,
    live: null,
  },
]
