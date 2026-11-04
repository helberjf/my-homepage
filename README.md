# Helber Soares — Developer Portfolio

An English-first, bilingual portfolio built with React, TypeScript and Vite. It organizes a professional introduction, selected project evidence and a printable résumé into three focused pages.

## Explore the pages

| Route | Purpose |
| --- | --- |
| `/` | Profile overview with English/Portuguese language switching |
| `/projects` | Curated project briefs and repository evidence |
| `/resume` | Plain résumé layout designed for reading and printing |

To review the interface, open the homepage, switch the language, follow a project link and use browser print preview on the résumé page. Project descriptions come from the profile's curated data, not a live GitHub synchronization service.

## Run locally

Use Node.js 22 and pnpm.

```bash
git clone https://github.com/helberjf/my-homepage.git
cd my-homepage
pnpm install
pnpm run dev
```

Open the URL printed by Vite.

```bash
pnpm test
pnpm run build
pnpm run preview
```

The build type-checks the project before producing `dist`. [Routing tests](src/__tests__/app-routing.test.tsx) cover page selection and language switching; [content tests](src/__tests__/content.test.ts) check the structured profile/project content. These checks do not validate external repository links or third-party résumé parsing.

## Update the content

- [src/data/profile.ts](src/data/profile.ts): profile and résumé content.
- [src/data/projects.ts](src/data/projects.ts): selected projects and supporting links.
- [src/i18n/language.tsx](src/i18n/language.tsx): language state.
- [src/App.tsx](src/App.tsx): page selection from the browser path.
- [src/styles.css](src/styles.css): visual and print styling.
- [vercel.json](vercel.json): static hosting rewrites for direct page access.

Keep English and Portuguese entries aligned, and describe each linked project's current scope. Credentials, completed certifications and production results should be listed only when established.

## Design tradeoffs

- **Curated data files:** content is easy to review and version alongside the UI, but profile or project updates require a deployment rather than appearing automatically.
- **Minimal path selection:** a small three-page site needs little routing machinery; more complex navigation, nested routes or a dedicated not-found page would need additional handling.
- **Separate résumé presentation:** plain content improves print readability, while maintaining its data alongside portfolio content creates a consistency responsibility.
- **English-first bilingual content:** visitors can choose their language, at the cost of maintaining two versions of professional and project descriptions.

## License

[MIT](LICENSE).
