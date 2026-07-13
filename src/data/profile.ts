import type { Language, Localized } from "../i18n/language";

type Link = {
  label: string;
  href: string;
};

type Hero = {
  role: string;
  summary: string;
  availability: string;
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
      "Full Stack Developer focused on production-ready web applications with Next.js, React, TypeScript, Node.js and Python/FastAPI.",
      "Builds complete products from database modeling to deployment, with practical AI/LLM features using Gemini, OpenAI, Whisper, Ollama and local models.",
      "Former Brazilian Navy officer with leadership experience in high-pressure operations, bringing ownership, discipline and clear communication to software delivery."
    ]
  },
  {
    title: "Core Skills",
    items: [
      "Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, responsive UI, accessibility.",
      "Backend: Node.js, Express, FastAPI, REST APIs, Auth.js/NextAuth, JWT, OAuth, RBAC.",
      "Data: PostgreSQL, Prisma, Drizzle, Firebase Realtime Database, Redis, SQLModel, SQLAlchemy.",
      "AI/ML: Gemini, OpenAI, Whisper, Ollama, YOLOv10, PyTorch, scikit-learn, Pandas, NumPy.",
      "Infrastructure and quality: Docker, Vercel, Cloudflare R2, GitHub Actions, Vitest, Playwright, pytest, OpenAPI."
    ]
  },
  {
    title: "Experience",
    items: [
      "Brazilian Navy, First Lieutenant Marine Corps Officer, February 2011 to present, Rio de Janeiro, Brazil.",
      "Led and coordinated teams in high-responsibility environments, translating operational discipline, planning and decision-making under pressure into software delivery habits.",
      "Completed 300+ hours specialization in Artificial Intelligence for Military Applications through the Brazilian Navy and FGV, with practice in machine learning, data engineering, computer vision and Python."
    ]
  },
  {
    title: "Selected Projects",
    items: [
      "E-commerce & Services Platform: Next.js 16, React 19, TypeScript, Prisma 7, PostgreSQL/Supabase, 40+ REST endpoints, MercadoPago/Pix, HMAC webhooks, RBAC and Gemini AI assistant.",
      "Gym Management Platform: real client product for a fight club with plans, store, CRM, WhatsApp, Web Push, dashboards, financial reports, Redis, Cloudflare R2, Vitest and Playwright.",
      "AI Tutor for Kids: Next.js + FastAPI app with Gemini lesson generation, local TTS, spaced repetition, auth, validation of AI-generated content and Cloudflare Tunnel backend routing.",
      "AI Media Transcription & Report Studio: Next.js SaaS + FastAPI + Electron with multi-provider transcription, local Whisper fallback, OCR, DOCX/PDF export, billing and email.",
      "Logs Microservice: Express 5, BullMQ/Redis worker, PostgreSQL, idempotency, dead-letter tracking, Prometheus metrics, OpenAPI, Docker and CI."
    ]
  },
  {
    title: "Education",
    items: [
      "FGV - Postgraduate Specialization in Artificial Intelligence, January 2024 to April 2025. Final project: YOLOv10-powered computer vision system for military vehicle detection and classification.",
      "Escola Naval - Naval Sciences / Engineering, January 2014 to December 2019."
    ]
  },
  {
    title: "Certifications",
    items: [
      "React Developer - DIO, issued May 2023.",
      "CS50x Introduction to Computer Science - Harvard University, issued November 2025.",
      "Mercado Pago checkout and billing module implementation credential."
    ]
  },
  {
    title: "Languages",
    items: ["English: advanced/fluent.", "Spanish: intermediate.", "French: beginner."]
  },
  {
    title: "Availability",
    items: ["Open to Frontend, Full Stack and AI-enabled product roles. Available for remote, hybrid or relocation opportunities."]
  }
];

const portugueseResumeSections: ResumeSection[] = [
  {
    title: "Resumo Profissional",
    items: [
      "Desenvolvedor Full Stack focado em aplicações web de produção com Next.js, React, TypeScript, Node.js e Python/FastAPI.",
      "Constrói produtos completos da modelagem de dados ao deploy, com recursos práticos de IA/LLMs usando Gemini, OpenAI, Whisper, Ollama e modelos locais.",
      "Oficial da Marinha do Brasil, trazendo liderança, disciplina, comunicação clara e tomada de decisão sob pressão para entrega de software."
    ]
  },
  {
    title: "Competências Principais",
    items: [
      "Frontend: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, UI responsiva, acessibilidade.",
      "Backend: Node.js, Express, FastAPI, APIs REST, Auth.js/NextAuth, JWT, OAuth, RBAC.",
      "Dados: PostgreSQL, Prisma, Drizzle, Firebase Realtime Database, Redis, SQLModel, SQLAlchemy.",
      "IA/ML: Gemini, OpenAI, Whisper, Ollama, YOLOv10, PyTorch, scikit-learn, Pandas, NumPy.",
      "Infraestrutura e qualidade: Docker, Vercel, Cloudflare R2, GitHub Actions, Vitest, Playwright, pytest, OpenAPI."
    ]
  },
  {
    title: "Experiência",
    items: [
      "Marinha do Brasil, Primeiro-Tenente Fuzileiro Naval, fevereiro de 2011 ate o momento, Rio de Janeiro, Brasil.",
      "Liderou e coordenou equipes em ambientes de alta responsabilidade, aplicando disciplina operacional, planejamento e decisão sob pressão ao desenvolvimento de software.",
      "Concluiu especialização de mais de 300 horas em Inteligência Artificial para Aplicações Militares pela Marinha do Brasil e FGV, com prática em machine learning, engenharia de dados, visão computacional e Python."
    ]
  },
  {
    title: "Projetos Selecionados",
    items: [
      "E-commerce & Services Platform: Next.js 16, React 19, TypeScript, Prisma 7, PostgreSQL/Supabase, 40+ endpoints REST, MercadoPago/Pix, webhooks HMAC, RBAC e assistente Gemini.",
      "Gym Management Platform: produto para cliente real de academia de luta com planos, loja, CRM, WhatsApp, Web Push, dashboards, relatórios financeiros, Redis, Cloudflare R2, Vitest e Playwright.",
      "AI Tutor for Kids: app Next.js + FastAPI com geração de aulas via Gemini, TTS local, repetição espaçada, autenticação, validação de conteúdo gerado por IA e backend via Cloudflare Tunnel.",
      "AI Media Transcription & Report Studio: SaaS Next.js + FastAPI + Electron com transcrição multi-provider, fallback Whisper local, OCR, exportação DOCX/PDF, billing e email.",
      "Logs Microservice: Express 5, worker BullMQ/Redis, PostgreSQL, idempotência, dead letters, métricas Prometheus, OpenAPI, Docker e CI."
    ]
  },
  {
    title: "Formação",
    items: [
      "FGV - Pós-graduação Lato Sensu em Inteligência Artificial, janeiro de 2024 a abril de 2025. Projeto final: sistema de visão computacional com YOLOv10 para detecção e classificação de veículos militares.",
      "Escola Naval - Ciências Navais / Engenharia, janeiro de 2014 a dezembro de 2019."
    ]
  },
  {
    title: "Certificações",
    items: [
      "React Developer - DIO, emitida em maio de 2023.",
      "CS50x Introduction to Computer Science - Harvard University, emitida em novembro de 2025.",
      "Credencial de implementação de checkout e módulo de cobrança Mercado Pago."
    ]
  },
  {
    title: "Idiomas",
    items: ["Inglês: avançado/fluente.", "Espanhol: intermediário.", "Francês: iniciante."]
  },
  {
    title: "Disponibilidade",
    items: ["Aberto a vagas Frontend, Full Stack e produtos com IA. Disponível para oportunidades remotas, híbridas ou com relocação."]
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
      role: "Full Stack Developer | Next.js, TypeScript, React, Node.js, Python | AI & LLM applications",
      summary:
        "I build production-ready web products from database design to deployment, with strong evidence in Next.js, TypeScript, React, Node.js, Python/FastAPI and practical AI features using LLMs.",
      availability: "Open to Frontend, Full Stack and AI-enabled product roles."
    },
    pt: {
      role: "Desenvolvedor Full Stack | Next.js, TypeScript, React, Node.js, Python | Aplicações com IA e LLMs",
      summary:
        "Construo produtos web prontos para produção da modelagem do banco ao deploy, com experiência em Next.js, TypeScript, React, Node.js, Python/FastAPI e recursos práticos de IA com LLMs.",
      availability: "Aberto a vagas Frontend, Full Stack e produtos com IA."
    }
  },
  credentials: {
    en: [
      "Postgraduate specialization in Artificial Intelligence at FGV",
      "Brazilian Navy officer background with leadership under pressure",
      "Real client platform delivered for Máquina Team",
      "40+ REST endpoints, RBAC, payments, webhooks and AI workflows"
    ],
    pt: [
      "Pós-graduação em Inteligência Artificial pela FGV",
      "Experiência como Oficial da Marinha do Brasil com liderança sob pressão",
      "Plataforma entregue para cliente real: Máquina Team",
      "40+ endpoints REST, RBAC, pagamentos, webhooks e fluxos com IA"
    ]
  },
  recruiterSummary: {
    en: [
      "Helber is positioned for teams that need someone who can build more than interfaces: he connects product requirements, backend rules, databases, integrations, deployment and user experience.",
      "His strongest portfolio evidence is not a list of tutorials. It includes a private e-commerce/services platform documented as a public architecture case study, a real client gym management system, an AI tutor, an AI transcription/reporting studio, a productivity app and an observability microservice.",
      "The technical pattern is consistent: TypeScript-first web apps, typed data layers, authentication, payments, role-based dashboards, AI features with validation, and deployment-oriented documentation."
    ],
    pt: [
      "Helber atua para times que precisam de alguém capaz de construir mais do que interfaces: ele conecta requisitos de produto, regras de backend, bancos de dados, integrações, deploy e experiência do usuário.",
      "A evidência mais forte do portfólio não é uma lista de tutoriais. Ela inclui uma plataforma privada de e-commerce/serviços documentada em estudo de arquitetura, um sistema real para academia, tutor com IA, estúdio de transcrição, app de produtividade e microserviço de observabilidade.",
      "O padrão técnico é consistente: aplicações TypeScript, camadas de dados tipadas, autenticação, pagamentos, dashboards por perfil, recursos de IA com validação e documentação orientada a deploy."
    ]
  },
  evidence: {
    en: [
      { value: "40+", label: "REST endpoints in the e-commerce platform" },
      { value: "300h+", label: "AI specialization through FGV and Brazilian Navy" },
      { value: "Client", label: "Real product delivered for Máquina Team" },
      { value: "AI", label: "Gemini, OpenAI, Whisper, Ollama, YOLOv10 and PyTorch" }
    ],
    pt: [
      { value: "40+", label: "endpoints REST na plataforma de e-commerce" },
      { value: "300h+", label: "especialização em IA pela FGV e Marinha" },
      { value: "Cliente", label: "produto real entregue para Máquina Team" },
      { value: "IA", label: "Gemini, OpenAI, Whisper, Ollama, YOLOv10 e PyTorch" }
    ]
  },
  stackGroups: {
    en: [
      { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
      { title: "Backend", items: ["Node.js", "Express", "FastAPI", "REST APIs", "Auth.js / NextAuth"] },
      { title: "Data", items: ["PostgreSQL", "Prisma", "Drizzle", "Firebase", "Redis"] },
      { title: "AI / ML", items: ["Gemini", "OpenAI", "Whisper", "Ollama", "YOLOv10", "PyTorch", "scikit-learn"] },
      { title: "Infra & Quality", items: ["Docker", "Vercel", "Cloudflare R2", "GitHub Actions", "Vitest", "Playwright", "pytest"] }
    ],
    pt: [
      { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
      { title: "Backend", items: ["Node.js", "Express", "FastAPI", "APIs REST", "Auth.js / NextAuth"] },
      { title: "Dados", items: ["PostgreSQL", "Prisma", "Drizzle", "Firebase", "Redis"] },
      { title: "IA / ML", items: ["Gemini", "OpenAI", "Whisper", "Ollama", "YOLOv10", "PyTorch", "scikit-learn"] },
      { title: "Infra e Qualidade", items: ["Docker", "Vercel", "Cloudflare R2", "GitHub Actions", "Vitest", "Playwright", "pytest"] }
    ]
  },
  background: {
    en: [
      "Before focusing on software, Helber served as a Brazilian Navy Marine Corps officer. That background matters because it shows discipline, responsibility, leadership and calm execution under pressure.",
      "In software, he applies that same operating rhythm to product delivery: understand the mission, break down the problem, document decisions, validate with tests and ship usable systems."
    ],
    pt: [
      "Antes de focar em software, Helber atuou como Oficial Fuzileiro Naval da Marinha do Brasil. Essa trajetória importa porque demonstra disciplina, responsabilidade, liderança e execução sob pressão.",
      "No desenvolvimento, ele aplica esse mesmo ritmo operacional: entender a missão, decompor o problema, documentar decisões, validar com testes e entregar sistemas usáveis."
    ]
  },
  education: {
    en: [
      "FGV - Postgraduate Specialization in Artificial Intelligence, January 2024 to April 2025.",
      "Final project: YOLOv10-powered computer vision system for military vehicle detection and classification with CNN/PyTorch foundations.",
      "Escola Naval - Naval Sciences / Engineering, January 2014 to December 2019."
    ],
    pt: [
      "FGV - Pós-graduação Lato Sensu em Inteligência Artificial, janeiro de 2024 a abril de 2025.",
      "Projeto final: sistema de visão computacional com YOLOv10 para detecção e classificação de veículos militares, com base em CNN/PyTorch.",
      "Escola Naval - Ciências Navais / Engenharia, janeiro de 2014 a dezembro de 2019."
    ]
  },
  certifications: {
    en: [
      "React Developer - DIO.",
      "CS50x Introduction to Computer Science - Harvard University.",
      "Mercado Pago checkout and billing implementation credential."
    ],
    pt: [
      "React Developer - DIO.",
      "CS50x Introduction to Computer Science - Harvard University.",
      "Credencial de implementação de checkout e cobrança Mercado Pago."
    ]
  },
  languages: {
    en: ["English: advanced/fluent", "Spanish: intermediate", "French: beginner"],
    pt: ["Inglês: avançado/fluente", "Espanhol: intermediário", "Francês: iniciante"]
  },
  services: {
    en: ["Web development", "Application development", "AI automation", "Full-stack MVPs"],
    pt: ["Desenvolvimento web", "Desenvolvimento de aplicativos", "Automação com IA", "MVPs full stack"]
  },
  resume: {
    en: {
      title: "ATS Resume",
      subtitle: "Plain, recruiter-friendly resume for screening systems and human review.",
      sections: englishResumeSections
    },
    pt: {
      title: "Currículo ATS",
      subtitle: "Currículo limpo para sistemas de triagem e leitura humana.",
      sections: portugueseResumeSections
    }
  }
};
