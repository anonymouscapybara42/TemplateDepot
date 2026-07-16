// src/data/templates.js
// ─────────────────────────────────────────────────────────────
// Single source of truth for the Template Depot product catalog.
//
// This module is plain ESM (no Astro-specific APIs), so it can be
// imported from BOTH:
//   • TemplateGrid.astro (server-side, to render the product cards)
//   • scripts/templateGrid.js (client-side, to power search, filtering,
//     the gallery, and the product detail modal)
//
// `templates` is the DEFAULT export. Everything else (contact config,
// tag-color helpers) remains a named export.
// ─────────────────────────────────────────────────────────────

// ── Site-wide contact config ──────────────────────────────────
export const MESSENGER_URL = 'https://m.me/61590735058749';
export const CONTACT_EMAIL = 'hello@templatedepot.com';

// ── Shared tag badge styles ─────────────────────────────────────
// Several products reuse the same tag label ("Best Seller", "New", …),
// so the bg/color pair for each tag is defined once here instead of
// being repeated on every product that uses it.
export const TAG_STYLES = {
  'Best Seller': { bg: 'rgba(0,95,115,0.10)',   color: '#005F73' },
  'New':         { bg: 'rgba(10,147,150,0.12)', color: '#0A9396' },
  'Popular':     { bg: 'rgba(47,62,70,0.10)',   color: '#2F3E46' },
  'Premium':     { bg: 'rgba(238,155,0,0.15)',  color: '#B87200' },
  'Bundle':      { bg: 'rgba(238,155,0,0.15)',  color: '#B87200' },
};

// Fallback badge style applied by the modal when a product has no tag
// (mirrors the original inline fallback: `t.tagBg || 'rgba(238,155,0,0.12)'`
// and `t.tagColor || '#9A6800'`).
export const DEFAULT_TAG_STYLE = { bg: 'rgba(238,155,0,0.12)', color: '#9A6800' };

/**
 * Looks up the { bg, color } style pair for a tag label.
 * Falls back to DEFAULT_TAG_STYLE for any tag not present in TAG_STYLES.
 */
export function getTagStyle(tag) {
  return TAG_STYLES[tag] ?? DEFAULT_TAG_STYLE;
}

/**
 * Builds the 4-image gallery for the 8 original hand-curated products,
 * from their numeric id, following the `/templates/t{id}-thumb.jpg`,
 * `-2.jpg`, `-3.jpg`, `-4.jpg` file-naming convention already in
 * public/templates/. The first entry doubles as the card thumbnail.
 *
 * Products imported from the full asset library (ids 9+) supply their
 * own `images` array directly instead (see PRODUCT_DEFINITIONS below),
 * since those assets live under public/template-assets/<folder>/ and
 * follow the original zip's own file names.
 */
function buildGalleryImages(id) {
  return [
    `/templates/t${id}-thumb.jpg`,
    `/templates/t${id}-2.jpg`,
    `/templates/t${id}-3.jpg`,
    `/templates/t${id}-4.jpg`,
  ];
}

// ── Raw product definitions ─────────────────────────────────────
// ids 1-8: the original hand-curated products — title, description,
//          pricing, and copy are preserved exactly as authored.
// ids 9-140: every remaining product folder from the source asset
//          library (public/template-assets/), one product per folder,
//          covering the full catalog. Title/category/price for these
//          are derived programmatically from each folder's own name
//          (see the generation notes at the bottom of this file) —
//          review and adjust copy/pricing for these before launch.
const PRODUCT_DEFINITIONS = [
  {
    id: 1,
    title: 'Business Proposal Kit',
    description: 'Complete 15-page proposal template with cover letter, pricing table, and terms section.',
    longDescription: `The Business Proposal Kit is everything you need to pitch clients with confidence. Includes a polished cover page, executive summary, detailed scope of work, professional pricing table, payment terms, and a signature section.\n\nEditable in Microsoft Word and Google Docs. Fonts are free and linked in the instruction file. Ideal for freelancers, consultants, and small business owners who want to look premium from day one.`,
    category: 'Business',
    price: '\u20B1299',
    tag: 'Best Seller',
    includes: [
      '15-page Word / Google Docs file',
      'Cover letter template',
      'Pricing table',
      'Payment terms section',
      'Instruction guide PDF',
    ],
    formats: ['DOCX', 'Google Docs'],
  },
  {
    id: 2,
    title: 'VA Client Dashboard',
    description: 'Notion-ready dashboard for virtual assistants to manage clients, tasks, and invoices.',
    longDescription: `Manage all your clients, tasks, deadlines, and invoices from a single Notion workspace. Built specifically for Filipino virtual assistants who juggle multiple clients at once.\n\nIncludes a master client tracker, per-client project boards, invoice log, time tracker, and a weekly planner. Duplicate into your Notion account in seconds.`,
    category: 'Productivity',
    price: '\u20B1249',
    tag: 'New',
    includes: [
      'Notion template link',
      'Client tracker database',
      'Invoice log',
      'Weekly planner',
      'Setup guide',
    ],
    formats: ['Notion'],
  },
  {
    id: 3,
    title: 'Real Estate Brochure Set',
    description: 'Canva-ready property listings, flyers, and social posts for realtors.',
    longDescription: `Stand out in a crowded market with this complete real estate marketing kit. Designed for Philippine real estate agents who need professional collateral fast.\n\nIncludes a 2-page property brochure, A4 listing flyer, open-house invite, and a set of 10 Instagram/Facebook post templates. All text, photos, and colors are fully editable in Canva.`,
    category: 'Marketing',
    price: '\u20B1279',
    tag: 'Popular',
    includes: [
      '2-page property brochure',
      'A4 listing flyer',
      'Open-house invite',
      '10 social media posts',
      'Canva link + guide',
    ],
    formats: ['Canva'],
  },
  {
    id: 4,
    title: 'Financial Advisor Deck',
    description: 'Professional PowerPoint presentation deck for FA client pitches and onboarding.',
    longDescription: `Close more clients with a presentation deck that looks like it came from a top financial firm. Built for insurance agents, investment advisors, and financial planners.\n\nIncludes a 20-slide PowerPoint template: intro/bio slide, market overview, product/plan comparison table, benefits breakdown, and a client onboarding flow. Fully editable in PowerPoint and Google Slides.`,
    category: 'Presentation',
    price: '\u20B1349',
    tag: 'Premium',
    includes: [
      '20-slide PowerPoint file',
      'Google Slides version',
      'Icon pack',
      'Font guide',
      'Instruction PDF',
    ],
    formats: ['PPTX', 'Google Slides'],
  },
  {
    id: 5,
    title: 'Freelancer Resume Pack',
    description: 'ATS-friendly resume + cover letter templates for creatives and tech professionals.',
    longDescription: `Get past the ATS filters and land interviews with a resume that is both machine-readable and visually polished. Includes two resume layouts (minimal + creative), a matching cover letter, and a LinkedIn banner.\n\nAll templates are editable in Microsoft Word and Google Docs. Instructions include tips on ATS keywords for Philippine job boards and international remote work platforms.`,
    category: 'Resume',
    price: '\u20B1229',
    tag: '', // No badge for this product — preserved intentionally.
    includes: [
      '2 resume layouts',
      'Cover letter template',
      'LinkedIn banner (Canva)',
      'ATS keyword guide',
      'DOCX + Google Docs',
    ],
    formats: ['DOCX', 'Google Docs', 'Canva'],
  },
  {
    id: 6,
    title: 'Professional Resume & CV Mega Pack',
    description: '60+ Canva templates for Instagram, Facebook, and LinkedIn — posts, stories, and reels.',
    longDescription: `Never run out of content ideas again. This massive kit gives you 60+ professionally designed Canva templates across all major formats and platforms.\n\nIncludes: 20 feed posts, 15 stories, 10 carousel slides, 10 reel covers, and 5 LinkedIn banners. All in the same cohesive brand style, fully customizable. Perfect for entrepreneurs, coaches, and small business owners.`,
    category: 'Social Media',
    price: '\u20B1399',
    tag: 'Best Seller',
    includes: [
      '20 feed post templates',
      '15 story templates',
      '10 carousel slides',
      '10 reel covers',
      '5 LinkedIn banners',
    ],
    formats: ['Canva'],
  },
  {
    id: 7,
    title: 'Financial Advisor Pitch Decks & Proposals',
    description: 'Clean HTML/CSS portfolio with a light theme — perfect for designers and developers.',
    longDescription: `A fully coded, responsive portfolio website you can deploy in minutes. Built with clean semantic HTML and modern CSS — no frameworks, no bloat, just fast and beautiful.\n\nIncludes: homepage, about section, projects grid, skills section, and contact form (static, no backend needed). Deploy free on Netlify, Vercel, or Hostinger. Instructions included.`,
    category: 'Website',
    price: '\u20B1499',
    tag: 'New',
    includes: [
      'HTML/CSS source files',
      'Responsive on all devices',
      'Projects grid',
      'Contact form (static)',
      'Deployment guide',
    ],
    formats: ['HTML/CSS', 'ZIP file'],
  },
  {
    id: 8,
    title: 'Small Business Starter Pack',
    description: 'Everything a small business needs: logo guide, invoices, receipts, and social templates.',
    longDescription: `The complete starter kit for Filipino entrepreneurs launching or rebranding a small business. Everything designed to work together as a cohesive brand system.\n\nIncludes: brand color & font guide, 3 invoice templates, 2 official receipt formats, business card layout, email signature template, and a 10-post social media kit. Editable in Canva, Word, and Google Docs.`,
    category: 'Business',
    price: '\u20B1599',
    tag: 'Bundle',
    includes: [
      'Brand guide (colors & fonts)',
      '3 invoice templates',
      '2 official receipt formats',
      'Business card layout',
      'Email signature + social kit',
    ],
    formats: ['Canva', 'DOCX', 'Google Docs'],
  },
  {
    id: 9,
    title: 'Realtor Cyan 30 Cover',
    description: '30-design Canva template set — realtor cyan 30 cover, ready to customize for your brand.',
    longDescription: `Realtor Cyan 30 Cover is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/03%20REALTOR%20CYAN%2030%20COVER%20WM/1.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20COVER%20WM/2.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20COVER%20WM/3.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20COVER%20WM/4.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20COVER%20WM/5.jpg',
    ],
  },
  {
    id: 10,
    title: 'Realtor Cyan 30 Portrait',
    description: '30-design Canva template set — realtor cyan 30 portrait, ready to customize for your brand.',
    longDescription: `Realtor Cyan 30 Portrait is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 11,
    title: 'Realtor Cyan 30 Story',
    description: '30-design Canva template set — realtor cyan 30 story, ready to customize for your brand.',
    longDescription: `Realtor Cyan 30 Story is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/03%20REALTOR%20CYAN%2030%20STORY%20WM/1.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20STORY%20WM/2.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20STORY%20WM/3.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20STORY%20WM/4.jpg',
      '/template-assets/03%20REALTOR%20CYAN%2030%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 12,
    title: 'Francis Deep Teal Real Estate White - 45 Home Maintenance Portrait',
    description: '45-design Canva template set — francis deep teal real estate white - 45 home maintenance portrait, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate White - 45 Home Maintenance Portrait is a ready-to-use Canva template set featuring 45 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1279',
    tag: '',
    includes: [
      '45-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/06%20FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/1.jpg',
      '/template-assets/06%20FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/2.jpg',
      '/template-assets/06%20FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/3.jpg',
      '/template-assets/06%20FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/4.jpg',
      '/template-assets/06%20FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 13,
    title: 'Real Estate Vivid Cyan - 15 Client Testimonial',
    description: '15-design Canva template set — real estate vivid cyan - 15 client testimonial, ready to customize for your brand.',
    longDescription: `Real Estate Vivid Cyan - 15 Client Testimonial is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/1.jpg',
      '/template-assets/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/2.jpg',
      '/template-assets/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/3.jpg',
      '/template-assets/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/4.jpg',
      '/template-assets/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/5.jpg',
    ],
  },
  {
    id: 14,
    title: 'Real Estate White - 100 Highlight Covers',
    description: '100-design Canva template set — real estate white - 100 highlight covers, ready to customize for your brand.',
    longDescription: `Real Estate White - 100 Highlight Covers is a ready-to-use Canva template set featuring 100 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1349',
    tag: '',
    includes: [
      '100-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 15,
    title: 'Abegail Deep Teal Real Estate White - 15 Market Update',
    description: '15-design Canva template set — abegail deep teal real estate white - 15 market update, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/5.jpg',
    ],
  },
  {
    id: 16,
    title: 'Abegail Deep Teal Real Estate White - 15 Market Update',
    description: '15-design Canva template set — abegail deep teal real estate white - 15 market update, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/5.jpg',
    ],
  },
  {
    id: 17,
    title: 'Abegail Deep Teal Real Estate White - 15 Meet the Team Square',
    description: '15-design Canva template set — abegail deep teal real estate white - 15 meet the team square, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Meet the Team Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 18,
    title: 'Abegail Deep Teal Real Estate White - 15 Meet the Team Story',
    description: '15-design Canva template set — abegail deep teal real estate white - 15 meet the team story, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Meet the Team Story is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 19,
    title: 'Abegail Deep Teal Real Estate White - 15 Meet the Team',
    description: '15-design Canva template set — abegail deep teal real estate white - 15 meet the team, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Meet the Team is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/5.jpg',
    ],
  },
  {
    id: 20,
    title: 'Abegail Deep Teal Real Estate White - 20 Reminders Story',
    description: '20-design Canva template set — abegail deep teal real estate white - 20 reminders story, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 20 Reminders Story is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 21,
    title: 'Abegail Deep Teal Real Estate White - 20 Reminders',
    description: '20-design Canva template set — abegail deep teal real estate white - 20 reminders, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 20 Reminders is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/5.jpg',
    ],
  },
  {
    id: 22,
    title: 'Abegail Deep Teal Real Estate White - 20 True or False Story',
    description: '20-design Canva template set — abegail deep teal real estate white - 20 true or false story, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 20 True or False Story is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 23,
    title: 'Abegail Deep Teal Real Estate White - 20 True or False',
    description: '20-design Canva template set — abegail deep teal real estate white - 20 true or false, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 20 True or False is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/5.jpg',
    ],
  },
  {
    id: 24,
    title: 'Abegail Deep Teal Real Estate White - 30 Fact and Fiction Story',
    description: '30-design Canva template set — abegail deep teal real estate white - 30 fact and fiction story, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 30 Fact and Fiction Story is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 25,
    title: 'Abegail Deep Teal Real Estate White - 30 Fact and Fiction',
    description: '30-design Canva template set — abegail deep teal real estate white - 30 fact and fiction, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 30 Fact and Fiction is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/5.jpg',
    ],
  },
  {
    id: 26,
    title: 'Abegail Deep Teal Real Estate White - 35 Terms to Know Story',
    description: '35-design Canva template set — abegail deep teal real estate white - 35 terms to know story, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 35 Terms to Know Story is a ready-to-use Canva template set featuring 35 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '35-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 27,
    title: 'Abegail Deep Teal Real Estate White - 35 Terms to Know',
    description: '35-design Canva template set — abegail deep teal real estate white - 35 terms to know, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 35 Terms to Know is a ready-to-use Canva template set featuring 35 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '35-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/5.jpg',
    ],
  },
  {
    id: 28,
    title: 'Abegail Deep Teal Real Estate White - 40 Quote of the Day Story',
    description: '40-design Canva template set — abegail deep teal real estate white - 40 quote of the day story, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 40 Quote of the Day Story is a ready-to-use Canva template set featuring 40 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1279',
    tag: '',
    includes: [
      '40-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/5.jpg',
    ],
  },
  {
    id: 29,
    title: 'Abegail Deep Teal Real Estate White - 40 Quote of the Day',
    description: '40-design Canva template set — abegail deep teal real estate white - 40 quote of the day, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 40 Quote of the Day is a ready-to-use Canva template set featuring 40 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1279',
    tag: '',
    includes: [
      '40-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/5.jpg',
    ],
  },
  {
    id: 30,
    title: 'Abegail Deep Teal Real Estate White - 15 Question and Answer Story',
    description: '15-design Canva template set — abegail deep teal real estate white - 15 question and answer story, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Question and Answer Story is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 31,
    title: 'Abegail Deep Teal Real Estate White - 15 Question and Answer',
    description: '15-design Canva template set — abegail deep teal real estate white - 15 question and answer, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Question and Answer is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/1.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/2.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/3.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/4.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/5.jpg',
    ],
  },
  {
    id: 32,
    title: 'Abegail Deep Teal of Real Estate Deep Teal- 15 Survey Question Story',
    description: '15-design Canva template set — abegail deep teal of real estate deep teal- 15 survey question story, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal of Real Estate Deep Teal- 15 Survey Question Story is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 33,
    title: 'Abegail Deep Teal of Real Estate Deep Teal- 15 Survey Question',
    description: '15-design Canva template set — abegail deep teal of real estate deep teal- 15 survey question, ready to customize for your brand.',
    longDescription: `Abegail Deep Teal of Real Estate Deep Teal- 15 Survey Question is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/1.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/2.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/3.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/4.jpg',
      '/template-assets/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/5.jpg',
    ],
  },
  {
    id: 34,
    title: 'Abegail Real Estate Mint - 30 Fun Facts & Statistics Story',
    description: '30-design Canva template set — abegail real estate mint - 30 fun facts & statistics story, ready to customize for your brand.',
    longDescription: `Abegail Real Estate Mint - 30 Fun Facts & Statistics Story is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 35,
    title: 'Abegail Real Estate Mint - 30 Fun Facts & Statistics',
    description: '30-design Canva template set — abegail real estate mint - 30 fun facts & statistics, ready to customize for your brand.',
    longDescription: `Abegail Real Estate Mint - 30 Fun Facts & Statistics is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/5.jpg',
    ],
  },
  {
    id: 36,
    title: 'Abegail Real Estate Deep Teal - 50 Listing Updates Portrait',
    description: '50-design Canva template set — abegail real estate deep teal - 50 listing updates portrait, ready to customize for your brand.',
    longDescription: `Abegail Real Estate Deep Teal - 50 Listing Updates Portrait is a ready-to-use Canva template set featuring 50 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1299',
    tag: '',
    includes: [
      '50-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 37,
    title: 'Abegail Real Estate Deep Teal- 20 Buyer and Seller Tips Story',
    description: '20-design Canva template set — abegail real estate deep teal- 20 buyer and seller tips story, ready to customize for your brand.',
    longDescription: `Abegail Real Estate Deep Teal- 20 Buyer and Seller Tips Story is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 38,
    title: 'Abegail Real Estate Deep Teal- 20 Buyer and Seller Tips',
    description: '20-design Canva template set — abegail real estate deep teal- 20 buyer and seller tips, ready to customize for your brand.',
    longDescription: `Abegail Real Estate Deep Teal- 20 Buyer and Seller Tips is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/5.jpg',
    ],
  },
  {
    id: 39,
    title: 'Abegail Real Estate White - 15 Client Testimonial Story',
    description: '15-design Canva template set — abegail real estate white - 15 client testimonial story, ready to customize for your brand.',
    longDescription: `Abegail Real Estate White - 15 Client Testimonial Story is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 40,
    title: 'Abegail Real Estate White - 15 Client Testimonial',
    description: '15-design Canva template set — abegail real estate white - 15 client testimonial, ready to customize for your brand.',
    longDescription: `Abegail Real Estate White - 15 Client Testimonial is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/5.jpg',
    ],
  },
  {
    id: 41,
    title: 'Abegail Real Estate White - 50 Listing Updates',
    description: '50-design Canva template set — abegail real estate white - 50 listing updates, ready to customize for your brand.',
    longDescription: `Abegail Real Estate White - 50 Listing Updates is a ready-to-use Canva template set featuring 50 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1299',
    tag: '',
    includes: [
      '50-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/5.jpg',
    ],
  },
  {
    id: 42,
    title: 'Abegail Realtor Deep Teal 30 Cover',
    description: '30-design Canva template set — abegail realtor deep teal 30 cover, ready to customize for your brand.',
    longDescription: `Abegail Realtor Deep Teal 30 Cover is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/5.jpg',
    ],
  },
  {
    id: 43,
    title: 'Abegail Realtor Deep Teal 30 Portrait',
    description: '30-design Canva template set — abegail realtor deep teal 30 portrait, ready to customize for your brand.',
    longDescription: `Abegail Realtor Deep Teal 30 Portrait is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 44,
    title: 'Abegail Realtor Deep Teal 30 Story',
    description: '30-design Canva template set — abegail realtor deep teal 30 story, ready to customize for your brand.',
    longDescription: `Abegail Realtor Deep Teal 30 Story is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/1.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/2.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/3.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/4.jpg',
      '/template-assets/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 45,
    title: 'Bruce Real Estate Teal- 15 Market Update Square',
    description: '15-design Canva template set — bruce real estate teal- 15 market update square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal- 15 Market Update Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 46,
    title: 'Bruce Real Estate Teal- 15 Market Update Stories',
    description: '15-design Canva template set — bruce real estate teal- 15 market update stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal- 15 Market Update Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 47,
    title: 'Bruce 08 Real Estate Teal - 30 Fact and Fiction Square',
    description: '08-design Canva template set — bruce 08 real estate teal - 30 fact and fiction square, ready to customize for your brand.',
    longDescription: `Bruce 08 Real Estate Teal - 30 Fact and Fiction Square is a ready-to-use Canva template set featuring 08 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1179',
    tag: '',
    includes: [
      '08-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%2008%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%2008%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%2008%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%2008%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%2008%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 48,
    title: 'Bruce Real Estate Cyan Gray - 40 Quote of the Day Square',
    description: '40-design Canva template set — bruce real estate cyan gray - 40 quote of the day square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyan Gray - 40 Quote of the Day Square is a ready-to-use Canva template set featuring 40 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1279',
    tag: '',
    includes: [
      '40-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 49,
    title: 'Bruce Real Estate Cyan White - 30 Fact and Fiction Square',
    description: '30-design Canva template set — bruce real estate cyan white - 30 fact and fiction square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyan White - 30 Fact and Fiction Square is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 50,
    title: 'Bruce Real Estate Cyan White - 30 Fun Facts & Statistics Square',
    description: '30-design Canva template set — bruce real estate cyan white - 30 fun facts & statistics square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyan White - 30 Fun Facts & Statistics Square is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 51,
    title: 'Bruce Real Estate Cyangray - 40 Quote of the Day Stories',
    description: '40-design Canva template set — bruce real estate cyangray - 40 quote of the day stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyangray - 40 Quote of the Day Stories is a ready-to-use Canva template set featuring 40 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1279',
    tag: '',
    includes: [
      '40-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 52,
    title: 'Bruce Real Estate Cyanmint - 35 Terms to Know Square',
    description: '35-design Canva template set — bruce real estate cyanmint - 35 terms to know square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyanmint - 35 Terms to Know Square is a ready-to-use Canva template set featuring 35 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '35-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 53,
    title: 'Bruce Real Estate Cyanmint - 35 Terms to Know Stories',
    description: '35-design Canva template set — bruce real estate cyanmint - 35 terms to know stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyanmint - 35 Terms to Know Stories is a ready-to-use Canva template set featuring 35 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '35-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 54,
    title: 'Bruce Real Estate Cyanmint - 45 Home Maintenance Square',
    description: '45-design Canva template set — bruce real estate cyanmint - 45 home maintenance square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyanmint - 45 Home Maintenance Square is a ready-to-use Canva template set featuring 45 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1279',
    tag: '',
    includes: [
      '45-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 55,
    title: 'Bruce Real Estate Cyanmint - 45 Home Maintenance Stories',
    description: '45-design Canva template set — bruce real estate cyanmint - 45 home maintenance stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyanmint - 45 Home Maintenance Stories is a ready-to-use Canva template set featuring 45 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1279',
    tag: '',
    includes: [
      '45-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 56,
    title: 'Bruce Real Estate Cyanwhite - 30 Fact and Fiction Stories',
    description: '30-design Canva template set — bruce real estate cyanwhite - 30 fact and fiction stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyanwhite - 30 Fact and Fiction Stories is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 57,
    title: 'Bruce Real Estate Cyanwhite - 30 Fun Facts & Statistics Stories',
    description: '30-design Canva template set — bruce real estate cyanwhite - 30 fun facts & statistics stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Cyanwhite - 30 Fun Facts & Statistics Stories is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 58,
    title: 'Bruce Real Estate Teal - 15 Client Testimonial Square',
    description: '15-design Canva template set — bruce real estate teal - 15 client testimonial square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 15 Client Testimonial Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 59,
    title: 'Bruce Real Estate Teal - 15 Client Testimonial Stories',
    description: '15-design Canva template set — bruce real estate teal - 15 client testimonial stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 15 Client Testimonial Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 60,
    title: 'Bruce Real Estate Teal - 15 Meet the Team Square',
    description: '15-design Canva template set — bruce real estate teal - 15 meet the team square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 15 Meet the Team Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 61,
    title: 'Bruce Real Estate Teal - 15 Meet the Team Stories',
    description: '15-design Canva template set — bruce real estate teal - 15 meet the team stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 15 Meet the Team Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 62,
    title: 'Bruce Real Estate Teal - 15 Question and Answer Square',
    description: '15-design Canva template set — bruce real estate teal - 15 question and answer square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 15 Question and Answer Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 63,
    title: 'Bruce Real Estate Teal - 15 Question and Answer Stories',
    description: '15-design Canva template set — bruce real estate teal - 15 question and answer stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 15 Question and Answer Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 64,
    title: 'Bruce Real Estate Teal - 20 Reminders Square',
    description: '20-design Canva template set — bruce real estate teal - 20 reminders square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 20 Reminders Square is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 65,
    title: 'Bruce Real Estate Teal - 20 Reminders Stories',
    description: '20-design Canva template set — bruce real estate teal - 20 reminders stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 20 Reminders Stories is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 66,
    title: 'Bruce Real Estate Teal - 20 Reminders',
    description: '20-design Canva template set — bruce real estate teal - 20 reminders, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 20 Reminders is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/5.jpg',
    ],
  },
  {
    id: 67,
    title: 'Bruce Real Estate Teal - 20 True or False',
    description: '20-design Canva template set — bruce real estate teal - 20 true or false, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 20 True or False is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/5.jpg',
    ],
  },
  {
    id: 68,
    title: 'Bruce Real Estate Teal - 30 Fact and Fiction',
    description: '30-design Canva template set — bruce real estate teal - 30 fact and fiction, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 30 Fact and Fiction is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/5.jpg',
    ],
  },
  {
    id: 69,
    title: 'Bruce Real Estate Teal - 30 Fun Facts & Statistics Square',
    description: '30-design Canva template set — bruce real estate teal - 30 fun facts & statistics square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 30 Fun Facts & Statistics Square is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 70,
    title: 'Bruce Real Estate Teal - 30 Fun Facts & Statistics',
    description: '30-design Canva template set — bruce real estate teal - 30 fun facts & statistics, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 30 Fun Facts & Statistics is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/5.jpg',
    ],
  },
  {
    id: 71,
    title: 'Bruce Real Estate Teal - 35 Terms to Know Square',
    description: '35-design Canva template set — bruce real estate teal - 35 terms to know square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 35 Terms to Know Square is a ready-to-use Canva template set featuring 35 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '35-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 72,
    title: 'Bruce Real Estate Teal - 35 Terms to Know',
    description: '35-design Canva template set — bruce real estate teal - 35 terms to know, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 35 Terms to Know is a ready-to-use Canva template set featuring 35 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '35-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/5.jpg',
    ],
  },
  {
    id: 73,
    title: 'Bruce Real Estate Teal - 40 Quote of the Day',
    description: '40-design Canva template set — bruce real estate teal - 40 quote of the day, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 40 Quote of the Day is a ready-to-use Canva template set featuring 40 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1279',
    tag: '',
    includes: [
      '40-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/5.jpg',
    ],
  },
  {
    id: 74,
    title: 'Bruce Real Estate Teal - 45 Home Maintenance Square',
    description: '45-design Canva template set — bruce real estate teal - 45 home maintenance square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 45 Home Maintenance Square is a ready-to-use Canva template set featuring 45 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1279',
    tag: '',
    includes: [
      '45-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 75,
    title: 'Bruce Real Estate Teal - 45 Home Maintenance',
    description: '45-design Canva template set — bruce real estate teal - 45 home maintenance, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 45 Home Maintenance is a ready-to-use Canva template set featuring 45 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1279',
    tag: '',
    includes: [
      '45-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/5.jpg',
    ],
  },
  {
    id: 76,
    title: 'Bruce Real Estate Teal - 50 Listing Updates',
    description: '50-design Canva template set — bruce real estate teal - 50 listing updates, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 50 Listing Updates is a ready-to-use Canva template set featuring 50 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1299',
    tag: '',
    includes: [
      '50-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/5.jpg',
    ],
  },
  {
    id: 77,
    title: 'Bruce Real Estate Teal 15 Survey Question Square',
    description: '15-design Canva template set — bruce real estate teal 15 survey question square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal 15 Survey Question Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 78,
    title: 'Bruce Real Estate Teal 15 Survey Question Stories',
    description: '15-design Canva template set — bruce real estate teal 15 survey question stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal 15 Survey Question Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 79,
    title: 'Bruce Real Estate Teal Amber - 20 Reminders Stories',
    description: '20-design Canva template set — bruce real estate teal amber - 20 reminders stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal Amber - 20 Reminders Stories is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 80,
    title: 'Bruce Real Estate Teal Gray - 15 Survey Question',
    description: '15-design Canva template set — bruce real estate teal gray - 15 survey question, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal Gray - 15 Survey Question is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/5.jpg',
    ],
  },
  {
    id: 81,
    title: 'Bruce Real Estate Teal Gray - 15 Survey Questions Square',
    description: '15-design Canva template set — bruce real estate teal gray - 15 survey questions square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal Gray - 15 Survey Questions Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 82,
    title: 'Bruce Real Estate Teal Mint - 15 Question and Answer',
    description: '15-design Canva template set — bruce real estate teal mint - 15 question and answer, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal Mint - 15 Question and Answer is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/5.jpg',
    ],
  },
  {
    id: 83,
    title: 'Bruce Real Estate Teal Mint - 20 Buyer and Seller Tips',
    description: '20-design Canva template set — bruce real estate teal mint - 20 buyer and seller tips, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal Mint - 20 Buyer and Seller Tips is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/5.jpg',
    ],
  },
  {
    id: 84,
    title: 'Bruce Real Estate Teal Mint - 20 Reminders Square',
    description: '20-design Canva template set — bruce real estate teal mint - 20 reminders square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal Mint - 20 Reminders Square is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 85,
    title: 'Bruce Real Estate Teal Mint- 20 True or False Square',
    description: '20-design Canva template set — bruce real estate teal mint- 20 true or false square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal Mint- 20 True or False Square is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 86,
    title: 'Bruce Real Estate Tealgray - 15 Survey Questions Stories',
    description: '15-design Canva template set — bruce real estate tealgray - 15 survey questions stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealgray - 15 Survey Questions Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALGRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALGRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALGRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALGRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALGRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 87,
    title: 'Bruce Real Estate Tealmint - 15 Question and Answer Square',
    description: '15-design Canva template set — bruce real estate tealmint - 15 question and answer square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealmint - 15 Question and Answer Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 88,
    title: 'Bruce Real Estate Tealmint - 15 Question and Answer Stories',
    description: '15-design Canva template set — bruce real estate tealmint - 15 question and answer stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealmint - 15 Question and Answer Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 89,
    title: 'Bruce Real Estate Tealmint - 20 Buyer and Seller Tips Square',
    description: '20-design Canva template set — bruce real estate tealmint - 20 buyer and seller tips square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealmint - 20 Buyer and Seller Tips Square is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 90,
    title: 'Bruce Real Estate Tealmint - 20 Buyer and Seller Tips Stories',
    description: '20-design Canva template set — bruce real estate tealmint - 20 buyer and seller tips stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealmint - 20 Buyer and Seller Tips Stories is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 91,
    title: 'Bruce Real Estate Tealmint - 50 Just Listed Updates Square',
    description: '50-design Canva template set — bruce real estate tealmint - 50 just listed updates square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealmint - 50 Just Listed Updates Square is a ready-to-use Canva template set featuring 50 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1299',
    tag: '',
    includes: [
      '50-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 92,
    title: 'Bruce Real Estate Tealmint - 50 Listing Updates Stories',
    description: '50-design Canva template set — bruce real estate tealmint - 50 listing updates stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealmint - 50 Listing Updates Stories is a ready-to-use Canva template set featuring 50 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1299',
    tag: '',
    includes: [
      '50-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 93,
    title: 'Bruce Real Estate Tealmint - 50 Open House Listing Updates Square',
    description: '50-design Canva template set — bruce real estate tealmint - 50 open house listing updates square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealmint - 50 Open House Listing Updates Square is a ready-to-use Canva template set featuring 50 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1299',
    tag: '',
    includes: [
      '50-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 94,
    title: 'Bruce Real Estate Tealmint- 20 True or False Stories',
    description: '20-design Canva template set — bruce real estate tealmint- 20 true or false stories, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Tealmint- 20 True or False Stories is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/1.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/2.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/3.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/4.jpg',
      '/template-assets/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 95,
    title: 'Champ Realtor Cyan - 30 Portrait',
    description: '30-design Canva template set — champ realtor cyan - 30 portrait, ready to customize for your brand.',
    longDescription: `Champ Realtor Cyan - 30 Portrait is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 96,
    title: 'Champ Realtor Cyan - 30 Square Posts',
    description: '30-design Canva template set — champ realtor cyan - 30 square posts, ready to customize for your brand.',
    longDescription: `Champ Realtor Cyan - 30 Square Posts is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/1.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/2.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/3.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/4.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/5.jpg',
    ],
  },
  {
    id: 97,
    title: 'Champ Realtor Cyan - 30 Story',
    description: '30-design Canva template set — champ realtor cyan - 30 story, ready to customize for your brand.',
    longDescription: `Champ Realtor Cyan - 30 Story is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/1.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/2.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/3.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/4.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 98,
    title: 'Champ Realtor Cyan- 30 Highlight Covers',
    description: '30-design Canva template set — champ realtor cyan- 30 highlight covers, ready to customize for your brand.',
    longDescription: `Champ Realtor Cyan- 30 Highlight Covers is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 99,
    title: 'Francis Deep Teal Real Estate Deep Teal- 15 Survey Question',
    description: '15-design Canva template set — francis deep teal real estate deep teal- 15 survey question, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate Deep Teal- 15 Survey Question is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/1.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/2.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/3.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/4.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/5.jpg',
    ],
  },
  {
    id: 100,
    title: 'Francis Deep Teal Real Estate White - 15 Market Update',
    description: '15-design Canva template set — francis deep teal real estate white - 15 market update, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate White - 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/1.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/2.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/3.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/4.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/5.jpg',
    ],
  },
  {
    id: 101,
    title: 'Francis Deep Teal Real Estate White - 15 Meet the Team',
    description: '15-design Canva template set — francis deep teal real estate white - 15 meet the team, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate White - 15 Meet the Team is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/1.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/2.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/3.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/4.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/5.jpg',
    ],
  },
  {
    id: 102,
    title: 'Francis Deep Teal Real Estate White - 15 Question and Answer',
    description: '15-design Canva template set — francis deep teal real estate white - 15 question and answer, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate White - 15 Question and Answer is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/1.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/2.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/3.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/4.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/5.jpg',
    ],
  },
  {
    id: 103,
    title: 'Francis Deep Teal Real Estate White - 20 Reminders',
    description: '20-design Canva template set — francis deep teal real estate white - 20 reminders, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate White - 20 Reminders is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/1.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/2.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/3.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/4.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/5.jpg',
    ],
  },
  {
    id: 104,
    title: 'Francis Deep Teal Real Estate White - 20 True or False',
    description: '20-design Canva template set — francis deep teal real estate white - 20 true or false, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate White - 20 True or False is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/1.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/2.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/3.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/4.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/5.jpg',
    ],
  },
  {
    id: 105,
    title: 'Francis Deep Teal Real Estate White - 30 Fact and Fiction',
    description: '30-design Canva template set — francis deep teal real estate white - 30 fact and fiction, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate White - 30 Fact and Fiction is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/1.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/2.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/3.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/4.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/5.jpg',
    ],
  },
  {
    id: 106,
    title: 'Francis Deep Teal Real Estate White - 35 Terms to Know',
    description: '35-design Canva template set — francis deep teal real estate white - 35 terms to know, ready to customize for your brand.',
    longDescription: `Francis Deep Teal Real Estate White - 35 Terms to Know is a ready-to-use Canva template set featuring 35 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '35-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/1.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/2.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/3.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/4.jpg',
      '/template-assets/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/5.jpg',
    ],
  },
  {
    id: 107,
    title: 'Francis Real Estate Mint - 30 Fun Facts & Statistics',
    description: '30-design Canva template set — francis real estate mint - 30 fun facts & statistics, ready to customize for your brand.',
    longDescription: `Francis Real Estate Mint - 30 Fun Facts & Statistics is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/1.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/2.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/3.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/4.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/5.jpg',
    ],
  },
  {
    id: 108,
    title: 'Francis Real Estate Cyan Mint - 100 Highlight Covers',
    description: '100-design Canva template set — francis real estate cyan mint - 100 highlight covers, ready to customize for your brand.',
    longDescription: `Francis Real Estate Cyan Mint - 100 Highlight Covers is a ready-to-use Canva template set featuring 100 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1349',
    tag: '',
    includes: [
      '100-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 109,
    title: 'Francis Real Estate Deep Teal- 20 Buyer and Seller Tips',
    description: '20-design Canva template set — francis real estate deep teal- 20 buyer and seller tips, ready to customize for your brand.',
    longDescription: `Francis Real Estate Deep Teal- 20 Buyer and Seller Tips is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/1.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/2.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/3.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/4.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/5.jpg',
    ],
  },
  {
    id: 110,
    title: 'Francis Real Estate White - 15 Client Testimonial',
    description: '15-design Canva template set — francis real estate white - 15 client testimonial, ready to customize for your brand.',
    longDescription: `Francis Real Estate White - 15 Client Testimonial is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/1.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/2.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/3.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/4.jpg',
      '/template-assets/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/5.jpg',
    ],
  },
  {
    id: 111,
    title: 'Francis Realtor Cyan Amber - 30 Highlight Covers',
    description: '30-design Canva template set — francis realtor cyan amber - 30 highlight covers, ready to customize for your brand.',
    longDescription: `Francis Realtor Cyan Amber - 30 Highlight Covers is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 112,
    title: 'Francis Realtor Cyan Gray - 30 Story Posts',
    description: '30-design Canva template set — francis realtor cyan gray - 30 story posts, ready to customize for your brand.',
    longDescription: `Francis Realtor Cyan Gray - 30 Story Posts is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/1.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/2.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/3.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/4.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/5.jpg',
    ],
  },
  {
    id: 113,
    title: 'Francis Realtor Cyangray - 30 Square Posts',
    description: '30-design Canva template set — francis realtor cyangray - 30 square posts, ready to customize for your brand.',
    longDescription: `Francis Realtor Cyangray - 30 Square Posts is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/FRANCIS%20REALTOR%20CYANGRAY%20-%2030%20SQUARE%20POSTS%20WM/1.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYANGRAY%20-%2030%20SQUARE%20POSTS%20WM/2.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYANGRAY%20-%2030%20SQUARE%20POSTS%20WM/3.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYANGRAY%20-%2030%20SQUARE%20POSTS%20WM/4.jpg',
      '/template-assets/FRANCIS%20REALTOR%20CYANGRAY%20-%2030%20SQUARE%20POSTS%20WM/5.jpg',
    ],
  },
  {
    id: 114,
    title: 'Ingrid Real Estate Cyan Mint - 15 Market Update Square',
    description: '15-design Canva template set — ingrid real estate cyan mint - 15 market update square, ready to customize for your brand.',
    longDescription: `Ingrid Real Estate Cyan Mint - 15 Market Update Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/1.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/2.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/3.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/4.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 115,
    title: 'Ingrid Real Estate Cyan Mint - 15 Market Update Stories',
    description: '15-design Canva template set — ingrid real estate cyan mint - 15 market update stories, ready to customize for your brand.',
    longDescription: `Ingrid Real Estate Cyan Mint - 15 Market Update Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/1.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/2.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/3.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/4.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 116,
    title: 'Ingrid Real Estate Cyan Mint - 15 Market Update',
    description: '15-design Canva template set — ingrid real estate cyan mint - 15 market update, ready to customize for your brand.',
    longDescription: `Ingrid Real Estate Cyan Mint - 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/1.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/2.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/3.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/4.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/5.jpg',
    ],
  },
  {
    id: 117,
    title: 'Ingrid Real Estate Deep Teal - 15 Meet the Team Square',
    description: '15-design Canva template set — ingrid real estate deep teal - 15 meet the team square, ready to customize for your brand.',
    longDescription: `Ingrid Real Estate Deep Teal - 15 Meet the Team Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/1.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/2.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/3.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/4.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 118,
    title: 'Ingrid Real Estate Deep Teal - 15 Meet the Team Stories',
    description: '15-design Canva template set — ingrid real estate deep teal - 15 meet the team stories, ready to customize for your brand.',
    longDescription: `Ingrid Real Estate Deep Teal - 15 Meet the Team Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/1.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/2.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/3.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/4.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 119,
    title: 'Ingrid Real Estate Deep Teal - 15 Meet the Team',
    description: '15-design Canva template set — ingrid real estate deep teal - 15 meet the team, ready to customize for your brand.',
    longDescription: `Ingrid Real Estate Deep Teal - 15 Meet the Team is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/1.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/2.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/3.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/4.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/5.jpg',
    ],
  },
  {
    id: 120,
    title: 'Ingrid Real Estate Vivid Cyan - 15 Client Testimonial Square',
    description: '15-design Canva template set — ingrid real estate vivid cyan - 15 client testimonial square, ready to customize for your brand.',
    longDescription: `Ingrid Real Estate Vivid Cyan - 15 Client Testimonial Square is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/1.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/2.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/3.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/4.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 121,
    title: 'Ingrid Real Estate Vivid Cyan - 15 Client Testimonial Stories',
    description: '15-design Canva template set — ingrid real estate vivid cyan - 15 client testimonial stories, ready to customize for your brand.',
    longDescription: `Ingrid Real Estate Vivid Cyan - 15 Client Testimonial Stories is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/1.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/2.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/3.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/4.jpg',
      '/template-assets/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 122,
    title: 'Real Estate Teal- 15 Meet the Team',
    description: '15-design Canva template set — real estate teal- 15 meet the team, ready to customize for your brand.',
    longDescription: `Real Estate Teal- 15 Meet the Team is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/5.jpg',
    ],
  },
  {
    id: 123,
    title: 'Real Estate Cyangray - 40 Quote of the Day',
    description: '40-design Canva template set — real estate cyangray - 40 quote of the day, ready to customize for your brand.',
    longDescription: `Real Estate Cyangray - 40 Quote of the Day is a ready-to-use Canva template set featuring 40 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1279',
    tag: '',
    includes: [
      '40-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/5.jpg',
    ],
  },
  {
    id: 124,
    title: 'Real Estate Cyanmint - 35 Terms to Know',
    description: '35-design Canva template set — real estate cyanmint - 35 terms to know, ready to customize for your brand.',
    longDescription: `Real Estate Cyanmint - 35 Terms to Know is a ready-to-use Canva template set featuring 35 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '35-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20WM/5.jpg',
    ],
  },
  {
    id: 125,
    title: 'Real Estate Cyanmint - 45 Home Maintenance',
    description: '45-design Canva template set — real estate cyanmint - 45 home maintenance, ready to customize for your brand.',
    longDescription: `Real Estate Cyanmint - 45 Home Maintenance is a ready-to-use Canva template set featuring 45 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1279',
    tag: '',
    includes: [
      '45-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/5.jpg',
    ],
  },
  {
    id: 126,
    title: 'Real Estate Cyanwhite - 30 Fact and Fiction',
    description: '30-design Canva template set — real estate cyanwhite - 30 fact and fiction, ready to customize for your brand.',
    longDescription: `Real Estate Cyanwhite - 30 Fact and Fiction is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/5.jpg',
    ],
  },
  {
    id: 127,
    title: 'Real Estate Cyanwhite - 30 Fun Facts & Statistics',
    description: '30-design Canva template set — real estate cyanwhite - 30 fun facts & statistics, ready to customize for your brand.',
    longDescription: `Real Estate Cyanwhite - 30 Fun Facts & Statistics is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20CYANWHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/5.jpg',
    ],
  },
  {
    id: 128,
    title: 'Real Estate Teal - 100 Highlight Covers',
    description: '100-design Canva template set — real estate teal - 100 highlight covers, ready to customize for your brand.',
    longDescription: `Real Estate Teal - 100 Highlight Covers is a ready-to-use Canva template set featuring 100 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1349',
    tag: '',
    includes: [
      '100-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 129,
    title: 'Real Estate Teal - 15 Client Testimonial',
    description: '15-design Canva template set — real estate teal - 15 client testimonial, ready to customize for your brand.',
    longDescription: `Real Estate Teal - 15 Client Testimonial is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/5.jpg',
    ],
  },
  {
    id: 130,
    title: 'Real Estate Teal - 15 Question and Answer',
    description: '15-design Canva template set — real estate teal - 15 question and answer, ready to customize for your brand.',
    longDescription: `Real Estate Teal - 15 Question and Answer is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/5.jpg',
    ],
  },
  {
    id: 131,
    title: 'Real Estate Teal - 20 Reminders',
    description: '20-design Canva template set — real estate teal - 20 reminders, ready to customize for your brand.',
    longDescription: `Real Estate Teal - 20 Reminders is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/5.jpg',
    ],
  },
  {
    id: 132,
    title: 'Real Estate Teal 15 Survey Question',
    description: '15-design Canva template set — real estate teal 15 survey question, ready to customize for your brand.',
    longDescription: `Real Estate Teal 15 Survey Question is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/5.jpg',
    ],
  },
  {
    id: 133,
    title: 'Real Estate Teal- 15 Market Update',
    description: '15-design Canva template set — real estate teal- 15 market update, ready to customize for your brand.',
    longDescription: `Real Estate Teal- 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1199',
    tag: '',
    includes: [
      '15-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/5.jpg',
    ],
  },
  {
    id: 134,
    title: 'Real Estate Tealmint- 20 True or False',
    description: '20-design Canva template set — real estate tealmint- 20 true or false, ready to customize for your brand.',
    longDescription: `Real Estate Tealmint- 20 True or False is a ready-to-use Canva template set featuring 20 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Marketing',
    price: '\u20B1219',
    tag: '',
    includes: [
      '20-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/5.jpg',
    ],
  },
  {
    id: 135,
    title: 'Realtor Cyan- 30 Portrait Posts',
    description: '30-design Canva template set — realtor cyan- 30 portrait posts, ready to customize for your brand.',
    longDescription: `Realtor Cyan- 30 Portrait Posts is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/1.jpg',
      '/template-assets/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/2.jpg',
      '/template-assets/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/3.jpg',
      '/template-assets/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/4.jpg',
      '/template-assets/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/5.jpg',
    ],
  },
  {
    id: 136,
    title: 'Realtor Teal - 30 Highlight Covers',
    description: '30-design Canva template set — realtor teal - 30 highlight covers, ready to customize for your brand.',
    longDescription: `Realtor Teal - 30 Highlight Covers is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 137,
    title: 'Realtor Teal 30 Portrait',
    description: '30-design Canva template set — realtor teal 30 portrait, ready to customize for your brand.',
    longDescription: `Realtor Teal 30 Portrait is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REALTOR%20TEAL%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 138,
    title: 'Realtor Teal 30 Squares',
    description: '30-design Canva template set — realtor teal 30 squares, ready to customize for your brand.',
    longDescription: `Realtor Teal 30 Squares is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REALTOR%20TEAL%2030%20SQUARES%20WM/1.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20SQUARES%20WM/2.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20SQUARES%20WM/3.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20SQUARES%20WM/4.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20SQUARES%20WM/5.jpg',
    ],
  },
  {
    id: 139,
    title: 'Realtor Teal 30 Story',
    description: '30-design Canva template set — realtor teal 30 story, ready to customize for your brand.',
    longDescription: `Realtor Teal 30 Story is a ready-to-use Canva template set featuring 30 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1249',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/REALTOR%20TEAL%2030%20STORY%20WM/1.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20STORY%20WM/2.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20STORY%20WM/3.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20STORY%20WM/4.jpg',
      '/template-assets/REALTOR%20TEAL%2030%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 140,
    title: 'Bruce Real Estate Teal - 40 Quote of the Day Square',
    description: '40-design Canva template set — bruce real estate teal - 40 quote of the day square, ready to customize for your brand.',
    longDescription: `Bruce Real Estate Teal - 40 Quote of the Day Square is a ready-to-use Canva template set featuring 40 individual designs. Preview samples are shown here; the full set is delivered as an editable Canva link after purchase.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes. No design experience needed.`,
    category: 'Social Media',
    price: '\u20B1279',
    tag: '',
    includes: [
      '40-design Canva pack',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/_BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/1.jpg',
      '/template-assets/_BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/2.jpg',
      '/template-assets/_BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/3.jpg',
      '/template-assets/_BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/4.jpg',
      '/template-assets/_BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/5.jpg',
    ],
  }
];

/**
 * Fully hydrated product catalog: each raw definition above is expanded
 * with its computed thumbnail, image gallery, and tag badge colors — so
 * TemplateCard.astro, ProductModal.astro, and templateGrid.js can all
 * consume `templates` directly without recomputing any of this.
 *
 * A product with an empty `tag` (e.g. id 5, and all auto-generated
 * ids 9+) intentionally receives empty `tagBg`/`tagColor` strings,
 * matching the original data shape exactly (the card and modal both
 * treat a falsy tag as "no badge").
 *
 * Products that already define their own `images` array (ids 9+, whose
 * assets live in public/template-assets/) use that array as-is; the
 * original 8 (ids 1-8) fall back to buildGalleryImages(id), unchanged
 * from before.
 */
const templates = PRODUCT_DEFINITIONS.map((product) => {
  const { bg: tagBg, color: tagColor } = product.tag
    ? getTagStyle(product.tag)
    : { bg: '', color: '' };

  const images = product.images ?? buildGalleryImages(product.id);

  return {
    ...product,
    tagBg,
    tagColor,
    thumbnail: images[0],
    images,
  };
});

export default templates;
