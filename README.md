# Mohamed Atef / Portfolio

An Angular 18 portfolio built around the approved paper-collage direction: oversized typography, an original portrait cutout, a scroll-driven Fly WT chapter, project notes, a dimensional About notebook, experience, and contact.

## Run locally

```sh
npm ci
npm start -- --host 127.0.0.1 --port 4200
```

Open http://127.0.0.1:4200/. This is the actual Angular app, rather than the earlier standalone prototype.

## Open the built preview

On Windows, double-click `Preview-Portfolio.cmd`. It builds the current source and serves it at http://127.0.0.1:4201/. Keep its terminal window open while viewing the site; closing it stops the local preview.

You can also run `npm run build` followed by `npm run preview`. A refused connection at port 4201 means the local preview process needs to be started. The preview is local to this computer and is not a public deployment.

## Validate and build

```sh
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
```

Chrome must be installed for the Karma tests. On Windows, set `CHROME_BIN` to the Chrome executable if automatic discovery fails.

Production output is generated under `dist/v-01/`. The home route is prerendered; browser-only motion loads after rendering. To preview the SSR build, run `npm run serve:ssr:v-01` (default port 4000).

## Edit the portfolio

- `src/app/portfolio/content.ts`: contact links and client project notes.
- `src/app/components/hero/home/`: opening composition.
- `src/app/components/portfolio/flight-story/`: Fly WT story and screenshot dialog.
- `src/app/components/portfolio/project-notebook/`: keyboard-accessible project notebook.
- `src/app/components/hero/about/`, `experience/`, `contact/`: biography, skills, work history, and contact.
- `src/app/portfolio/motion.ts`: lazy GSAP loading, component scoping, and cleanup.
- `src/styles.css`, `src/styles/paper-notes.css`: shared paper tokens, fonts, and paper-note primitives.

The existing project descriptions and CV supplied the content. Client projects without supplied screenshots use written case notes. No product screens, metrics, or public deployment links were invented.

## Motion and accessibility

- Desktop Fly WT uses GSAP ScrollTrigger with explicit stage controls and optional playback.
- Playback stops on wheel, touch, navigation keys, Escape, Tab, or screenshot opening.
- Small screens and short desktop viewports use flowing project content.
- Reduced-motion preferences remove pinned/scrubbed sequences and page-turn animation.
- Project tabs support arrow keys, Home, and End. The screenshot dialog uses native modal focus handling and Escape dismissal.
- Contact uses a real email link with optional clipboard copy; there is no pretend form submission.

## Assets

Optimized assets and locally hosted font files are in `public/assets/paper/`; see [asset provenance](public/assets/paper/ASSETS.md). The original portrait and supplied CV remain in `public/assets/`.

## Dependency status

This refactor retains Angular 18.2.6. On 2026-10-24, `npm audit` reported 95 findings (10 low, 28 moderate, 51 high, 6 critical) in the inherited dependency tree after removing unused libraries. GSAP was not listed as vulnerable. Passing the build and interaction tests does not resolve those dependency advisories. Upgrade/remediation of the Angular/tooling/server dependency tree is a separate task before public deployment.

No deployment, push, or external publication is part of this change.

## Updated CV

The portfolio content and downloadable CV now follow `Mohamed_Atef_Full_Stack_CV.pdf`, supplied on 2026-10-24. The public copy is `public/assets/resume/Mohamed_Atef_Full_Stack_CV.pdf`.

The identity is Full-Stack Software Developer; the current Sheen role is Mid Software Developer. NDC Back Office is described as a team contribution to Angular and .NET, rather than sole ownership. ElZatoonah, current technical skills, education, and certifications are included. See `docs/cv-content-update.md` for the content change record.
