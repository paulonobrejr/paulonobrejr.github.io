export const personal = {
  name: 'Paulo Nobre Junior',
  title: 'Software Engineer',
  location: 'Brazil',
  email: 'paulonobrejunior@outlook.com',
  phone: '+55 21 98061-1149',
  linkedin: 'https://www.linkedin.com/in/paulonobrejr/',
  github: 'https://github.com/paulonobrejr',
  cv: '/Paulo Nobre Junior-resume.pdf',
  summary:
    'Software Engineer with 5+ years of experience in scalable backend development using PHP (Laravel) and cloud technologies (AWS). Specialist in secure RESTful API design and legacy system modernization, delivering a 30% reduction in technical debt and a 25% improvement in application performance. Experienced in microservices and agile delivery across international teams.',
}

export const experience = [
  {
    company: 'Symplicity',
    role: 'Software Engineer',
    period: 'Nov 2022 – Mar 2026',
    location: 'Remote',
    bullets: [
      'Structured, developed, and deployed internal web applications and RESTful APIs using PHP and MySQL, contributing to the long-term scalability, security, and maintainability of the system.',
      'Led modernization initiatives on legacy PHP systems, refactoring critical code paths, upgrading PHP versions, and improving code quality to reduce technical debt and increase platform reliability.',
      'Planned and architected REST APIs integrating internal services and third-party systems, ensuring clear API contracts, consistent data flow, and predictable behavior across distributed components.',
      'Improved application stability and performance through unit test support (PHPUnit), production issue monitoring, and proposing targeted optimizations based on real usage patterns.',
      'Created and maintained technical documentation covering system architecture, business rules, and development workflows, supporting onboarding and knowledge sharing across engineering teams.',
      'Mentored interns and junior engineers in PHP, object-oriented programming, and internal platform architecture, while also acting as a technical interviewer for backend and full-stack roles.',
    ],
    tags: ['PHP', 'MySQL', 'PHPUnit', 'REST APIs', 'Documentation'],
  },
  {
    company: 'Amirom Express',
    role: 'Software Engineer',
    period: 'Aug 2025 – Jan 2026',
    location: 'Remote',
    bullets: [
      'Architected and delivered an end-to-end international logistics SaaS platform using scalable microservices architecture, supporting real-time operations, multi-tenancy, and role-based access control (RBAC).',
      'Owned architectural decisions and full-stack development of a high-performance web application with Next.js 14 (SSR), React 18, TypeScript, and Node.js, ensuring optimized SEO, scalability, and production-grade security.',
      'Implemented enterprise security patterns, including JWT authentication with HTTP-only cookies, 2FA, CSRF protection, account lockout mechanisms, and OWASP-aligned best practices.',
      'Designed and optimized complex relational databases (MySQL + Sequelize), resolving N+1 query issues and implementing strategic indexing, reducing dashboard load time from 3.2s to 0.8s.',
      'Built real-time dashboards and analytics processing 10,000+ shipment records with sub-second performance, enabling operational visibility through dynamic charts, KPIs, and advanced filtering.',
      'Achieved measurable impact: 1,000+ monthly international shipments, a 70% reduction in manual data entry, and partner expansion through white-label, multi-stakeholder data isolation.',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MySQL', 'Microservices', 'JWT', 'AWS'],
  },
  {
    company: 'Afilio',
    role: 'Software Engineer',
    period: 'Jun 2020 – Jul 2022',
    location: 'Rio de Janeiro',
    bullets: [
      'Led the modernization of a core ERP platform by rebuilding the frontend with Vue.js and Quasar, and integrating PHP Laravel APIs into a microservices architecture, significantly improving usability, performance, and scalability.',
      'Developed and enhanced backend services in PHP Laravel, introducing new features, resolving production issues, and managing data persistence with MySQL and MongoDB in Docker environments.',
      'Managed deployments across multiple environments (development, staging, and production) using AWS, Linux CLI, and Git for version control, ensuring reliable releases and operational efficiency.',
      'Promoted to Software Development Engineer in recognition of increased scope and impact, working in Agile teams (Scrum/Kanban) to ensure consistent delivery and cross-functional alignment.',
    ],
    tags: ['PHP', 'Laravel', 'Vue.js', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
  },
]

export const education = {
  school: 'Estácio de Sá',
  degree: "Bachelor's Degree in Computer Science",
  period: '2019 – 2023',
}

export const skills = [
  {
    category: 'Back-end',
    items: ['PHP', 'Laravel', 'Node.js', 'REST APIs', 'JWT', 'PHPUnit', 'Microservices', 'OpenAPI'],
  },
  {
    category: 'Front-end',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'TailwindCSS', 'HTML', 'Zustand'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Sequelize', 'SQL', 'NoSQL', 'DB Optimization', 'Schema Design'],
  },
  {
    category: 'DevOps & Cloud',
    items: ['AWS', 'Docker', 'Git', 'GitLab CI', 'CI/CD', 'Linux', 'Server Side Rendering'],
  },
  {
    category: 'Practices',
    items: ['Agile', 'TDD', 'Scrum', 'Kanban', 'Mentoring', 'Documentation', 'Code Review'],
  },
]

export const projects = [
  {
    name: 'Amirom Express — Logistics SaaS',
    description:
      'End-to-end international logistics platform with real-time dashboards, multi-tenancy, RBAC, and analytics processing 10,000+ shipment records with sub-second performance.',
    tags: ['Next.js 14', 'React 18', 'TypeScript', 'Node.js', 'MySQL', 'Microservices', 'AWS'],
    github: null,
    live: null,
  },
  {
    name: 'ERP Modernization — Afilio',
    description:
      'Rebuilt the legacy ERP frontend with Vue.js and Quasar, integrated PHP Laravel microservices APIs, and managed multi-environment AWS deployments.',
    tags: ['Vue.js', 'Quasar', 'PHP', 'Laravel', 'MySQL', 'MongoDB', 'Docker'],
    github: null,
    live: null,
  },
]
