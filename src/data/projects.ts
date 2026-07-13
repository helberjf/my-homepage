import type { Localized } from "../i18n/language";

type ProjectLink = {
  type: "demo" | "caseStudy" | "repo";
  href: string;
};

export type Project = {
  name: string;
  featured: boolean;
  stack: string[];
  links: ProjectLink[];
  summary: Localized<string>;
  problem: Localized<string>;
  architecture: Localized<string>;
  highlights: Localized<string[]>;
  talkingPoints: Localized<string[]>;
};

export const projects: Project[] = [
  {
    name: "E-commerce & Services Platform",
    featured: true,
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "PostgreSQL", "MercadoPago", "Gemini AI", "Cloudflare R2"],
    links: [
      { type: "demo", href: "https://vendaprodutosonline.vercel.app" },
      { type: "caseStudy", href: "https://github.com/helberjf/ecommerce-platform-casestudy" }
    ],
    summary: {
      en: "A production-ready commerce and scheduling platform that combines physical products, bookable services, payments, CRM, dashboards and AI-assisted workflows.",
      pt: "Uma plataforma de e-commerce e agendamentos pronta para produção, combinando produtos físicos, serviços agendáveis, pagamentos, CRM, dashboards e fluxos com IA."
    },
    problem: {
      en: "Small businesses often need products, services, customer management, payments and analytics in one place instead of disconnected tools.",
      pt: "Pequenos negócios precisam reunir produtos, serviços, gestão de clientes, pagamentos e análises em um só lugar, em vez de ferramentas desconectadas."
    },
    architecture: {
      en: "Single Next.js App Router application with 40+ REST route handlers, PostgreSQL/Supabase through Prisma, NextAuth v5 RBAC, Cloudflare R2 media storage, MercadoPago/Pix webhooks and Google Gemini features wired into product and support workflows.",
      pt: "Aplicação única em Next.js App Router com 40+ rotas REST, PostgreSQL/Supabase via Prisma, RBAC com NextAuth v5, Cloudflare R2 para mídia, webhooks MercadoPago/Pix e recursos Google Gemini nos fluxos de produto e suporte."
    },
    highlights: {
      en: ["HMAC-verified payment webhooks before mutating orders.", "Role-based dashboards for customer, staff and admin users.", "SEO-aware SSG/SSR/ISR strategy across public routes.", "Rate limiting, Zod validation, bcrypt/JWT flows and RBAC."],
      pt: ["Webhooks de pagamento verificados com HMAC antes de alterar pedidos.", "Dashboards por perfil para cliente, equipe e administrador.", "Estratégia de SEO com SSG/SSR/ISR nas rotas públicas.", "Rate limiting, validação com Zod, fluxos bcrypt/JWT e RBAC."]
    },
    talkingPoints: {
      en: ["Explain how payments, order state and webhook verification were modeled.", "Discuss why private commercial source was documented through a public case study.", "Walk through how Gemini is used in real workflows instead of being added as decoration."],
      pt: ["Explicar como pagamentos, estado de pedidos e verificação de webhooks foram modelados.", "Discutir por que o código comercial privado foi documentado em estudo de caso público.", "Mostrar como o Gemini entra em fluxos reais, não como detalhe decorativo."]
    }
  },
  {
    name: "Gym Management Platform",
    featured: true,
    stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Redis", "WhatsApp", "Playwright"],
    links: [
      { type: "demo", href: "https://gym-sistem-maquinateam.vercel.app" },
      { type: "caseStudy", href: "https://github.com/helberjf/gym-management-casestudy" }
    ],
    summary: {
      en: "A full-stack platform delivered for a real fight-club client, covering marketing, store, subscriptions, CRM, messaging, training modules and owner dashboards.",
      pt: "Plataforma full stack entregue para cliente real de academia de luta, cobrindo site, loja, assinaturas, CRM, mensageria, módulos de treino e dashboards do proprietário."
    },
    problem: {
      en: "The client needed more than a website: they needed operations, member engagement and financial visibility in one system.",
      pt: "O cliente precisava de mais do que um site: precisava de operação, engajamento de alunos e visibilidade financeira em um sistema."
    },
    architecture: {
      en: "Next.js application with public marketing pages, member area, staff/owner dashboards, PostgreSQL/Prisma, Redis caching/session support, Cloudflare R2, WhatsApp messaging and Web Push notifications.",
      pt: "Aplicação Next.js com páginas públicas, área do aluno, dashboards de equipe/proprietário, PostgreSQL/Prisma, Redis para cache/sessões, Cloudflare R2, WhatsApp e Web Push."
    },
    highlights: {
      en: ["Real paying client context with reliability expectations.", "Financial reports including DRE-style business visibility.", "Member, staff and owner role separation.", "Vitest and Playwright coverage for important flows."],
      pt: ["Contexto de cliente pagante real com expectativa de confiabilidade.", "Relatórios financeiros incluindo visão tipo DRE.", "Separação de perfis aluno, equipe e proprietário.", "Cobertura com Vitest e Playwright em fluxos importantes."]
    },
    talkingPoints: {
      en: ["Describe how technical decisions changed because this was a real client product.", "Explain role-based dashboards and why owners need different data than members.", "Discuss the trade-off between fast delivery and test coverage in client work."],
      pt: ["Descrever como as decisões técnicas mudaram por ser produto de cliente real.", "Explicar dashboards por perfil e por que proprietários precisam de dados diferentes dos alunos.", "Discutir o equilíbrio entre entrega rápida e cobertura de testes em projeto de cliente."]
    }
  },
  {
    name: "AI Tutor for Kids",
    featured: true,
    stack: ["Next.js", "FastAPI", "TypeScript", "Python", "Gemini", "SQLModel", "PostgreSQL", "Cloudflare Tunnel"],
    links: [
      { type: "demo", href: "https://tutorprofessor.vercel.app" },
      { type: "repo", href: "https://github.com/helberjf/tutor-professor" }
    ],
    summary: {
      en: "A child-facing tutoring product with AI-generated lessons, quizzes, spaced repetition, local TTS, parent controls and broader study tools.",
      pt: "Produto educacional infantil com aulas geradas por IA, quizzes, repetição espaçada, TTS local, controles para responsáveis e ferramentas de estudo."
    },
    problem: {
      en: "AI learning tools need safe generation, persistence and review flows rather than one-off prompts.",
      pt: "Ferramentas de estudo com IA precisam de geração segura, persistência e revisão, não apenas prompts isolados."
    },
    architecture: {
      en: "Public Vercel frontend connects to a local FastAPI backend through Cloudflare Tunnel, with runtime backend discovery, token/cookie auth, SQLModel persistence and validated AI writes.",
      pt: "Frontend público na Vercel conectado a backend FastAPI local via Cloudflare Tunnel, com descoberta dinâmica do backend, auth token/cookie, persistência SQLModel e escritas de IA validadas."
    },
    highlights: {
      en: ["Validated AI output before persistence to avoid corrupt study state.", "Spaced repetition across vocabulary, lesson questions and flashcards.", "Runtime recovery from stale tunnel URLs.", "Local-first data model with public demo constraints documented."],
      pt: ["Validação de saída de IA antes de persistir para evitar corromper estudos.", "Repetição espaçada para vocabulário, perguntas e flashcards.", "Recuperação de URLs antigas de túnel em runtime.", "Modelo local-first com limitações da demo pública documentadas."]
    },
    talkingPoints: {
      en: ["Discuss why AI-generated content must be validated before saving.", "Explain the local backend plus public frontend trade-off.", "Show how product scope grew from English tutoring into a broader learning system."],
      pt: ["Discutir por que conteúdo gerado por IA precisa ser validado antes de salvar.", "Explicar o trade-off de backend local com frontend público.", "Mostrar como o escopo cresceu de tutor de inglês para sistema de aprendizagem mais amplo."]
    }
  },
  {
    name: "AI Media Transcription & Report Studio",
    featured: false,
    stack: ["Next.js", "FastAPI", "Electron", "OpenAI", "Gemini", "Whisper", "Stripe", "PostgreSQL"],
    links: [{ type: "repo", href: "https://github.com/helberjf/video-transcript" }],
    summary: {
      en: "A SaaS and Windows desktop app for turning audio/video into transcripts, structured reports and DOCX/PDF exports.",
      pt: "SaaS e app desktop Windows para transformar áudio/vídeo em transcrições, relatórios estruturados e exportações DOCX/PDF."
    },
    problem: {
      en: "Users need reliable transcription and report generation across providers, formats and deployment modes.",
      pt: "Usuários precisam de transcrição e geração de relatórios confiáveis entre provedores, formatos e modos de uso."
    },
    architecture: {
      en: "Monorepo with Next.js SaaS frontend, FastAPI backend for transcription/media/OCR/export, and Electron packaging for local Windows workflows.",
      pt: "Monorepo com frontend SaaS Next.js, backend FastAPI para transcrição/mídia/OCR/exportação e empacotamento Electron para uso local no Windows."
    },
    highlights: {
      en: ["Multi-provider transcription chain with local Whisper fallback.", "DOCX/PDF report generation and reusable templates.", "Auth, billing with Stripe and transactional email.", "Electron desktop distribution alongside the web product."],
      pt: ["Cadeia de transcrição multi-provider com fallback Whisper local.", "Geração de relatórios DOCX/PDF e templates reutilizáveis.", "Autenticação, cobrança com Stripe e email transacional.", "Distribuição desktop Electron junto ao produto web."]
    },
    talkingPoints: {
      en: ["Explain provider fallback strategy and why local Whisper matters.", "Discuss differences between SaaS and desktop packaging.", "Walk through how media processing, OCR and exports fit together."],
      pt: ["Explicar estratégia de fallback entre provedores e por que Whisper local importa.", "Discutir diferenças entre SaaS e empacotamento desktop.", "Mostrar como processamento de mídia, OCR e exportações se conectam."]
    }
  },
  {
    name: "Agenda Productivity App",
    featured: false,
    stack: ["React 19", "TypeScript", "Vite", "Firebase", "Node.js", "TanStack Query", "Zustand", "Zod"],
    links: [
      { type: "demo", href: "https://agendapratica.vercel.app/" },
      { type: "repo", href: "https://github.com/helberjf/agenda-react-vite" }
    ],
    summary: {
      en: "A full-stack productivity app with tasks, scheduling, journal, calendar, categories, Firebase Auth and a protected Node/Vercel API.",
      pt: "App full stack de produtividade com tarefas, agenda, diário, calendário, categorias, Firebase Auth e API protegida Node/Vercel."
    },
    problem: {
      en: "Personal execution tools become more useful when tasks, calendar, daily logs and history live in one model.",
      pt: "Ferramentas de execução pessoal ficam mais úteis quando tarefas, calendário, registros diários e histórico compartilham um modelo."
    },
    architecture: {
      en: "React/Vite frontend with protected routes, Firebase Auth, Realtime Database, authenticated API routes in Vercel Functions and a tasksByDate index for efficient reads.",
      pt: "Frontend React/Vite com rotas protegidas, Firebase Auth, Realtime Database, APIs autenticadas em Vercel Functions e índice tasksByDate para leituras eficientes."
    },
    highlights: {
      en: ["Domain-organized hooks, services, stores and validators.", "Firebase token validation through serverless API routes.", "Calendar, daily log, categories and ICS export features."],
      pt: ["Hooks, services, stores e validadores organizados por domínio.", "Validação de token Firebase por rotas serverless.", "Calendário, log diário, categorias e exportação ICS."]
    },
    talkingPoints: {
      en: ["Explain why critical data mutations go through authenticated API routes.", "Discuss data modeling for daily and weekly views.", "Show how TanStack Query and Zustand divide responsibilities."],
      pt: ["Explicar por que mutações críticas passam por APIs autenticadas.", "Discutir modelagem de dados para visões diária e semanal.", "Mostrar como TanStack Query e Zustand dividem responsabilidades."]
    }
  },
  {
    name: "Logs Microservice",
    featured: false,
    stack: ["Express 5", "BullMQ", "Redis", "PostgreSQL", "Zod", "Pino", "Prometheus", "Docker"],
    links: [{ type: "repo", href: "https://github.com/helberjf/logs-microservices" }],
    summary: {
      en: "A structured-log ingestion pipeline with REST API, async worker, PostgreSQL persistence, search, stats, Prometheus metrics, OpenAPI and CI.",
      pt: "Pipeline de ingestão de logs estruturados com API REST, worker assíncrono, persistência PostgreSQL, busca, estatísticas, métricas Prometheus, OpenAPI e CI."
    },
    problem: {
      en: "Log ingestion should respond quickly, validate contracts and process writes reliably without coupling client latency to database persistence.",
      pt: "Ingestão de logs deve responder rápido, validar contratos e processar gravações com confiabilidade sem acoplar latência do cliente ao banco."
    },
    architecture: {
      en: "Express validates requests with Zod, records ingest jobs in PostgreSQL, enqueues BullMQ jobs in Redis and a worker persists logs with retry/backoff and dead-letter tracking.",
      pt: "Express valida requisições com Zod, registra jobs no PostgreSQL, enfileira BullMQ no Redis e um worker persiste logs com retry/backoff e dead letters."
    },
    highlights: {
      en: ["202 Accepted ingestion with async processing.", "Idempotency through dedupeKey.", "Keyset pagination, JSONB filters and simple full-text search.", "Prometheus metrics, health checks, Docker Compose and CI."],
      pt: ["Ingestão 202 Accepted com processamento assíncrono.", "Idempotência via dedupeKey.", "Paginação keyset, filtros JSONB e busca textual simples.", "Métricas Prometheus, health checks, Docker Compose e CI."]
    },
    talkingPoints: {
      en: ["Explain the queue/worker pattern and why it protects API latency.", "Discuss idempotency and dead-letter handling.", "Walk through database indexes and search trade-offs."],
      pt: ["Explicar o padrão fila/worker e como ele protege a latência da API.", "Discutir idempotência e tratamento de dead letters.", "Percorrer índices de banco e trade-offs de busca."]
    }
  },
  {
    name: "Sao Paulo Crime DBSCAN",
    featured: false,
    stack: ["Python", "GeoPandas", "scikit-learn", "DBSCAN", "Folium", "Jupyter"],
    links: [{ type: "repo", href: "https://github.com/helberjf/sao-paulo-crime-dbscan" }],
    summary: {
      en: "A geospatial data science project using DBSCAN clustering and map visualizations to explore crime concentration patterns.",
      pt: "Projeto de data science geoespacial usando DBSCAN e visualizações em mapa para explorar padrões de concentração criminal."
    },
    problem: {
      en: "Operational decisions benefit from geospatial clustering when raw incident data is too noisy to read manually.",
      pt: "Decisões operacionais se beneficiam de clustering geoespacial quando dados brutos são ruidosos demais para leitura manual."
    },
    architecture: {
      en: "Notebook-based pipeline with Python, GeoPandas, scikit-learn DBSCAN clustering and Matplotlib/Folium map outputs.",
      pt: "Pipeline em notebook com Python, GeoPandas, DBSCAN no scikit-learn e mapas em Matplotlib/Folium."
    },
    highlights: {
      en: ["Shows AI postgraduate skills beyond web development.", "Connects operational background with data-driven analysis.", "Uses clustering to reveal patterns that are not visible in tables."],
      pt: ["Mostra competências da pós em IA além do desenvolvimento web.", "Conecta experiência operacional com análise orientada a dados.", "Usa clustering para revelar padrões invisíveis em tabelas."]
    },
    talkingPoints: {
      en: ["Explain when DBSCAN is useful compared with K-Means.", "Discuss geospatial preprocessing and visualization choices.", "Connect the project to operational decision support."],
      pt: ["Explicar quando DBSCAN é útil em comparação com K-Means.", "Discutir preprocessamento geoespacial e escolhas de visualização.", "Conectar o projeto ao apoio à decisão operacional."]
    }
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
