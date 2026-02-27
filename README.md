<img src="src/assets/images/logo.png" width="128">

# ACU at NYU Website

Official Website for the Asian Cultural Union at NYU, NYU's Largest Asian Umbrella Organization

<img width="574" alt="ss" src="https://user-images.githubusercontent.com/15944396/151858047-681b024b-0a43-4786-827f-e53771441e70.png">

## Tech Stack

- **Framework**: [Gatsby 5.16](https://www.gatsbyjs.com/docs/reference/release-notes/v5.16/) (React-based static site generator)
- **React**: Version 19
- **Styling**: Tailwind CSS + Sass
- **UI Components**: Bootstrap + Custom components
- **Animation**: Framer Motion

## Getting Started

### Prerequisites

- Node.js >= 18.0.0 (Node 24 recommended - Active LTS - see [Gatsby v5.16 release notes](https://www.gatsbyjs.com/docs/reference/release-notes/v5.16/#nodejs-24))
- npm (bundled with Node) - use `--legacy-peer-deps` flag to install due to React 19 peer dependency conflicts

```shell
# Install Node 24 (Active LTS)
nvm install 24
nvm use 24
```

### Installation

```shell
# Install dependencies (use --legacy-peer-deps for React 19 compatibility)
npm install --legacy-peer-deps

# Start development server
npm run develop
```

Site runs at `http://localhost:8000`
GraphQL playground at `http://localhost:8000/___graphql`

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run develop` | Start development server         |
| `npm run build`   | Production build                 |
| `npm run deploy`  | Build and deploy to GitHub Pages |
| `npm run serve`   | Serve production build locally   |
| `npm run lint`    | Run ESLint                       |
| `npm run format`  | Format code with Prettier        |

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
│   ├── components/      # React components
│   ├── data/            # Data files (team, events)
│   ├── lib/            # Utilities
│   ├── pages/           # Route pages
│   └── styles/          # Global styles
├── gatsby-config.js     # Gatsby plugins
├── gatsby-node.js       # Node APIs
├── config.js            # Site configuration
└── tailwind.config.js   # Tailwind config
```
