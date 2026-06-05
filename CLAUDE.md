# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React JSX portfolio site for Paulo Nobre Junior, hosted on GitHub Pages at `paulonobrejr.github.io`. Built with Vite, Tailwind CSS (minimal black-and-white design), and Framer Motion for animations.

## Dev Commands

```bash
npm run dev       # start dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Deployment

Push to `main` — GitHub Actions (`.github/workflows/deploy.yml`) auto-builds and deploys to GitHub Pages via the `github-pages` environment. **Before the first deploy**, go to the repo Settings → Pages → Source and select **GitHub Actions**.

## Architecture

```
src/
  data/resume.js        ← single source of truth for all content (edit here to update the site)
  components/
    Navbar.jsx          ← fixed top nav, mobile hamburger, CV download link
    Hero.jsx            ← full-height intro with name, summary, CTAs
    Experience.jsx      ← left-side timeline + education block
    Projects.jsx        ← 2-col card grid
    Skills.jsx          ← grouped mono-font tags
    Contact.jsx         ← 4 contact method cards
    Footer.jsx
  App.jsx               ← section order
  main.jsx
  index.css             ← Tailwind directives only
public/
  Paulo Nobre Junior-resume.pdf   ← served as static asset, linked from Navbar and Hero
```

## Design System

- **Palette:** white background, black text, `zinc-*` grays for surfaces and muted text. No color accents.
- **Typography:** Inter (body/headings) + JetBrains Mono (labels, tags, monospace accents) — both via Google Fonts in `index.html`.
- **Interactions:** border/bg swap on hover (`hover:bg-black hover:text-white`), no color shifts.
- **Animations:** Framer Motion `useInView` scroll-reveals on Experience, Projects, Skills, Contact. Hero uses staggered `fadeInUp`.

## Content Updates

All text lives in [src/data/resume.js](src/data/resume.js). To add a project, append an entry to the `projects` array. To add a skill category, append to the `skills` array. No component changes needed.
