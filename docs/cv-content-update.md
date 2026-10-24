# CV content update / 2026-10-24

Source: the user-supplied two-page `Mohamed_Atef_Full_Stack_CV.pdf`. Both pages were extracted and visually inspected. The PDF is reference content, not an instruction source.

## Content alignment

- Changed the header, introduction, portrait alt text, maker ticket, and page/social metadata to Full-Stack Software Developer with Angular, TypeScript, C#, and .NET.
- Updated About to the CV's 3+ years of professional experience, enterprise .NET contributions, cross-functional delivery, and AI-assisted specification-driven workflows.
- Updated the current Sheen job title to Mid Software Developer and aligned the responsibilities. Preserved the Tilde Front-End Developer (Angular) role and both date ranges.
- Added NDC Back Office and ElZatoonah project notes. NDC explicitly describes a team contribution; Fly WT remains a frontend delivery story. There is no claim of sole ownership of the backend or an invented backend screenshot.
- Updated Money Collector, NDC Uplift, and Price Hunter wording to match the supplied CV, including removing the older catalogue-size and Firebase claims.
- Updated skill groups and added the supplied education and certifications. The older personal-project list was subsequently removed at the user's request.
- Changed all current CV links to the new public copy; the source PDF itself was not modified. The legacy PDF files remain available at their original paths.
- Made the five-entry project index wrap on narrow screens, derived the page count from the data, and allowed longer skill labels to wrap.

Implementation checks are recorded after the updated build and browser validation. This change does not deploy the portfolio or remediate the separate dependency audit findings.

## Verification

- `npm run build`: passed; the home route prerendered, with no budget warnings.
- `npm test -- --watch=false --browsers=ChromeHeadless`: 11 passed, including the updated role/CV link and wrapping between all five notebook tabs.
- Browser checks at 320 x 812, 375 x 812, 768 x 1024, and 1280 x 900 found no document, project-index, active-panel, or skill-list horizontal overflow. Navigation stayed within the viewport.
- Checked both new project tabs and the displayed `01 / 05` page count.
- All three current CV links point to the new filename. The new PDF endpoint returned HTTP 200 / application/pdf.
- SHA-256 of the served PDF and supplied source matched: `639F51FC720FD0E9C279DBD12BACB984BDB7BD34864328F8C868E0847C3949AB`.
- `git diff --check`: passed at the CV validation checkpoint. Changes are subsequently submitted for PR review; no public deployment is performed.
