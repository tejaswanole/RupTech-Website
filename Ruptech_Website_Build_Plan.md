# Ruptech Engineers Website — Stage-by-Stage Build Plan

Use this as a build prompt/checklist — follow the stages in order. Each stage lists what to build, in what order, and what "done" looks like before moving to the next stage.

**Stack:** Next.js (App Router) + Tailwind CSS, deployed on Vercel. No backend server, no database — Google Sheets (via Apps Script) for enquiry/RFQ storage, WhatsApp click-to-chat, serverless API routes only.

---

## STAGE 0 — Project Setup

1. Initialize project:
   ```
   npx create-next-app@latest ruptech-website
   ```
   Select: Tailwind CSS = Yes, App Router = Yes, `src/` directory = Yes (recommended), TypeScript = optional.
2. Folder structure:
   ```
   /app
     /about
     /manufacturing
     /products
       /panel-enclosures
       /sheet-metal-fabrication
       /cable-management
       /industrial-storage
       /custom-manufacturing
     /certifications
     /gallery
     /clients
     /quote          (RFQ page)
     /contact
     /api
       /contact
       /rfq
     layout.jsx
     page.jsx          (Home)
     not-found.jsx      (404)
   /components
     Navbar.jsx
     Footer.jsx
     Hero.jsx
     ProductCard.jsx
     SpecTable.jsx
     StatsBar.jsx
     WhatsAppButton.jsx
     CTAButton.jsx
     ClientLogoGrid.jsx
     TestimonialCard.jsx
   /lib
     productData.js     (catalogue data as JS objects/arrays)
     constants.js        (phone, email, addresses, etc.)
   /public
     /images
     favicon.ico
     logo.svg
   ```
3. Install packages:
   ```
   npm install lucide-react
   ```
4. Push to GitHub, connect repo (needed for Vercel later).
5. **Done when:** blank Next.js app runs locally (`npm run dev`), folder structure exists, repo is on GitHub.

---

## STAGE 1 — Design System (Tailwind Config + Global Styles)

1. In `tailwind.config.js`, define the brand palette as custom colors:
   - `teal`: `#0E7C6B` (primary)
   - `navy`: `#1D4E89` (secondary)
   - `ink`: `#1A1A1A` (headings/accent)
   - `bodytext`: `#4A4A4A`
   - `surface`: `#F5F7F7` (alt section background)
2. Set heading and body font families (match whatever the Stitch mockup used, or pick a strong industrial sans-serif pairing — e.g. a bold condensed font for headings, a clean neutral sans for body).
3. Define reusable spacing/section padding conventions so every page feels consistent (e.g. `py-20` for section vertical padding, `max-w-7xl mx-auto px-4` for content width).
4. Create `lib/constants.js` with all confirmed business data:
   ```js
   export const BUSINESS = {
     name: "Ruptech Engineers Pvt. Ltd.",
     tagline: "Complete Sheet Metal Product Solutions",
     email: "ruptechengineers@gmail.com",
     addresses: [
       { label: "Work 1 / Office", line: "Plot No. L-237, MIDC, Ahmednagar" },
       { label: "Work 2", line: "Plot No. L-248, MIDC, Ahmednagar, PIN-414111, Maharashtra" },
     ],
     phone: "", // confirm which number to display publicly
     whatsapp: "", // confirm WhatsApp number
     gst: "", // pending from client
     established: 2019,
   };
   ```
5. **Done when:** color/typography tokens are usable via Tailwind classes (e.g. `bg-teal`, `text-navy`), constants file has all confirmed data.

---

## STAGE 2 — Global Components

Build in this order, since later pages depend on these:

1. **Navbar.jsx** — sticky, logo, nav links, phone (`tel:`) + WhatsApp icon, mobile hamburger menu.
2. **Footer.jsx** — logo, both addresses, email, GST placeholder, quick links, social icons if applicable.
3. **WhatsAppButton.jsx** — floating button, sitewide, `wa.me` link with pre-filled message; accepts a `message` prop so product pages can customize it.
4. **CTAButton.jsx** — reusable primary/secondary button component (teal filled / outlined).
5. **ProductCard.jsx** — reusable card for category grids (image, title, one-line description, link).
6. **StatsBar.jsx** — reusable stat strip (used on Home and About).
7. **SpecTable.jsx** — reusable table component for product spec data (Code / Description / Size columns), takes an array of rows as a prop so it can be reused across all product category pages.
8. **ClientLogoGrid.jsx** — reusable logo grid (used on Home and the Clients page, different sizes via a prop).
9. **TestimonialCard.jsx** — reusable testimonial card (quote, name, company, role).
10. Wire Navbar + Footer + WhatsAppButton into `app/layout.jsx` so they render on every page.
11. **Done when:** every component renders with placeholder/sample data, is responsive, and matches the Stitch mockup's look.

---

## STAGE 3 — Static Content Pages

Build in this order (simplest/most template-reliant first):

1. **Home (`app/page.jsx`)** — Hero, StatsBar, Why Choose Us grid, Product category overview (5 ProductCards), Our Clients section (ClientLogoGrid + link to Clients page), CTA banner.
2. **About (`app/about/page.jsx`)** — company story text (use the real extracted copy), key facts strip, expanded Why Choose Us, smaller ClientLogoGrid.
3. **Manufacturing (`app/manufacturing/page.jsx`)** — infrastructure text, machine gallery grid (real machine names + placeholder photos), process strip (Design → Cutting → Bending → Welding → Finishing → QC → Dispatch).
4. **404 (`app/not-found.jsx`)** — centered branded error page.
5. **Done when:** these 4 pages are fully built, responsive, and use real content (not lorem ipsum) wherever it was confirmed earlier.

---

## STAGE 4 — Product Data Layer + Product Pages

1. First, build out `lib/productData.js` — structure the full catalogue as data, not hardcoded JSX, so pages stay clean:
   ```js
   export const panelEnclosures = {
     distributionBox: [
       { code: "RUP-DBS-01", description: "M.S. Distribution Box", size: "800H x 600W x 250D" },
       { code: "RUP-DBL-03", description: "M.S. Distribution Box", size: "800H x 1000W x 250D" },
       // ...rest of the real catalogue rows
     ],
     mccbBox: [ /* ... */ ],
     meterBox: [ /* ... */ ],
     evChargerBox: [ /* ... */ ],
     agricultureBox: [ /* ... */ ],
     panelBox: [ /* ... */ ],
   };
   export const cableTrays = [ /* 14 real sizes */ ];
   export const storageRacks = [ /* rack types with size + load capacity */ ];
   ```
   Populate this fully using the catalogue data already extracted — don't leave it as a stub, this is the backbone of the product pages.
2. **Products index (`app/products/page.jsx`)** — category grid (5 ProductCards) + catalogue PDF download CTA.
3. **Panel Enclosures & Boxes page** — tabs/accordion per sub-category, SpecTable per sub-category fed from `productData.js`, product photo strip.
4. **Sheet Metal Fabrication page** — services list (Laser Cutting, CNC Shearing, etc.), surface finishing sub-section.
5. **Cable Management page** — SpecTable using `cableTrays` data, accessories note.
6. **Industrial Storage page** — rack cards with size + load capacity (flag "to be confirmed" values clearly if not yet provided).
7. **Custom Manufacturing page** — capability list + the 8-step OEM/ODM timeline (Share Drawing → Feasibility → Quote → Prototype → Batch Production → Finishing → QC → Dispatch), CTA to RFQ page.
8. **Done when:** all 5 category pages render real spec data from `productData.js`, no page has placeholder Lorem text, and every page links correctly from the Products index.

---

## STAGE 5 — Certifications, Gallery, Clients & Testimonials

1. **Certifications page** — flexible card grid (image + name + issuing body + validity), designed to work with 2-6 cards; use placeholder cards until client sends actual certificate images.
2. **Gallery page** — photo grid/masonry layout, placeholder images for now, optional filter tabs (All / Panels / Enclosures / Cable Trays / Storage / Factory).
3. **Our Clients & Testimonials page** — full ClientLogoGrid, 2-3 TestimonialCards (placeholder quotes marked clearly), optional case study cards.
4. **Done when:** all 3 pages exist and are linked in the Navbar/Footer, layouts match the Stitch mockup.

---

## STAGE 6 — Contact, RFQ Form & Google Sheets Integration

This is the most technically involved stage — break it into sub-steps:

1. **Create the Google Sheet** with columns matching your enquiry data: Name, Phone, Email, Product Interest, Message, Date (for Contact) — and a second sheet/tab for RFQ: Name, Company, Phone, Email, Category, Quantity, Specs, Drawing Link, Date.
2. **Write the Google Apps Script webhook** — deployed as a Web App, that:
   - Accepts a POST request
   - Validates a shared secret token (security requirement)
   - Appends a new row to the appropriate sheet/tab
3. **Contact page (`app/contact/page.jsx`)** — form (Name, Phone, Email, Product Interest, Message), Google Maps embed, both addresses, WhatsApp button, click-to-call.
4. **Contact API route (`app/api/contact/route.js`)** — receives form POST, validates fields server-side, forwards to the Apps Script webhook with the secret token attached.
5. **RFQ page (`app/quote/page.jsx`)** — the more detailed form (Name, Company, Phone, Email, Category dropdown, Quantity, Specs textarea, File Upload).
6. **File upload handling for RFQ drawings** — decide and implement one of:
   - Option A: Use a form service with built-in file upload support
   - Option B: Upload file to Google Drive via an extended Apps Script endpoint, store the resulting Drive link in the Sheet row
   (Pick one before starting this step — Option B keeps everything in the Google ecosystem you're already using, so it's the more consistent choice.)
7. **RFQ API route (`app/api/rfq/route.js`)** — handles form + file, forwards to Drive/Sheets.
8. **Form UX polish:** loading state on submit buttons (disable while submitting), on-screen success confirmation, inline validation errors.
9. **Done when:** submitting the Contact form creates a row in the Sheet; submitting the RFQ form creates a row + successfully stores the uploaded drawing; both show a success message and can't be double-submitted.

---

## STAGE 7 — WhatsApp Integration (Sitewide)

1. Confirm the WhatsApp number goes into `constants.js`.
2. Floating `WhatsAppButton` already built in Stage 2 — verify it's active on every page via the layout.
3. Add product-specific WhatsApp CTAs on each product category page, pre-filled with that category's name in the message.
4. **Done when:** every WhatsApp link opens the correct number with an appropriate pre-filled message.

---

## STAGE 8 — Security Hardening

1. **Contact & RFQ forms:**
   - Add a honeypot field (hidden input, reject submission if filled)
   - Add basic rate limiting per IP (in the API route)
   - Add server-side validation of all fields (don't trust client-side checks alone)
   - Add reCAPTCHA v3 (invisible) to both forms
2. **Apps Script webhook:** verify the shared secret token on every incoming request before writing to the Sheet.
3. **Environment variables:** move all secrets (reCAPTCHA secret key, Apps Script token, any API keys) into `.env.local`, never expose them with `NEXT_PUBLIC_` prefix unless genuinely public.
4. **Security headers:** add CSP, X-Frame-Options, X-Content-Type-Options in `next.config.js`.
5. **Done when:** submitting spam-like/bot patterns to the forms is blocked or throttled, and no secret keys appear in client-side bundle (check via browser dev tools / view-source).

---

## STAGE 9 — SEO & Performance

1. Add unique meta title + description per page (Next.js `metadata` export in each page file).
2. Generate `sitemap.xml` and `robots.txt`.
3. Add Organization/LocalBusiness JSON-LD schema markup to the homepage (using confirmed business data).
4. Add descriptive alt text to every image.
5. Convert all images to WebP, enable lazy loading via `next/image` for below-the-fold images.
6. Add favicon and Open Graph share image.
7. Run a Lighthouse audit — target 85+ on both mobile and desktop performance scores; fix flagged issues (image sizing, unused CSS, etc.).
8. **Done when:** Lighthouse scores meet target, sitemap/robots are in place, every page has unique meta tags.

---

## STAGE 10 — Responsive & Cross-Browser QA

1. Test every page at mobile (<768px), tablet (768–1024px), and desktop (>1024px) breakpoints.
2. Test the mobile hamburger nav, sticky header behavior, and touch target sizes (minimum 44x44px).
3. Test in Chrome, Safari, Firefox, and Edge.
4. Full click-through of every internal link, every CTA, every form.
5. **Done when:** no layout breaks at any breakpoint, all links/forms work in all 4 browsers.

---

## STAGE 11 — Deployment

1. Connect the GitHub repo to Vercel, deploy to a temporary `*.vercel.app` URL.
2. Full QA pass on the deployed (not local) version — repeat Stage 10's checks against the live URL.
3. Once the domain is confirmed and ready: add the domain in Vercel → Project Settings → Domains, then add the A/CNAME record Vercel provides at the registrar's DNS panel.
4. Confirm HTTPS/SSL is active after DNS propagates.
5. **Done when:** the site is live on the final domain, HTTPS is active, and the deployed version passes the same QA as local.

---

## STAGE 12 — Post-Launch Setup

1. Set up Google Search Console — verify domain, submit sitemap.
2. Create/claim Google Business Profile with matching Name, Address, Phone (NAP) across footer, GBP, and any directory listings.
3. Set up Google Analytics (optional but recommended).
4. Walk the client through the Google Sheet — how to view/filter/export enquiries and RFQs as Excel.
5. Document how to update the WhatsApp number, phone number, or GST number if they ever change (should just be editing `lib/constants.js` and redeploying).
6. **Done when:** Search Console shows the site as indexed, GBP listing is live, client has been walked through the Sheet.

---

## Quick Reference — What's Still Pending From the Client (blocks certain stages)

- Public phone number(s) to display → blocks finishing Stage 1/2 fully
- WhatsApp number → blocks Stage 7
- GST number → blocks Stage 1/6/9 (footer, contact, schema markup)
- Certificate images → blocks Stage 5 (Certifications page)
- Real testimonials/case studies → blocks Stage 5 (Clients page)
- Rack load capacities → blocks Stage 4 (Industrial Storage spec table)
- Final product/factory photography → blocks Stage 4/5 image swaps
- Domain purchase/registrar access → blocks Stage 11
