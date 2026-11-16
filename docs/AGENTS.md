# AGENTS.md — Sergei Nikonets portfolio

## Goal
Build and maintain a production-ready English-language portfolio in Next.js, TypeScript, and Tailwind CSS from `CODEX_PORTFOLIO_SPEC_RU.md`. Treat the full specification as the primary brief. `sergei_portfolio_preview.html` is a **visual / interaction reference only**, not production code. `portfolio_project_content.json` is **optional**; the specification independently describes all projects.

## Non-negotiable requirements
- Show **all 10 projects**, with one working detail route per project. No `Featured`, `Top 5`, secondary, hidden, or unimportant-project groupings.
- Filters: All (10), Tools & Applications (3), Data & Knowledge (2), Games & Simulations (5). All (10) is the initial state.
- Each project has individual idea, distinctive features, engineering decisions, technologies, and media area. No cookie-cutter repeated descriptions.
- Main site copy is in English, natural and specific, without invented metrics or capabilities. Developer-facing instructions may be in Russian.
- Use real screenshots/videos if present; otherwise explicitly labeled placeholders. Do not present concept visuals as actual app captures.
- Preserve accurate distinction: Presenter ≠ Lesson Player; Maeth ≠ Two Towers. Middle-earth is an unofficial fan project.
- Represent AI-assisted development transparently. Do not imply the author personally hand-coded every line, or that he merely supplied one prompt.
- Don't leak secrets, alter `.env` files, overwrite unrelated work, or push/deploy without instruction.

## Working style
1. Inspect repository, scripts, assets, and README before editing. If an existing app exists, extend it; if empty, bootstrap minimal Next.js.
2. Implement a complete functional vertical slice: homepage/catalog, filters, 10 unique detail pages, about/contact, SEO metadata and accessible responsive layout.
3. Use typed structured content (`src/content/projects.ts` or equivalent) and avoid duplicated project data. A missing/truncated JSON is **not** a blocker: use the ten project descriptions in the spec.
4. Execute the available checks (at least build, typecheck, lint; tests where configured). Fix errors introduced by your changes. Do not claim unrun checks passed.
5. End with a concise summary of changed files, commands run and results, gaps (e.g. missing real media), and manual verification steps.

## Design constraints
Warm editorial minimalism, restrained green accent, generous whitespace, clear typography, equal-card importance, lightweight motion, `prefers-reduced-motion`, semantic HTML and keyboard usability. Avoid splash loaders and heavy animated 3D on the homepage.
