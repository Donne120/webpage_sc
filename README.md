# Student Companion

Marketing site for Student Companion — an assistant that answers student questions from an institution's own handbooks, calendars and policy documents, rather than from general web knowledge.

Built at African Leadership University in Kigali. The site is TanStack Start (React 19), Vite 7 and Tailwind CSS v4, deployed on Vercel.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Student Companion is a context-aware assistant purpose-built for universities. It connects to institutional systems to help students with:

- Academic guidance and coursework support
- Campus services, appointments, and requests
- Personal growth, career advice, and mentorship
- Event updates, deadlines, internships, and scholarships
- Seamless handoff from AI to live staff when needed

## Page sections

Single route (`src/routes/index.tsx`), composed of: hero, marquee, about, demo,
mission, capabilities, value, testimonials, CTA, team, contact, footer.

There is no FAQ section — it was removed in `0ddddd1`. Chapter numbering in the
section labels runs 01–06 with no gaps; keep it that way if you add or remove a
section.

## Tech Stack

- **Framework:** [TanStack Start](https://tanstack.com/start) (React 19, SSR-ready)
- **Build Tool:** [Vite 7](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with semantic design tokens
- **UI Primitives:** [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Forms & Validation:** React Hook Form + Zod
- **Data:** TanStack Query
- **Language:** TypeScript (strict)
- **Package Manager:** [Bun](https://bun.sh/)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) `>= 1.1` (or npm/pnpm if preferred)
- Node.js `>= 20`

### Installation

```bash
git clone https://github.com/Donne120/webpage_sc.git
cd webpage_sc
bun install
```

### Run the development server

```bash
bun run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Available Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `bun run dev`      | Start the Vite development server            |
| `bun run build`    | Build the production bundle                  |
| `bun run build:dev`| Build using development mode                 |
| `bun run preview`  | Preview the production build locally         |
| `bun run lint`     | Run ESLint across the project                |
| `bun run format`   | Format the codebase with Prettier            |

## Project Structure

```
src/
├── assets/            # Images and static assets
├── components/
│   └── ui/            # shadcn/ui primitives
├── hooks/             # Reusable React hooks
├── lib/               # Utilities and server functions
├── routes/            # File-based routes (TanStack Router)
│   ├── __root.tsx     # Root layout
│   └── index.tsx      # Landing page
├── router.tsx         # Router configuration
├── server.ts          # SSR entry
├── start.ts           # Start instance & middleware
└── styles.css         # Tailwind layer + design tokens
```

## Design System

All color, typography, and spacing decisions flow through semantic tokens defined in `src/styles.css` (in `oklch`). Components consume those tokens through Tailwind utility classes — avoid hardcoded colors in components to preserve light/dark theming and brand consistency.

## Deployment

`vite.config.ts` sets the nitro preset to `vercel`, so `build` emits Vercel's
Build Output API structure in `.vercel/output`.

```bash
bun run build
```

Vercel picks this up automatically on push. Note `.npmrc` pins
`legacy-peer-deps` — the install fails on Vercel without it.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "feat: add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please run `bun run lint` and `bun run format` before submitting.

## License

© Student Companion. All rights reserved.
