# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio site (React + Vite + Tailwind CSS v4). No backend, no routing beyond in-page scrolling, no tests.

## Commands

```bash
npm run dev       # start Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint over the whole project
```

There is no test suite and no test runner configured.

## Architecture

- **Single page, section-based layout**: `src/App.jsx` renders one long scrollable page by stacking section components in order: `Inicio` → `About` → `Projects` → `Skills` → `Contact`. There is no router-driven navigation despite `react-router-dom` being a dependency; `react-scroll`'s `Link`/`ScrollLink` is used for in-page smooth-scrolling between section `id`s (`inicio`, `about`, `projects`, `skills`, `contact`).
- **Components live flat in `src/Components/`** (capital "C" — note this differs from the common lowercase `components/` convention; match it when adding files). Each top-level section is a self-contained `motion.section` with its own `id`, background color, and Framer Motion enter/exit animations (`initial`/`whileInView`/`exit` + `viewport={{ once: false, amount: 0.3 }}`) — follow this same animation pattern when adding new sections so scroll-triggered fade/slide-in behavior stays consistent.
- **`BackToTopButton`** is a small shared component embedded at the bottom of most sections (`About`, `Projects`, `Skills`, `Contact`) that scroll-links back to `inicio`.
- **`BackgroundLayer`** is a currently-unused component (commented out in `App.jsx`) that was designed to swap a fixed full-page gradient background based on which section is active, driven by an `onEnter` callback + `react-intersection-observer`. The `onEnter`/`useInView` wiring is present but commented out in every section component (`Inicio`, `About`, `Projects`, `Skills`, `Contact`) — it's dead/in-progress code, not a bug, if you see it disabled.
- **Styling**: Tailwind CSS v4 via the `@tailwindcss/vite` plugin (no `tailwind.config.js` — v4 uses CSS-based config). `src/index.css` just does `@import "tailwindcss";`. Colors are hardcoded as hex literals in `className` (e.g. `#F2F2F2` light background, `#121212` dark background, `#EA30FF` accent/magenta, `#30FF36` hover/green) rather than theme tokens — reuse these exact hex values for visual consistency rather than introducing new colors.
- **Static assets**: images referenced from `public/` (e.g. `/ProjectsPics/Project1.jpg`, `/CaopdecodeIcon.png`) are referenced by absolute path (no import). Imported assets (e.g. `src/assets/LinkdnProfile-noBg.png`) are imported directly in JSX. Follow whichever pattern matches where a new asset is placed.
- **Project data**: the `Projects` section's content (title, description, technologies, link, image) is a hardcoded array literal inside `src/Components/Projects.jsx` — add new projects there rather than externalizing to a data file unless asked to refactor.

## Conventions

- ESLint config (`eslint.config.js`) extends `js.configs.recommended` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` (Vite variant). The one custom rule: `no-unused-vars` ignores identifiers matching `^[A-Z_]` (e.g. unused destructured components/constants starting with a capital letter or underscore won't error).
- JSX files use the `.jsx` extension consistently; imports of local components sometimes include the extension (`./Projects.jsx`) and sometimes don't (`./Inicio`) — either works, no strict convention enforced.
