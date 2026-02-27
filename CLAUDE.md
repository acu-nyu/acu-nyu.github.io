# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Official website for the Asian Cultural Union (ACU), NYU's largest Asian umbrella organization. Built with Gatsby 5, deployed to GitHub Pages.

## Commands

```bash
npm run develop    # Dev server at localhost:8000 (GraphQL at localhost:8000/___graphql)
npm run build      # Production build
npm run deploy     # Clean, build with prefix-paths, deploy to GitHub Pages via gh-pages
npm run clean      # Remove .cache and public directories
npm run lint       # ESLint on src/**/*.js
npm run format     # Prettier on all .js files
```

No test suite exists (`npm test` is a no-op).

## Architecture

**Gatsby 5 static site** with React 18. Pages are file-based routes in `src/pages/`. All images are processed through Gatsby's image pipeline (sharp + gatsby-plugin-image) via a single `gatsby-source-filesystem` pointed at `src/assets/images/`.

**Image pattern**: Every page that needs images uses a GraphQL query to fetch `allFile` nodes, builds a `relativePath → node` lookup map, then calls `getImage(node)` to pass `GatsbyImage` data to components. This is the standard pattern — follow it when adding new pages.

**Layout system**: `Layout` component wraps all pages, provides `SideBar` (navigation) and `Footer`. Inner pages pass `fullMenu` prop to `Layout` for full navigation display; the homepage omits it for the alt header style.

**Team/Alumni architecture**: Both pages render member cards using the shared `TeamMemberCard` component. The `isAlumni` prop controls behavior — current team members get hover-to-reveal descriptions; alumni cards show only name/role/LinkedIn.
- Current team data: `src/data/teamData.js` — organized by section (Presidents, Events, etc.)
- Alumni data: inline in `src/pages/Alumni.js` — organized by graduation year
- Photos go in `src/assets/images/e-board/` or `src/assets/images/alumni/`

**Events data**: `src/data/events.js` — array of `{year, term, title, image, description}` objects. Homepage groups by year and renders in a horizontal `Carousel`.

**Styling stack**: SCSS/Sass (`src/assets/sass/`) for the base theme (inherited from gatsby-starter-solidstate), Tailwind CSS for utility classes, Bootstrap via react-bootstrap for some responsive components. All three coexist — use Tailwind for new work.

**Path alias**: `@` maps to `src/` (configured in `gatsby-node.js`). Use `@/components/...`, `@/lib/...`.

**Site config**: `config.js` at root holds site metadata, social links, brand color (#663399), and manifest settings. `gatsby-config.js` reads from it.

## Code Conventions

- Prettier: semicolons, single quotes, ES5 trailing commas (`.prettierrc`)
- Functional components with hooks; `Layout` is the one legacy class component
- Framer Motion for animations — pages define `variants` objects for stagger/reveal effects
- SEO via Gatsby Head API (named `export const Head` in each page file)
- Run `npm run format` before committing

## Common Tasks

### Adding a team member

Add to the appropriate section in `src/data/teamData.js`:
```js
{ name: 'Name', role: 'Role', photo: 'e-board/filename.jpg', description: '...', linkedinUrl: '...' }
```
Place photo in `src/assets/images/e-board/`.

### Adding an event

Add to `src/data/events.js`:
```js
{ year: 2025, term: 'Fall', title: 'Event Name', image: 'events/filename.png', description: '...' }
```
Place image in `src/assets/images/events/`.

### Adding an alumni year/member

Edit the `alumniData` array directly in `src/pages/Alumni.js`. Place photos in `src/assets/images/alumni/`.
