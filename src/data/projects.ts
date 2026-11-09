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
    name: "AWS Serverless Orders",
    featured: true,
    stack: ["TypeScript", "AWS Lambda", "API Gateway", "DynamoDB Streams", "SQS", "EventBridge", "SNS", "AWS SAM"],
    links: [{ type: "repo", href: "https://github.com/helberjf/aws-serverless-orders" }],
    summary: {
      en: "An event-driven orders backend that keeps a database change and its downstream events consistent when requests are retried, messages arrive twice or a publisher fails halfway.",
      pt: "Backend de pedidos orientado a eventos que mantém consistentes a mudança no banco e os eventos seguintes quando requisições são repetidas, mensagens chegam duplicadas ou o publicador falha no meio."
    },
    problem: {
      en: "Saving an order and publishing an event are two separate operations; if one fails, downstream services either miss the order or hear about one that does not exist.",
      pt: "Salvar um pedido e publicar um evento são operações separadas; se uma falha, os serviços seguintes perdem o pedido ou recebem um pedido que não existe."
    },
    architecture: {
      en: "API Gateway with Cognito scopes invokes Lambda handlers. One DynamoDB transaction writes the order, the idempotent response and an outbox record; a stream-triggered publisher and a scheduled reconciler deliver events to SQS, EventBridge and SNS.",
      pt: "API Gateway com escopos Cognito chama handlers Lambda. Uma transação DynamoDB grava o pedido, a resposta idempotente e um registro de outbox; um publicador acionado por stream e um reconciliador agendado entregam os eventos para SQS, EventBridge e SNS."
    },
    highlights: {
      en: ["Transactional outbox with leased, retry-bounded publication.", "Owner-scoped idempotency keys and conditional consumer transactions.", "Separate IAM role per function, DLQs and structured telemetry.", "Unit, DynamoDB Local integration and infrastructure tests (137 passing locally)."],
      pt: ["Transactional outbox com publicação por lease e limite de retentativas.", "Chaves de idempotência por usuário e transações condicionais nos consumidores.", "Role IAM separada por função, DLQs e telemetria estruturada.", "Testes unitários, de integração com DynamoDB Local e de infraestrutura (137 passando localmente)."]
    },
    talkingPoints: {
      en: ["Explain why a transactional outbox instead of writing and then publishing.", "Discuss at-least-once delivery and how each consumer stays idempotent.", "Walk through the recovery path when the stream publisher fails."],
      pt: ["Explicar por que usar transactional outbox em vez de gravar e depois publicar.", "Discutir entrega at-least-once e como cada consumidor continua idempotente.", "Percorrer o caminho de recuperação quando o publicador do stream falha."]
    }
  },
  {
    name: "Mapa Hóspede",
    featured: true,
    stack: ["React", "TypeScript", "Express", "PostgreSQL", "Drizzle", "Stripe"],
    links: [{ type: "demo", href: "https://mapahospede.com.br" }],
    summary: {
      en: "A platform where accommodation hosts publish digital guest guides shared by link, QR code or invitation. I am the lead developer.",
      pt: "Plataforma em que anfitriões publicam guias digitais para hóspedes, compartilhados por link, QR code ou convite. Sou o desenvolvedor principal."
    },
    problem: {
      en: "Hosts repeat the same instructions to every guest; a shared, multilingual guide keeps check-in, house rules and local tips in one place.",
      pt: "Anfitriões repetem as mesmas instruções para cada hóspede; um guia compartilhado e multilíngue reúne check-in, regras da casa e dicas locais."
    },
    architecture: {
      en: "React and TypeScript host dashboard and public guides, an Express API shared by persistent and serverless entry points, PostgreSQL with Drizzle, Stripe subscriptions, media storage and calendar synchronization.",
      pt: "Painel do anfitrião e guias públicos em React e TypeScript, API Express compartilhada entre execução persistente e serverless, PostgreSQL com Drizzle, assinaturas Stripe, armazenamento de mídia e sincronização de calendário."
    },
    highlights: {
      en: ["Guides shared by link, QR code or individual invitation.", "Multilingual content for international guests.", "Stripe subscriptions and calendar synchronization.", "One Express application across persistent and serverless runtimes."],
      pt: ["Guias compartilhados por link, QR code ou convite individual.", "Conteúdo multilíngue para hóspedes estrangeiros.", "Assinaturas Stripe e sincronização de calendário.", "Uma aplicação Express rodando em ambiente persistente e serverless."]
    },
    talkingPoints: {
      en: ["Explain how one Express app runs in both persistent and serverless entry points.", "Discuss multilingual content modeling.", "Walk through subscription and access rules for hosts."],
      pt: ["Explicar como uma aplicação Express roda em ambiente persistente e serverless.", "Discutir a modelagem de conteúdo multilíngue.", "Percorrer as regras de assinatura e acesso dos anfitriões."]
    }
  },
  {
    name: "AWS Warehouse Intake",
    featured: true,
    stack: ["TypeScript", "ECS / Fargate", "DynamoDB", "SQS", "CloudFormation", "Docker", "OpenAPI"],
    links: [{ type: "repo", href: "https://github.com/helberjf/aws-warehouse-intake" }],
    summary: {
      en: "A multi-warehouse receiving application on ECS/Fargate, DynamoDB and SQS, without Lambda: barcode receiving, serialized and bulk stock, and per-warehouse permissions.",
      pt: "Aplicação de recebimento em vários armazéns com ECS/Fargate, DynamoDB e SQS, sem Lambda: recebimento por código de barras, estoque serializado e a granel e permissões por armazém."
    },
    problem: {
      en: "Receiving stock must not double-count when scanners retry, messages repeat or a worker crashes mid-update.",
      pt: "O recebimento não pode contar estoque em dobro quando o leitor repete o envio, a mensagem chega duplicada ou o worker cai no meio da atualização."
    },
    architecture: {
      en: "One container image runs three roles on ECS/Fargate behind an HTTPS load balancer: a receiving API that accepts atomically with a durable outbox, a leased outbox publisher, and an inventory worker consuming SQS with conditional DynamoDB transactions and a dead-letter queue.",
      pt: "Uma imagem de container roda três papéis no ECS/Fargate atrás de um load balancer HTTPS: API de recebimento com aceite atômico e outbox durável, publicador do outbox com lease e worker de estoque consumindo SQS com transações condicionais no DynamoDB e dead-letter queue."
    },
    highlights: {
      en: ["Atomic acceptance and durable publication intent before returning 202.", "Protection against repeated HTTP requests, business references and queue deliveries.", "Serial-number uniqueness across warehouses within one organization.", "CloudFormation deployment, OpenAPI contract, integration and load tests."],
      pt: ["Aceite atômico e intenção de publicação durável antes de responder 202.", "Proteção contra requisições repetidas, referências de negócio e entregas duplicadas da fila.", "Número de série único entre armazéns da mesma organização.", "Deploy em CloudFormation, contrato OpenAPI, testes de integração e de carga."]
    },
    talkingPoints: {
      en: ["Explain why ECS/Fargate instead of Lambda for this workload.", "Discuss at-least-once SQS delivery and one stock effect per movement.", "Walk through the capacity plan for many warehouses."],
      pt: ["Explicar por que ECS/Fargate em vez de Lambda neste caso.", "Discutir entrega at-least-once do SQS e um único efeito de estoque por movimento.", "Percorrer o plano de capacidade para muitos armazéns."]
    }
  },
  {
    name: "E-commerce & Services Platform",
    featured: true,
    stack: ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "PostgreSQL", "MercadoPago", "Gemini AI", "Cloudflare R2"],
    links: [
      { type: "demo", href: "https://vendaprodutosonline.vercel.app" },
      { type: "caseStudy", href: "https://github.com/helberjf/ecommerce-platform-casestudy" }
    ],
    summary: {
      en: "A commerce and scheduling platform that combines physical products, bookable services, payments, CRM, dashboards and AI-assisted workflows.",
      pt: "Uma plataforma de e-commerce e agendamentos que combina produtos físicos, serviços agendáveis, pagamentos, CRM, dashboards e fluxos com IA."
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
      en: "A full-stack platform built for a fight club, covering marketing, store, subscriptions, CRM, messaging, training modules and owner dashboards.",
      pt: "Plataforma full stack feita para uma academia de luta, cobrindo site, loja, assinaturas, CRM, mensageria, módulos de treino e dashboards do proprietário."
    },
    problem: {
      en: "The gym needed more than a website: it needed operations, member engagement and financial visibility in one system.",
      pt: "A academia precisava de mais do que um site: precisava de operação, engajamento de alunos e visibilidade financeira em um sistema."
    },
    architecture: {
      en: "Next.js application with public marketing pages, member area, staff/owner dashboards, PostgreSQL/Prisma, Redis caching/session support, Cloudflare R2, WhatsApp messaging and Web Push notifications.",
      pt: "Aplicação Next.js com páginas públicas, área do aluno, dashboards de equipe/proprietário, PostgreSQL/Prisma, Redis para cache/sessões, Cloudflare R2, WhatsApp e Web Push."
    },
    highlights: {
      en: ["Modeled on a real fight club's workflows, with a live demo.", "Financial reports including DRE-style business visibility.", "Member, staff and owner role separation.", "Vitest and Playwright coverage for important flows."],
      pt: ["Modelado a partir da rotina real de uma academia de luta, com demo no ar.", "Relatórios financeiros incluindo visão tipo DRE.", "Separação de perfis aluno, equipe e proprietário.", "Cobertura com Vitest e Playwright em fluxos importantes."]
    },
    talkingPoints: {
      en: ["Describe how the gym's real workflows shaped the data model.", "Explain role-based dashboards and why owners need different data than members.", "Discuss the trade-off between fast delivery and test coverage."],
      pt: ["Descrever como a rotina real da academia moldou o modelo de dados.", "Explicar dashboards por perfil e por que proprietários precisam de dados diferentes dos alunos.", "Discutir o equilíbrio entre entrega rápida e cobertura de testes."]
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
      en: "A structured-log ingestion pipeline with REST API, async worker, PostgreSQL persistence, search, stats, Prometheus metrics, OpenAPI and Docker.",
      pt: "Pipeline de ingestão de logs estruturados com API REST, worker assíncrono, persistência PostgreSQL, busca, estatísticas, métricas Prometheus, OpenAPI e Docker."
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
      en: ["202 Accepted ingestion with async processing.", "Idempotency through dedupeKey.", "Keyset pagination, JSONB filters and simple full-text search.", "Prometheus metrics, health checks, Docker Compose and automated tests."],
      pt: ["Ingestão 202 Accepted com processamento assíncrono.", "Idempotência via dedupeKey.", "Paginação keyset, filtros JSONB e busca textual simples.", "Métricas Prometheus, health checks, Docker Compose e testes automatizados."]
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
