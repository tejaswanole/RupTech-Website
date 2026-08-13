# Software Requirements Specification (SRS)
## Ruptech Engineers Pvt. Ltd. — Corporate Website

---

| Field | Details |
|---|---|
| **Document Title** | Software Requirements Specification — Ruptech Engineers Website |
| **Document Version** | 1.0 |
| **Prepared By** | RupTech Digital Team |
| **Organization** | Ruptech Engineers Pvt. Ltd. |
| **Date** | August 12, 2026 |
| **Status** | Released |

---

## Table of Contents

1. [Introduction](#1-introduction)
2. [Overall Description](#2-overall-description)
3. [System Architecture](#3-system-architecture)
4. [Functional Requirements](#4-functional-requirements)
5. [Non-Functional Requirements](#5-non-functional-requirements)
6. [User Interface Requirements](#6-user-interface-requirements)
7. [Data Requirements](#7-data-requirements)
8. [Integration & External Services](#8-integration--external-services)
9. [Security Requirements](#9-security-requirements)
10. [SEO & Performance Requirements](#10-seo--performance-requirements)
11. [Deployment Requirements](#11-deployment-requirements)
12. [Constraints & Assumptions](#12-constraints--assumptions)
13. [Appendix A — Page Inventory](#appendix-a--page-inventory)
14. [Appendix B — Component Inventory](#appendix-b--component-inventory)
15. [Appendix C — Product Catalogue Summary](#appendix-c--product-catalogue-summary)

---

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) document describes the requirements for the official corporate website of **Ruptech Engineers Pvt. Ltd.** It serves as the authoritative reference for the system as built, documenting functional scope, technical architecture, integrations, and non-functional requirements.

### 1.2 Scope

The Ruptech Engineers website is a **multi-page corporate web application** built to:
- Showcase the company's products and manufacturing capabilities to industrial buyers and procurement teams across India.
- Enable prospective clients to submit **Contact Enquiries** and **Request for Quotation (RFQ)** forms.
- Present the company's certifications, client roster, gallery, and manufacturing infrastructure.
- Drive inbound business leads via SEO-optimized content, WhatsApp click-to-chat, and click-to-call.

The system is a **serverless, statically-generated / server-rendered web application** with no proprietary backend database. All lead data is persisted to **Google Sheets** via **Google Apps Script**.

### 1.3 Definitions and Acronyms

| Term | Definition |
|---|---|
| **RFQ** | Request for Quotation |
| **MIDC** | Maharashtra Industrial Development Corporation |
| **DFM** | Design for Manufacturability |
| **OEM/ODM** | Original Equipment Manufacturer / Original Design Manufacturer |
| **CNC** | Computer Numerical Control |
| **MIG/TIG** | Metal Inert Gas / Tungsten Inert Gas (welding processes) |
| **M.S.** | Mild Steel |
| **S.S.** | Stainless Steel |
| **GST** | Goods and Services Tax (India) |
| **SSR** | Server-Side Rendering |
| **SG** | Static Generation |
| **API Route** | Next.js serverless function endpoint |

### 1.4 Company Profile

| Field | Value |
|---|---|
| **Company Name** | Ruptech Engineers Pvt. Ltd. |
| **Short Name** | Ruptech Engineers |
| **Tagline** | Complete Sheet Metal Product Solutions |
| **Established** | 2019 |
| **Location** | Plot L-237 & L-248, MIDC, Ahmednagar, Maharashtra — 414111 |
| **Annual Turnover** | ₹3.4 Cr+ (FY 2023–24) |
| **Capital Invested** | ₹2.5 Cr (Plant & Machinery) |
| **Manufacturing Area** | 10,000+ sqft across 2 facilities |
| **Email** | ruptechengineers@gmail.com |
| **Target Domain** | www.ruptechengineers.com |

---

## 2. Overall Description

### 2.1 Product Perspective

The website operates as a **standalone, client-facing marketing and lead-generation platform** for Ruptech Engineers. It replaces manual enquiry collection (phone, email, referrals) with a structured digital channel.

The product does **not** include:
- An e-commerce or order management system
- A customer portal or account management system
- A CMS (Content Management System) — content is managed directly in source code

### 2.2 Product Functions (High-Level)

1. **Brand Presentation** — Company story, values, key metrics, manufacturing infrastructure
2. **Product Catalogue Display** — Structured, searchable product specifications across 5 categories
3. **Contact & Lead Capture** — Contact enquiry form + detailed RFQ form
4. **WhatsApp & Phone Integration** — Click-to-chat and click-to-call sitewide
5. **SEO & Discoverability** — Structured metadata, JSON-LD schema, sitemap, robots.txt
6. **Certifications & Compliance** — Display of quality certifications (ISO 9001:2015, etc.)
7. **Client & Testimonial Showcase** — Logo grid and testimonial cards for social proof
8. **Gallery** — Product and facility photo grid

### 2.3 User Classes and Characteristics

| User Class | Description | Primary Goals |
|---|---|---|
| **Industrial Buyer / Procurement Manager** | Works at a manufacturing firm, OEM, or contractor; evaluates vendors | View product specs, download catalogue, submit RFQ |
| **Electrical Engineer / Project Consultant** | Specifying enclosures, cable trays, or custom fabrication for a project | Find technical specifications, request quote |
| **Business Development / Sales (Internal)** | Ruptech staff monitoring leads | View enquiry data in Google Sheets |
| **Website Administrator** | Developer or tech-savvy staff maintaining the site | Update product data, constants, deploy changes |

### 2.4 Operating Environment

- **Runtime**: Node.js (via Vercel serverless functions)
- **Rendering**: Next.js App Router (mix of Static Generation and Server-Side Rendering)
- **Hosting**: Vercel (Edge Network / CDN)
- **Browser Support**: Chrome, Safari, Firefox, Edge (latest 2 major versions)
- **Device Support**: Mobile (≥320px), Tablet (≥768px), Desktop (≥1024px)

---

## 3. System Architecture

### 3.1 Technology Stack

| Layer | Technology | Version |
|---|---|---|
| **Framework** | Next.js (App Router) | 16.3.0 |
| **UI Library** | React | 19.2.8 |
| **Styling** | Tailwind CSS | v4 |
| **Icons** | lucide-react | ^1.31.0 |
| **Font** | Inter (Google Fonts), JetBrains Mono | — |
| **Build Tool** | Next.js built-in (Turbopack) | — |
| **Deployment** | Vercel | — |
| **Lead Storage** | Google Sheets via Apps Script webhook | — |

### 3.2 Folder Structure

```
ruptech-website/
├── src/
│   ├── app/                        # Next.js App Router pages & API routes
│   │   ├── page.jsx                # Home page
│   │   ├── layout.jsx              # Root layout (Navbar, Footer, WhatsApp)
│   │   ├── globals.css             # Global CSS & Tailwind base
│   │   ├── sitemap.js              # Dynamic sitemap generator
│   │   ├── not-found.jsx           # 404 page
│   │   ├── about/page.jsx
│   │   ├── manufacturing/page.jsx
│   │   ├── certifications/page.jsx
│   │   ├── gallery/page.jsx
│   │   ├── clients/page.jsx
│   │   ├── contact/page.jsx + ContactClient.jsx
│   │   ├── quote/page.jsx + QuoteClient.jsx
│   │   ├── privacy/page.jsx
│   │   ├── products/
│   │   │   ├── page.jsx            # Products index
│   │   │   ├── panel-enclosures/page.jsx
│   │   │   ├── sheet-metal-fabrication/page.jsx
│   │   │   ├── cable-management/page.jsx
│   │   │   ├── industrial-storage/page.jsx
│   │   │   └── custom-manufacturing/page.jsx
│   │   └── api/
│   │       ├── contact/route.js    # Contact form API
│   │       └── rfq/route.js        # RFQ form API
│   ├── components/                 # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── CTAButton.jsx
│   │   ├── ProductCard.jsx
│   │   ├── StatsBar.jsx
│   │   ├── SpecTable.jsx
│   │   ├── ClientLogoGrid.jsx
│   │   └── TestimonialCard.jsx
│   └── lib/
│       ├── constants.js            # Business data (name, address, phone, etc.)
│       └── productData.js          # All product catalogue data
└── public/                         # Static assets
```

### 3.3 Request Flow Diagram

```
User Browser
    │
    ▼
Vercel Edge Network (CDN)
    │
    ├─── Static Pages (SG) ──────▶ Pre-built HTML served from edge
    │
    ├─── Dynamic Pages (SSR) ────▶ Next.js Server renders on demand
    │
    └─── API Routes ─────────────▶ Serverless Function
                                        │
                                        ▼
                               Google Apps Script Webhook
                                        │
                                        ▼
                                   Google Sheets
                              (Contact / RFQ data stored)
```

---

## 4. Functional Requirements

### 4.1 Navigation & Layout (Global)

| ID | Requirement | Priority |
|---|---|---|
| FR-NAV-01 | The application SHALL render a sticky top navigation bar on all pages | Must Have |
| FR-NAV-02 | The Navbar SHALL contain the company logo (linking to `/`), all primary navigation links, phone (tel: link), and a WhatsApp icon link | Must Have |
| FR-NAV-03 | The Navbar SHALL collapse to a hamburger menu on mobile (≤768px) | Must Have |
| FR-NAV-04 | The navigation links SHALL be: Home, About, Products, Manufacturing, Certifications, Gallery, Clients, Contact | Must Have |
| FR-NAV-05 | A floating WhatsApp button SHALL be visible on all pages, linking to the configured WhatsApp number with a pre-filled message | Must Have |
| FR-NAV-06 | A Footer SHALL be rendered on all pages containing: company logo, both facility addresses, email address, GST number, quick links, and copyright notice | Must Have |

### 4.2 Home Page

| ID | Requirement | Priority |
|---|---|---|
| FR-HOME-01 | The Home page SHALL display a full-width hero section with company tagline, a primary CTA ("Request a Quote"), and a secondary CTA (phone call) | Must Have |
| FR-HOME-02 | The Home page SHALL display a statistics bar showing: Year Established, Manufacturing Area, Annual Turnover, Capital Invested | Must Have |
| FR-HOME-03 | The Home page SHALL display a "Why Choose Ruptech" section with 3 value proposition cards | Must Have |
| FR-HOME-04 | The Home page SHALL display a product categories overview section with 5 ProductCards linking to individual product pages | Must Have |
| FR-HOME-05 | The Home page SHALL display a "Trusted By Industry Leaders" section with client logo grid | Must Have |
| FR-HOME-06 | The Home page SHALL display a dark CTA banner section with links to the Quote page and WhatsApp | Must Have |

### 4.3 About Page

| ID | Requirement | Priority |
|---|---|---|
| FR-ABOUT-01 | The About page SHALL display a hero banner with the page title and a short descriptor | Must Have |
| FR-ABOUT-02 | The About page SHALL display the company story text (founding, facilities, capabilities, commitment) | Must Have |
| FR-ABOUT-03 | The About page SHALL display 4 key operational facts: Year Established, Manufacturing Area, Annual Turnover, Capital Invested | Must Have |
| FR-ABOUT-04 | The About page SHALL display an expanded "Why Choose Ruptech" section identical in structure to the home page version | Must Have |
| FR-ABOUT-05 | The About page SHALL display a client logo strip | Must Have |

### 4.4 Manufacturing Page

| ID | Requirement | Priority |
|---|---|---|
| FR-MFG-01 | The Manufacturing page SHALL display both facility addresses with built-up area details | Must Have |
| FR-MFG-02 | The Manufacturing page SHALL display a machine gallery grid showing all 6 machines with name, category, and description | Must Have |
| FR-MFG-03 | The Manufacturing page SHALL display a Production Workflow section with the 7-step process strip: Design → Cutting → Bending → Welding → Finishing → QC → Dispatch | Must Have |
| FR-MFG-04 | The Manufacturing page SHALL display a CTA section linking to the Quote page | Must Have |

**Machine Inventory (FR-MFG-02):**
1. CNC Laser Cutting Machine (3KW, 1.5m × 3m)
2. CNC Turret Punch
3. CNC Press Brake (1.5m)
4. NC Shearing Machine (3m, 5mm)
5. NC Press Brake Machine (3m, 5mm)
6. MIG / TIG Welding Stations

### 4.5 Products Pages

#### 4.5.1 Products Index Page

| ID | Requirement |
|---|---|
| FR-PROD-01 | Products index SHALL display 5 ProductCards for each category, each linking to the respective sub-page |
| FR-PROD-02 | Products index SHALL include a CTA for downloading the product catalogue PDF |

#### 4.5.2 Panel Enclosures & Boxes Page

The page SHALL display product specification tables (Code / Description / Size) for 6 sub-categories:

| Sub-Category | SKU Count |
|---|---|
| M.S. Distribution Box | 5 |
| MCCB Box | 4 |
| Energy Meter Box | 3 |
| EV Charger Box | 3 |
| Agriculture Box | 3 |
| Panel Box | 5 |

#### 4.5.3 Sheet Metal Fabrication Page

The page SHALL display 6 fabrication services:
1. CNC Laser Cutting (3KW fiber laser, up to 10mm M.S. / 6mm S.S., 1.5m × 3m bed)
2. CNC Turret Punching (complex hole patterns and louvres)
3. CNC Press Brake Bending (up to 3mm M.S., 1.5m press brake)
4. NC Shearing (up to 5mm thickness, 3m shearing machine)
5. MIG / TIG Welding (certified welders)
6. Powder Coating (full line, RAL colour matching)

#### 4.5.4 Cable Management Page

The page SHALL display a specification table for 14 cable tray / ladder SKUs (Perforated Cable Trays and Cable Ladders in M.S. Galvanized material).

#### 4.5.5 Industrial Storage Page

The page SHALL display specification cards for 7 storage rack types with size and load capacity data.

#### 4.5.6 Custom Manufacturing Page

The page SHALL display:
- Capability list for OEM/ODM manufacturing
- An 8-step OEM/ODM timeline: Share Drawing → Feasibility → Quote → Prototype → Batch Production → Finishing → QC → Dispatch
- A CTA linking to the RFQ page

### 4.6 Certifications Page

| ID | Requirement |
|---|---|
| FR-CERT-01 | The Certifications page SHALL display a card grid for all certifications showing: Name, Category, Issuing Body, Validity Date, Status (ACTIVE / PENDING) |
| FR-CERT-02 | The Certifications page SHALL display a Material Traceability section with the company's traceability protocol details |
| FR-CERT-03 | The Certifications page SHALL support a "Download All (PDF)" action |

**Certifications listed:**

| Certification | Issuing Body | Valid Thru | Status |
|---|---|---|---|
| ISO 9001:2015 | TÜV SÜD | Dec 2026 | ACTIVE |
| ISO 14001:2015 | Bureau Veritas | Oct 2025 | ACTIVE |
| CE Marking | BSI Group | Mar 2027 | ACTIVE |
| ISO 45001:2018 | TÜV Rheinland | Q3 2025 | PENDING |

### 4.7 Gallery Page

| ID | Requirement |
|---|---|
| FR-GAL-01 | The Gallery page SHALL display a photo grid of product and facility images |
| FR-GAL-02 | The Gallery page SHALL support optional filter tabs (All / Panels / Enclosures / Cable Trays / Storage / Factory) |

### 4.8 Clients & Testimonials Page

| ID | Requirement |
|---|---|
| FR-CLI-01 | The Clients page SHALL display the full ClientLogoGrid showing all 11 client names |
| FR-CLI-02 | The Clients page SHALL display TestimonialCards with quote, name, company, and role |

**Client Roster:**
CG Power, Schneider Electric, Exide, L&T, ISMT, Survi Solar, Raychem RPG, Tata Green, Heatcon, Laxmi, S.K. Enterprises

### 4.9 Contact Page

| ID | Requirement |
|---|---|
| FR-CONT-01 | The Contact page SHALL display a contact enquiry form with fields: Name (required), Phone (required), Email (required), Product Interest (optional), Message (optional) |
| FR-CONT-02 | The Contact form SHALL include a honeypot hidden field to detect bot submissions |
| FR-CONT-03 | On valid submission, the form data SHALL be forwarded to the Contact API route and onward to Google Sheets |
| FR-CONT-04 | The Contact page SHALL display both facility addresses |
| FR-CONT-05 | The Contact page SHALL display click-to-call phone link and WhatsApp link |
| FR-CONT-06 | The Contact form SHALL show a success confirmation message on successful submission |
| FR-CONT-07 | The submit button SHALL be disabled while submission is in progress to prevent double-submission |

### 4.10 RFQ (Request for Quote) Page

| ID | Requirement |
|---|---|
| FR-RFQ-01 | The RFQ page SHALL display a detailed enquiry form with fields: Name, Company, Phone, Email, Product Category (dropdown), Quantity, Specifications (textarea), Drawing/File Upload |
| FR-RFQ-02 | The RFQ form SHALL include a honeypot field |
| FR-RFQ-03 | On valid submission, the form data SHALL be forwarded to the RFQ API route and onward to Google Sheets |
| FR-RFQ-04 | The RFQ form SHALL show a success confirmation message on successful submission |
| FR-RFQ-05 | The submit button SHALL be disabled while submission is in progress |

### 4.11 404 Page

| ID | Requirement |
|---|---|
| FR-404-01 | A branded 404 Not Found page SHALL render for all unmatched routes |
| FR-404-02 | The 404 page SHALL provide navigation back to the homepage |

### 4.12 Privacy Policy Page

| ID | Requirement |
|---|---|
| FR-PRIV-01 | A Privacy Policy page SHALL be accessible at `/privacy` |

---

## 5. Non-Functional Requirements

### 5.1 Performance

| ID | Requirement |
|---|---|
| NFR-PERF-01 | Lighthouse Performance score SHALL be ≥85 on both mobile and desktop |
| NFR-PERF-02 | All images SHALL use Next.js `next/image` component with lazy loading for below-the-fold images |
| NFR-PERF-03 | All images SHALL be served in WebP format |
| NFR-PERF-04 | Time to First Byte (TTFB) SHALL be <200ms for statically-generated pages served from Vercel CDN |

### 5.2 Responsiveness

| ID | Requirement |
|---|---|
| NFR-RESP-01 | All pages SHALL be fully responsive at three breakpoints: Mobile (<768px), Tablet (768px–1024px), Desktop (>1024px) |
| NFR-RESP-02 | All interactive touch targets SHALL be a minimum of 44×44px |
| NFR-RESP-03 | Horizontal overflow SHALL NOT occur on any page at any breakpoint |

### 5.3 Accessibility

| ID | Requirement |
|---|---|
| NFR-ACC-01 | All images SHALL have descriptive alt attributes |
| NFR-ACC-02 | All interactive elements SHALL be keyboard-navigable |
| NFR-ACC-03 | The heading hierarchy per page SHALL be: exactly one `<h1>`, followed by `<h2>`, `<h3>` in logical order |
| NFR-ACC-04 | Colour contrast ratios SHALL meet WCAG 2.1 Level AA (4.5:1 for normal text, 3:1 for large text) |

### 5.4 Availability

| ID | Requirement |
|---|---|
| NFR-AVAIL-01 | The platform (Vercel) SHALL provide 99.9% uptime SLA |
| NFR-AVAIL-02 | API routes failing to reach Google Sheets SHALL return an appropriate error message to the user without crashing the page |

### 5.5 Maintainability

| ID | Requirement |
|---|---|
| NFR-MAINT-01 | All business-critical constants (phone, email, addresses, WhatsApp number, GST) SHALL be stored in a single file: `src/lib/constants.js` |
| NFR-MAINT-02 | All product catalogue data SHALL be stored in `src/lib/productData.js` and consumed by product pages via props — product pages SHALL NOT contain hardcoded product data |
| NFR-MAINT-03 | All reusable UI patterns SHALL be encapsulated as components in `src/components/` |

---

## 6. User Interface Requirements

### 6.1 Design System

| Token | Value |
|---|---|
| **Primary Color (Teal)** | `#0E7C6B` |
| **Secondary Color (Navy)** | `#1D4E89` |
| **Heading / Accent (Ink)** | `#1A1A1A` |
| **Body Text** | `#4A4A4A` |
| **Surface (Alt Background)** | `#F5F7F7` |
| **Primary Font** | Inter (Google Fonts) — weights 400, 500, 600, 700, 800 |
| **Mono Font** | JetBrains Mono — weight 500 |
| **Section Padding** | `py-20` (vertical), `max-w-7xl mx-auto px-4` (horizontal) |

### 6.2 Component Standards

All components SHALL conform to the following standards:
- Use Tailwind CSS utility classes only (no inline styles except for dynamic values)
- Be responsive by default
- Accept clear, typed props
- Not contain business logic (data fetching, API calls) — this belongs in page files or API routes

### 6.3 Animation & Interactions

| Pattern | Implementation |
|---|---|
| Card hover | `hover:shadow-sm`, `hover:border-primary` with `transition-colors` |
| Icon hover | `group-hover:bg-primary-container`, `group-hover:text-white` |
| Image hover | `group-hover:scale-105` with `transition-transform duration-700` |
| Button states | Loading spinner / disabled state on form submission |
| Floating button | Fixed position, bottom-right, WhatsApp green |

---

## 7. Data Requirements

### 7.1 Business Constants (`lib/constants.js`)

| Field | Type | Notes |
|---|---|---|
| `name` | string | Full legal company name |
| `shortName` | string | Display name |
| `tagline` | string | Brand tagline |
| `email` | string | Public enquiry email |
| `phone` | string | Public phone number (tel: link format) |
| `whatsapp` | string | WhatsApp number (no +, no spaces, country code prefix) |
| `whatsappMessage` | string | Default pre-filled WhatsApp message |
| `addresses[]` | object array | Each: label, line1, line2, short |
| `gst` | string | GSTIN |
| `established` | number | Year founded |
| `turnover` | string | Annual turnover display string |
| `capital` | string | Capital invested display string |
| `area` | string | Total manufacturing area |
| `navLinks[]` | object array | Each: label, href |

### 7.2 Contact Form Submission Schema

```json
{
  "secret": "string (env var, server-only)",
  "type": "contact",
  "name": "string (required)",
  "phone": "string (required)",
  "email": "string (required)",
  "interest": "string (optional, default: 'General Inquiry')",
  "message": "string (optional)",
  "submittedAt": "ISO 8601 datetime string"
}
```

### 7.3 RFQ Form Submission Schema

```json
{
  "secret": "string (env var, server-only)",
  "type": "rfq",
  "name": "string (required)",
  "company": "string (optional)",
  "phone": "string (required)",
  "email": "string (required)",
  "category": "string (dropdown selection)",
  "quantity": "string (optional)",
  "specs": "string (optional)",
  "drawingLink": "string (optional, Google Drive URL)",
  "submittedAt": "ISO 8601 datetime string"
}
```

### 7.4 Environment Variables

| Variable | Scope | Purpose |
|---|---|---|
| `APPS_SCRIPT_SECRET` | Server-only | Shared secret to authenticate Apps Script webhook requests |
| `CONTACT_APPS_SCRIPT_URL` | Server-only | Google Apps Script webhook URL for contact form |
| `RFQ_APPS_SCRIPT_URL` | Server-only | Google Apps Script webhook URL for RFQ form |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Public | reCAPTCHA v3 site key (client-side) |
| `RECAPTCHA_SECRET_KEY` | Server-only | reCAPTCHA v3 secret key (server-side verification) |

> [!CAUTION]
> No secret environment variables SHALL be prefixed with `NEXT_PUBLIC_`. Only the reCAPTCHA site key is intentionally public.

---

## 8. Integration & External Services

### 8.1 Google Sheets / Apps Script

| Attribute | Value |
|---|---|
| **Purpose** | Persistent storage of all contact enquiries and RFQ submissions |
| **Method** | HTTP POST to a Google Apps Script Web App URL |
| **Authentication** | Shared secret token included in every POST payload |
| **Sheet Structure** | Two tabs: "Contact" and "RFQ" |
| **Contact Columns** | Name, Phone, Email, Product Interest, Message, Submitted At |
| **RFQ Columns** | Name, Company, Phone, Email, Category, Quantity, Specs, Drawing Link, Submitted At |

### 8.2 WhatsApp (wa.me)

| Attribute | Value |
|---|---|
| **Purpose** | Click-to-chat with the Ruptech WhatsApp account |
| **URL Format** | `https://wa.me/{number}?text={encodedMessage}` |
| **Sitewide** | Floating button on every page via root layout |
| **Product-specific** | Each product category page generates a custom pre-filled message |

### 8.3 Google Fonts

| Attribute | Value |
|---|---|
| **Fonts Used** | Inter (400, 500, 600, 700, 800), JetBrains Mono (500) |
| **Loading** | `<link rel="preconnect">` + stylesheet in `<head>` via `layout.jsx` |
| **Fallback** | System sans-serif |

### 8.4 Unsplash (Temporary)

Images from Unsplash are used as placeholders across hero sections, machine gallery, and about page pending delivery of real facility and product photography from the client.

> [!IMPORTANT]
> All Unsplash placeholder images MUST be replaced with real Ruptech product/facility photography before the production launch.

---

## 9. Security Requirements

### 9.1 Form Security

| ID | Requirement |
|---|---|
| SEC-01 | Both Contact and RFQ forms SHALL include a honeypot hidden field; submissions with the honeypot field populated SHALL be silently discarded at the API level |
| SEC-02 | Both API routes SHALL perform server-side field validation (name, phone, email required) independent of client-side validation |
| SEC-03 | Both API routes SHALL implement per-IP rate limiting to prevent abuse |
| SEC-04 | reCAPTCHA v3 (invisible) SHALL be integrated on both forms |

### 9.2 Apps Script Webhook Security

| ID | Requirement |
|---|---|
| SEC-05 | Every POST to the Apps Script webhook SHALL include the `APPS_SCRIPT_SECRET` token |
| SEC-06 | The Apps Script SHALL verify the secret token on every incoming request and reject any request with a missing or incorrect token |

### 9.3 HTTP Security Headers

The following security headers are applied to all routes via `next.config.mjs`:

| Header | Value |
|---|---|
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `X-XSS-Protection` | `1; mode=block` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

### 9.4 Secret Management

| ID | Requirement |
|---|---|
| SEC-07 | All secret keys SHALL be stored in `.env.local` (excluded from version control via `.gitignore`) |
| SEC-08 | Secrets SHALL be configured as Vercel Environment Variables for production |
| SEC-09 | No secret key SHALL appear in the client-side JavaScript bundle (verifiable via browser DevTools) |

---

## 10. SEO & Performance Requirements

### 10.1 Metadata

| ID | Requirement |
|---|---|
| SEO-01 | Every page SHALL have a unique, descriptive `<title>` tag using the Next.js `metadata` export |
| SEO-02 | Every page SHALL have a unique `<meta name="description">` tag |
| SEO-03 | The root layout SHALL define global OpenGraph tags (og:title, og:description, og:image, og:url, og:type) |
| SEO-04 | The root layout SHALL define Twitter Card meta tags |
| SEO-05 | The homepage SHALL include Organization / LocalBusiness JSON-LD structured data markup |

### 10.2 Crawlability

| ID | Requirement |
|---|---|
| SEO-06 | A `sitemap.xml` SHALL be dynamically generated from `src/app/sitemap.js` listing all public pages |
| SEO-07 | A `robots.txt` SHALL be present and allow all crawlers access to public pages |

### 10.3 Post-Launch SEO Setup

| ID | Requirement |
|---|---|
| SEO-08 | Google Search Console SHALL be set up and the sitemap submitted after launch |
| SEO-09 | A Google Business Profile SHALL be created with NAP (Name, Address, Phone) matching the website footer exactly |

---

## 11. Deployment Requirements

### 11.1 Hosting Platform

| Attribute | Value |
|---|---|
| **Platform** | Vercel |
| **Repository** | GitHub (connected to Vercel for CI/CD) |
| **Preview Deployments** | Automatic on every push to non-main branches |
| **Production Deployment** | Automatic on merge/push to `main` branch |

### 11.2 Domain & SSL

| ID | Requirement |
|---|---|
| DEP-01 | The site SHALL be served from the custom domain `www.ruptechengineers.com` |
| DEP-02 | HTTPS / TLS SHALL be active and enforced (provided automatically by Vercel) |
| DEP-03 | HTTP requests SHALL be automatically redirected to HTTPS |
| DEP-04 | Domain DNS SHALL be configured with A/CNAME records as provided by Vercel |

---

## 12. Constraints & Assumptions

### 12.1 Technical Constraints

- The system uses **no proprietary database** — lead persistence depends entirely on Google Sheets / Apps Script availability.
- The product catalogue is **code-managed**, not CMS-driven; any catalogue update requires a code change and redeployment.
- File uploads in the RFQ form are handled via Google Drive integration through Apps Script (Option B from the build plan).

### 12.2 Business Constraints

- The website is designed for the **Indian industrial B2B market**.
- The primary enquiry language is **English**.
- The GST number, public phone number, and WhatsApp number are pending confirmation from the client and are currently placeholder values in `constants.js`.

### 12.3 Assumptions

- Real product and facility photography will be provided by the client before go-live.
- Real client testimonials will be provided before the Clients page is finalized.
- Real certificate scan images will be provided before the Certifications page is finalized.
- The rack load capacities for certain Industrial Storage SKUs are to be confirmed by the client.

---

## Appendix A — Page Inventory

| Route | File | Title | Rendering |
|---|---|---|---|
| `/` | `src/app/page.jsx` | Complete Sheet Metal Product Solutions | Static |
| `/about` | `src/app/about/page.jsx` | About Us | Static |
| `/manufacturing` | `src/app/manufacturing/page.jsx` | Manufacturing Infrastructure | Static |
| `/products` | `src/app/products/page.jsx` | Our Products | Static |
| `/products/panel-enclosures` | `src/app/products/panel-enclosures/page.jsx` | Panel Enclosures & Boxes | Static |
| `/products/sheet-metal-fabrication` | `src/app/products/sheet-metal-fabrication/page.jsx` | Sheet Metal Fabrication | Static |
| `/products/cable-management` | `src/app/products/cable-management/page.jsx` | Cable Management | Static |
| `/products/industrial-storage` | `src/app/products/industrial-storage/page.jsx` | Industrial Storage Racks | Static |
| `/products/custom-manufacturing` | `src/app/products/custom-manufacturing/page.jsx` | Custom Manufacturing | Static |
| `/certifications` | `src/app/certifications/page.jsx` | Certifications & Compliance | Static |
| `/gallery` | `src/app/gallery/page.jsx` | Gallery | Static |
| `/clients` | `src/app/clients/page.jsx` | Our Clients & Testimonials | Static |
| `/contact` | `src/app/contact/page.jsx` | Contact Us | Client Component |
| `/quote` | `src/app/quote/page.jsx` | Request a Quote | Client Component |
| `/privacy` | `src/app/privacy/page.jsx` | Privacy Policy | Static |
| `*` (unmatched) | `src/app/not-found.jsx` | 404 Not Found | Static |

**API Routes:**

| Route | File | Method | Purpose |
|---|---|---|---|
| `/api/contact` | `src/app/api/contact/route.js` | POST | Contact form submission handler |
| `/api/rfq` | `src/app/api/rfq/route.js` | POST | RFQ form submission handler |

---

## Appendix B — Component Inventory

| Component | File | Purpose |
|---|---|---|
| `Navbar` | `src/components/Navbar.jsx` | Sticky global navigation bar with mobile hamburger menu |
| `Footer` | `src/components/Footer.jsx` | Global site footer with addresses, links, and copyright |
| `WhatsAppButton` | `src/components/WhatsAppButton.jsx` | Floating click-to-chat WhatsApp button |
| `CTAButton` | `src/components/CTAButton.jsx` | Primary/secondary CTA button (teal filled / outlined) |
| `ProductCard` | `src/components/ProductCard.jsx` | Reusable card for product category grids |
| `StatsBar` | `src/components/StatsBar.jsx` | Statistics strip (established, area, turnover, capital) |
| `SpecTable` | `src/components/SpecTable.jsx` | Reusable table for product specifications (Code / Description / Size) |
| `ClientLogoGrid` | `src/components/ClientLogoGrid.jsx` | Responsive client logo / name grid (size prop: sm / md / lg) |
| `TestimonialCard` | `src/components/TestimonialCard.jsx` | Testimonial quote card (quote, name, company, role) |

---

## Appendix C — Product Catalogue Summary

### Panel Enclosures & Boxes (23 SKUs total)

| Sub-Category | SKU Count | Size Range |
|---|---|---|
| M.S. Distribution Box | 5 | 600W×800H×250D mm to 600W×1200H×300D mm |
| MCCB Box | 4 | 250W×310H×130D mm to 600W×900H×200D mm |
| Energy Meter Box | 3 | 250W×300H×125D mm to 500W×500H×175D mm |
| EV Charger Box | 3 | 200W×250H×150D mm to 350W×450H×175D mm |
| Agriculture Box | 3 | 350W×450H×150D mm to 600W×700H×200D mm |
| Panel Box | 5 | 200W×200H×150D mm to 600W×800H×200D mm |

### Cable Management (14 SKUs)

All items are M.S. Galvanized material. Sizes range from 50W×50H mm to 600W×75H mm (perforated trays), plus cable ladder variants.

### Industrial Storage Racks (7 SKUs)

| Product | Load Capacity |
|---|---|
| Slotted Angle Rack (Light Duty) | 100 kg/shelf |
| Slotted Angle Rack (Medium Duty) | 200 kg/shelf |
| Pallet Rack (Standard) | 1,500 kg/level |
| Pallet Rack (Heavy Duty) | 3,000 kg/level |
| Boltless Shelving Rack | 150 kg/shelf |
| Industrial Steel Cabinet | 80 kg/shelf |
| Mezzanine Floor System | 300 kg/sqm (TBC) |

### Fabrication Capabilities

- CNC Laser Cutting: up to 10mm M.S. / 6mm S.S., 1.5m × 3m bed
- CNC Turret Punching: complex hole patterns and louvres
- CNC Press Brake Bending: up to 3mm M.S., 1.5m capacity
- NC Shearing: up to 5mm, 3m capacity
- MIG / TIG Welding: certified welders
- Powder Coating: in-house, full RAL colour matching

---

*End of Document*

---

> **Document Control**: This SRS reflects the system as built as of August 12, 2026. Any subsequent changes to the system should trigger a version update to this document.
