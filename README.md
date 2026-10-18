# Samuele Ancona — Portfolio

Single-page personal portfolio and CV, live at [ancona.dev](https://ancona.dev).

## Technology stack

- [Next.js](https://nextjs.org/) (App Router) with **static export** (`output: "export"`)
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) plus global CSS tokens
- No animation library, only CSS transitions

Most components are React Server Components. The navigation is the only Client Component (mobile menu state).

## Folder structure

```text
src/
├── app/            # Page, layout and metadata, global styles, favicon
├── components/
│   ├── layout/     # Navbar and footer
│   ├── sections/   # Main page sections
│   └── ui/         # Reusable headings, cards, tags, icons
├── data/           # Content shown on the site
└── types/          # Shared TypeScript data models
public/
├── CNAME           # Custom domain for GitHub Pages
└── og.png          # Open Graph / Twitter preview image (1200x630)
```

Content lives in typed files under `src/data`, so text can be updated without touching the components. Global design tokens (colors, fonts, spacing) are at the top of `src/app/globals.css`.

## Local workflow

Requires [Node.js](https://nodejs.org/) 20.9 or newer.

```bash
npm install        # install dependencies
npm run dev        # dev server at http://localhost:3000
npm run build      # static export into ./out
npx serve out      # preview the exported site locally
```

Other checks: `npm run lint` and `npm run typecheck`.

## Deployment

- The GitHub Actions workflow `.github/workflows/deploy.yml` is triggered manually (see "Maintenance mode" below).
- The workflow runs `npm ci` and `npm run build` and publishes the `out/` folder to **GitHub Pages**.
- The domain `ancona.dev` is managed via Cloudflare DNS and pointed at GitHub Pages. `public/CNAME` is copied into the export and must contain only the domain.
- The canonical origin (`metadataBase`) is set in `src/app/layout.tsx`.

## Maintenance mode

A standalone maintenance page lives on the `maintenance` branch (`index.html`, `CNAME`, `.nojekyll`). GitHub Pages stays on the **GitHub Actions** source; which page is online depends on the last workflow that ran.

- **Maintenance ON:** GitHub → Actions → "Deploy maintenance page" → Run workflow.
- **Site LIVE:** GitHub → Actions → "Deploy to GitHub Pages" → Run workflow (branch `main`).
- Pushes to `main` currently do **not** deploy automatically. Deploy the site manually after changes. Only re-enable the push trigger (`push: branches: [main]` in `.github/workflows/deploy.yml`) once the site is finished.
- After switching, purge the Cloudflare cache if needed (Caching → Configuration → Purge Everything).
