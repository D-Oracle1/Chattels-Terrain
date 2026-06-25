# Chattels Terrain Ltd — Website

A world-class, luxury, investor-focused website for **Chattels Terrain Ltd**, a premium UK property development, land acquisition, construction, infrastructure and investment company.

> **Transforming Land Into Legacy**

Built to feel like a £10M company: premium, trustworthy, conversion-focused, and fast.

## Tech Stack

- **Next.js 15** (App Router, React 19, fully static-generated)
- **TypeScript** (strict)
- **Tailwind CSS** with a bespoke navy/gold luxury design system
- **Framer Motion** for scroll, page and micro-interactions
- **Self-hosted fonts** via `@fontsource` (Playfair Display, Cormorant Garamond, Inter, Manrope) — no external requests
- **lucide-react** icons · **next-themes** for dark/light mode

## Design System

| Token        | Value                         |
| ------------ | ----------------------------- |
| Primary      | Deep Navy `#0B1F35`           |
| Secondary    | Gold `#C8A96B`                |
| Accent       | White · Light Grey · Charcoal |
| Headings     | Playfair Display / Cormorant  |
| Body         | Inter / Manrope               |

Design tokens live in `tailwind.config.ts`; reusable component classes in `src/app/globals.css`.

## Pages

| Route | Purpose |
| ----- | ------- |
| `/` | Hero (video bg), trust counters, credibility, about, services, featured projects, why-invest, investment opportunities + calculator, testimonials, insights, CTA |
| `/about` | Story, mission/vision, core values, animated stats, leadership team (LinkedIn) |
| `/services` | Six service cards + four-step process |
| `/projects` | Filterable portfolio + interactive UK map |
| `/projects/[slug]` | Project detail with gallery, facts, investment snapshot |
| `/investment` | Opportunities dashboard, ROI calculator, investor portal steps, investor registration |
| `/insights` | Category-filtered blog grid |
| `/insights/[slug]` | Article with related posts |
| `/contact` | Lead form, click-to-call, WhatsApp, email, embedded map |
| `/privacy`, `/terms` | Legal |

## Key Features

- 🎬 Full-screen hero video with graceful poster fallback
- 🔢 Animated statistics counters (intersection-triggered)
- 🧮 Interactive **Investment Calculator / ROI Estimator** with live projection chart
- 🗺️ Interactive **projects map** (dependency-free, lat/lng projection)
- 🎚️ Filterable projects and insights with animated transitions
- 🌗 Dark / light mode (defaults to dark)
- 💬 Floating WhatsApp click-to-chat, click-to-call, lead-capture forms
- 🧭 Scroll reveals, parallax, hover micro-interactions throughout

## SEO & Performance

- Per-page metadata, Open Graph & Twitter cards
- JSON-LD structured data (`RealEstateAgent`, `Project`, `Article`)
- `sitemap.xml`, `robots.txt`, PWA `manifest.webmanifest`
- All pages statically generated · lazy-loaded images (`next/image`, AVIF/WebP)
- Self-hosted fonts (no render-blocking external requests)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Configuration

Brand details (company number, address, phone, email, WhatsApp, social) are centralised in **`src/lib/site.ts`**. All content (services, projects, opportunities, team, testimonials, posts) lives in **`src/lib/data.ts`** — update these to manage the site without touching components.

### Wiring up forms

The lead, investor and newsletter forms (`src/components/lead-form.tsx`, `newsletter.tsx`) currently simulate submission. Point them at your CRM / email service or a Next.js Route Handler (e.g. `/api/lead`) to go live.

## Project Structure

```
src/
├── app/                 # Routes, layout, SEO (sitemap/robots/manifest)
├── components/
│   ├── sections/        # Home & shared page sections
│   ├── ui/              # Primitives (Button, …)
│   └── *.tsx            # Navbar, footer, forms, cards, calculator, map
└── lib/                 # site config, content data, utils
```

---

© Chattels Terrain Ltd. All rights reserved.
