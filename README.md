# Kuber Pathak — Portfolio (Next.js + Tailwind)

A personal portfolio site, built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

The bespoke design system (colors, typography, animations, hover effects) lives in
`app/globals.css`. Tailwind is configured and ready to use for any new utility-class work —
this is a deliberate **hybrid** setup so the original design renders pixel-for-pixel while you
still get the full Tailwind toolchain. (Tailwind's Preflight reset is disabled in
`tailwind.config.ts` because the CSS ships its own reset.)

---

## Getting started

You need **Node.js 18.17+** (Node 20 LTS recommended).

```bash
# 1. install dependencies
npm install

# 2. run the dev server
npm run dev
```

Open **http://localhost:3000**.

```bash
# production build + run
npm run build
npm start
```

---

## Project structure

```
portfolio-next/
├── app/
│   ├── globals.css        # Tailwind layers + the full bespoke design system
│   ├── layout.tsx         # <html>, metadata, Google Fonts
│   └── page.tsx           # composes all sections
├── components/            # one file per section (all client components)
│   ├── Nav.tsx  Hero.tsx  About.tsx  Skills.tsx  Services.tsx
│   ├── Projects.tsx  Resume.tsx  Involvement.tsx  Stats.tsx
│   ├── Why.tsx  Marquee.tsx  CTAStrip.tsx  Contact.tsx  Footer.tsx
│   ├── CursorFX.tsx        # custom cursor (auto-disabled on touch via CSS)
│   └── ScrollProgress.tsx  # top scroll-progress bar
├── lib/
│   ├── hooks.ts           # useInView, useCountUp, useActiveSection, useTheme
│   ├── Reveal.tsx         # scroll-reveal wrapper
│   └── icons.tsx          # inline SVG icon set
├── public/                # photo.jpg, project images, CV PDF
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## Things you'll likely want to edit

| What | Where |
|------|-------|
| Project list, roles, GitHub links | `components/Projects.tsx` (the `PROJECTS` array) |
| **GitHub URLs** (currently the placeholder `github.com/Kuber-Pathak`) | search the repo for `Kuber-Pathak` and replace with the real repo/profile URLs |
| Skills & percentages | `components/Skills.tsx` |
| Services / expertise cards | `components/Services.tsx` |
| Community involvement | `components/Involvement.tsx` |
| Education & certifications | `components/Resume.tsx` |
| Contact details | `components/Contact.tsx` + `components/Footer.tsx` |
| Colors / fonts / spacing tokens | `app/globals.css` (`:root` at the top) |
| Replace the CV | drop a new file at `public/Kuber-Pathak-CV.pdf` |

> **Note on the contact form:** it validates and shows a success state on the client but does
> not yet send anywhere. To make it actually deliver mail, wire the submit handler in
> `components/Contact.tsx` to a service (e.g. Formspree, Resend, or a Next.js route handler).

---

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset auto-detects **Next.js** — no config needed. Click **Deploy**.

That's it. Vercel builds and hosts it; every push redeploys.

---

## A couple of notes

- `next.config.mjs` currently has `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors`
  set to `true` so a stray lint/type nit never blocks a build. Once you've run the project and
  are happy, flip them back to `false` for stricter checks.
- Images use `next/image` for automatic optimization. The two portrait photos use `fill`; the
  project screenshots use intrinsic width/height.
- Theme (dark/light) preference is saved to `localStorage` under the key `kp-theme`.
