---
name: Industrial Precision System
colors:
  surface: '#f6faf7'
  surface-dim: '#d7dbd8'
  surface-bright: '#f6faf7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f5f2'
  surface-container: '#ebefec'
  surface-container-high: '#e5e9e6'
  surface-container-highest: '#dfe3e1'
  on-surface: '#181d1b'
  on-surface-variant: '#3e4946'
  inverse-surface: '#2d3130'
  inverse-on-surface: '#eef2ef'
  outline: '#6e7a76'
  outline-variant: '#bdc9c5'
  surface-tint: '#006b5c'
  primary: '#006153'
  on-primary: '#ffffff'
  primary-container: '#0e7c6b'
  on-primary-container: '#bdffee'
  inverse-primary: '#7bd7c3'
  secondary: '#325f9b'
  on-secondary: '#ffffff'
  secondary-container: '#93bdff'
  on-secondary-container: '#194b86'
  tertiary: '#87422d'
  on-tertiary: '#ffffff'
  tertiary-container: '#a55943'
  on-tertiary-container: '#ffeeea'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#98f3de'
  primary-fixed-dim: '#7bd7c3'
  on-primary-fixed: '#00201a'
  on-primary-fixed-variant: '#005145'
  secondary-fixed: '#d5e3ff'
  secondary-fixed-dim: '#a7c8ff'
  on-secondary-fixed: '#001c3b'
  on-secondary-fixed-variant: '#124782'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#743320'
  background: '#f6faf7'
  on-background: '#181d1b'
  surface-variant: '#dfe3e1'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  mono-label:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style
This design system embodies "Engineering Excellence" through a structured, high-reliability aesthetic tailored for the B2B industrial sector. The visual language is rooted in **Modern Corporate** principles with a slight **Technical/Industrial** edge. It prioritizes clarity, structural integrity, and technical credibility over decorative trends.

The interface should evoke a sense of precision and "heavy-duty" reliability. This is achieved through a strict adherence to grid systems, high-contrast information hierarchies, and a utilitarian approach to interface elements. The emotional response is one of confidence—users should feel they are interacting with a tool that is as well-engineered as the physical machinery produced by the brand.

## Colors
The palette is centered on **Primary Teal (#0E7C6B)**, representing technical innovation and modern engineering. **Secondary Navy (#1D4E89)** provides a grounded, professional contrast often associated with institutional trust.

- **Primary Teal:** Used for core CTAs, active states, and key branding moments.
- **Secondary Navy:** Used for navigational elements, headers, and secondary buttons to establish a "blue-chip" corporate feel.
- **Black/Neutral:** #1A1A1A is reserved for high-level headings and structural dividers to maintain a heavy, industrial weight. 
- **Typography:** Body text uses #4A4A4A to ensure long-form legibility without the harshness of pure black, maintaining a professional document-style feel.
- **Backgrounds:** Pure white is the default for high clarity, while #F5F7F7 (Cool Grey) is used for subtle section differentiation and data-heavy containers.

## Typography
The system utilizes **Inter** across all major roles for its exceptional legibility and systematic, neutral character. 

- **Headings:** Use bold and extra-bold weights with tight letter-spacing to create a "condensed" and impactful industrial look. This communicates strength and authority.
- **Body:** Standardized at 16px for optimal readability in technical specifications and whitepapers.
- **Monospaced Accents:** **JetBrains Mono** is introduced for technical labels, part numbers, or measurement data to reinforce the "engineering" context of the brand.
- **Mobile Scaling:** Headlines above 32px should scale down by 20% on mobile devices to maintain layout integrity.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Content is housed in a centered container with a maximum width of 1280px to maintain readability on ultra-wide monitors common in industrial workstations.

- **Grid:** A 12-column grid system is used for desktop. For technical dashboards, a 4-column sub-grid is utilized within cards.
- **Spacing Rhythm:** Based on an 8px baseline. Large sections are separated by `xl` (80px) spacing to provide "industrial-scale" breathing room, preventing the UI from feeling cluttered.
- **Mobile:** Transition to a single-column layout with 16px side margins. Gutters reduce to 16px to maximize screen real estate for technical data.

## Elevation & Depth
This design system avoids heavy shadows, opting instead for **Structural Layering** and **Low-Contrast Outlines**.

- **Level 0 (Base):** White (#FFFFFF) or Light Grey (#F5F7F7) background.
- **Level 1 (Cards/Containers):** White background with a 1px solid border (#E1E4E4). No shadow.
- **Level 2 (Interactive/Floating):** A very subtle, "tight" shadow (0px 2px 4px rgba(0,0,0,0.05)) is used only for dropdowns or active state cards to suggest they are temporarily raised.
- **Depth through Color:** Use the Primary Teal or Secondary Navy to create depth on headers and sidebars rather than using shadows.

## Shapes
In line with industrial aesthetics, shapes are primarily **sharp and geometric**. The system uses a "Soft" roundedness level (0.25rem / 4px) to take the edge off digital screens while maintaining a precise, manufactured feel.

- **Standard Elements:** 4px radius for buttons, input fields, and small cards.
- **Large Containers:** 8px radius for major section cards or modals.
- **Functional Icons:** Should follow a 2px stroke weight with square caps and joins to match the typography's structural nature.

## Components
- **Buttons:** Primary buttons are #0E7C6B with white text and 4px corners. Secondary buttons use #1D4E89. Interaction states (hover) should be a 10% darker shade of the base color.
- **Input Fields:** 1px solid border (#CED4D4). On focus, the border changes to Primary Teal with a 1px inner glow. Labels are always placed above the field in `label-caps` style.
- **Chips/Status Indicators:** Use a "Tag" style—rectangular with 2px radius. Success (Teal), Warning (Amber), and Alert (Red) should be desaturated to fit the professional palette.
- **Lists:** Data tables and technical lists should use alternating row colors (#FFFFFF and #F5F7F7) with 1px horizontal dividers.
- **Cards:** White background, 1px border (#E1E4E4), 4px border-radius. No shadow by default. Headers within cards should have a subtle #F5F7F7 background fill to separate them from the content.
- **Technical Specs Component:** A specific component for displaying engineering data, using `mono-label` for values and `label-caps` for keys, arranged in a clean, vertical key-value pair list.