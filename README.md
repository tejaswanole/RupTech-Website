# RupTech Website

Corporate website for **Ruptech Engineers Pvt. Ltd.**, a sheet metal manufacturer in MIDC Ahmednagar, Maharashtra. The site presents the product range (panel enclosures, cable trays, storage racks, custom fabrication) and collects enquiries and quote requests.

## Repository layout

| Path | Contents |
|---|---|
| `ruptech-website/` | The Next.js website (source code) |
| `Ruptech/All Product/` | Original product photos from the client |
| `stitch_ruptech_digital_infrastructure_plan/` | Page design mockups and the design system (`DESIGN.md`) |
| `SRS_Ruptech_Engineers_Website.md` | Software requirements specification |
| `Ruptech_Website_Build_Plan.md` | Stage-by-stage build plan |
| `*.pdf` | Company profile and product catalogues |

## Tech stack

- Next.js 16 (App Router) and React 19
- Tailwind CSS v4
- Google Sheets through an Apps Script webhook for contact and RFQ submissions
- Hosting target: Vercel

## Running locally

```bash
cd ruptech-website
npm install
npm run dev        # development server at http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Configuration

Business details live in `ruptech-website/src/lib/constants.js`. The public phone number, WhatsApp number and GSTIN are empty until the client confirms them. Call and WhatsApp buttons stay hidden while those fields are empty.

Environment variables, set in `ruptech-website/.env.local` or in Vercel:

| Variable | Purpose |
|---|---|
| `CONTACT_APPS_SCRIPT_URL` | Apps Script web app URL for the contact form |
| `RFQ_APPS_SCRIPT_URL` | Apps Script web app URL for the RFQ form |
| `APPS_SCRIPT_SECRET` | Shared secret checked by the Apps Script |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (defaults to `https://www.ruptechengineers.com`) |

The forms return an error to the visitor when these are not set, so no enquiry is silently lost.

## Product images

Put new photos under `ruptech-website/public/images/products/<category>/` and run `python optimize_images.py` from `ruptech-website/`. The script converts them to WebP and removes the originals.
