# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## What This Is

Official website for the Asian Cultural Union (ACU), NYU's largest Asian umbrella organization. Built with Astro 6, deployed to GitHub Pages.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:4321
npm run build        # Production build (output: dist/)
npm run preview      # Preview production build locally
npm run check        # Astro type checking
npm run lint         # ESLint on src/**/*.{ts,tsx,astro}
npm run format       # Prettier on all .ts, .tsx, .astro, .js files
```

No test suite exists (`npm test` is a no-op).

## Architecture

**Astro 6 static site** with React 19 islands. Pages are file-based routes in `src/pages/` (`.astro` files). Interactive components use `client:visible` directive for hydration.

**Component model**: Two types of components coexist:

- **Astro components** (`src/components/astro/`) — static, zero JS, rendered at build time (Sidebar, Footer, HeaderSection)
- **React islands** (`src/components/react/`) — interactive, hydrated on client (Carousel, TeamSection, AlumniSection, ScrollReveal)

**Layout system**: `src/layouts/Layout.astro` wraps all pages, provides Sidebar and Footer. Inner pages pass `fullMenu` prop for full navigation display; the homepage omits it for the alt header style.

**Team/Alumni architecture**: Both pages render member cards using scroll-triggered animations via Framer Motion. The `TeamSection` and `AlumniSection` are separate React island components.

- Current team data: `src/data/teamData.ts` — organized by section (Presidents, Events, etc.)
- Alumni data: `src/data/alumniData.ts` — organized by graduation year
- Photos go in `src/assets/images/e-board/` or `src/assets/images/alumni/`

**Events data**: `src/data/events.ts` — array of typed event objects. Homepage groups by year and renders in a horizontal Carousel.

**Site config**: `src/data/siteConfig.ts` — site metadata, social links, brand color.

### Styling Stack (Three-Layer CSS Architecture)

Three styling systems coexist in a deliberate cascade order:

1. **SCSS theme** (`src/assets/sass/`) — inherited from HTML5UP solidstate theme, wrapped in `@layer base`
2. **Tailwind CSS v4** (`src/styles/global.css`) — utilities in `@layer utilities`, configured via `@tailwindcss/vite` plugin
3. **CSS custom properties** — shadcn/ui design tokens in `src/styles/global.css`

**Critical**: The entire SCSS output is wrapped in `@layer base { ... }` in `main.scss`. This ensures Tailwind `@layer utilities` correctly overrides theme rules. Do not remove this wrapping.

**SCSS image references**: All `url()` paths in SCSS files use absolute paths (`/images/...`) pointing to `public/images/`. Do NOT use relative paths — Vite 7 cannot resolve relative `url()` inside `@layer` blocks at build time.

**Path alias**: `@` maps to `src/` (configured in `astro.config.mjs`). Use `@/components/...`, `@/lib/...`.

## Deployment

Merging to `master` triggers automatic GitHub Pages deployment via `.github/workflows/deploy.yml`. The workflow:

1. Installs Node 22
2. Runs `npm install` + `npm run build`
3. Uploads `dist/` as a Pages artifact
4. Deploys to https://acu-nyu.github.io

## Code Conventions

- Prettier: semicolons, single quotes, ES5 trailing commas (`.prettierrc`)
- TypeScript for all data files and React components
- Astro components for static content, React islands only when interactivity is needed
- Framer Motion for animations — components use `variants` objects for stagger/reveal effects
- SEO via Astro `<head>` in Layout (title, description, meta tags)
- Run `npm run format` before committing

## Common Tasks

### Adding a team member

Add to the appropriate section in `src/data/teamData.ts`:

```ts
{ name: 'Name', role: 'Role', photo: 'e-board/filename.jpg', description: '...', linkedinUrl: '...' }
```

Place photo in `src/assets/images/e-board/`. Filename is case-sensitive (Linux CI).

### Adding an event

Add to `src/data/events.ts`:

```ts
{ year: 2025, term: 'Fall', title: 'Event Name', image: 'events/filename.png', description: '...' }
```

Place image in `src/assets/images/events/`.

### Adding an alumni year/member

Edit `src/data/alumniData.ts`. Place photos in `src/assets/images/alumni/`.

### Adding a new page

Create `src/pages/pagename.astro`. Import and use `Layout` from `@/layouts/Layout.astro`. Pass `fullMenu` prop for inner pages.

## Key Directories

```
src/assets/sass/          # SCSS theme (31 files, all modernized to @use/@forward)
src/assets/images/        # All image assets
src/components/astro/     # Static Astro components
src/components/react/     # Interactive React island components
src/components/ui/        # shadcn/ui primitives
src/data/                 # TypeScript data files
src/layouts/              # Layout.astro
src/pages/                # File-based routes (6 pages)
src/styles/               # Tailwind + CSS custom properties
public/images/            # Static images for SCSS url() references
.github/workflows/        # GitHub Actions deploy workflow
```
