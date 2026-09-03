# Chidiya Ghar — Implementation Plan & Design Rationale

## 1. Brief, restated

- **Product:** Chidiya Ghar — a small (7-room) boutique hotel.
- **Audience:** athletes (in-season/off-season), travelling families,
  and remote-working professionals — three very different guests who
  share one need: *real recovery*, not generic hospitality.
- **Feel:** elegant, classy, modern, heavily animated, "high-tech" on
  every scroll — but grounded in a bird/nest motif throughout.
- **Constraints:** React + Tailwind, easy to edit later, fully
  responsive (phone/tablet/desktop/any browser).

## 2. What I took from each reference (not copied wholesale)

Per your instruction, nothing is lifted 1:1 from a single source —
each reference contributed one idea, remixed into a single system:

| Reference | What was borrowed (as a principle, not literal markup) |
|---|---|
| `chidiya-ghar-24.vercel.app` (your earlier build) | Brand name, "Nesting Professionals" tagline, real-estate/lifestyle register, the athlete/family/professional audience split |
| `coreatelierpilates.com` | Editorial confidence: big serif display type doing the talking, generous whitespace, restrained color, a wellness/body-first tone in the copy |
| `squarespace.com` | Section rhythm — alternating light/dark full-bleed bands so the page has a visual heartbeat instead of one flat scroll; confident large CTAs |
| `hyperbit-astro.vercel.app` | The "high-tech" layer — a persistent scroll-tied element (their equivalent of a live progress/orbit indicator), fine hairline details, a sense that the interface itself is alive and tracking you |

The **one signature idea** unique to this build (per the design
skill's "spend your boldness in one place" principle) is the
**bird flight path**: a thin line fixed to the edge of the viewport
with a small bird gliding along it in real time as you scroll,
functioning simultaneously as a scroll-progress indicator and the
site's clearest expression of "bird" + "high-tech." Everything else
is intentionally quieter so this one moment reads as deliberate, not
buried among a dozen other tricks.

## 3. Design token system

**Color** (see `tailwind.config.js`):
- `ink #12201C` — near-black, moss-tinted (text, dark sections)
- `cream #F6F1E4` — warm eggshell (primary background)
- `parchment #EFE7D4` — a half-step darker cream, used to separate
  sections without a hard line
- `gold #B8863B` / `goldSoft #D8B876` — feather-gold accent, used
  *only* for interactive/attention elements (CTAs, active dots, the
  bird glyph) so it stays meaningful rather than decorative
- `moss #3E4A36`, `sky #7C9CAA`, `skyDeep #2C3E44` — supporting dusk/
  dawn tones for gradients and hover states

Deliberately **avoided**: warm-cream-plus-terracotta (#D97757-style)
as the accent, since that pairing has become an AI-generated-page
tell; gold was chosen instead as it reads as "feather," not "trend."

**Type:**
- **Fraunces** (serif, variable, soft optical sizing) for every
  headline and the logotype — it has enough personality (slightly
  humanist, slightly old-world) to feel "boutique hotel," not
  "SaaS landing page."
- **Manrope** (geometric sans) for body copy, labels, and UI — clean
  and legible at small sizes, clearly distinct from Fraunces so the
  two-typeface system reads as intentional.
- Fluid type scale via `clamp()` (`display-xl`, `display-lg`,
  `display-md` in `tailwind.config.js`) so headlines resize smoothly
  across breakpoints instead of jumping at fixed widths.

**Layout:**
- Alternating full-bleed bands: cream → ink (marquee) → cream →
  parchment → ink (facilities) → cream → parchment → ink (contact) →
  ink (footer). This is the Squarespace-style "rhythm" — every
  section boundary is also a mood change.
- Predominantly left-aligned, editorial text blocks (not centered),
  except the testimonial quote and section eyebrows, which are
  centered as isolated, quote-like moments.
- No numbered "01/02/03" markers anywhere — the room list, facility
  grid, and gallery are not sequences, so per the design skill's
  guidance, they use category tags (e.g. "For competition &
  off-season") instead of numbering.

## 4. Section-by-section: content, layout, and animation

### Hero
- **Layout:** full-bleed dusk photograph of the property, dark
  gradient overlay for legibility, content anchored bottom-left.
- **Typography:** eyebrow label → two-line serif headline at
  `display-xl` (clamps 3.2rem→8rem) → supporting paragraph → CTAs →
  a thin divider → live clock + stat.
- **Buttons:** primary = solid gold pill ("Reserve a nest"),
  secondary = ghost/outlined pill ("Take the flight path ↓") — both
  are `MagneticButton`s that nudge toward the cursor on hover
  (spring physics, not a linear tween, so it feels tactile).
- **Animation on load** (not scroll — this is the page's one
  orchestrated entrance moment):
  1. A full-screen ink curtain with a single feather/bird glyph
     rotating into place (0–1s).
  2. Curtain lifts upward (0.9s ease).
  3. Headline lines reveal via a masked slide-up (`overflow-hidden`
     wrapper + inner span translating from 100%→0%), staggered per
     line — not a simple fade.
  4. Sub-copy, CTAs, and the footer stat/clock fade up in sequence.
- **Continuous motion:** a six-bird flock crosses the hero
  horizontally on infinite loops, each bird at a different height,
  speed, delay, and scale so it reads as organic rather than looped
  wallpaper. Each bird's wings "flap" via a CSS `scaleY` keyframe.
- **The "live real something":** a genuine live clock (`Date`,
  updating every second, IST) labelled "Nest time," with a pulsing
  gold dot — a real-time element, not a static mock.

### Marquee strip (transition band)
- Dark full-bleed strip, infinite horizontal ticker of selling
  points (`Recovery-first rooms`, `Private training deck`, …),
  separated by a small line-art feather glyph instead of a bullet or
  middle-dot, so even the separator carries the theme.
- Pure CSS `@keyframes marquee` (translateX 0 → -50% on a doubled
  list) — GPU-cheap, no JS needed on scroll.

### Philosophy ("Why Chidiya Ghar")
- **Layout:** two-column split — image left, copy right on desktop;
  stacks on mobile.
- **Animation:** the image reveals via a **clip-path wipe**
  (`inset(0 100% 0 0)` → `inset(0 0 0 0)`) the first time it enters
  view — distinct from the "fade up" used elsewhere — and then
  parallaxes slightly (`useScroll` + `useTransform`) as the section
  scrolls past, so the photo drifts opposite to scroll direction.
- Copy and the three "Sleep architecture / Built-in movement / Room
  to actually land" points stagger in with a plain rise-and-fade,
  each on its own hairline-topped row (visual structure = the fact
  these are three distinct, parallel commitments, not a sequence).

### Nests (rooms)
- **Layout:** a horizontally draggable/scrollable track of 4 cards
  (Athlete's Roost, Family Aviary, Skyline Nest, The Perch) — chosen
  specifically because *this* content is not a ranked sequence, so a
  horizontal "shelf" (not a numbered list) is the honest layout.
- **Animation:** cards scale-and-fade in as they enter view; on
  hover, the photo scales up slightly and a description panel
  expands from the bottom via a `max-height` transition — the card
  "opens" rather than just highlighting.
- Draggable via Framer Motion's `drag="x"` for desktop trackpad/mouse
  users, with native `overflow-x-auto` + `snap-x` for touch, so it
  works identically well with a finger swipe on mobile.

### Facilities (rhythm-break, dark section)
- Full-bleed ink section — the page's second dark "breath" after the
  marquee, so the eye gets a rest from cream.
- **Animation — "flock landing":** the six facility icons don't fade
  in uniformly; alternating icons enter from the left/right with a
  slight rotation that settles to 0, like birds landing into
  formation. Icon containers use an asymmetric border-radius (sharp
  on two corners, rounded on two) to read as a wing/leaf shape rather
  than a generic rounded-square icon tile — a small but deliberate
  refusal of the "SaaS card kit" default.

### Testimonials
- Centered, isolated quote treatment — a large feather-shaped
  quotation mark, autoplaying crossfade every 6 seconds (not a
  sliding carousel, to keep it calm against an otherwise busy page),
  with manual pill-dot controls.

### Gallery ("Journal")
- Masonry-style grid (mixed row-spans) rather than a uniform grid, so
  it reads as a curated set of moments, not a stock template.
- Click-to-expand lightbox with a scale+fade transition.

### Contact / Reservation
- Final dark full-bleed section (mirrors the Facilities band for
  rhythm) with a real, working front-end form: name, email,
  arrival/departure dates, and a **guest-type selector** ("I'm an
  athlete" / "We're a family" / "I'm travelling for work") that
  directly reflects the three target audiences — this is the moment
  the whole site's audience segmentation becomes an actual UI
  element, not just copy.
- On submit, the form cross-fades into a confirmation state (no
  backend wired up yet — see README §7 for hooking up a real
  endpoint).

### Footer
- Quiet, static, information-dense — deliberately the one section
  with *no* scroll animation, so the page has a clear, calm landing
  point rather than motion all the way to the bottom.

## 5. The scroll-tied signature: `ScrollCompanion`

- **Desktop (`lg:` and up):** a thin dashed flight path is fixed to
  the right edge of the viewport for the entire page. A small bird
  glyph's position is computed every scroll tick from
  `scrollYProgress` (Framer Motion) mapped through
  `SVGPathElement.getPointAtLength()`, so the bird's exact position
  on the wavy path always corresponds to how far down the page you
  are — a literal "flight path" through the site.
- **Mobile/tablet:** the same wavy path would be visually cluttered
  at narrow widths, so it's replaced with a slim gold progress line
  across the very top of the screen — same information, appropriate
  density.

## 6. Accessibility & performance floor

- All interactive elements have visible focus rings (`:focus-visible`
  in `index.css`).
- `prefers-reduced-motion: reduce` collapses all animation/transition
  durations to near-zero globally — nothing here is required to
  understand or use the site.
- Images lazy-load and degrade gracefully via `ImageWithFallback`.
- Marquee and flock animations are pure CSS/transform-based (GPU
  compositable) rather than layout-thrashing JS loops.
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`, real
  `<button>`/`<label>`/`<input>` elements) throughout.

## 7. Responsive behavior summary

| Breakpoint | Key changes |
|---|---|
| `<640px` (phone) | Single-column everything; nav collapses to full-screen menu; Nests become a swipe shelf; gallery drops to 2 columns; flight-path bird replaced by top progress bar |
| `640–1024px` (tablet) | 2-column grids for facilities/gallery; hero type scales down via `clamp()` |
| `>1024px` (desktop) | Full multi-column layouts; flight-path bird visible; magnetic buttons at full throw distance |

## 8. Next steps / easy extensions

- Wire `ContactCTA`'s `handleSubmit` to a real endpoint (Formspree,
  a serverless function, or your CRM).
- Replace all Unsplash placeholder URLs in `src/data/content.js`
  with your own renders (see README §3).
- If you want per-room detail pages later, `nests` in `content.js`
  is already shaped as an array of objects with stable `id`s — ready
  to route to `/nests/:id` with React Router without restructuring
  data.
