# KITA Creative Studio prototype

Local portfolio prototype built with Next.js and TypeScript. The visual direction follows `design/kita creative studio mockup.pdf`. See `WEBSITE_PLAN.md` for the architecture, checklist, decisions, and next steps.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000. To verify the production build:

```bash
npm run typecheck
npm run build
```

The project and service descriptions, estimator prices, and artwork are prototype content. The contact form validates input but does not send or store it. The estimator CTA opens the visitor's email app; the visitor must send the message there.

## GitHub Pages preview

GitHub Pages cannot run the Next.js API routes. The workflow at `.github/workflows/deploy-pages.yml` builds a **static frontend preview** for `https://codewithmujtabo.github.io/kita/`. Its estimator calculates locally, and its inquiry form validates locally without sending or storing data.

To publish it:

1. In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push the `master` branch. The workflow will build and deploy the exported `out/` directory.
3. In the **Actions** tab, check that the workflow succeeds, then refresh the Pages URL.

Build the same static preview locally with:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/kita NEXT_PUBLIC_STATIC_PREVIEW=true npm run build
```

For real inquiry delivery and server-side features, deploy the full Next.js application to hosting that supports a runtime. Keep the Pages preview labeled as a prototype.
