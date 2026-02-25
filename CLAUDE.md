# ACU at NYU Website

This is the official website for the Asian Cultural Union (ACU), NYU's largest Asian umbrella organization.

## Tech Stack

- **Framework**: Gatsby 5 (React-based static site generator)
- **Styling**:
  - SCSS/Sass for component styles
  - Tailwind CSS for utility classes
  - Bootstrap for responsive components
- **UI Components**:
  - shadcn/ui via components.json
  - Custom React components
- **Animation**: Framer Motion
- **Image Optimization**: gatsby-plugin-image, gatsby-plugin-sharp
- **Deployment**: GitHub Pages via gh-pages

## Project Structure

```
├── src/
│   ├── assets/          # Static assets (images, fonts, etc.)
│   │   ├── images/       # Organized by category: alumni/, e-board/
│   │   └── fonts/        # Font files (FontAwesome)
│   ├── components/       # React components
│   │   ├── ui/           # shadcn/ui components (card.js)
│   │   ├── Carousel.js   # Image carousel
│   │   ├── Footer.js     # Site footer
│   │   ├── Nav.js        # Navigation
│   │   ├── TeamMemberCard.js  # Individual team member cards
│   │   └── ...
│   ├── data/            # Data files
│   │   ├── teamData.js   # E-board and team member information
│   │   └── events.js     # Events data
│   ├── lib/             # Utility functions
│   │   └── utils.js      # Helper utilities
│   ├── pages/           # Route pages
│   │   ├── index.js      # Homepage
│   │   ├── About.js      # About page
│   │   ├── Team.js       # Current team page
│   │   ├── Alumni.js    # Alumni page
│   │   └── Elements.js   # UI elements showcase
│   └── styles/          # Global styles
│       └── globals.css   # Tailwind + custom styles
├── gatsby-config.js     # Gatsby plugins and config
├── gatsby-node.js       # Gatsby build-time APIs
├── config.js            # Site configuration (metadata, social links)
├── package.json         # Dependencies and scripts
└── components.json      # shadcn/ui configuration
```

## Development Setup

### Prerequisites

- Node.js >= 20.0.0 (use nvm: `nvm install 20`)
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run develop
```

Site runs at `http://localhost:8000`
GraphQL playground at `http://localhost:8000/___graphql`

### Common Commands

```bash
npm run develop    # Start dev server
npm run build     # Production build (~6s with cache)
npm run deploy    # Build and deploy to GitHub Pages
npm run lint      # Run ESLint
npm run format    # Format code with Prettier
```

## Code Conventions

### JavaScript/React

- Use functional components with hooks
- Prefer `const` over `let`, avoid `var`
- Semicolons required (Prettier config)
- Single quotes for strings
- Trailing commas in ES5 style

### Component Structure

```javascript
import React from 'react';
// Third-party imports
// Internal imports

const ComponentName = ({ prop1, prop2 }) => {
    // Hooks at top
    const [state, setState] = useState();

    // Event handlers
    const handleClick = () => { };

    // Render
    return (
        // JSX
    );
};

export default ComponentName;
```

### Styling Conventions

- Use Tailwind utility classes for most styling
- Use SCSS modules for complex component-specific styles
- Responsive design: mobile-first, `sm:`, `md:`, `lg:` breakpoints
- Color scheme: Purple theme (#663399) as primary brand color

### Data Files

- Team member data: [src/data/teamData.js](src/data/teamData.js)
- Event data: [src/data/events.js](src/data/events.js)
- Each member object: `name`, `role`, `photo`, `description`, `linkedinUrl`

### Images

- E-board photos: `src/assets/images/e-board/`
- Alumni photos: `src/assets/images/alumni/`
- Use `GatsbyImage` component for optimized images

## Key Features

### Team Pages

- **Team Page**: Current E-board members with hover descriptions
- **Alumni Page**: Past members without hover interactions
- Both use shared `TeamMemberCard` component with `isAlumni` prop

### Responsive Design

- Mobile-first approach
- Text scaling: `text-xs` to `text-xl` based on breakpoints
- Aspect ratios maintained: `aspect-[3/4]` for portrait cards

### Interactive Elements

- Hover effects on cards (description reveal for current team)
- LinkedIn links with icon SVG
- Scroll animations
- Carousel components for events/galleries

## Configuration Files

- **[config.js](config.js)**: Site metadata, social links, manifest config
- **[gatsby-config.js](gatsby-config.js)**: Gatsby plugins (Sass, image optimization, manifest)
- **[gatsby-node.js](gatsby-node.js)**: Webpack config (path aliases: `@` → `src`)
- **[.prettierrc](.prettierrc)**: Code formatting rules
- **[components.json](components.json)**: shadcn/ui config

## Path Aliases

The `@` alias is configured to point to the `src` directory:

```javascript
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
```

## Deployment

Deployed via GitHub Pages using `gh-pages` package:

```bash
npm run deploy
```

This builds the site with `--prefix-paths` and deploys the `public` folder.

## Contributing

1. Make individual pull requests for each change
2. Keep descriptions concise and clear
3. Check spelling and grammar
4. Remove trailing whitespace
5. Run `npm run format` before committing

See [CONTRIBUTING.md](CONTRIBUTING.md) for full guidelines.

## Common Tasks

### Adding a Team Member

Edit [src/data/teamData.js](src/data/teamData.js):

```javascript
{
  name: 'Name',
  role: 'Role (optional)',
  photo: 'e-board/filename.jpg',
  description: 'Short bio...',
  linkedinUrl: 'https://linkedin.com/in/...',
}
```

Place photo in `src/assets/images/e-board/` or `src/assets/images/alumni/`

### Adding Social Links

Edit the `socialLinks` array in [config.js](config.js).

### Changing Site Colors

Update the brand color in [config.js](config.js) (`manifestThemeColor`, `manifestBackgroundColor`).

### Modifying Content Sections

Main pages: [src/pages/index.js](src/pages/index.js), [About.js](src/pages/About.js), [Team.js](src/pages/Team.js), [Alumni.js](src/pages/Alumni.js)

## Notes

- Uses Gatsby Head API for SEO metadata
- Uses smoothscroll polyfill for older browsers
- FontAwesome integrated for icons
- Bootstrap components available via `react-bootstrap`
