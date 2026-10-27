# KITA Creative Studio website plan

Last updated: 2026-10-27 (Asia/Jakarta)
Current phase: 3 - 3D and motion (with backend prototype underway)
Overall status: In progress

## How to resume this project

At the start of each session, read this file, inspect the actual files in the repository, and continue with the first unchecked task in the current phase. Update the checklist and progress log after meaningful work. The checklist records intent; the code and verified deployment state are the evidence for completion. Do not mark a task done based only on a plan. Record new decisions and blockers here so another session can pick up without guessing.

## Goal

Build a modern, immersive portfolio website for KITA Creative Studio that attracts clients, shows work, explains services, gives a useful starting price estimate, and makes it easy to inquire. Create a working frontend and backend prototype with clearly labeled sample content first. Replace samples with approved real projects, services, and prices before public launch.

## Reference and design direction

Primary visual source: `design/kita creative studio mockup.pdf` (one tall, image-based design sheet).
Inspiration: https://mdx.so/ (reviewed 2026-10-27). Use its immersive pacing, large typography, motion, 3D presentation, project storytelling, and strong contact prompts as inspiration. Do not copy its branding, assets, layouts, code, or wording.

The KITA PDF is the design baseline: a bright white/soft gray canvas; black editorial type; deep burgundy accents; translucent glass-like panels; soft shadows; floating 3D objects; and a dark footer. Its page sequence is:

1. Hero: KITA logo, navigation, headline, three-part idea/process/product visual, service links, and start-project CTA.
2. Studio introduction: sculptural hand with layered digital panels and two short statements.
3. Showreel: wide dark video panel.
4. Services: four cards around a central 3D composition (websites, mobile apps, brand identity, social media in the mockup).
5. Projects: category filters and project cards.
6. Quick project estimator: project type, scope, notes, illustrative price range, and inquiry CTA.
7. Footer: navigation, social links, contact, and location.

The PDF is a flattened reference, not a set of ready-to-use web assets. Recreate components as accessible HTML/CSS/3D where practical. Obtain or create optimized source assets for complex imagery and the showreel. Until those exist, use clearly labeled prototype visuals and avoid presenting invented projects, prices, testimonials, or awards as real.

Motion direction: purposeful scroll reveals, restrained hover depth, smooth section transitions, a hero 3D scene, and optional 3D service detail. Keep text and controls readable during motion. Provide reduced-motion behavior and a static fallback when WebGL is unavailable. Mobile should keep the composition and CTA hierarchy without relying on heavy effects.

## Technical architecture

- **Language and app:** TypeScript, Next.js App Router, React, HTML, and CSS. One codebase serves frontend and server endpoints.
- **Rendering:** Pre-render public content where possible. Keep interactive estimator, filters, and 3D scenes as client components. Give each real project its own shareable, indexable page.
- **Styling:** CSS design tokens for color, type, spacing, radii, shadows, and motion; reusable components. Choose a small animation library only where CSS is insufficient. Use Three.js / React Three Fiber for 3D if a performance prototype confirms the need.
- **Content:** Start with typed local content records for services, projects, copy, links, and estimator rules. Separate content from components so real content can replace samples. Decide whether a CMS is needed after the team tests editing needs; do not add one by default.
- **Backend:** Next.js route handlers or server actions for estimate requests and contact submission. Server validates and sanitizes input, applies spam/rate controls, and sends inquiries to an approved destination. The prototype can use a mock submission flow; it must never claim a message was delivered when it was not.
- **Pricing:** A versioned pricing configuration maps service, scope, and optional extras to *starting ranges*. The estimator explains that results are indicative and final quotes follow discovery. Do not publish the PDF's sample USD range as a real KITA price. Confirm currency, real ranges, inclusions, and tax wording before launch.
- **Storage:** No database is required for the public prototype. Add persistent storage only if inquiry history, an admin workflow, or editable CMS content is approved. Keep secrets server-side and out of the repository.
- **Analytics/SEO:** Page metadata, sitemap, robots, social previews, structured data where relevant, and privacy-conscious analytics after approval. Measure inquiry and estimator completion without collecting unnecessary personal data.
- **Deployment:** Develop locally first. Choose hosting after backend and asset needs are known. Add staging, production environment variables, domain, HTTPS, and rollback instructions before launch. Do not publish sample projects or sample prices as if they are real.

### Proposed source layout

```text
app/                    pages, layouts, metadata, API routes
components/             navigation, sections, cards, forms, 3D scenes
content/                typed sample and later approved real content
lib/                    pricing logic, validation, server helpers
public/                 optimized images, models, video posters
styles/                 tokens and global styles
tests/                  focused behavior and end-to-end checks
design/                 supplied design reference
WEBSITE_PLAN.md          decisions, checklist, and progress log
```

### Planned routes

| Route | Purpose |
| --- | --- |
| `/` | Main studio story and featured work |
| `/work` | All projects with category filtering |
| `/work/[slug]` | Individual case study |
| `/services` | Services, deliverables, and starting prices |
| `/estimate` | Full project estimator and inquiry path (may begin as a home section) |
| `/contact` | Inquiry form and contact details |
| `/api/estimate` | Validated estimate calculation, if server calculation is needed |
| `/api/inquiries` | Validated inquiry submission |

Routes may be consolidated after the first clickable prototype if that improves navigation. Keep stable URLs and redirects when changing published routes.

### Data model (initial)

- `Service`: id, title, summary, deliverables, category, starting price/range, currency, typical timeline, display order.
- `Project`: slug, title, client, summary, services, year, cover, media, challenge, approach, outcome, publication status. Sample entries must be visibly marked.
- `EstimateInput`: service, scope, optional extras, project description, contact details only when submitting.
- `EstimateResult`: currency, low/high range, timeline, assumptions, disclaimer, pricing version.
- `Inquiry`: name, email, company (optional), message, selected services, estimate snapshot (optional), consent state, created timestamp.

## Delivery checklist

Status key: `[x]` done; `[-]` in progress; `[ ]` not started. Mark a phase done only when its acceptance check passes.

### Phase 0 - discovery and architecture

- [x] Inspect the supplied design PDF and identify its page flow and visual language.
- [x] Review MDX as an inspiration reference.
- [x] Maintain this architecture, decisions, checklist, and progress log as the project source of truth.
- [ ] Collect final brand assets, preferred fonts, language(s), target clients, real service list, pricing currency, contact destination, and available project media. These may remain open while prototype work proceeds.

Acceptance: the plan captures the intended experience, implementation path, and open content decisions. The prototype can begin with explicit assumptions.

### Phase 1 - project foundation

- [x] Initialize the Next.js TypeScript project and repository conventions.
- [x] Set up global design tokens, font loading, responsive breakpoints, and shared layout.
- [x] Add typed content schemas and clearly marked sample content.
- [x] Make local development and production build run cleanly.

Acceptance: the app starts locally, builds, and has a maintainable structure for replacing sample content.

### Phase 2 - visual frontend prototype

- [x] Build responsive header, navigation, footer, and primary CTA.
- [x] Build hero, studio introduction, and showreel section from the PDF composition.
- [x] Build services, project gallery, category filters, and case-study template.
- [x] Build estimator and contact form interfaces with clear sample-data labels.
- [x] Add keyboard navigation, readable focus states, image descriptions, and reduced-motion behavior. The skip link and menu Escape behavior were checked in Chrome.

Acceptance: a visitor can browse the full prototype on desktop and mobile, understand the offer, inspect sample work, and reach the inquiry flow.

### Phase 3 - 3D and motion

- [-] Prototype the hero 3D composition and measure loading/rendering cost. A generated transparent 3D-style asset is in place; performance measurement and any true WebGL scene remain.
- [x] Add scroll and interaction animation guided by the PDF and MDX reference. Section reveals, floating and hover motion, and pointer-responsive hero movement are in place.
- [-] Optimize models, textures, video, and image assets; lazy-load heavy scenes. The hero is optimized; final video and any future 3D assets remain.
- [x] Add static and reduced-motion fallbacks for current motion.

Acceptance: the site feels immersive on capable devices and remains usable on slower devices and without WebGL.

### Phase 4 - backend prototype

- [x] Implement a deterministic estimate calculation from sample pricing rules.
- [x] Validate inquiry and estimate inputs on the server.
- [x] Connect the prototype form to an honest mock response. No message is sent or saved.
- [-] Add basic abuse controls and clear success/error states. Server routes now cap JSON bodies at 8 KB and reject unsupported content types; rate limits and a real delivery path belong with production hosting.

Acceptance: estimator results match configured rules, and form behavior accurately states whether an inquiry was actually sent.

### Phase 5 - real content and business rules

- [ ] Replace sample brand copy, service definitions, and assets with approved content.
- [ ] Add real projects with permission to show names, images, and outcomes.
- [ ] Confirm currency, starting ranges, inclusions, exclusions, tax language, and timelines.
- [ ] Connect inquiry delivery and confirm the recipient can receive messages.
- [ ] Review legal/privacy wording for the actual form and analytics choices.

Acceptance: no sample content appears as a real claim; prices and inquiry delivery reflect actual business decisions.

### Phase 6 - quality and launch readiness

- [-] Check desktop/mobile layouts, browser behavior, keyboard access, and reduced motion. Live Pages homepage, Work, Contact, estimator, demo form, and 390 px mobile width have been checked; broader browser and reduced-motion QA remain.
- [-] Verify metadata, social previews, sitemap, and important search pages. Prototype pages have distinct share titles/URLs, a favicon, and a share image; sitemap and indexable metadata wait for approved real content.
- [ ] Check performance budgets and optimize the heaviest assets and animations.
- [ ] Test estimate edge cases and inquiry delivery end to end.
- [ ] Set up staging, production configuration, domain, monitoring, and rollback notes.

Acceptance: the production build and key user journeys pass, and the launch configuration is documented.

### Phase 7 - launch and iteration

- [-] Publish the approved site and verify the live domain and core journeys. A static prototype preview is live at `https://codewithmujtabo.github.io/kita/`; final content and backend launch remain.
- [ ] Check analytics and inquiry receipt after launch.
- [ ] Record issues and prioritize the first iteration from real visitor behavior.

Acceptance: the live site works, receives inquiries, and can be updated safely.

## Decisions and open questions

### Agreed

- Use TypeScript and Next.js for the website.
- Build a frontend and backend prototype before replacing sample content.
- Use the KITA PDF as the visual baseline and MDX as inspiration for immersive 3D and motion.

### Provisional decisions

- Start content in typed local files; defer CMS selection.
- Use indicative price ranges rather than a guaranteed fixed quote.
- Keep the first prototype local until sample content is clearly separated from launch content.
- Treat 3D as progressive enhancement, with a static fallback.

### Information needed before real-content launch

- Final logo/vector files, brand fonts, and source images or 3D files, if available.
- Real portfolio projects, permitted client names, case-study details, and media.
- Final service list and whether social media remains a core service.
- Pricing currency, actual ranges, packages, tax treatment, and quoting rules.
- Contact email/CRM destination, preferred inquiry fields, and domain/hosting ownership.
- Primary site language and any additional languages.

## Progress log

- 2026-10-27: Reviewed the one-page KITA mockup PDF and `https://mdx.so/`. Chose TypeScript/Next.js in the prior discussion. Created this plan. No application code or deployment exists yet.
- 2026-10-27: Built a local Next.js/TypeScript prototype with home, services, work, case-study, and contact pages; typed demo content; generated hero artwork; CSS motion and responsive layouts; estimate and inquiry API routes. Browser-checked desktop/mobile layout, project filtering, estimate recalculation, and demo form validation. `npm run typecheck` and `npm run build` passed. No deployment or real inquiry delivery exists.
- 2026-10-27: Normal `npm install` could not reach the package registry in this environment. For verification, copied a matching installed Next.js/React dependency tree from another local project into ignored `node_modules/`. A fresh environment should use `npm install` as documented in `README.md`; no lockfile has been generated yet.
- 2026-10-27: Added scroll reveals, pointer-responsive hero motion, and a keyboard skip link. Converted the hero artwork from 1.75 MB PNG to 294 KB WebP and corrected its dimensions. Verified reveal behavior and skip navigation in Chrome; `npm run build` and `npm run typecheck` pass. True WebGL, showreel media, and real content are still pending.
- 2026-10-27: Audited the current prototype checklist. Found and fixed keyboard Escape behavior for the navigation menu, verified it in Chrome, and marked the frontend prototype's accessibility task complete. The 3D visual treatment is in progress; real showreel and portfolio assets remain pending.
- 2026-10-27: Prepared a GitHub Pages static preview after the live `/kita/` URL showed the repository README. Added a `master` branch Actions workflow, `/kita` base path, static export, and local-only demo validation for the Pages build. Verified exported HTML and assets. Deployment remains pending: the repository must use **Settings → Pages → GitHub Actions**, and the workflow changes must be pushed. GitHub Pages cannot run the POST API routes; full backend hosting remains a separate later step.
- 2026-10-27: Static export and normal build both passed. A local commit could not be created because this session has read-only access to `.git` (`index.lock: Operation not permitted`). The changed files remain in the workspace for the user to commit and push from Terminal.
- 2026-10-27: After switching GitHub Pages to GitHub Actions and rerunning the workflow, verified the live static prototype at `https://codewithmujtabo.github.io/kita/`. The homepage hero and published Work and Contact routes load. The site is still a prototype with sample content and no server-side inquiry delivery.
- 2026-10-27: Verified live Pages interactions: the estimator updates for mobile-app scope, the static contact form reports local validation with no message sent or saved, and the homepage fits a 390 px mobile viewport without horizontal overflow. No code changes were needed from these checks.
- 2026-10-27: Improved page landmarks and skip-link focus, restored focus to the mobile menu button on Escape, added a favicon and 1200×630 prototype social image, and set page-specific share URLs. API routes now reject non-JSON and bodies over 8 KB. The GitHub Pages static export builds and its generated HTML references the correct `/kita/` assets. These changes are local only until committed and pushed; live Pages still serves the previous build.
