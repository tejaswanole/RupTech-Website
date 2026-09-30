// ─────────────────────────────────────────────────────────────────────────────
// productData.js
// ALL dimensions sourced directly from the Ruptech All Catalogue (PDF).
// Format: W = Width, H = Height, D = Depth (all in mm unless otherwise noted).
// Codes as printed in the catalogue (ΓÇÉ decoded as hyphen "-").
// ─────────────────────────────────────────────────────────────────────────────

// ── 1. MCB + Metal Clad Socket (Combi) Box ───────────────────────────────────
export const combiBox = [
  { code: 'RUP-AC20ASP2W',     description: 'AC Box 2 Way SP MCB / Metal Socket',      size: '158W × 230H × 60D mm' },
  { code: 'RUP-AC20ASP3W',     description: 'AC Box 3 Way SP MCB / Metal Socket',      size: '234W × 230H × 60D mm' },
  { code: 'RUP-AC20ATP2W',     description: 'AC Box 2 Way TP MCB / Metal Socket',      size: '192W × 260H × 60D mm' },
  { code: 'RUP-AC10A20ATP3W',  description: 'AC Box 3 Way TP MCB / Metal Socket',      size: '286W × 260H × 60D mm' },
  { code: 'RUP-AC20ASPTP2W',   description: 'AC Box SP/TP 2 Way MCB / Metal Socket',   size: '180W × 260H × 60D mm' },
  { code: 'RUP-AC1015A20A',    description: 'AC Box SP/TP 3 Way MCB / Metal Socket',   size: '274W × 284H × 60D mm' },
];

// ── 2. EV Charger Box ────────────────────────────────────────────────────────
export const evChargerBox = [
  { code: 'RUP-EV-20A',  description: 'EV Charger Box (Big)',   size: '300W × 380H × 150D mm' },
  { code: 'RUP-EV-10A',  description: 'EV Charger Box (Small)', size: '200W × 250H × 150D mm' },
];

// ── 3. MCCB Box ───────────────────────────────────────────────────────────────
export const mcbBox = [
  { code: 'RUP-MCCB32-100A', description: '3 or 4 Pole MCCB Box (32A – 100A)',  size: '250W × 310H × 130D mm' },
  { code: 'RUP-MCCB125A',    description: '3 or 4 Pole MCCB Box (32A – 125A)',  size: '300W × 450H × 130D mm' },
  { code: 'RUP-MCCB250A',    description: '3 or 4 Pole MCCB Box (160A – 250A)', size: '400W × 600H × 130D mm' },
];

// ── 4. Distribution Box ───────────────────────────────────────────────────────
export const distributionBox = [
  { code: 'RUP-DBS-01', description: 'M.S. Distribution Box',  size: '600W × 800H × 250D mm' },
  { code: 'RUP-DBM-02', description: 'M.S. Distribution Box',  size: '800W × 800H × 250D mm' },
  { code: 'RUP-DBL-03', description: 'M.S. Distribution Box',  size: '1000W × 800H × 250D mm' },
  { code: 'RUP-DBEL-04', description: 'M.S. Distribution Box', size: '1000W × 1000H × 250D mm' },
];

// ── 5. Meter Box ──────────────────────────────────────────────────────────────
export const meterBox = [
  { code: 'RUP-1PHE-METER', description: 'Single Phase Energy Meter Box', size: '250W × 300H × 125D mm' },
  { code: 'RUP-3PHE-METER', description: 'Three Phase Energy Meter Box',  size: '380W × 390H × 145D mm' },
];

// ── 6. Generation Meter Box ───────────────────────────────────────────────────
export const generationMeterBox = [
  { code: 'RUP-GM01',   description: 'Generation Meter Box',                      size: '500W × 1000H × 350D mm' },
  { code: 'RUP-GMSM02', description: 'Generation Meter Box + MSEB Meter Box',     size: '1000W × 1000H × 350D mm' },
  { code: 'RUP-GMSM03', description: 'Generation Meter Box (Extended)',            size: '750W × 550H × 350D mm' },
];

// ── 7. Agriculture Box ────────────────────────────────────────────────────────
export const agricultureBox = [
  { code: 'RUP-AGS-01', description: 'Agriculture Box (Small)',    size: '300W × 400H × 175D mm' },
  { code: 'RUP-AGM-02', description: 'Agriculture Box (Medium)',   size: '400W × 500H × 175D mm' },
  { code: 'RUP-AGL-03', description: 'Agriculture Box (Large)',    size: '500W × 600H × 175D mm' },
];

// ── 8. Panel Box (Single Door) ────────────────────────────────────────────────
// All sizes are W×H×D in mm. Catalogue lists 15 standard sizes.
export const panelBox = [
  { code: 'RUP-010',  description: 'Single Door Panel Box', size: '200W × 200H × 150D mm' },
  { code: 'RUP-020',  description: 'Single Door Panel Box', size: '200W × 300H × 150D mm' },
  { code: 'RUP-030',  description: 'Single Door Panel Box', size: '250W × 300H × 150D mm' },
  { code: 'RUP-040',  description: 'Single Door Panel Box', size: '300W × 300H × 150D mm' },
  { code: 'RUP-050',  description: 'Single Door Panel Box', size: '300W × 300H × 200D mm' },
  { code: 'RUP-060',  description: 'Single Door Panel Box', size: '300W × 400H × 150D mm' },
  { code: 'RUP-070',  description: 'Single Door Panel Box', size: '300W × 400H × 200D mm' },
  { code: 'RUP-080',  description: 'Single Door Panel Box', size: '400W × 300H × 150D mm' },
  { code: 'RUP-090',  description: 'Single Door Panel Box', size: '400W × 300H × 200D mm' },
  { code: 'RUP-0100', description: 'Single Door Panel Box', size: '400W × 400H × 150D mm' },
  { code: 'RUP-0110', description: 'Single Door Panel Box', size: '400W × 400H × 200D mm' },
  { code: 'RUP-0120', description: 'Single Door Panel Box', size: '400W × 500H × 150D mm' },
  { code: 'RUP-0130', description: 'Single Door Panel Box', size: '400W × 500H × 200D mm' },
  { code: 'RUP-0140', description: 'Single Door Panel Box', size: '400W × 600H × 250D mm' },
  { code: 'RUP-0150', description: 'Single Door Panel Box', size: '500W × 600H × 200D mm' },
  // Customize size available on request
];

// ─────────────────────────────────────────────────────────────────────────────
// Grouped export for panel enclosures page (preserves existing page structure)
// ─────────────────────────────────────────────────────────────────────────────
export const panelEnclosures = {
  combiBox,
  evChargerBox,
  mcbBox,
  distributionBox,
  meterBox,
  generationMeterBox,
  agricultureBox,
  panelBox,
};

// ─────────────────────────────────────────────────────────────────────────────
// ── 9. G.I. Cable Tray with Cover ────────────────────────────────────────────
// Material: G.I. (Galvanized Iron). Length of each piece = 2500 mm (standard).
// Sizes as per catalogue: W × H × 2500L mm
// ─────────────────────────────────────────────────────────────────────────────
export const cableTrays = [
  { code: 'RUP-CT-5025',   description: 'G.I. Cable Tray with Cover', size: '50W × 25H × 2500L mm',   material: 'G.I.' },
  { code: 'RUP-CT-5050',   description: 'G.I. Cable Tray with Cover', size: '50W × 50H × 2500L mm',   material: 'G.I.' },
  { code: 'RUP-CT-7550',   description: 'G.I. Cable Tray with Cover', size: '75W × 50H × 2500L mm',   material: 'G.I.' },
  { code: 'RUP-CT-10050',  description: 'G.I. Cable Tray with Cover', size: '100W × 50H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-10075',  description: 'G.I. Cable Tray with Cover', size: '100W × 75H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-15050',  description: 'G.I. Cable Tray with Cover', size: '150W × 50H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-15075',  description: 'G.I. Cable Tray with Cover', size: '150W × 75H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-20050',  description: 'G.I. Cable Tray with Cover', size: '200W × 50H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-20075',  description: 'G.I. Cable Tray with Cover', size: '200W × 75H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-25050',  description: 'G.I. Cable Tray with Cover', size: '250W × 50H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-30050',  description: 'G.I. Cable Tray with Cover', size: '300W × 50H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-30075',  description: 'G.I. Cable Tray with Cover', size: '300W × 75H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-40050',  description: 'G.I. Cable Tray with Cover', size: '400W × 50H × 2500L mm',  material: 'G.I.' },
  { code: 'RUP-CT-40075',  description: 'G.I. Cable Tray with Cover', size: '400W × 75H × 2500L mm',  material: 'G.I.' },
];

// ─────────────────────────────────────────────────────────────────────────────
// ── 10. Industrial Storage Racks ─────────────────────────────────────────────
// All sizes from catalogue. Customized sizes available.
// ─────────────────────────────────────────────────────────────────────────────
export const storageRacks = [
  {
    code: 'RUP-SR-SLOTTED-01',
    description: 'Single Slotted Angle Rack',
    size: '4ft W × 8ft H × 2ft D  (1200W × 2440H × 600D mm)',
    material: 'Mild Steel',
    loadCapacity: 'As per design',
    shelves: 5,
    note: 'Customized size available',
  },
  {
    code: 'RUP-SR-SUPERSHOP-02',
    description: 'Super Shop Rack / Mall Rack',
    size: '3ft W × 7ft H × 1.5ft D  (900W × 2135H × 450D mm)',
    material: 'Mild Steel',
    loadCapacity: 'As per design',
    shelves: 5,
    note: 'Customized size available',
  },
  {
    code: 'RUP-SR-HARDWARE-03',
    description: 'Hardware Rack',
    size: '4ft W × 7ft H × 1ft D  (1200W × 2135H × 300D mm)',
    material: 'Mild Steel',
    loadCapacity: 'As per design',
    shelves: 5,
    note: 'Customized size available',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ── 11. Sheet Metal Fabrication Services ─────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export const fabricationServices = [
  {
    name: 'Laser Cutting',
    description: 'High-precision laser cutting for M.S., CRCA, and HRCA sheet metal to customer drawings.',
    icon: 'content_cut',
  },
  {
    name: 'CNC Shearing',
    description: 'Clean, burr-free straight cuts for large sheets using CNC shearing machines.',
    icon: 'straighten',
  },
  {
    name: 'Punching',
    description: 'Multi-tool CNC turret punching for complex hole patterns, louvres, and embossed shapes.',
    icon: 'radio_button_checked',
  },
  {
    name: 'Hydraulic & Automatic Bending',
    description: 'Precision angular bending of sheet metal components using hydraulic and CNC press brakes.',
    icon: 'swap_vert',
  },
  {
    name: 'CO₂ / MIG / TIG Welding',
    description: 'Structural and aesthetic welding by certified welders for robust assemblies.',
    icon: 'merge',
  },
  {
    name: 'In-House Powder Coating',
    description: 'Full in-house powder coating line — surface preparation, RAL colour matching, and quality inspection.',
    icon: 'format_paint',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ── 12. Manufacturing Process Steps ──────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export const processSteps = [
  { step: '01', title: 'Design',    subtitle: 'CAD / CAM Planning' },
  { step: '02', title: 'Cutting',   subtitle: 'Laser & Shearing' },
  { step: '03', title: 'Bending',   subtitle: 'CNC Press Brake' },
  { step: '04', title: 'Welding',   subtitle: 'MIG / TIG Assembly' },
  { step: '05', title: 'Finishing', subtitle: 'Powder Coating' },
  { step: '06', title: 'QC',        subtitle: 'Quality Check' },
  { step: '07', title: 'Dispatch',  subtitle: 'Delivery' },
];

// ─────────────────────────────────────────────────────────────────────────────
// ── 13. Machines ──────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export const machines = [
  {
    name: 'CNC Laser Cutting Machine (3KW, 1.5m × 3m)',
    category: 'Cutting',
    description: 'High-speed, burr-free cutting for complex geometries and varying sheet thicknesses.',
    image: '/images/facility/laser-cutting.webp',
  },
  {
    name: 'CNC Turret Punch',
    category: 'Punching',
    description: 'Multi-tool punching press for complex hole patterns, louvres, and embossing.',
    image: '/images/facility/turret-punch.webp',
  },
  {
    name: 'CNC Press Brake (1.5m)',
    category: 'Bending',
    description: 'Precision bending up to 3mm M.S. with back-gauge accuracy.',
    image: '/images/facility/press-brake-cnc.webp',
  },
  {
    name: 'NC Shearing Machine (3m, 5mm)',
    category: 'Cutting',
    description: 'Clean, straight shearing cuts on large sheets up to 5mm thickness.',
    image: '/images/facility/shearing.webp',
  },
  {
    name: 'NC Press Brake Machine (3m, 5mm)',
    category: 'Bending',
    description: 'Heavy-duty NC press brake for long sheet metal profiles.',
    image: '/images/facility/press-brake-nc.webp',
  },
  {
    name: 'Spot Welding Machine',
    category: 'Welding',
    description: 'Resistance spot welding for fast, consistent joints on sheet metal assemblies.',
    image: '/images/facility/spot-welding.webp',
  },
];

// Welding and surface finishing line (listed in the company profile)
export const finishingLine = [
  {
    name: 'MIG / TIG Welding Stations',
    category: 'Welding',
    description: 'Multiple welding bays with certified welders for structural & finish welding.',
    image: '/images/facility/co2-welding.webp',
  },
  {
    name: '7-Tank Pre-treatment Process',
    category: 'Finishing',
    description: 'Degreasing, rinsing and phosphating tanks that prepare parts before coating.',
    image: '/images/facility/pretreatment-tanks.webp',
  },
  {
    name: 'Powder Coating Booth',
    category: 'Finishing',
    description: 'In-house powder coating booth with powder recovery for an even finish.',
    image: '/images/facility/paint-booth.webp',
  },
  {
    name: 'Curing Oven',
    category: 'Finishing',
    description: 'Oven that cures the powder coat into a hard, durable finish.',
    image: '/images/facility/curing-oven.webp',
  },
];
