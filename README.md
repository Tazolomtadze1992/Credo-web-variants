# Credo website variants

A single Next.js app for presenting two Credo Bank website designs. Use the floating **Variant 1 / Variant 2** switcher to compare them.

- **Variant 1:** the existing homepage, including its interactive product artwork.
- **Variant 2:** the other designer's Figma homepage, with its original layouts, Georgian copy and assets.
- Both variants use the shared navigation and news components.
- Variant 2 also includes the loans page at `/loans`.

## Run locally

```sh
npm ci
npm run dev -- --hostname 127.0.0.1 --port 3011
```

Open [localhost:3011](http://localhost:3011/).

```sh
npm run build
npm start
```

The production server uses the default Next.js port unless a port is supplied.

## Compare designs

- `/?v=1` opens Variant 1.
- `/?v=2` opens Variant 2.
- `/loans` opens Variant 2's loans page. It is also available through **სამომხმარებლო → სესხი**.
- The switcher remembers the selection across reloads and navigation.
- Keys **1** and **2**, or the arrow keys, switch designs. **R** restarts the preview's animations. Inputs and existing interactive controls retain their own keyboard behavior.
- Switching from the loans page to Variant 1 opens its homepage, because Variant 1 has no separate loans listing.
- The Dayavi page and its current illustration studies are at `/prototypes/dayavi`.

## Project structure

- `components/OurWebsite.jsx` — Variant 1 homepage.
- `components/figma-website/` — Variant 2 homepage and loans page.
- `components/design-comparison/` — shared comparison switcher.
- `components/SiteHeader.jsx` and `components/NewsSection.jsx` — shared navigation and news.
- `public/assets/` and `public/figma/` — local artwork and assets.

The site uses Next.js, React, native CSS, Motion and Three.js. Calculators are illustrative previews; application actions link to Credo's public product pages.
