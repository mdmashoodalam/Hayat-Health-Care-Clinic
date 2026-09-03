# Hayat Health Care Clinic

A complete static React website for Hayat Health Care Clinic, Pupri, Bihar. Includes eight pages, a branded 404, doctor profiles, searchable services, clinic facilities, WhatsApp appointment/contact requests, a keyboard-accessible gallery, FAQs, map search, and the required developer attribution.

## Stack

React 19, Vite, JavaScript, React Router DOM, Tailwind CSS 4, Lucide React, Framer Motion, and Google Fonts (Inter, Manrope, Noto Sans Devanagari). No backend, database, paid API, or analytics.

## Run locally

Requires Node.js 20.19+ or a current supported release.

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

The deployable files are in `dist/`. The build generates unique route titles/descriptions, canonical URLs, Open Graph/Twitter metadata, a sitemap, robots.txt, and MedicalClinic JSON-LD. Set `VITE_SITE_URL` in `.env` or your hosting environment to your final public origin before building. `.env.example` contains the initial Sites origin; no credentials are required.

```sh
npm test
```

Tests cover request validation, Indian time/date checks, optional fields, contact validation, and encoded WhatsApp messages. These tests do not send messages.

## Routes

`/`, `/about`, `/doctors`, `/services`, `/facilities`, `/appointment`, `/contact`, `/privacy-policy`. Unknown routes show the clinic’s 404 page.

## Deploy

### Netlify

Import the repository. Build command: `npm run build`; publish directory: `dist`. `netlify.toml` and `public/_redirects` configure the static build and React Router fallback. Set `VITE_SITE_URL` to the final domain.

### Vercel

Import as a Vite project. Build with `npm run build`, output `dist`. The included `vercel.json` provides the SPA fallback. Set `VITE_SITE_URL` before building.

### Hostinger

Run `npm run build`. Upload **the contents of `dist/`** to `public_html/`, including `.htaccess`. On Apache/LiteSpeed, the included rewrite rules allow refreshing React Router routes. For another server, configure a fallback to `/index.html` for paths that are not real files/directories.

### Cloudflare Pages

Use `npm run build` and output directory `dist`. The included `_redirects` handles SPA routes. No functions or API bindings are needed.

### GitHub Pages

For a repository site, set `VITE_BASE_PATH=/repository-name/` and `VITE_SITE_URL=https://your-account.github.io` before building. Publish `dist/` with GitHub Actions. The build emits HTML for each known route plus `404.html`. BrowserRouter uses the configured base path. Direct unknown routes return GitHub Pages’ 404 status while rendering the custom page. Root-domain Pages deployments can retain `/`.

## Content and behavior

- Clinic contact details are in `src/data/clinic.js`; doctor, service and FAQ lists are in neighboring data files.
- Source posters are preserved in `src/assets/clinic/`. Dr. Rizwan’s supplied portrait is displayed with CSS cropping; other doctors have generic profile icons, not invented photographs.
- Dental/oral care and skin/dermatology come from the written brief, not a legible poster listing, so the site explicitly asks visitors to confirm availability.
- No invented patient counts, ratings, testimonials, accreditations, outcomes, doctor qualifications, coordinates or operating schedules.
- Emergency availability is taken from the supplied clinic banner. Consultation times always require confirmation.
- Appointment and contact forms only prepare a WhatsApp message. The visitor must send it, and the clinic must confirm an appointment. Entries are not persisted locally or sent to a website backend.
- Google Maps is an address search, not a claim of verified business coordinates.
- A progressively enhanced `prepare_appointment_request` WebMCP tool, when supported, only selects a visible service/doctor; it cannot send or confirm a booking.
- The footer retains the exact linked credit: **Designed & Developed by Md Mashood Alam**, linking to https://mdmashoodalam.netlify.app/ in a new tab.

## Accessibility and performance

Semantic landmarks, one H1 per page, skip link, visible focus states, named controls, form errors linked to fields, keyboard navigation, native dialog focus management, Escape and arrow-key gallery controls, and reduced-motion support. Secondary routes are lazy-loaded; gallery/map assets load lazily. Production Lighthouse scores depend on hosting, fonts, network and third-party map behavior; numerical scores should be measured on the deployed site rather than assumed.
