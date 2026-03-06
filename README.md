<img src="src/assets/images/logo.png" width="128">

# ACU at NYU Website

Official Website for the Asian Cultural Union at NYU, NYU's Largest Asian Umbrella Organization

<img width="574" alt="ss" src="https://user-images.githubusercontent.com/15944396/151858047-681b024b-0a43-4786-827f-e53771441e70.png">

## Tech Stack

- **Framework**: [Astro 5.18](https://astro.build/) (Modern static site generator)
- **React**: Version 19 (for interactive components)
- **Styling**: Tailwind CSS + Sass
- **UI Components**: Bootstrap + Custom components
- **Animation**: Framer Motion

## Getting Started

### Prerequisites

- Node.js >= 20.0.0

### Installation

```shell
# Install dependencies
npm install

# Start development server
npm run develop
```

Site runs at `http://localhost:4321`

## Scripts

| Command           | Description                               |
| ----------------- | ----------------------------------------- |
| `npm run develop` | Start development server (localhost:4321) |
| `npm run build`   | Production build                          |
| `npm run deploy`  | Build and deploy to GitHub Pages          |
| `npm run preview` | Serve production build locally            |
| `npm run clean`   | Clean build artifacts                     |
| `npm run lint`    | Run ESLint                                |
| `npm run format`  | Format code with Prettier                 |

## Contributing

1. Create a feature branch
2. Make your changes
3. Run `npm run lint` and fix any issues
4. Run `npm run build` to verify the build passes
5. Submit a pull request

## Project Structure

```
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   ├── components/      # Astro and React components
│   ├── data/            # Data files (team, events)
│   ├── layouts/         # Astro layout components
│   ├── lib/            # Utilities
│   └── pages/           # Astro route pages (.astro files)
├── astro.config.mjs      # Astro configuration
├── tsconfig.json         # TypeScript configuration
├── config.js            # Site configuration
└── tailwind.config.js   # Tailwind config
```
