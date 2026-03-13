<img src="src/assets/images/logo.png" width="128">

# ACU at NYU Website

Official Website for the Asian Cultural Union at NYU, NYU's Largest Asian Umbrella Organization

<img width="574" alt="ss" src="https://user-images.githubusercontent.com/15944396/151858047-681b024b-0a43-4786-827f-e53771441e70.png">

## Tech Stack

- **Framework**: [Astro 6](https://astro.build/) (static site generator with React islands)
- **React**: Version 19 (interactive components via `@astrojs/react`)
- **Styling**: Tailwind CSS v4 + SCSS theme (HTML5UP base)
- **Animation**: Framer Motion
- **Build**: Vite 7
- **Deploy**: GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js >= 22.0.0 (required by Astro 6 / Vite 7)
- npm (bundled with Node)

```shell
# Install Node 22+
nvm install 22
nvm use 22
```

### Installation

```shell
# Install dependencies
npm install

# Start development server
npm run dev
```

Site runs at `http://localhost:4321`

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start development server         |
| `npm run build`   | Production build                 |
| `npm run preview` | Preview production build locally |
| `npm run check`   | Run Astro type checking          |
| `npm run lint`    | Run ESLint                       |
| `npm run format`  | Format code with Prettier        |

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run build` to verify the build passes
4. Submit a pull request

Merging to `master` triggers automatic deployment to GitHub Pages.

## Project Structure

```
├── src/
│   ├── assets/          # Images, fonts, SCSS theme
│   ├── components/
│   │   ├── astro/       # Astro components (static)
│   │   ├── react/       # React islands (interactive)
│   │   └── ui/          # shadcn/ui components
│   ├── data/            # TypeScript data files (team, alumni, events)
│   ├── layouts/         # Layout.astro (main wrapper)
│   ├── lib/             # Utilities
│   ├── pages/           # File-based routes (.astro)
│   └── styles/          # Tailwind CSS + custom properties
├── public/              # Static assets served at root
├── astro.config.mjs     # Astro + Vite + Tailwind config
├── tsconfig.json        # TypeScript config
└── components.json      # shadcn/ui config
```
