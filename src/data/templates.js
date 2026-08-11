// src/data/templates.js
// ─────────────────────────────────────────────────────────────
// Single source of truth for the Template Depot product catalog.
//
// Full launch catalog: 160 products total.
//   • ids 1-15:   Resume template sets (CV + matching cover letter pairs)
//   • id 16:      Boho VA Portfolio Website
//   • id 17:      Financial Coaching Content Pack
//   • id 18:      GCash & Maya Budget Tracker
//   • ids 19-24:  Real Estate templates with sample photos pre-styled in
//   • ids 25-160: Full Real Estate content library, organized by topic
//                 (Buyer & Seller Tips, Client Testimonial, Fact & Fiction,
//                 Fun Facts & Statistics, Home Maintenance, Listing Updates,
//                 Market Update, Meet the Team, Question & Answer,
//                 Quote of the Day, Realtor branding sets, Reminders,
//                 Survey Questions, Terms to Know, True or False) —
//                 each with multiple designer/colorway variants.
//
// This module is plain ESM (no Astro-specific APIs), so it can be
// imported from BOTH:
//   • TemplateGrid.astro (server-side, to render the product cards)
//   • scripts/templateGrid.js (client-side, to power search, filtering,
//     the gallery, and the product detail modal)
//
// `templates` is the DEFAULT export. Everything else (contact config,
// tag-color helpers) remains a named export.
//
// NOTE on auto-derived copy: with 160 products, titles/descriptions/
// prices for ids 16+ were generated programmatically from each source
// folder's own name and pack-size rather than hand-written per item.
// Review and adjust copy/pricing before final launch if needed.
// ─────────────────────────────────────────────────────────────

// ── Site-wide contact config ──────────────────────────────────
export const MESSENGER_URL = 'https://m.me/61590735058749';
export const CONTACT_EMAIL = 'hello@templatedepot.com';

// ── Shared tag badge styles ─────────────────────────────────────
// Kept available for any product you want to manually highlight later
// (e.g. set `tag: 'Best Seller'` on a specific product once you know
// which ones actually sell well).
export const TAG_STYLES = {
  'Best Seller': { bg: 'rgba(0,95,115,0.10)',   color: '#005F73' },
  'New':         { bg: 'rgba(10,147,150,0.12)', color: '#0A9396' },
  'Popular':     { bg: 'rgba(47,62,70,0.10)',   color: '#2F3E46' },
  'Premium':     { bg: 'rgba(238,155,0,0.15)',  color: '#B87200' },
  'Bundle':      { bg: 'rgba(238,155,0,0.15)',  color: '#B87200' },
};

// Fallback badge style applied by the modal when a product has no tag.
export const DEFAULT_TAG_STYLE = { bg: 'rgba(238,155,0,0.12)', color: '#9A6800' };

/**
 * Looks up the { bg, color } style pair for a tag label.
 * Falls back to DEFAULT_TAG_STYLE for any tag not present in TAG_STYLES.
 */
export function getTagStyle(tag) {
  return TAG_STYLES[tag] ?? DEFAULT_TAG_STYLE;
}

// ── Raw product definitions ─────────────────────────────────────
// Every `images` array points directly at its already-optimized JPEG
// files under public/template-assets/ (URL-encoded paths, since many
// source folder names contain spaces).
const PRODUCT_DEFINITIONS = [
{
    id: 1,
    title: 'Resume Template Set 1',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 1 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/1/1.jpg',
      '/template-assets/RESUMES/1/2.jpg',
    ],
  },
  {
    id: 2,
    title: 'Resume Template Set 2',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 2 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/2/1.jpg',
      '/template-assets/RESUMES/2/2.jpg',
    ],
  },
  {
    id: 3,
    title: 'Resume Template Set 3',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 3 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/3/1.jpg',
      '/template-assets/RESUMES/3/2.jpg',
    ],
  },
  {
    id: 4,
    title: 'Resume Template Set 4',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 4 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/4/1.jpg',
      '/template-assets/RESUMES/4/2.jpg',
    ],
  },
  {
    id: 5,
    title: 'Resume Template Set 5',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 5 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/5/1.jpg',
      '/template-assets/RESUMES/5/2.jpg',
    ],
  },
  {
    id: 6,
    title: 'Resume Template Set 6',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 6 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/6/1.jpg',
      '/template-assets/RESUMES/6/2.jpg',
    ],
  },
  {
    id: 7,
    title: 'Resume Template Set 7',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 7 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/7/1.jpg',
      '/template-assets/RESUMES/7/2.jpg',
    ],
  },
  {
    id: 8,
    title: 'Resume Template Set 8',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 8 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/8/1.jpg',
      '/template-assets/RESUMES/8/2.jpg',
    ],
  },
  {
    id: 9,
    title: 'Resume Template Set 201',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 201 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/201/1.jpg',
      '/template-assets/RESUMES/201/2.jpg',
    ],
  },
  {
    id: 10,
    title: 'Resume Template Set 202',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 202 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/202/1.jpg',
      '/template-assets/RESUMES/202/2.jpg',
    ],
  },
  {
    id: 11,
    title: 'Resume Template Set 203',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 203 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/203/1.jpg',
      '/template-assets/RESUMES/203/2.jpg',
    ],
  },
  {
    id: 12,
    title: 'Resume Template Set 204',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 204 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/204/1.jpg',
      '/template-assets/RESUMES/204/2.jpg',
    ],
  },
  {
    id: 13,
    title: 'Resume Template Set 205',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 205 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/205/1.jpg',
      '/template-assets/RESUMES/205/2.jpg',
    ],
  },
  {
    id: 14,
    title: 'Resume Template Set 401',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 401 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/401/1.jpg',
      '/template-assets/RESUMES/401/2.jpg',
    ],
  },
  {
    id: 15,
    title: 'Resume Template Set 402',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 402 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Resume',
    price: '\u20B1149',
    tag: '',
    includes: [
      'CV template',
      'Matching cover letter template',
      'Editable file (Word/Canva)',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/402/1.jpg',
      '/template-assets/RESUMES/402/2.jpg',
    ],
  },
{
    id: 16,
    title: 'Boho VA Portfolio Website',
    description: 'A fully designed portfolio website template for virtual assistants, boho-styled and ready to launch.',
    longDescription: `A complete portfolio website template designed specifically for virtual assistants who want a polished online presence. Includes Home, About Me, Services, Packages and Pricing, and Work Experience pages.

Soft boho styling with warm, professional tones. Fully editable to match your own brand and services.`,
    category: 'Website',
    price: '\u20B1349',
    tag: '',
    includes: [
      'Home page',
      'About Me page',
      'Services page',
      'Packages & Pricing page',
      'Work Experience page',
    ],
    formats: ['Canva', 'Website template'],
    images: [
      '/template-assets/BOHO%20VA%20PORTFOLIO%20WEBSITE%20WM/1.jpg',
      '/template-assets/BOHO%20VA%20PORTFOLIO%20WEBSITE%20WM/2.jpg',
      '/template-assets/BOHO%20VA%20PORTFOLIO%20WEBSITE%20WM/3.jpg',
      '/template-assets/BOHO%20VA%20PORTFOLIO%20WEBSITE%20WM/4.jpg',
      '/template-assets/BOHO%20VA%20PORTFOLIO%20WEBSITE%20WM/5.jpg',
    ],
  },
  {
    id: 17,
    title: 'Financial Coaching Content Pack',
    description: 'Ready-to-use financial coaching carousel content, editable in Canva.',
    longDescription: `A set of financial coaching content templates designed to help coaches and advisors share bite-sized budgeting and money tips on social media or in presentations.

Fully editable text, colors, and layout in Canva — just add your own voice and branding.`,
    category: 'Presentation',
    price: '\u20B1229',
    tag: '',
    includes: [
      '5 content templates',
      'Canva template link',
      'Basic usage guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/Financial%20Coaching%20WM/1.jpg',
      '/template-assets/Financial%20Coaching%20WM/2.jpg',
      '/template-assets/Financial%20Coaching%20WM/3.jpg',
      '/template-assets/Financial%20Coaching%20WM/4.jpg',
      '/template-assets/Financial%20Coaching%20WM/5.jpg',
    ],
  },
  {
    id: 18,
    title: 'GCash & Maya Budget Tracker',
    description: 'A simple digital tracker for logging GCash and Maya transactions and budgets.',
    longDescription: `Stay on top of your GCash and Maya spending with this ready-to-use digital tracker. Log income, expenses, and savings goals in one clean, easy-to-read layout.

Great for freelancers, small business owners, or anyone who wants a simple way to track e-wallet spending without a complicated spreadsheet.`,
    category: 'Productivity',
    price: '\u20B1179',
    tag: '',
    includes: [
      'Digital tracker template',
      'Editable in Canva/Sheets',
      'Setup guide',
    ],
    formats: ['Canva'],
    images: [
      '/template-assets/GCASHMAYA%20TRACKER%20WM/1.jpg',
      '/template-assets/GCASHMAYA%20TRACKER%20WM/2.jpg',
      '/template-assets/GCASHMAYA%20TRACKER%20WM/3.jpg',
      '/template-assets/GCASHMAYA%20TRACKER%20WM/4.jpg',
    ],
  },
  {
    id: 19,
    title: 'Realtor Cyan - 30 Portrait (With Sample Photos)',
    description: 'Realtor social template set with real estate photo placements already styled in — just swap in your own photos.',
    longDescription: `Realtor Cyan - 30 Portrait (With Sample Photos) comes pre-styled with sample real estate photography so you can see exactly how your own listing photos will look once dropped in.

Fully editable in Canva — swap photos, update text, and adjust colors to match your brand in minutes.`,
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
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/5.jpg',
    ],
  },
  {
    id: 20,
    title: 'Realtor Cyan - 30 Square Posts (With Sample Photos)',
    description: 'Realtor social template set with real estate photo placements already styled in — just swap in your own photos.',
    longDescription: `Realtor Cyan - 30 Square Posts (With Sample Photos) comes pre-styled with sample real estate photography so you can see exactly how your own listing photos will look once dropped in.

Fully editable in Canva — swap photos, update text, and adjust colors to match your brand in minutes.`,
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
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/5.jpg',
    ],
  },
  {
    id: 21,
    title: 'Realtor Cyan - 30 Story (With Sample Photos)',
    description: 'Realtor social template set with real estate photo placements already styled in — just swap in your own photos.',
    longDescription: `Realtor Cyan - 30 Story (With Sample Photos) comes pre-styled with sample real estate photography so you can see exactly how your own listing photos will look once dropped in.

Fully editable in Canva — swap photos, update text, and adjust colors to match your brand in minutes.`,
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
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/5.jpg',
    ],
  },
  {
    id: 22,
    title: 'Realtor Teal 30 Portrait (With Sample Photos)',
    description: 'Realtor social template set with real estate photo placements already styled in — just swap in your own photos.',
    longDescription: `Realtor Teal 30 Portrait (With Sample Photos) comes pre-styled with sample real estate photography so you can see exactly how your own listing photos will look once dropped in.

Fully editable in Canva — swap photos, update text, and adjust colors to match your brand in minutes.`,
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
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/5.jpg',
    ],
  },
  {
    id: 23,
    title: 'Realtor Teal 30 Squares (With Sample Photos)',
    description: 'Realtor social template set with real estate photo placements already styled in — just swap in your own photos.',
    longDescription: `Realtor Teal 30 Squares (With Sample Photos) comes pre-styled with sample real estate photography so you can see exactly how your own listing photos will look once dropped in.

Fully editable in Canva — swap photos, update text, and adjust colors to match your brand in minutes.`,
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
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/5.jpg',
    ],
  },
  {
    id: 24,
    title: 'Realtor Teal 30 Story (With Sample Photos)',
    description: 'Realtor social template set with real estate photo placements already styled in — just swap in your own photos.',
    longDescription: `Realtor Teal 30 Story (With Sample Photos) comes pre-styled with sample real estate photography so you can see exactly how your own listing photos will look once dropped in.

Fully editable in Canva — swap photos, update text, and adjust colors to match your brand in minutes.`,
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
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/5.jpg',
    ],
  },
  {
    id: 25,
    title: 'Abegail Real Estate Deep Teal- 20 Buyer and Seller Tips Story',
    description: 'Buyer And Seller Tips template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Real Estate Deep Teal- 20 Buyer and Seller Tips Story is a ready-to-use Canva template set featuring 20 individual designs, part of our Buyer And Seller Tips collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 26,
    title: 'Abegail Real Estate Deep Teal- 20 Buyer and Seller Tips',
    description: 'Buyer And Seller Tips template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Real Estate Deep Teal- 20 Buyer and Seller Tips is a ready-to-use Canva template set featuring 20 individual designs, part of our Buyer And Seller Tips collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/5.jpg',
    ],
  },
  {
    id: 27,
    title: 'Bruce Real Estate Teal Mint - 20 Buyer and Seller Tips',
    description: 'Buyer And Seller Tips template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Mint - 20 Buyer and Seller Tips is a ready-to-use Canva template set featuring 20 individual designs, part of our Buyer And Seller Tips collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/5.jpg',
    ],
  },
  {
    id: 28,
    title: 'Bruce Real Estate Tealmint - 20 Buyer and Seller Tips Square',
    description: 'Buyer And Seller Tips template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Tealmint - 20 Buyer and Seller Tips Square is a ready-to-use Canva template set featuring 20 individual designs, part of our Buyer And Seller Tips collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 29,
    title: 'Bruce Real Estate Tealmint - 20 Buyer and Seller Tips Stories',
    description: 'Buyer And Seller Tips template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Tealmint - 20 Buyer and Seller Tips Stories is a ready-to-use Canva template set featuring 20 individual designs, part of our Buyer And Seller Tips collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 30,
    title: 'Francis Real Estate Deep Teal- 20 Buyer and Seller Tips',
    description: 'Buyer And Seller Tips template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Real Estate Deep Teal- 20 Buyer and Seller Tips is a ready-to-use Canva template set featuring 20 individual designs, part of our Buyer And Seller Tips collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/FRANCIS%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20WM/5.jpg',
    ],
  },
  {
    id: 31,
    title: 'Real Estate Vivid Cyan - 15 Client Testimonial',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Vivid Cyan - 15 Client Testimonial is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/08%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20WM/5.jpg',
    ],
  },
  {
    id: 32,
    title: 'Abegail Real Estate White - 15 Client Testimonial Story',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Real Estate White - 15 Client Testimonial Story is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 33,
    title: 'Abegail Real Estate White - 15 Client Testimonial',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Real Estate White - 15 Client Testimonial is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/5.jpg',
    ],
  },
  {
    id: 34,
    title: 'Bruce Real Estate Teal - 15 Client Testimonial Square',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 15 Client Testimonial Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 35,
    title: 'Bruce Real Estate Teal - 15 Client Testimonial Stories',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 15 Client Testimonial Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 36,
    title: 'Francis Real Estate White - 15 Client Testimonial',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Real Estate White - 15 Client Testimonial is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/FRANCIS%20REAL%20ESTATE%20WHITE%20-%2015%20CLIENT%20TESTIMONIAL%20WM/5.jpg',
    ],
  },
  {
    id: 37,
    title: 'Ingrid Real Estate Vivid Cyan - 15 Client Testimonial Square',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Ingrid Real Estate Vivid Cyan - 15 Client Testimonial Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 38,
    title: 'Ingrid Real Estate Vivid Cyan - 15 Client Testimonial Stories',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Ingrid Real Estate Vivid Cyan - 15 Client Testimonial Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/INGRID%20REAL%20ESTATE%20VIVID%20CYAN%20-%2015%20CLIENT%20TESTIMONIAL%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 39,
    title: 'Real Estate Teal - 15 Client Testimonial',
    description: 'Client Testimonial template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Teal - 15 Client Testimonial is a ready-to-use Canva template set featuring 15 individual designs, part of our Client Testimonial collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/CLIENT%20TESTIMONIAL/REAL%20ESTATE%20TEAL%20-%2015%20CLIENT%20TESTIMONIAL%20WM/5.jpg',
    ],
  },
  {
    id: 40,
    title: 'Abegail Deep Teal Real Estate White - 30 Fact and Fiction Story',
    description: 'Fact And Fiction template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 30 Fact and Fiction Story is a ready-to-use Canva template set featuring 30 individual designs, part of our Fact And Fiction collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 41,
    title: 'Abegail Deep Teal Real Estate White - 30 Fact and Fiction',
    description: 'Fact And Fiction template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 30 Fact and Fiction is a ready-to-use Canva template set featuring 30 individual designs, part of our Fact And Fiction collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/5.jpg',
    ],
  },
  {
    id: 42,
    title: 'Bruce Real Estate Cyan White - 30 Fact and Fiction Square',
    description: 'Fact And Fiction template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyan White - 30 Fact and Fiction Square is a ready-to-use Canva template set featuring 30 individual designs, part of our Fact And Fiction collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 43,
    title: 'Bruce Real Estate Cyanwhite - 30 Fact and Fiction Stories',
    description: 'Fact And Fiction template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyanwhite - 30 Fact and Fiction Stories is a ready-to-use Canva template set featuring 30 individual designs, part of our Fact And Fiction collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 44,
    title: 'Bruce Real Estate Teal - 30 Fact and Fiction Square',
    description: 'Fact And Fiction template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 30 Fact and Fiction Square is a ready-to-use Canva template set featuring 30 individual designs, part of our Fact And Fiction collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 45,
    title: 'Bruce Real Estate Teal - 30 Fact and Fiction',
    description: 'Fact And Fiction template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 30 Fact and Fiction is a ready-to-use Canva template set featuring 30 individual designs, part of our Fact And Fiction collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FACT%20AND%20FICTION%20WM/5.jpg',
    ],
  },
  {
    id: 46,
    title: 'Francis Deep Teal Real Estate White - 30 Fact and Fiction',
    description: 'Fact And Fiction template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 30 Fact and Fiction is a ready-to-use Canva template set featuring 30 individual designs, part of our Fact And Fiction collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2030%20FACT%20AND%20FICTION%20WM/5.jpg',
    ],
  },
  {
    id: 47,
    title: 'Real Estate Cyanwhite - 30 Fact and Fiction',
    description: 'Fact And Fiction template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Cyanwhite - 30 Fact and Fiction is a ready-to-use Canva template set featuring 30 individual designs, part of our Fact And Fiction collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FACT%20AND%20FICTION/REAL%20ESTATE%20CYANWHITE%20-%2030%20FACT%20AND%20FICTION%20WM/5.jpg',
    ],
  },
  {
    id: 48,
    title: 'Abegail Real Estate Mint - 30 Fun Facts & Statistics Story',
    description: 'Fun Facts & Statistics template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Real Estate Mint - 30 Fun Facts & Statistics Story is a ready-to-use Canva template set featuring 30 individual designs, part of our Fun Facts & Statistics collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 49,
    title: 'Abegail Real Estate Mint - 30 Fun Facts & Statistics',
    description: 'Fun Facts & Statistics template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Real Estate Mint - 30 Fun Facts & Statistics is a ready-to-use Canva template set featuring 30 individual designs, part of our Fun Facts & Statistics collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/ABEGAIL%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/5.jpg',
    ],
  },
  {
    id: 50,
    title: 'Bruce Real Estate Cyan White - 30 Fun Facts & Statistics Square',
    description: 'Fun Facts & Statistics template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyan White - 30 Fun Facts & Statistics Square is a ready-to-use Canva template set featuring 30 individual designs, part of our Fun Facts & Statistics collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 51,
    title: 'Bruce Real Estate Cyan White - 30 Fun Facts & Statistics Stories',
    description: 'Fun Facts & Statistics template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyan White - 30 Fun Facts & Statistics Stories is a ready-to-use Canva template set featuring 30 individual designs, part of our Fun Facts & Statistics collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 52,
    title: 'Bruce Real Estate Teal - 30 Fun Facts & Statistics Square',
    description: 'Fun Facts & Statistics template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 30 Fun Facts & Statistics Square is a ready-to-use Canva template set featuring 30 individual designs, part of our Fun Facts & Statistics collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 53,
    title: 'Bruce Real Estate Teal - 30 Fun Facts & Statistics',
    description: 'Fun Facts & Statistics template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 30 Fun Facts & Statistics is a ready-to-use Canva template set featuring 30 individual designs, part of our Fun Facts & Statistics collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/5.jpg',
    ],
  },
  {
    id: 54,
    title: 'Francis Real Estate Mint - 30 Fun Facts & Statistics',
    description: 'Fun Facts & Statistics template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Real Estate Mint - 30 Fun Facts & Statistics is a ready-to-use Canva template set featuring 30 individual designs, part of our Fun Facts & Statistics collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/FRANCIS%20REAL%20ESTATE%20%20MINT%20%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/5.jpg',
    ],
  },
  {
    id: 55,
    title: 'Real Estate Cyan White - 30 Fun Facts & Statistics',
    description: 'Fun Facts & Statistics template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Cyan White - 30 Fun Facts & Statistics is a ready-to-use Canva template set featuring 30 individual designs, part of our Fun Facts & Statistics collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/FUN%20FACTS%20%26%20STATISTICS/REAL%20ESTATE%20CYAN%20WHITE%20-%2030%20FUN%20FACTS%20%26%20STATISTICS%20WM/5.jpg',
    ],
  },
  {
    id: 56,
    title: 'Bruce Real Estate Cyan Mint - 45 Home Maintenance Square',
    description: 'Home Maintenance template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyan Mint - 45 Home Maintenance Square is a ready-to-use Canva template set featuring 45 individual designs, part of our Home Maintenance collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 57,
    title: 'Bruce Real Estate Cyan Mint - 45 Home Maintenance Stories',
    description: 'Home Maintenance template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyan Mint - 45 Home Maintenance Stories is a ready-to-use Canva template set featuring 45 individual designs, part of our Home Maintenance collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20CYAN%20MINT%20-%2045%20HOME%20MAINTENANCE%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 58,
    title: 'Bruce Real Estate Teal - 45 Home Maintenance Square',
    description: 'Home Maintenance template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 45 Home Maintenance Square is a ready-to-use Canva template set featuring 45 individual designs, part of our Home Maintenance collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 59,
    title: 'Bruce Real Estate Teal - 45 Home Maintenance',
    description: 'Home Maintenance template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 45 Home Maintenance is a ready-to-use Canva template set featuring 45 individual designs, part of our Home Maintenance collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2045%20HOME%20MAINTENANCE%20WM/5.jpg',
    ],
  },
  {
    id: 60,
    title: 'Francis Deep Teal Real Estate White - 45 Home Maintenance Portrait',
    description: 'Home Maintenance template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 45 Home Maintenance Portrait is a ready-to-use Canva template set featuring 45 individual designs, part of our Home Maintenance collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2045%20HOME%20MAINTENANCE%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 61,
    title: 'Real Estate Cyanmint - 45 Home Maintenance',
    description: 'Home Maintenance template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Cyanmint - 45 Home Maintenance is a ready-to-use Canva template set featuring 45 individual designs, part of our Home Maintenance collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/HOME%20MAINTENANCE/REAL%20ESTATE%20CYANMINT%20-%2045%20HOME%20MAINTENANCE%20WM/5.jpg',
    ],
  },
  {
    id: 62,
    title: 'Abegail Real Estate Deep Teal - 50 Listing Updates Portrait',
    description: 'Listing Updates template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Real Estate Deep Teal - 50 Listing Updates Portrait is a ready-to-use Canva template set featuring 50 individual designs, part of our Listing Updates collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL%20-%2050%20LISTING%20UPDATES%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 63,
    title: 'Abegail Real Estate White - 50 Listing Updates',
    description: 'Listing Updates template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Real Estate White - 50 Listing Updates is a ready-to-use Canva template set featuring 50 individual designs, part of our Listing Updates collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/ABEGAIL%20REAL%20ESTATE%20WHITE%20-%2050%20LISTING%20UPDATES%20WM/5.jpg',
    ],
  },
  {
    id: 64,
    title: 'Bruce Real Estate Teal - 50 Listing Updates',
    description: 'Listing Updates template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 50 Listing Updates is a ready-to-use Canva template set featuring 50 individual designs, part of our Listing Updates collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20-%2050%20LISTING%20UPDATES%20WM/5.jpg',
    ],
  },
  {
    id: 65,
    title: 'Bruce Real Estate Teal Mint - 50 Listing Updates',
    description: 'Listing Updates template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Mint - 50 Listing Updates is a ready-to-use Canva template set featuring 50 individual designs, part of our Listing Updates collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2050%20LISTING%20UPDATES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2050%20LISTING%20UPDATES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2050%20LISTING%20UPDATES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2050%20LISTING%20UPDATES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2050%20LISTING%20UPDATES%20WM/5.jpg',
    ],
  },
  {
    id: 66,
    title: 'Bruce Real Estate Tealmint - 50 Just Listed Updates Square',
    description: 'Listing Updates template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Tealmint - 50 Just Listed Updates Square is a ready-to-use Canva template set featuring 50 individual designs, part of our Listing Updates collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20JUST%20LISTED%20UPDATES%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 67,
    title: 'Bruce Real Estate Tealmint - 50 Listing Updates Stories',
    description: 'Listing Updates template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Tealmint - 50 Listing Updates Stories is a ready-to-use Canva template set featuring 50 individual designs, part of our Listing Updates collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20LISTING%20UPDATES%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 68,
    title: 'Bruce Real Estate Tealmint - 50 Open House Listing Updates Square',
    description: 'Listing Updates template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Tealmint - 50 Open House Listing Updates Square is a ready-to-use Canva template set featuring 50 individual designs, part of our Listing Updates collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/LISTING%20UPDATES/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2050%20OPEN%20HOUSE%20LISTING%20UPDATES%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 69,
    title: 'Abegail Deep Teal Real Estate White - 15 Market Update',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20VM/5.jpg',
    ],
  },
  {
    id: 70,
    title: 'Abegail Deep Teal Real Estate White - 15 Market Update',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/5.jpg',
    ],
  },
  {
    id: 71,
    title: 'Bruce Real Estate Teal- 15 Market Update Square',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal- 15 Market Update Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 72,
    title: 'Bruce Real Estate Teal- 15 Market Update Stories',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal- 15 Market Update Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/BRUCE%20%20REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 73,
    title: 'Francis Deep Teal Real Estate White - 15 Market Update',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MARKET%20UPDATE%20WM/5.jpg',
    ],
  },
  {
    id: 74,
    title: 'Ingrid Real Estate Cyan Mint - 15 Market Update Square',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Ingrid Real Estate Cyan Mint - 15 Market Update Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 75,
    title: 'Ingrid Real Estate Cyan Mint - 15 Market Update Stories',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Ingrid Real Estate Cyan Mint - 15 Market Update Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 76,
    title: 'Ingrid Real Estate Cyan Mint - 15 Market Update',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Ingrid Real Estate Cyan Mint - 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/INGRID%20REAL%20ESTATE%20CYAN%20MINT%20-%2015%20MARKET%20UPDATE%20WM/5.jpg',
    ],
  },
  {
    id: 77,
    title: 'Real Estate Teal- 15 Market Update',
    description: 'Market Update template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Teal- 15 Market Update is a ready-to-use Canva template set featuring 15 individual designs, part of our Market Update collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MARKET%20UPDATE/REAL%20ESTATE%20TEAL-%2015%20MARKET%20UPDATE%20WM/5.jpg',
    ],
  },
  {
    id: 78,
    title: 'Abegail Deep Teal Real Estate White - 15 Meet the Team Square',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Meet the Team Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 79,
    title: 'Abegail Deep Teal Real Estate White - 15 Meet the Team Story',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Meet the Team Story is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 80,
    title: 'Abegail Deep Teal Real Estate White - 15 Meet the Team',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Meet the Team is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/5.jpg',
    ],
  },
  {
    id: 81,
    title: 'Bruce Real Estate Teal - 15 Meet the Team Square',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 15 Meet the Team Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 82,
    title: 'Bruce Real Estate Teal - 15 Meet the Team Stories',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 15 Meet the Team Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 83,
    title: 'Francis Deep Teal Real Estate White - 15 Meet the Team',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 15 Meet the Team is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20MEET%20THE%20TEAM%20WM/5.jpg',
    ],
  },
  {
    id: 84,
    title: 'Ingrid Real Estate Deep Teal - 15 Meet the Team Square',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Ingrid Real Estate Deep Teal - 15 Meet the Team Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 85,
    title: 'Ingrid Real Estate Deep Teal - 15 Meet the Team Stories',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Ingrid Real Estate Deep Teal - 15 Meet the Team Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 86,
    title: 'Ingrid Real Estate Deep Teal - 15 Meet the Team',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Ingrid Real Estate Deep Teal - 15 Meet the Team is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/INGRID%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20MEET%20THE%20TEAM%20WM/5.jpg',
    ],
  },
  {
    id: 87,
    title: 'Real Estate Teal- 15 Meet the Team',
    description: 'Meet The Team template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Teal- 15 Meet the Team is a ready-to-use Canva template set featuring 15 individual designs, part of our Meet The Team collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/MEET%20THE%20TEAM/REAL%20ESTATE%20%20TEAL-%2015%20MEET%20THE%20TEAM%20WM/5.jpg',
    ],
  },
  {
    id: 88,
    title: 'Abegail Deep Teal Real Estate White - 15 Question and Answer Story',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Question and Answer Story is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 89,
    title: 'Abegail Deep Teal Real Estate White - 15 Question and Answer',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 15 Question and Answer is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/ABEGAIL%20Deep%20Teal%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/5.jpg',
    ],
  },
  {
    id: 90,
    title: 'Bruce Real Estate Teal - 15 Question and Answer Square',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 15 Question and Answer Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 91,
    title: 'Bruce Real Estate Teal - 15 Question and Answer Stories',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 15 Question and Answer Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 92,
    title: 'Bruce Real Estate Teal Mint - 15 Question and Answer',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Mint - 15 Question and Answer is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2015%20QUESTION%20AND%20ANSWER%20WM/5.jpg',
    ],
  },
  {
    id: 93,
    title: 'Bruce Real Estate Tealmint - 15 Question and Answer Square',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Tealmint - 15 Question and Answer Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 94,
    title: 'Bruce Real Estate Tealmint - 15 Question and Answer Stories',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Tealmint - 15 Question and Answer Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/BRUCE%20REAL%20ESTATE%20TEALMINT%20-%2015%20QUESTION%20AND%20ANSWER%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 95,
    title: 'Francis Deep Teal Real Estate White - 15 Question and Answer',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 15 Question and Answer is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2015%20QUESTION%20AND%20ANSWER%20WM/5.jpg',
    ],
  },
  {
    id: 96,
    title: 'Real Estate Teal - 15 Question and Answer',
    description: 'Question And Answer template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Teal - 15 Question and Answer is a ready-to-use Canva template set featuring 15 individual designs, part of our Question And Answer collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUESTION%20AND%20ANSWER/REAL%20ESTATE%20TEAL%20-%2015%20QUESTION%20AND%20ANSWER%20WM/5.jpg',
    ],
  },
  {
    id: 97,
    title: 'Abegail Deep Teal Real Estate White - 40 Quote of the Day Story',
    description: 'Quote Of The Day template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 40 Quote of the Day Story is a ready-to-use Canva template set featuring 40 individual designs, part of our Quote Of The Day collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/1.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/2.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/3.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/4.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORY/5.jpg',
    ],
  },
  {
    id: 98,
    title: 'Abegail Deep Teal Real Estate White - 40 Quote of the Day',
    description: 'Quote Of The Day template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 40 Quote of the Day is a ready-to-use Canva template set featuring 40 individual designs, part of our Quote Of The Day collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/5.jpg',
    ],
  },
  {
    id: 99,
    title: 'Bruce Real Estate Cyan Gray - 40 Quote of the Day Square',
    description: 'Quote Of The Day template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyan Gray - 40 Quote of the Day Square is a ready-to-use Canva template set featuring 40 individual designs, part of our Quote Of The Day collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 100,
    title: 'Bruce Real Estate Cyangray - 40 Quote of the Day Stories',
    description: 'Quote Of The Day template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyangray - 40 Quote of the Day Stories is a ready-to-use Canva template set featuring 40 individual designs, part of our Quote Of The Day collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20CYANGRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 101,
    title: 'Bruce Real Estate Teal - 40 Quote of the Day Square',
    description: 'Quote Of The Day template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 40 Quote of the Day Square is a ready-to-use Canva template set featuring 40 individual designs, part of our Quote Of The Day collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 102,
    title: 'Bruce Real Estate Teal - 40 Quote of the Day',
    description: 'Quote Of The Day template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 40 Quote of the Day is a ready-to-use Canva template set featuring 40 individual designs, part of our Quote Of The Day collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/BRUCE%20REAL%20ESTATE%20TEAL%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/5.jpg',
    ],
  },
  {
    id: 103,
    title: 'Francis Deep Teal Real Estate White - 40 Quote of the Day',
    description: 'Quote Of The Day template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 40 Quote of the Day is a ready-to-use Canva template set featuring 40 individual designs, part of our Quote Of The Day collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/5.jpg',
    ],
  },
  {
    id: 104,
    title: 'Real Estate Cyan Gray - 40 Quote of the Day',
    description: 'Quote Of The Day template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Cyan Gray - 40 Quote of the Day is a ready-to-use Canva template set featuring 40 individual designs, part of our Quote Of The Day collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/QUOTE%20OF%20THE%20DAY/REAL%20ESTATE%20CYAN%20GRAY%20-%2040%20QUOTE%20OF%20THE%20DAY%20WM/5.jpg',
    ],
  },
  {
    id: 105,
    title: 'Realtor Cyan 30 Cover',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Cyan 30 Cover is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20COVER%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20COVER%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20COVER%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20COVER%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20COVER%20WM/5.jpg',
    ],
  },
  {
    id: 106,
    title: 'Realtor Cyan 30 Portrait',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Cyan 30 Portrait is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 107,
    title: 'Realtor Cyan 30 Squares',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Cyan 30 Squares is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20SQUARES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20SQUARES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20SQUARES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20SQUARES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20SQUARES%20WM/5.jpg',
    ],
  },
  {
    id: 108,
    title: 'Realtor Cyan 30 Story',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Cyan 30 Story is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 109,
    title: 'Real Estate White - 100 Highlight Covers',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate White - 100 Highlight Covers is a ready-to-use Canva template set featuring 100 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/08%20REAL%20ESTATE%20WHITE%20-%20100%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 110,
    title: 'Abegail Realtor Deep Teal 30 Cover',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Realtor Deep Teal 30 Cover is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20COVER%20WM/5.jpg',
    ],
  },
  {
    id: 111,
    title: 'Abegail Realtor Deep Teal 30 Portrait',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Realtor Deep Teal 30 Portrait is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 112,
    title: 'Abegail Realtor Deep Teal 30 Squares',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Realtor Deep Teal 30 Squares is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20SQUARES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20SQUARES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20SQUARES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20SQUARES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20SQUARES%20WM/5.jpg',
    ],
  },
  {
    id: 113,
    title: 'Abegail Realtor Deep Teal 30 Story',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Realtor Deep Teal 30 Story is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 114,
    title: 'Champ Realtor Cyan - 30 Portrait',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Champ Realtor Cyan - 30 Portrait is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 115,
    title: 'Champ Realtor Cyan - 30 Square Posts',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Champ Realtor Cyan - 30 Square Posts is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS%20WM/5.jpg',
    ],
  },
  {
    id: 116,
    title: 'Champ Realtor Cyan - 30 Story',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Champ Realtor Cyan - 30 Story is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN%20-%2030%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 117,
    title: 'Champ Realtor Cyan- 30 Highlight Covers',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Champ Realtor Cyan- 30 Highlight Covers is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/CHAMP%20REALTOR%20CYAN-%2030%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 118,
    title: 'Francis Real Estate Cyan Mint - 100 Highlight Covers',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Real Estate Cyan Mint - 100 Highlight Covers is a ready-to-use Canva template set featuring 100 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REAL%20ESTATE%20CYAN%20MINT%20-%20100%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 119,
    title: 'Francis Realtor Cyan Amber - 30 Highlight Covers',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Realtor Cyan Amber - 30 Highlight Covers is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20AMBER%20-%2030%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 120,
    title: 'Francis Realtor Cyan Gray - 30 Square Posts',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Realtor Cyan Gray - 30 Square Posts is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20SQUARE%20POSTS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20SQUARE%20POSTS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20SQUARE%20POSTS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20SQUARE%20POSTS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20SQUARE%20POSTS%20WM/5.jpg',
    ],
  },
  {
    id: 121,
    title: 'Francis Realtor Cyan Gray - 30 Story Posts',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Realtor Cyan Gray - 30 Story Posts is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/FRANCIS%20REALTOR%20CYAN%20GRAY%20-%2030%20STORY%20POSTS%20WM/5.jpg',
    ],
  },
  {
    id: 122,
    title: 'Real Estate Teal - 100 Highlight Covers',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Teal - 100 Highlight Covers is a ready-to-use Canva template set featuring 100 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REAL%20ESTATE%20TEAL%20-%20100%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 123,
    title: 'Realtor Cyan- 30 Portrait Posts',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Cyan- 30 Portrait Posts is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/5.jpg',
    ],
  },
  {
    id: 124,
    title: 'Realtor Teal - 30 Highlight Covers',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Teal - 30 Highlight Covers is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%20-%2030%20HIGHLIGHT%20COVERS%20WM/5.jpg',
    ],
  },
  {
    id: 125,
    title: 'Realtor Teal 30 Portrait',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Teal 30 Portrait is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 126,
    title: 'Realtor Teal 30 Squares',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Teal 30 Squares is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20SQUARES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20SQUARES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20SQUARES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20SQUARES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20SQUARES%20WM/5.jpg',
    ],
  },
  {
    id: 127,
    title: 'Realtor Teal 30 Story',
    description: 'Realtor template set for real estate professionals, fully editable in Canva.',
    longDescription: `Realtor Teal 30 Story is a ready-to-use Canva template set featuring 30 individual designs, part of our Realtor collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 128,
    title: 'Abegail Deep Teal Real Estate White - 20 Reminders Story',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 20 Reminders Story is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 129,
    title: 'Abegail Deep Teal Real Estate White - 20 Reminders',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 20 Reminders is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/5.jpg',
    ],
  },
  {
    id: 130,
    title: 'Bruce Real Estate Teal - 20 Reminders Portrait',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 20 Reminders Portrait is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20PORTRAIT%20WM/5.jpg',
    ],
  },
  {
    id: 131,
    title: 'Bruce Real Estate Teal - 20 Reminders Square',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 20 Reminders Square is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 132,
    title: 'Bruce Real Estate Teal - 20 Reminders Stories',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 20 Reminders Stories is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 133,
    title: 'Bruce Real Estate Teal Amber - 20 Reminders Stories',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Amber - 20 Reminders Stories is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20AMBER%20-%2020%20REMINDERS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 134,
    title: 'Bruce Real Estate Teal Mint - 20 Reminders Square',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Mint - 20 Reminders Square is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/BRUCE%20REAL%20ESTATE%20TEAL%20MINT%20-%2020%20REMINDERS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 135,
    title: 'Francis Deep Teal Real Estate White - 20 Reminders',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 20 Reminders is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20REMINDERS%20WM/5.jpg',
    ],
  },
  {
    id: 136,
    title: 'Real Estate Teal - 20 Reminders',
    description: 'Reminders template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Teal - 20 Reminders is a ready-to-use Canva template set featuring 20 individual designs, part of our Reminders collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/REMINDERS/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REMINDERS/REAL%20ESTATE%20TEAL%20-%2020%20REMINDERS%20WM/5.jpg',
    ],
  },
  {
    id: 137,
    title: 'Abegail Deep Teal of Real Estate Deep Teal - 15 Survey Question',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal of Real Estate Deep Teal - 15 Survey Question is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20SURVEY%20QUESTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20SURVEY%20QUESTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20SURVEY%20QUESTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20SURVEY%20QUESTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-%2015%20SURVEY%20QUESTION%20WM/5.jpg',
    ],
  },
  {
    id: 138,
    title: 'Abegail Deep Teal of Real Estate Deep Teal -15 Survey Question Story',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal of Real Estate Deep Teal -15 Survey Question Story is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-15%20SURVEY%20QUESTION%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-15%20SURVEY%20QUESTION%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-15%20SURVEY%20QUESTION%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-15%20SURVEY%20QUESTION%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/ABEGAIL%20Deep%20Teal%20of%20REAL%20ESTATE%20DEEP%20TEAL%20-15%20SURVEY%20QUESTION%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 139,
    title: 'Bruce Real Estate Teal 15 Survey Question Square',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal 15 Survey Question Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 140,
    title: 'Bruce Real Estate Teal 15 Survey Question Stories',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal 15 Survey Question Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 141,
    title: 'Bruce Real Estate Teal 15 Survey Question',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal 15 Survey Question is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%2015%20SURVEY%20QUESTION%20WM/5.jpg',
    ],
  },
  {
    id: 142,
    title: 'Bruce Real Estate Teal Gray - 15 Survey Question',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Gray - 15 Survey Question is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTION%20WM/5.jpg',
    ],
  },
  {
    id: 143,
    title: 'Bruce Real Estate Teal Gray - 15 Survey Questions Square',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Gray - 15 Survey Questions Square is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 144,
    title: 'Bruce Real Estate Teal Gray - 15 Survey Questions Stories',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Gray - 15 Survey Questions Stories is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/BRUCE%20REAL%20ESTATE%20TEAL%20GRAY%20-%2015%20SURVEY%20QUESTIONS%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 145,
    title: 'Francis Deep Teal Real Estate Deep Teal- 15 Survey Question',
    description: 'Survey Questions template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate Deep Teal- 15 Survey Question is a ready-to-use Canva template set featuring 15 individual designs, part of our Survey Questions collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/SURVEY%20QUESTIONS/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20DEEP%20TEAL-%2015%20SURVEY%20QUESTION%20WM/5.jpg',
    ],
  },
  {
    id: 146,
    title: 'Abegail Deep Teal Real Estate White - 35 Terms to Know Story',
    description: 'Terms To Know template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 35 Terms to Know Story is a ready-to-use Canva template set featuring 35 individual designs, part of our Terms To Know collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 147,
    title: 'Abegail Deep Teal Real Estate White - 35 Terms to Know',
    description: 'Terms To Know template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 35 Terms to Know is a ready-to-use Canva template set featuring 35 individual designs, part of our Terms To Know collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/5.jpg',
    ],
  },
  {
    id: 148,
    title: 'Bruce Real Estate Cyanmint - 35 Terms to Know Square',
    description: 'Terms To Know template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyanmint - 35 Terms to Know Square is a ready-to-use Canva template set featuring 35 individual designs, part of our Terms To Know collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 149,
    title: 'Bruce Real Estate Cyanmint - 35 Terms to Know Stories',
    description: 'Terms To Know template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Cyanmint - 35 Terms to Know Stories is a ready-to-use Canva template set featuring 35 individual designs, part of our Terms To Know collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20CYANMINT%20-%2035%20TERMS%20TO%20KNOW%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 150,
    title: 'Bruce Real Estate Teal - 35 Terms to Know Square',
    description: 'Terms To Know template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 35 Terms to Know Square is a ready-to-use Canva template set featuring 35 individual designs, part of our Terms To Know collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 151,
    title: 'Bruce Real Estate Teal - 35 Terms to Know',
    description: 'Terms To Know template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 35 Terms to Know is a ready-to-use Canva template set featuring 35 individual designs, part of our Terms To Know collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/BRUCE%20REAL%20ESTATE%20TEAL%20-%2035%20TERMS%20TO%20KNOW%20WM/5.jpg',
    ],
  },
  {
    id: 152,
    title: 'Francis Deep Teal Real Estate White - 35 Terms to Know',
    description: 'Terms To Know template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 35 Terms to Know is a ready-to-use Canva template set featuring 35 individual designs, part of our Terms To Know collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2035%20TERMS%20TO%20KNOW%20WM/5.jpg',
    ],
  },
  {
    id: 153,
    title: 'Real Estate Cyan Mint - 35 Terms to Know',
    description: 'Terms To Know template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Cyan Mint - 35 Terms to Know is a ready-to-use Canva template set featuring 35 individual designs, part of our Terms To Know collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/REAL%20ESTATE%20CYAN%20MINT%20-%2035%20TERMS%20TO%20KNOW%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/REAL%20ESTATE%20CYAN%20MINT%20-%2035%20TERMS%20TO%20KNOW%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/REAL%20ESTATE%20CYAN%20MINT%20-%2035%20TERMS%20TO%20KNOW%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/REAL%20ESTATE%20CYAN%20MINT%20-%2035%20TERMS%20TO%20KNOW%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TERMS%20TO%20KNOW/REAL%20ESTATE%20CYAN%20MINT%20-%2035%20TERMS%20TO%20KNOW%20WM/5.jpg',
    ],
  },
  {
    id: 154,
    title: 'Abegail Deep Teal Real Estate White - 20 True or False Story',
    description: 'True Or False template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 20 True or False Story is a ready-to-use Canva template set featuring 20 individual designs, part of our True Or False collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20STORY%20WM/5.jpg',
    ],
  },
  {
    id: 155,
    title: 'Abegail Deep Teal Real Estate White - 20 True or False',
    description: 'True Or False template set for real estate professionals, fully editable in Canva.',
    longDescription: `Abegail Deep Teal Real Estate White - 20 True or False is a ready-to-use Canva template set featuring 20 individual designs, part of our True Or False collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/ABEGAIL%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/5.jpg',
    ],
  },
  {
    id: 156,
    title: 'Bruce Real Estate Teal - 20 True or False',
    description: 'True Or False template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal - 20 True or False is a ready-to-use Canva template set featuring 20 individual designs, part of our True Or False collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20-%2020%20TRUE%20OR%20FALSE%20WM/5.jpg',
    ],
  },
  {
    id: 157,
    title: 'Bruce Real Estate Teal Mint- 20 True or False Square',
    description: 'True Or False template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Teal Mint- 20 True or False Square is a ready-to-use Canva template set featuring 20 individual designs, part of our True Or False collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEAL%20MINT-%2020%20TRUE%20OR%20FALSE%20SQUARE%20WM/5.jpg',
    ],
  },
  {
    id: 158,
    title: 'Bruce Real Estate Tealmint- 20 True or False Stories',
    description: 'True Or False template set for real estate professionals, fully editable in Canva.',
    longDescription: `Bruce Real Estate Tealmint- 20 True or False Stories is a ready-to-use Canva template set featuring 20 individual designs, part of our True Or False collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/BRUCE%20REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20STORIES%20WM/5.jpg',
    ],
  },
  {
    id: 159,
    title: 'Francis Deep Teal Real Estate White - 20 True or False',
    description: 'True Or False template set for real estate professionals, fully editable in Canva.',
    longDescription: `Francis Deep Teal Real Estate White - 20 True or False is a ready-to-use Canva template set featuring 20 individual designs, part of our True Or False collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/FRANCIS%20DEEP%20TEAL%20REAL%20ESTATE%20WHITE%20-%2020%20TRUE%20OR%20FALSE%20WM/5.jpg',
    ],
  },
  {
    id: 160,
    title: 'Real Estate Tealmint- 20 True or False',
    description: 'True Or False template set for real estate professionals, fully editable in Canva.',
    longDescription: `Real Estate Tealmint- 20 True or False is a ready-to-use Canva template set featuring 20 individual designs, part of our True Or False collection for real estate agents.

Every element — text, colors, photos, and layout — is fully customizable in Canva, so you can match your own branding in minutes.`,
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
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/TRUE%20OR%20FALSE/REAL%20ESTATE%20TEALMINT-%2020%20TRUE%20OR%20FALSE%20WM/5.jpg',
    ],
  }
];

/**
 * Fully hydrated product catalog: each raw definition above is expanded
 * with its computed thumbnail and tag badge colors — so TemplateCard.astro,
 * ProductModal.astro, and templateGrid.js can all consume `templates`
 * directly. Every product in this catalog already supplies its own
 * `images` array.
 */
const templates = PRODUCT_DEFINITIONS.map((product) => {
  const { bg: tagBg, color: tagColor } = product.tag
    ? getTagStyle(product.tag)
    : { bg: '', color: '' };

  return {
    ...product,
    tagBg,
    tagColor,
    thumbnail: product.images[0],
  };
});

export default templates;
