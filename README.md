# Chidiya Ghar — Nesting Professionals

A fully animated, bird-themed marketing site for a small boutique
hotel aimed at athletes, travelling families, and professionals who
need real rest. Built with **React + Vite + Tailwind CSS + Framer
Motion**.

Live sections: Hero → Marquee → Philosophy → Nests (rooms) →
Facilities → Testimonials → Gallery → Contact → Footer.

---

## 1. Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # production build → /dist
npm run preview     # preview the production build locally
```

Requires Node 18+.

## 2. Project structure

```
src/
  data/content.js          ← ALL copy, room names, prices, testimonials,
                              image URLs. Edit this file for 90% of
                              content changes — no JSX required.
  components/
    Navbar.jsx              Glass-on-scroll nav + full-screen mobile menu
    Hero.jsx                Full-bleed hero, animated flock, live clock
    MarqueeStrip.jsx        Infinite ticker of selling points
    Philosophy.jsx          Story section, parallax image, wipe reveal
    Nests.jsx                Drag-scroll room/"nest" gallery
    Facilities.jsx          Dark section, icon grid, "flock landing" stagger
    Testimonials.jsx        Autoplay crossfade quote carousel
    Gallery.jsx             Masonry photo grid + lightbox
    ContactCTA.jsx          Reservation form
    Footer.jsx
    common/
      Reveal.jsx             Reusable scroll-reveal wrapper (5 styles)
      MagneticButton.jsx     Cursor-following CTA button
      ScrollCompanion.jsx    Bird-on-a-flight-path scroll indicator (desktop)
                             + slim gold progress line (mobile)
      ImageWithFallback.jsx  Swaps broken image URLs for a graceful placeholder
  App.jsx                   Assembles the page + one-time load curtain
  index.css                 Design tokens support, base styles, a11y
tailwind.config.js          Color palette, type scale, custom keyframes
```

**To change any text, price, room name, testimonial, or image** — edit
`src/data/content.js` only. Components read from it; you should not
need to touch component files for copy changes.

## 3. Swapping in your own images

`src/data/content.js` currently points at Unsplash placeholder photos
so the site works out of the box. Replace each `image` / `src` value
with your own files:

1. Drop your photos into `src/assets/` (create the folder).
2. Import them at the top of `content.js`, e.g.
   `import roostImg from '../assets/roost.jpg'`
3. Use the imported variable in place of the Unsplash URL.

Every image goes through `ImageWithFallback`, so a missing/broken path
degrades to a soft gradient placeholder instead of a broken-image icon
— nothing will visually break while you swap assets in.

## 4. Design system (tailwind.config.js)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#12201C` | Primary text, dark section backgrounds |
| `cream` | `#F6F1E4` | Primary light background |
| `parchment` | `#EFE7D4` | Secondary light background (section rhythm) |
| `gold` | `#B8863B` | Primary accent — CTAs, active states |
| `goldSoft` | `#D8B876` | Hover/lighter accent |
| `moss` | `#3E4A36` | Secondary dark |
| `sky` / `skyDeep` | `#7C9CAA` / `#2C3E44` | Cool accents, hero overlay |

Typefaces: **Fraunces** (display/serif — headlines, the bird logotype)
and **Manrope** (body/UI — everything else). Both load from Google
Fonts in `index.html`.

Change any of these in `tailwind.config.js` under `theme.extend.colors`
/ `fontFamily` and the whole site updates.

## 5. Responsiveness

Every section is built mobile-first with Tailwind breakpoints
(`sm`, `lg`). Specifically:
- Navbar collapses to a full-screen animated menu under `md`.
- The bird flight-path scroll indicator only renders `lg:` and up;
  phones/tablets get a slim top progress bar instead.
- The Nests gallery becomes a swipe/drag horizontal scroller on
  small screens instead of a grid.
- Type scale uses `clamp()` so headlines fluidly resize between
  phone and ultra-wide without separate breakpoints.
- `prefers-reduced-motion` is respected globally (see `index.css`)
  — animations collapse to near-instant for users who've asked for
  reduced motion at the OS level.

Test at minimum: 375px (phone), 768px (tablet), 1440px (desktop).

## 6. Where each animation lives

See `IMPLEMENTATION_PLAN.md` for the full section-by-section
animation spec and the reasoning behind each choice.

## 7. Deploying

Static build — deploy `/dist` after `npm run build` to Vercel,
Netlify, or any static host. No server/backend required (the
contact form currently only shows a local "sent" confirmation state;
wire it to Formspree, a serverless function, or your CRM of choice
inside `ContactCTA.jsx`'s `handleSubmit`).







