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
