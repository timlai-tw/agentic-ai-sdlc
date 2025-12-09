# Agentic SDLC Explorer

[![Live demo](https://img.shields.io/badge/Live%20Demo-sdlc.timlai.dev-1e90ff?style=for-the-badge)](https://sdlc.timlai.dev/)

Introduction
-
`Agentic SDLC Explorer` is a minimal front-end example (Vite + React) that visualizes how agentic assistants can support developers throughout the Software Development Life Cycle (SDLC).

Goals
-
- Demonstrate agent applications across requirements, design, development, testing, review, and deployment.
- Provide a runnable example UI and reference materials to help teams explore agentic workflows.

Key features & SDLC scope
-
- Requirements / Backlog: review feature documents, analyze the codebase, assist system design.
- Development / Agentic Coding: IDE-assisted coding, suggestions & autocompletion, code search, legacy code translation.
- Testing & Security: generate unit tests, assist debugging, perform security analysis, prepare for code review.
- Commits & Review: create commits and PRs/MRs, assist code and security reviews, offer suggested changes.
- Deployment & Operations: push to non-production environments, handle staging bugs, support release workflows.
- Documentation & Release: generate/update docs, produce release notes, assist production deployment tasks.

Quick start
-
Run the following in the project root:

```pwsh
# Install dependencies
npm install

# Start development server (Vite)
npm run dev

# Build for production
npm run build
```

If you prefer `pnpm` or `yarn`, use `pnpm install` / `pnpm run dev` or `yarn` / `yarn dev` respectively.

Key files
-
- `index.html` — project entry
- `package.json` — scripts and dependencies
- `vite.config.js` — Vite configuration
- `tailwind.config.js` / `postcss.config.js` — styling configuration
- `src/` — front-end source
  - `index.css` — global styles
  - `main.jsx` — React entry point
  - `SdlcExplorer.jsx` — main component (SDLC Explorer)
- `ref/` — reference docs and flow diagrams

Common scripts
-
- `npm run dev` — start dev server
- `npm run build` — create production bundle (`dist/`)
- `npm run preview` — preview production build locally (if configured)

Live demo
-
- https://sdlc.timlai.dev/

Deployment suggestions
-
This is a static front-end app. Recommended hosts:

- GitHub Pages — deploy `dist/` to `gh-pages` or use GitHub Actions for automation.
- Vercel / Netlify — connect the repository for automated builds and publishing.

Contributing
-
- Contributions, issues, and PRs are welcome.
- To extend agent features or add backend integrations, add `services/` or `api/` modules.
- To add CI, tests, or linting, include a GitHub Actions workflow.

License
-
- MIT License (see `LICENSE`).

Contact
-
- If you have questions or suggestions, open an issue in the repository.
