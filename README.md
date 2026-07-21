# KHAN Solutions — Landing Page

Landing page for [khan-solutions.com](https://khan-solutions.com) — showcasing the VETEK veterinary practice management platform.

## Tech Stack

- **Astro 7** — Static site generation
- **Tailwind CSS v4** — Utility-first styling with custom design tokens
- **GSAP + ScrollTrigger** — Scroll-based animations and counter effects
- **CSS Animations** — Float, glow, gradient-shift keyframes

## Architecture

```
src/
  layouts/
    BaseLayout.astro        # HTML shell, SEO meta, structured data
  components/
    Nav.astro               # Sticky nav with scroll effect + mobile
    Hero.astro              # Hero with animated background orbs
    Features.astro          # 6 feature cards grid
    Modules.astro           # 4 detailed module cards
    Stats.astro             # Animated counter statistics
    Contact.astro           # CTA + email card
    Footer.astro            # Footer with logo + copyright
  pages/
    index.astro             # Main page composing all sections
  styles/
    global.css              # Tailwind + design tokens + keyframes
  lib/
    constants.ts            # Site data, modules, features, stats
public/
    minimal-logo.svg        # KHAN logo
    favicon.svg             # Same logo as favicon
    robots.txt              # SEO
    sitemap.xml             # SEO
```

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server (localhost:4321)
npm run build        # Production build → dist/
npm run preview      # Preview production build
```

## Environment Variables

Copy `.env.example` to `.env`:

| Variable | Default | Description |
|---|---|---|
| `SITE_URL` | `https://khan-solutions.com` | Canonical URL for SEO |
| `CONTACT_EMAIL` | `administration@khan-solutions.com` | Contact email |

## Design Tokens

Colors derived from the KHAN logo (`minimal-logo.svg`):

| Token | Value | Usage |
|---|---|---|
| `--color-khan-bg` | `#060910` | Page background |
| `--color-khan-accent` | `#4FB286` | Primary accent green |
| `--color-khan-accent-light` | `#49C08B` | Lighter accent |
| `--color-khan-text` | `#f1f5f9` | Primary text |

## Deployment

Static output in `dist/`. Deploy to any static host:

```bash
npm run build
# Upload dist/ to your CDN/hosting
```
