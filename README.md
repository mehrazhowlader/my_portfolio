# Portfolio — Md. Mehraz Howlader

Personal portfolio site built with React (Vite) and plain CSS. No backend, no database,
no CMS — every piece of content lives in one file.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Editing content

All text, projects, skills, links and section copy live in
[`src/data/portfolio.js`](src/data/portfolio.js). Components only read from it — change
the data and the UI follows.

## Optional assets (both are placeholders right now)

- Hero photo — drop an image in `public/` and set `profile.photo` (currently `null`, so
  the hero shows an initials circle).
- `public/resume.pdf` — the file the "Download Résumé" button links to.

## Structure

```
src/
  data/portfolio.js      all site content
  styles/global.css      design tokens, base styles, shared card/button/section styles
  components/            one .jsx + matching .css per section
```
