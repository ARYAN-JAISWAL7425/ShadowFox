# Aryan Jaiswal — Portfolio

A premium, animated portfolio for a full-stack developer. Bold editorial design
(bone + ink + vermillion) with Active-Theory / Locomotive-style motion: smooth
scrolling, masked text reveals, magnetic buttons, a custom cursor, hover-tilt
project cards and a page-load intro.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS** for styling (design tokens in `tailwind.config.ts`)
- **Framer Motion** for animation
- **Lenis** for smooth scrolling
- Fonts: **Syne** (display), **DM Sans** (body), **Space Mono** (labels)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000  (uses Turbopack)
```

```bash
npm run build    # production build
npm start        # serve the production build
```

> Note: `dev` uses Turbopack (`next dev --turbopack`) — it's faster and avoids a
> webpack HMR quirk that can occur when the project lives inside a OneDrive
> folder. `build` uses the standard compiler and is fully Vercel-ready.

## Editing content — start here

**Almost everything is in one file: [`lib/content.ts`](lib/content.ts).**
Name, role, email, location, tagline, social links, projects, services, skills,
experience, stats, certifications and values all live there. Update that file and
the whole site updates.

A few specifics:

- **Your photo:** replace `public/profile.png` (keep the filename). A square-ish
  image works best — it's shown in a circular frame.
- **Domain / SEO:** set `site.url` in `lib/content.ts` to your real domain so
  Open Graph tags, the sitemap and robots.txt point to the right place.
- **Contact form:** it currently opens the visitor's mail client (no backend).
  To send through a service, replace the submit handler in
  [`components/home/Contact.tsx`](components/home/Contact.tsx) with a `POST` to an
  API route or form service (Resend, Formspree, etc.).

## Project structure

```
app/                 Routes (home + 6 pages), layout, SEO (sitemap/robots/og/icon)
components/
  home/              Home page sections (Hero, Work, About, Contact, …)
  layout/            Nav, Footer
  ui/                Reusable bits: Reveal, MaskText, Magnetic, CountUp, Portrait…
  providers/         SmoothScroll (Lenis)
  cursor/, intro/    Custom cursor + page-load intro
lib/
  content.ts         ← all site content
  utils.ts           cn() class helper
public/profile.png   Your headshot
```

## Accessibility & performance

- Respects `prefers-reduced-motion` (intro, smooth scroll and animations back off).
- Custom cursor only on fine-pointer devices; native cursor on touch.
- Semantic headings, labelled form fields, alt text on the portrait.
- All pages are statically prerendered.

## Deploy

Push to a Git repo and import on **Vercel** (zero config). Set your production
domain, then update `site.url` in `lib/content.ts`.
