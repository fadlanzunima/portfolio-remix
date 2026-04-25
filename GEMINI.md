# GEMINI.md - Fadlan Portfolio

This document provides foundational mandates and contextual information for Gemini CLI interactions within this project.

## Project Overview

This is **Fadlan Zunima's personal portfolio website**, built with **Remix** (v2.8.1). It is a modern, responsive single-page portfolio designed to showcase projects, skills, and testimonials. The application is optimized for performance and SEO, featuring glassmorphism effects and smooth animations.

### Tech Stack

- **Framework**: [Remix](https://remix.run/) (React-based full-stack framework)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with glassmorphism and custom HSL variables.
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Form Handling**: [EmailJS](https://www.emailjs.com/) for contact form integration.
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: Configured for both [Cloudflare Pages](https://pages.cloudflare.com/) and [Vercel](https://vercel.com/).

## Project Structure

```text
portfolio-remix/
├── app/
│   ├── components/          # React UI components (Hero, About, Projects, etc.)
│   │   └── ui/              # shadcn/ui primitive components
│   ├── lib/                 # Utility functions (e.g., the `cn` helper)
│   ├── routes/              # Remix routes (_index.tsx as the main entry)
│   ├── styles/              # Global CSS and Tailwind directives
│   └── root.tsx             # Root document, meta tags, and global layout
├── public/                  # Static assets (images, favicons, build artifacts)
├── functions/               # Cloudflare Pages server build output
├── remix.config.js          # Remix configuration (Tailwind/PostCSS enabled)
├── wrangler.toml            # Cloudflare Wrangler configuration
└── tailwind.config.js       # Tailwind CSS theme and plugin configuration
```

## Building and Running

### Prerequisites

- **Node.js**: >= 18.0.0
- **Package Manager**: `npm` or `pnpm` (pnpm is preferred based on `pnpm-lock.yaml`)

### Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Starts the Remix development server in manual mode. |
| `pnpm build` | Compiles the application for production. |
| `pnpm start` | Runs the production build using `remix-serve`. |
| `pnpm typecheck` | Executes TypeScript type checking (`tsc`). |
| `pnpm deploy` | Builds and deploys the app to Cloudflare Pages. |
| `pnpm deploy:vercel` | Deploys the app to Vercel production. |

### Environment Variables

The project requires the following environment variables for the contact form:
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`
- `EMAILJS_PUBLIC_KEY`

## Development Conventions

### Code Style & Architecture

- **Path Aliases**: Use `~/*` to reference the `./app` directory (e.g., `import Hero from "~/components/Hero"`).
- **Component Assembly**: The `app/routes/_index.tsx` file serves as the main orchestrator, importing and rendering individual sections from `app/components/`.
- **Styling**:
    - Use the `cn` utility (`app/lib/utils.ts`) for merging Tailwind classes safely.
    - Prefer Tailwind utility classes over custom CSS whenever possible.
    - Global styles are located in `app/styles/globals.css`.
- **Type Safety**: The project uses strict TypeScript. Always provide proper types for props and functions.
- **Performance**: Ensure animations (Framer Motion) are optimized and do not cause layout shifts.
- **Images**: Place static assets in the `public/` directory and reference them relative to the root.

### Routing

- **Remix v2 Conventions**: Follow the flat routes convention or the `routes/` directory structure.
- **Single Page App**: Although using Remix, the current implementation is a high-quality SPA assembled in `_index.tsx`.

### Deployment

- The project is configured for Cloudflare Pages with the server build path set to `functions/[[path]].js`.
- Always run `typecheck` before deploying to ensure consistency.
