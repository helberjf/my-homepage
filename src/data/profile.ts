import type { Language, Localized } from "../i18n/language";

type Link = {
  label: string;
  href: string;
};

type Hero = {
  role: string;
  summary: string;
};

type StackGroup = {
  title: string;
  items: string[];
};

type ResumeSection = {
  title: string;
  items: string[];
};

type ResumeContent = {
  title: string;
  subtitle: string;
  sections: ResumeSection[];
};

type Profile = {
  defaultLanguage: Language;
  name: string;
  location: string;
  contact: {
    email: string;
    phone: string;
    github: Link;
    linkedin: Link;
    whatsapp: Link;
  };
  hero: Localized<Hero>;
  credentials: Localized<string[]>;
  recruiterSummary: Localized<string[]>;
  evidence: Localized<Array<{ value: string; label: string }>>;
  stackGroups: Localized<StackGroup[]>;
  background: Localized<string[]>;
  education: Localized<string[]>;
  certifications: Localized<string[]>;
  languages: Localized<string[]>;
  services: Localized<string[]>;
  resume: Localized<ResumeContent>;
};

const englishResumeSections: ResumeSection[] = [
  {
    title: "Professional Summary",
    items: [
      "Full Stack Developer building web applications with TypeScript, React, Next.js, Node.js and Python/FastAPI, from data modeling to deployment.",
      "Builds event-driven backends on AWS (Lambda, API Gateway, DynamoDB Streams, SQS, EventBridge, AWS SAM) and practical AI/LLM features.",
      "Brazilian Navy officer with leadership experience in high-pressure operations, bringing ownership, discipline and clear communication to software delivery."
    ]
  },
  {
    title: "Core Skills",
    items: [
      "Frontend: React, Next.js, TypeScript, Tailwind CSS, responsive and accessible UI.",
      "Backend: Node.js, Express, FastAPI, REST APIs, authentication and RBAC.",
      "Data: PostgreSQL, Prisma, Drizzle, Redis, DynamoDB.",
      "Cloud and delivery: AWS Lambda, API Gateway, SQS, EventBridge, AWS SAM, Docker, Vercel, GitHub Actions.",
      "Testing: Vitest, Playwright, pytest.",
      "AI: Gemini and OpenAI integrations, PyTorch, scikit-learn."
    ]
  },
  {
    title: "Experience",
    items: [
      "Full Stack Developer, Independent projects, 2025 to present.",
      "Máquina Team (fight club): website with Mercado Pago checkout, then a management platform with memberships, store, CRM, WhatsApp and Web Push messaging and role-based dashboards (Next.js, Prisma, PostgreSQL, Redis).",
      "Mapa Hóspede: lead developer of a platform where accommodation hosts publish digital guest guides (React, TypeScript, Express, PostgreSQL/Drizzle, Stripe).",
      "Norwell Brasil and DPI Planning Center: multilingual and quote-request websites built with React and TypeScript, with SEO, accessibility checks and Playwright tests.",
      "Brazilian Navy, Marine Corps Officer (First Lieutenant), February 2011 to present, Rio de Janeiro, Brazil. Includes officer training at the Brazilian Naval Academy (2014 to 2019).",
      "Lead and coordinate teams in high-responsibility operations: planning, briefing and executing under time pressure.",
      "Completed a 300+ hour specialization in Artificial Intelligence for Military Applications (Brazilian Navy / FGV): machine learning, data engineering, computer vision and Python."
    ]
  },
  {
    title: "Selected Projects",
    items: [
      "AWS Serverless Orders: event-driven TypeScript backend with Lambda, API Gateway, Cognito, DynamoDB Streams, SQS, EventBridge and SNS; transactional outbox, idempotent consumers, DLQs, AWS SAM and 137 automated tests.",
      "E-commerce & Services Platform: Next.js 16, React 19, TypeScript, Prisma 7, PostgreSQL, 40+ REST endpoints, MercadoPago/Pix, HMAC-verified webhooks, RBAC and a Gemini assistant.",
      "Logs Microservice: Express 5, BullMQ/Redis worker, PostgreSQL, ingestion deduplication, dead-letter tracking, Prometheus metrics, OpenAPI and Docker.",
      "AI Tutor: Next.js + FastAPI study platform with AI-generated lessons, spaced repetition, authentication and Playwright end-to-end tests."
    ]
  },
  {
    title: "Education",
    items: [
      "FGV, Postgraduate Specialization in Artificial Intelligence, January 2024 to April 2025. Final project: YOLOv10-based computer vision system for military vehicle detection and classification.",
      "Brazilian Naval Academy (Escola Naval), Bachelor's degree in Naval Science (Mechanical Engineering track), January 2014 to December 2019."
    ]
  },
  {
    title: "Certifications",
    items: [
      "CS50x Introduction to Computer Science, Harvard University, November 2025.",
      "React Developer (May 2023) and JavaScript Developer (October 2025), DIO.",
      "Mercado Pago Checkout Pro developer credential, November 2025."
    ]
  },
  {
    title: "Languages",
    items: ["Portuguese: native.", "English: advanced.", "Spanish: intermediate.", "French: beginner."]
  }
];

const portugueseResumeSections: ResumeSection[] = [
  {
    title: "Resumo Profissional",
    items: [
      "Desenvolvedor Full Stack que constrói aplicações web com TypeScript, React, Next.js, Node.js e Python/FastAPI, da modelagem de dados ao deploy.",
      "Desenvolve backends orientados a eventos na AWS (Lambda, API Gateway, DynamoDB Streams, SQS, EventBridge, AWS SAM) e recursos práticos de IA/LLMs.",
      "Oficial da Marinha do Brasil, com experiência de liderança em operações sob pressão, trazendo responsabilidade, disciplina e comunicação clara para a entrega de software."
    ]
  },
  {
    title: "Competências Principais",
    items: [
      "Frontend: React, Next.js, TypeScript, Tailwind CSS, interfaces responsivas e acessíveis.",
      "Backend: Node.js, Express, FastAPI, APIs REST, autenticação e RBAC.",
      "Dados: PostgreSQL, Prisma, Drizzle, Redis, DynamoDB.",
      "Cloud e entrega: AWS Lambda, API Gateway, SQS, EventBridge, AWS SAM, Docker, Vercel, GitHub Actions.",
      "Testes: Vitest, Playwright, pytest.",
      "IA: integrações com Gemini e OpenAI, PyTorch, scikit-learn."
    ]
  },
  {
    title: "Experiência",
    items: [
      "Desenvolvedor Full Stack, Projetos independentes, 2025 até o momento.",
      "Máquina Team (academia de luta): site com checkout Mercado Pago e, depois, plataforma de gestão com planos, loja, CRM, mensagens por WhatsApp e Web Push e painéis por perfil (Next.js, Prisma, PostgreSQL, Redis).",
      "Mapa Hóspede: desenvolvedor principal de uma plataforma em que anfitriões publicam guias digitais para hóspedes (React, TypeScript, Express, PostgreSQL/Drizzle, Stripe).",
      "Norwell Brasil e DPI Planning Center: sites multilíngues e de pedido de orçamento com React e TypeScript, SEO, verificações de acessibilidade e testes Playwright.",
      "Marinha do Brasil, Oficial Fuzileiro Naval (Primeiro-Tenente), fevereiro de 2011 até o momento, Rio de Janeiro, Brasil. Inclui a formação de oficial na Escola Naval (2014 a 2019).",
      "Lidera e coordena equipes em operações de alta responsabilidade: planejamento, briefing e execução sob pressão de tempo.",
      "Concluiu especialização de mais de 300 horas em Inteligência Artificial para Aplicações Militares (Marinha do Brasil / FGV): machine learning, engenharia de dados, visão computacional e Python."
    ]
  },
  {
    title: "Projetos Selecionados",
    items: [
      "AWS Serverless Orders: backend TypeScript orientado a eventos com Lambda, API Gateway, Cognito, DynamoDB Streams, SQS, EventBridge e SNS; transactional outbox, consumidores idempotentes, DLQs, AWS SAM e 137 testes automatizados.",
      "E-commerce & Services Platform: Next.js 16, React 19, TypeScript, Prisma 7, PostgreSQL, 40+ endpoints REST, MercadoPago/Pix, webhooks verificados com HMAC, RBAC e assistente Gemini.",
      "Logs Microservice: Express 5, worker BullMQ/Redis, PostgreSQL, deduplicação na ingestão, registro de dead letters, métricas Prometheus, OpenAPI e Docker.",
      "AI Tutor: plataforma de estudos Next.js + FastAPI com aulas geradas por IA, repetição espaçada, autenticação e testes end-to-end com Playwright."
    ]
  },
  {
    title: "Formação",
    items: [
      "FGV, Pós-graduação Lato Sensu em Inteligência Artificial, janeiro de 2024 a abril de 2025. Projeto final: sistema de visão computacional com YOLOv10 para detecção e classificação de veículos militares.",
      "Escola Naval, Bacharelado em Ciências Navais (habilitação em Mecânica), janeiro de 2014 a dezembro de 2019."
    ]
  },
  {
    title: "Certificações",
    items: [
      "CS50x Introduction to Computer Science, Harvard University, novembro de 2025.",
      "React Developer (maio de 2023) e JavaScript Developer (outubro de 2025), DIO.",
      "Credencial de desenvolvedor Mercado Pago Checkout Pro, novembro de 2025."
    ]
  },
  {
    title: "Idiomas",
    items: ["Português: nativo.", "Inglês: avançado.", "Espanhol: intermediário.", "Francês: iniciante."]
  }
];

export const profile: Profile = {
  defaultLanguage: "en",
  name: "Helber Soares",
  location: "Rio de Janeiro, Brazil",
  contact: {
    email: "helberjf@gmail.com",
    phone: "+55 32 99194-9689",
    github: { label: "github.com/helberjf", href: "https://github.com/helberjf" },
    linkedin: { label: "linkedin.com/in/helber-soares", href: "https://www.linkedin.com/in/helber-soares/" },
    whatsapp: { label: "WhatsApp", href: "https://wa.me/5532991949689" }
  },
  hero: {
    en: {
      role: "Full Stack Developer | TypeScript, React, Node.js & Next.js | AWS & PostgreSQL",
      summary:
        "I build full stack web applications with TypeScript, React, Next.js and Node.js, from the database schema to the deployed app, including event-driven backends on AWS and practical AI features."
    },
    pt: {
      role: "Desenvolvedor Full Stack | TypeScript, React, Node.js e Next.js | AWS e PostgreSQL",
      summary:
        "Desenvolvo aplicações web full stack com TypeScript, React, Next.js e Node.js, do modelo de dados ao deploy, incluindo backends orientados a eventos na AWS e recursos práticos de IA."
    }
  },
  credentials: {
    en: [
      "Postgraduate specialization in Artificial Intelligence at FGV",
      "Brazilian Navy officer with leadership experience under pressure",
      "Management platform built for Máquina Team, a fight club",
      "Event-driven AWS backend with transactional outbox and idempotent consumers"
    ],
    pt: [
      "Pós-graduação em Inteligência Artificial pela FGV",
      "Oficial da Marinha do Brasil, com experiência de liderança sob pressão",
      "Plataforma de gestão feita para a Máquina Team, academia de luta",
      "Backend orientado a eventos na AWS com transactional outbox e consumidores idempotentes"
    ]
  },
  recruiterSummary: {
    en: [
      "I build more than interfaces: I connect product requirements, backend rules, databases, integrations, deployment and user experience.",
      "My strongest work includes a management platform built for Máquina Team, an event-driven orders backend on AWS, an e-commerce and services platform documented as a public case study, an AI study platform and an asynchronous log-ingestion service.",
      "The pattern is consistent: TypeScript-first applications, typed data layers, authentication, payments, role-based dashboards, automated tests and documentation that explains the trade-offs."
    ],
    pt: [
      "Construo mais do que interfaces: conecto requisitos de produto, regras de backend, bancos de dados, integrações, deploy e experiência do usuário.",
      "Meus trabalhos mais fortes incluem uma plataforma de gestão feita para a Máquina Team, um backend de pedidos orientado a eventos na AWS, uma plataforma de e-commerce e serviços documentada em estudo de caso público, uma plataforma de estudos com IA e um serviço assíncrono de ingestão de logs.",
      "O padrão é consistente: aplicações TypeScript, camadas de dados tipadas, autenticação, pagamentos, painéis por perfil, testes automatizados e documentação que explica os trade-offs."
    ]
  },
  evidence: {
    en: [
      { value: "AWS", label: "Lambda, DynamoDB Streams, SQS and EventBridge in an event-driven backend" },
      { value: "40+", label: "REST endpoints in the e-commerce platform" },
      { value: "Live demo", label: "Management platform built for Máquina Team" },
      { value: "300h+", label: "AI specialization through FGV and Brazilian Navy" }
    ],
    pt: [
      { value: "AWS", label: "Lambda, DynamoDB Streams, SQS e EventBridge em backend orientado a eventos" },
      { value: "40+", label: "endpoints REST na plataforma de e-commerce" },
      { value: "Demo no ar", label: "plataforma de gestão feita para a Máquina Team" },
      { value: "300h+", label: "especialização em IA pela FGV e Marinha" }
    ]
  },
  stackGroups: {
    en: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs", "Auth.js / NextAuth"] },
      { title: "Data", items: ["PostgreSQL", "Prisma", "Drizzle", "Redis", "DynamoDB"] },
      { title: "AWS", items: ["Lambda", "API Gateway", "SQS", "EventBridge", "SNS", "AWS SAM"] },
      { title: "Quality & Delivery", items: ["Vitest", "Playwright", "pytest", "Docker", "Vercel", "GitHub Actions"] },
      { title: "AI", items: ["Gemini", "OpenAI", "PyTorch", "scikit-learn"] }
    ],
    pt: [
      { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
      { title: "Backend", items: ["Node.js", "Express", "FastAPI", "APIs REST", "Auth.js / NextAuth"] },
      { title: "Dados", items: ["PostgreSQL", "Prisma", "Drizzle", "Redis", "DynamoDB"] },
      { title: "AWS", items: ["Lambda", "API Gateway", "SQS", "EventBridge", "SNS", "AWS SAM"] },
      { title: "Qualidade e Entrega", items: ["Vitest", "Playwright", "pytest", "Docker", "Vercel", "GitHub Actions"] },
      { title: "IA", items: ["Gemini", "OpenAI", "PyTorch", "scikit-learn"] }
    ]
  },
  background: {
    en: [
      "I am an officer in the Brazilian Marine Corps. Military service taught me discipline, responsibility, leadership and calm execution under pressure.",
      "In software I apply the same rhythm: understand the mission, break down the problem, document decisions, validate with tests and ship usable systems."
    ],
    pt: [
      "Sou oficial do Corpo de Fuzileiros Navais da Marinha do Brasil. A carreira militar me ensinou disciplina, responsabilidade, liderança e execução sob pressão.",
      "No software aplico o mesmo ritmo: entender a missão, decompor o problema, documentar decisões, validar com testes e entregar sistemas usáveis."
    ]
  },
  education: {
    en: [
      "FGV, Postgraduate Specialization in Artificial Intelligence, January 2024 to April 2025.",
      "Final project: YOLOv10-based computer vision system for military vehicle detection and classification.",
      "Brazilian Naval Academy (Escola Naval), Bachelor's degree in Naval Science (Mechanical Engineering track), January 2014 to December 2019."
    ],
    pt: [
      "FGV, Pós-graduação Lato Sensu em Inteligência Artificial, janeiro de 2024 a abril de 2025.",
      "Projeto final: sistema de visão computacional com YOLOv10 para detecção e classificação de veículos militares.",
      "Escola Naval, Bacharelado em Ciências Navais (habilitação em Mecânica), janeiro de 2014 a dezembro de 2019."
    ]
  },
  certifications: {
    en: [
      "CS50x Introduction to Computer Science, Harvard University.",
      "React Developer and JavaScript Developer, DIO.",
      "Mercado Pago Checkout Pro developer credential."
    ],
    pt: [
      "CS50x Introduction to Computer Science, Harvard University.",
      "React Developer e JavaScript Developer, DIO.",
      "Credencial de desenvolvedor Mercado Pago Checkout Pro."
    ]
  },
  languages: {
    en: ["Portuguese: native", "English: advanced", "Spanish: intermediate", "French: beginner"],
    pt: ["Português: nativo", "Inglês: avançado", "Espanhol: intermediário", "Francês: iniciante"]
  },
  services: {
    en: ["Web development", "Application development", "AI automation", "Full-stack MVPs"],
    pt: ["Desenvolvimento web", "Desenvolvimento de aplicativos", "Automação com IA", "MVPs full stack"]
  },
  resume: {
    en: {
      title: "Resume",
      subtitle: "Plain-text version for quick reading.",
      sections: englishResumeSections
    },
    pt: {
      title: "Currículo",
      subtitle: "Versão em texto simples para leitura rápida.",
      sections: portugueseResumeSections
    }
  }
};
