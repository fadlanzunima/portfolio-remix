# Portfolio Remix - QWEN Context

## Project Overview

This is **Fadlan Zunima's personal portfolio website**, built with **Remix** (React-based full-stack framework). It's a modern, responsive single-page portfolio showcasing projects, skills, testimonials, and a contact form. The site features glassmorphism effects, dark/light mode toggling, smooth animations via Framer Motion, and SEO optimization with meta tags and structured data.

### Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Remix 2.8.1 |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 10 |
| UI Components | shadcn/ui + Radix UI |
| Icons | React Icons |
| Contact Form | EmailJS (@emailjs/browser) |
| Analytics | Vercel Analytics |
| Deployment Target | Cloudflare Pages / Vercel |

## Project Structure

```
portfolio-remix/
├── app/
│   ├── components/          # React UI components
│   │   ├── ui/              # shadcn/ui primitive components
│   │   ├── Hero.tsx         # Hero/landing section
│   │   ├── About.tsx        # Bio and experience
│   │   ├── Projects.tsx     # Project showcase
│   │   ├── TechStack.tsx    # Technologies/skills
│   │   ├── Testimonials.tsx # Client/peer testimonials
│   │   ├── Contact.tsx      # Contact form (EmailJS)
│   │   └── Footer.tsx       # Site footer
│   ├── lib/                 # Utility functions
│   ├── routes/              # Remix route-based files
│   │   └── _index.tsx       # Main landing page (assembles all sections)
│   ├── styles/              # Global CSS (Tailwind, custom styles)
│   └── root.tsx             # Root HTML document, meta tags, fonts
├── public/                  # Static assets (images, favicons)
├── functions/               # Cloudflare Pages serverless functions
├── remix.config.js          # Remix build configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── wrangler.jsonc           # Cloudflare Wrangler configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## Building and Running

### Prerequisites
- Node.js >= 18.0.0
- pnpm

### Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (Remix dev with manual mode) |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server (`remix-serve ./build/index.js`) |
| `pnpm typecheck` | Run TypeScript type checking (`tsc`) |
| `pnpm deploy` | Build + deploy to Cloudflare Pages |
| `pnpm pages:deploy` | Deploy to Cloudflare Pages via Wrangler |
| `pnpm deploy:vercel` | Deploy to Vercel |
| `pnpm cf-typegen` | Generate Cloudflare types via Wrangler |

### Quick Start

```bash
# Install dependencies
pnpm install

# Copy and configure environment variables
cp .env.example .env

# Start development server
pnpm dev
```

### Environment Variables

See `.env.example` for required variables:

```
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX  (optional)
NODE_ENV=development
```

## Development Conventions

### Path Aliases
- `~/*` maps to `./app/*` (configured in `tsconfig.json`)

### TypeScript
- Strict mode enabled
- Module resolution: `bundler`
- JSX: `react-jsx`
- No emit (Remix handles compilation)

### Styling
- Tailwind CSS with `tailwindcss-animate` plugin
- Global styles in `app/styles/globals.css`
- Inter font family (loaded via Google Fonts)
- `clsx` + `tailwind-merge` for conditional class composition

### Routing
- File-based routing via Remix conventions
- Single index route (`_index.tsx`) assembles all page sections
- Route files prefixed with underscore for non-layout routes

### Server Build Target
- Configured for Cloudflare Pages (`functions/[[path]].js`)
- Also supports Vercel deployment
- ESM module format

## Key Configuration Files

- **`remix.config.js`** - Remix app config; Tailwind/PostCSS enabled, Cloudflare Pages server build
- **`wrangler.jsonc`** - Cloudflare Wrangler deployment config
- **`tailwind.config.js`** - Tailwind theme and plugin configuration
- **`tsconfig.json`** - TypeScript compiler options with path aliases
- **`postcss.config.js`** - PostCSS plugin chain
