# React TypeScript Recruiter Portfolio Design

## Goal

Migrate `helberjf/my-homepage` from static HTML/CSS/JS to a React + TypeScript portfolio that is easy for recruiters and interviewers to read quickly.

## Audience

Primary readers are recruiters, hiring managers, and technical interviewers. The site should answer three questions fast:

- What role is Helber targeting?
- What evidence shows he can build production-ready software?
- Where can a recruiter get the ATS resume, GitHub, LinkedIn, and contact information?

## Language Strategy

The default language is English. A visible language toggle switches the portfolio content to Portuguese without navigating away. Navigation labels, project summaries, and resume labels are available in both languages.

## Pages

### Home `/`

The homepage is the recruiter-facing overview. It includes:

- Hero with Helber Soares, Full Stack Developer positioning, location, availability, and primary calls to action.
- Recruiter summary focused on Next.js, TypeScript, React, Node.js, Python/FastAPI, AI/LLM integrations, and production delivery.
- Evidence strip for strong signals: FGV AI postgraduate specialization, Brazilian Navy officer background, real client platform, 40+ REST endpoints, AI/LLM product work.
- Featured project cards for the strongest projects only, not every repository.
- Technical stack grouped by Frontend, Backend, Data, AI/ML, Infrastructure, Testing, and Product/Operations.
- Background section connecting naval leadership and software delivery without making the page read like a military bio.
- Education, certifications, languages, and contact.

### ATS Resume `/resume`

The resume page is a dedicated ATS-friendly page. It is intentionally plain:

- Linear content.
- No decorative cards that interrupt copying or printing.
- Contact links at the top.
- Sections: Professional Summary, Core Skills, Experience, Selected Projects, Education, Certifications, Languages, Availability.
- Print CSS that hides navigation and produces a clean one-column resume.
- English shown first, with Portuguese available from the same language toggle.

### Project Briefing `/projects`

The project page is written for a technical interviewer who wants substance. It presents projects as interview talking points:

- What problem the project solves.
- Architecture and stack.
- Engineering highlights.
- Security, testing, deployment, and operational decisions where relevant.
- Interview talking points that help Helber explain trade-offs.
- Links to live demos, GitHub repositories, and public case studies.

The strongest projects to feature are:

- E-commerce & Services Platform: private source, public case study, Next.js 16, React 19, TypeScript, Prisma 7, PostgreSQL/Supabase, MercadoPago/Pix, Melhor Envio, Gemini AI, RBAC, HMAC webhooks, 40+ REST routes.
- Gym Management Platform (Máquina Team): real client platform, Next.js, TypeScript, Prisma, PostgreSQL, Redis, WhatsApp, Web Push, dashboards, financial reports, Vitest and Playwright.
- AI Tutor for Kids: Next.js + FastAPI, Gemini, local TTS, spaced repetition, auth, local-first backend with Cloudflare Tunnel, validation of AI-generated content.
- AI Media Transcription & Report Studio: Next.js SaaS + FastAPI + Electron, multi-provider transcription, Whisper fallback, DOCX/PDF exports, auth, billing, email.
- Agenda Productivity App: React 19, TypeScript, Firebase Auth/Realtime Database, Node/Vercel Functions, TanStack Query, Zustand, protected API.
- Logs Microservice: Express 5, BullMQ/Redis worker, PostgreSQL, idempotency, search, Prometheus metrics, OpenAPI, Docker, CI.
- Data/ML project: Sao Paulo Crime DBSCAN, Python, GeoPandas, scikit-learn, map visualizations.

## Architecture

Use Vite with React and TypeScript. The app is a single-page React application with browser routes for `/`, `/resume`, and `/projects`. Content lives in typed data modules so future updates do not require editing component layout code.

Planned structure:

- `src/data/profile.ts`: bilingual profile, contact, summary, skills, education, certifications, languages.
- `src/data/projects.ts`: bilingual project cards, project briefing sections, links, stacks, and talking points.
- `src/data/resume.ts`: ATS resume content built from profile/project data.
- `src/components/`: reusable layout, language toggle, project cards, stack groups, and page sections.
- `src/pages/`: `HomePage`, `ResumePage`, `ProjectsPage`.
- `src/i18n/`: language context, labels, and helper types.

## UX And Visual Direction

The visual style should be professional and calm: high contrast, generous spacing, restrained color, and dense enough for recruiters. Avoid a landing-page feel. The first viewport must immediately show Helber's name, role, strongest stack, and calls to action.

Cards are used only for repeated project/skill items. The ATS resume avoids decorative cards. Buttons use icon + text for clear actions such as GitHub, LinkedIn, Resume, Projects, and Email.

## Testing

Use Vitest and React Testing Library.

Coverage targets:

- Home route renders English by default.
- Language toggle switches core copy to Portuguese.
- Resume route renders ATS sections and contact links.
- Projects route renders the interviewer briefing and strongest project names.
- Data tests verify important source facts are present: FGV, Brazilian Navy, E-commerce, Gym Management, AI Tutor, Transcription, Agenda, Logs Microservice, and English-first default.

## Migration Notes

The current standalone pages (`about.html`, `hobbies.html`, `gitfind.html`, `contact.html`, `resume.html`) are replaced by React routes. The old GitFind concept becomes an optional GitHub link/repository data section rather than a separate primary page, because recruiters benefit more from curated project evidence than a flat repository list.

## Deployment

Add Vercel-friendly configuration for SPA routing. The build command is `npm run build`, output directory is `dist`, and routes should fall back to `index.html`.

## Spec Self-Review

- No placeholders remain.
- The added user requirement for a project page aimed at interviewers is included as `/projects`.
- The ATS-only resume page is separate from the homepage.
- The default language is explicitly English with Portuguese available through toggle.
- The project scope is focused on one React + TypeScript portfolio migration.
