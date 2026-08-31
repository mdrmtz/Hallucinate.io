# Hallucinate.io

This is a deliberately-seeded accessibility test fixture. It is a fictional generative-AI SaaS marketing site whose pages contain the following intentional violations.

| Page | Exact violation(s) |
| --- | --- |
| **Home** (`/`) | CLEAN. Hero + nav + footer. Correct heading order, meaningful alt text on any images, all interactive elements keyboard-operable, sufficient contrast. |
| **Status** (`/status`) | CLEAN. Mock "all systems operational" list, same standard as Home. |
| **Product** (`/product`) | Seed **Low Color Contrast** (axe-core `color-contrast`, WCAG 1.4.3). At least one paragraph block in `#999999` text on `#FFFFFF` background (~2.85:1 ratio, fails the 4.5:1 AA minimum). |
| **Case Studies** (`/case-studies`) | Seed **Missing Alt Text** (axe-core `image-alt`, WCAG 1.1.1). At least 3 `<img>` screenshots with the `alt` attribute omitted entirely (not `alt=""` — genuinely absent). |
| **Docs / Playground** (`/docs`) | Seed **Keyboard Inaccessibility** (WCAG 2.1.1). A custom "select a language" dropdown built from a `<div>` with only a `click` handler — no `tabindex`, no `role`, no `keydown` handler, not a native `<select>`/`<button>` — so it can't be reached or operated by keyboard alone. |
| **Careers** (`/careers`) | Seed **Unlabeled Form Fields** (axe-core `label`, WCAG 1.3.1/4.1.2). A job application form with 3+ `<input>` fields (name, email, role) with no `<label>`, `aria-label`, or `aria-labelledby` — placeholder text only. |
| **Changelog / Blog** (`/blog`) | Seed **Empty Links or Buttons** (axe-core `link-name`/`button-name`, WCAG 4.1.2). Icon-only "share" and "read more" controls — an `<a>`/`<button>` wrapping only an SVG/icon glyph, no visually-hidden text, no `aria-label`. |
| **Pricing** (`/pricing`) | Seed **Missing Heading Structure** (axe-core `heading-order`, WCAG 1.3.1). Tier cards jump from `<h1>` straight to `<h4>` (skipping h2/h3), or the page has multiple `<h1>`s. |
| **About** (`/about`) | Seed **two** violations: Missing Alt Text (team headshots, no `alt`) AND Missing Heading Structure (bios skip levels the same way as Pricing). |
| **Contact** (`/contact`) | Seed **three** violations: Unlabeled Form Fields (contact form), Low Color Contrast (footer text, same `#999999`/`#FFFFFF`), and Empty Links (social icon links with no accessible name). |

The site-wide fixture intentionally removes the `lang` attribute from the `<html>` tag in `src/index.html` (`html-has-lang`, WCAG 3.1.1).

## Development

```bash
npm install
npm test
npm run build
```
