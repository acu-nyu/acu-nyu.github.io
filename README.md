<img src="src/assets/images/logo.png" width="128">

# ACU at NYU Website

Official Website for the Asian Cultural Union at NYU, NYU's Largest Asian Umbrella Organization

<img width="574" alt="ss" src="https://user-images.githubusercontent.com/15944396/151858047-681b024b-0a43-4786-827f-e53771441e70.png">

## Tech Stack

- **Framework**: Gatsby 5 (React-based static site generator)
- **Styling**: Tailwind CSS + Sass
- **UI Components**: Bootstrap + Custom components
- **Animation**: Framer Motion

## Getting Started

### Prerequisites

- Node.js >= 20.0.0 (use nvm)

```shell
# Install Node 20
nvm install 20
nvm use 20
```

### Installation

```shell
npm install

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
