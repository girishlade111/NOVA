# NOVA

A pixel-perfect, component-based landing page for a fictional creative studio "NOVA" — built with Next.js 16 (App Router), TypeScript, Tailwind CSS 4, GSAP, Framer Motion, and shadcn/ui. The repo also ships with a reusable full-stack scaffold (Prisma + SQLite, mini-services, examples, DB helpers) for spinning up future apps.

## Features

- Warm editorial design system (cream background, ink foreground, coral accent, lime secondary)
- Animated Navbar (glass effect on scroll, mobile drawer)
- Hero with GSAP parallax aurora + staggered word reveal
- Marquee + stats section with count-up counters
- Features bento grid, Showcase (CSS-art covers), Process timeline
- Testimonials, Pricing tiers, final CTA (dark panel parallax), sticky Footer with giant wordmark
- Full-stack scaffold: Prisma ORM (SQLite), mini-services, websocket examples, dev/build scripts

## Tech Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4, shadcn/ui (`components.json`), Radix UI
- GSAP, Framer Motion
- Prisma ORM (`prisma/`, `db/`) — SQLite datasource
- next-auth, next-intl, zod, react-hook-form, zustand
- Bun (`bun.lock`) / npm

## Quick Start

```bash
npm install          # or: bun install
cp .env.example .env # if present, otherwise create .env (never commit it)
npx prisma generate
npx prisma db push
npm run dev          # http://localhost:3000
```

## Environment Variables

`.env*` files are gitignored — never commit credentials. Typical variables for local development:

| Variable       | Purpose                              |
|----------------|--------------------------------------|
| `DATABASE_URL` | SQLite path or database connection   |
| `NEXTAUTH_URL` | Auth callback base URL               |
| `NEXTAUTH_SECRET` | next-auth session secret           |

## Project Structure

```
NOVA/
├── src/app/          # App Router pages, layout, API routes
├── src/components/   # shadcn/ui + site components (motion, layout, sections)
├── src/lib/          # Shared helpers (GSAP utilities)
├── prisma/ + db/     # Prisma schema and DB helpers
├── mini-services/    # Reusable backend mini-services
├── examples/         # websocket and other examples
├── download/         # Generated/shared downloads
├── .zscripts/        # dev/build/start helper scripts
├── Caddyfile         # Reverse-proxy config (Caddy -> :3000)
└── public/           # Static assets
```

## Build / Production

```bash
npm run build    # standalone build
npm start        # runs the standalone server on :3000
```

## Deploy Notes

Full-stack app (API route, Prisma, next-auth) — needs a Node server or serverless platform with database env vars. Not currently deployed; static-only hosting won't work because of the server components and API route.

## Credits

Built by [Girish Lade](https://ladestack.in) — part of the [LadeStack](https://ladestack.in) open-source collection.
