<img src="src/assets/images/logo.png" width="128">

# ACU at NYU Website

Official website for the Asian Cultural Union at NYU, NYU's largest Asian umbrella organization.

## Tech Stack

- **Framework**: [Astro 6](https://astro.build/) (static site generator with React islands)
- **Styling**: Tailwind CSS v4 + SCSS theme
- **Animation**: Framer Motion
- **Deploy**: GitHub Pages (auto-deploys on merge to `master`)

## Getting Started

```shell
nvm install 22 && nvm use 22   # Node 22+ required
npm install
npm run dev                     # http://localhost:4321
```

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start development server     |
| `npm run build`     | Production build             |
| `npm run preview`   | Preview production build     |
| `npm run check`     | Astro type checking          |
| `npm run lint`      | ESLint                       |
| `npm run format`    | Prettier (run before commit) |

## Common Maintenance Tasks

All member/event data lives in `src/data/`. Photos go in `src/assets/images/`. Filenames are case-sensitive on Linux CI — match exactly.

### Add a team member

Add an entry to the appropriate section in `src/data/teamData.ts`:

```ts
{
  name: 'Full Name',
  role: 'Role or empty string',
  photo: 'e-board/filename.jpg',     // → src/assets/images/e-board/
  description: 'Bio shown on hover.',
  linkedinUrl: 'https://linkedin.com/in/...',
}
```

### Move someone to alumni (graduating members)

1. **Remove** their entry from `src/data/teamData.ts`
2. **Add** to the correct year in `src/data/alumniData.ts` — note alumni have no `description` field:

```ts
{
  name: 'Full Name',
  photo: 'e-board/filename.jpg',   // photo can stay in e-board/
  role: 'Role they held',
  linkedinUrl: 'https://linkedin.com/in/...',
}
```

If the graduation year doesn't exist yet, add a new `{ year: 'Class of XXXX', members: [] }` block at the top of the array.

### Update leadership roles / reorganize sections

Edit `src/data/teamData.ts`. The `section` field (e.g. `'Presidents'`, `'Events'`) controls the heading shown on the Team page. Move member objects between sections as needed — section order in the array is the display order.

### Add an event

Add to `src/data/events.ts`. Place the image in `src/assets/images/events/`:

```ts
{ year: 2026, term: 'Spring', title: 'Event Name', image: 'events/filename.png', description: '...' }
```

## Contributing

1. Branch off `master` with a descriptive branch name
2. Make changes and run `npm run build` to confirm no build errors
3. Open a pull request — merging to `master` triggers automatic deployment

## AI-Assisted Development

An `AGENTS.md` file at the repo root provides detailed architecture context for Claude Code, Codex, and similar tools. If you're using an AI assistant to make changes, point it at that file first — it covers the component model, styling layers, deployment pipeline, and caveats to avoid.
