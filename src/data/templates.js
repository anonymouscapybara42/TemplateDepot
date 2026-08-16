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

// ── "Regular vs. Launch" pricing ──────────────────────────────
// The site is launching with promo pricing on every product: a
// crossed-out "Regular Price" (SRP) shown next to the highlighted
// "Launch Price" (the actual current price, i.e. `price` below).
//
// For products where the client has given us a real SRP (currently
// the VA Portfolio, Financial Coaching, and GCash/Maya Tracker — see
// their `regularPrice` field below), that exact value is used.
//
// For every other product, no SRP has been provided yet, so one is
// derived from the current launch price using a ~40% "off" markup —
// consistent with the discount ratio the client used on their own
// flagship examples (e.g. ₱1499 → ₱699, ₱599 → ₱349). This is a
// placeholder, not real pricing — swap in actual SRPs per product
// (via the `regularPrice` field) as they're finalized.
function extractPriceAmount(priceString) {
  return parseInt(priceString.replace(/[^\d]/g, ''), 10);
}

function computeFallbackRegularPrice(launchPriceString) {
  const launchAmount = extractPriceAmount(launchPriceString);
  const markedUpAmount = Math.ceil((launchAmount * 1.7) / 10) * 10;
  return `\u20B1${markedUpAmount}`;
}

/**
 * Returns the discount percentage (rounded) between a regular price
 * and a launch price, for optional display (e.g. "-40%" badges).
 */
export function computeDiscountPercent(regularPriceString, launchPriceString) {
  const regular = extractPriceAmount(regularPriceString);
  const launch = extractPriceAmount(launchPriceString);
  if (!regular) return 0;
  return Math.round(((regular - launch) / regular) * 100);
}

// ── Raw product definitions ─────────────────────────────────────
// Every `images` array points directly at its already-optimized JPEG
// files under public/template-assets/ (URL-encoded paths, since many
// source folder names contain spaces).
const PRODUCT_DEFINITIONS = [
{
    id: 1,
    title: '1500+ Resume CV Bundle',
    description: 'Matching CV and cover letter template pair, editable and ready to customize.',
    longDescription: `Resume Template Set 1 includes a professionally designed CV and a matching cover letter, delivered as editable files.

Both pieces share a consistent visual style so your application looks cohesive and polished. Easy to customize with your own details — no design experience needed.`,
    category: 'Professional Resume & CV Mega Pack',
    price: '\u20B1399',
    regularPrice: '\u20B1699',
    tag: '',
    includes: [
    '1,500+ Professional Resume & CV Templates',
    '1,500+ Professional Resume & CV Templates',
    'Matching Cover Letter Templates',
    'Modern & Professional Resume Designs',
    'Creative & Contemporary CV Layouts',
    'Clean & Minimal Resume Styles',
    'Templates for Different Industries & Career Levels',
    'Profile / Professional Summary Sections',
    'Work Experience Sections',
    'Education & Qualification Sections',
    'Skills & Competency Sections',
    'Awards & Achievement Sections',
    'Contact & Personal Information Sections',
    'Photo & Non-Photo Resume Layouts',
    'Coordinated Resume & Cover Letter Designs',
    'Fully Customizable Text, Fonts & Colors',
    'Reusable Templates for Multiple Job Applications',
    ],
    formats: ['DOCX', 'Canva'],
    images: [
      '/template-assets/RESUMES/1/1.jpg',
      '/template-assets/RESUMES/1/2.jpg',
      '/template-assets/RESUMES/2/1.jpg',
      '/template-assets/RESUMES/2/2.jpg',
      '/template-assets/RESUMES/3/1.jpg',
      '/template-assets/RESUMES/3/2.jpg',  
      '/template-assets/RESUMES/4/1.jpg',
      '/template-assets/RESUMES/4/2.jpg',
      '/template-assets/RESUMES/5/1.jpg',
      '/template-assets/RESUMES/5/2.jpg',
      '/template-assets/RESUMES/6/1.jpg',
      '/template-assets/RESUMES/6/2.jpg',  
      '/template-assets/RESUMES/7/1.jpg',
      '/template-assets/RESUMES/7/2.jpg',
      '/template-assets/RESUMES/8/1.jpg',
      '/template-assets/RESUMES/8/2.jpg',
      '/template-assets/RESUMES/201/1.jpg',
      '/template-assets/RESUMES/201/2.jpg',  
      '/template-assets/RESUMES/202/1.jpg',
      '/template-assets/RESUMES/202/2.jpg',
      '/template-assets/RESUMES/203/1.jpg',
      '/template-assets/RESUMES/203/2.jpg',
      '/template-assets/RESUMES/204/1.jpg',
      '/template-assets/RESUMES/204/2.jpg',
      '/template-assets/RESUMES/205/1.jpg',
      '/template-assets/RESUMES/205/2.jpg',
      '/template-assets/RESUMES/401/1.jpg',
      '/template-assets/RESUMES/401/2.jpg',
    ],
  },
  
{
    id: 16,
    title: 'Boho VA Portfolio Website',
    description: 'A fully designed portfolio website template for virtual assistants, boho-styled and ready to launch.',
    longDescription: `A complete portfolio website template designed specifically for virtual assistants who want a polished online presence. Includes Home, About Me, Services, Packages and Pricing, and Work Experience pages.

Soft boho styling with warm, professional tones. Fully editable to match your own brand and services.`,
    category: 'VA Portfolio & Service Menu Launchpad',
    price: '\u20B1249',
    regularPrice: '\u20B1399',
    tag: '',
    includes: [
      'Professional VA Portfolio Homepage',
      'About Me / Professional Introduction',
      'Work Experience Section',
      'Services Offered Page',
      'Service Packages & Pricing Page',
      'Sample Works / Portfolio Showcase',
      'Video Editing Portfolio Section',
      'Social Media Graphics Showcase',
      'Tools & Software Expertise Section',
      'Client Testimonials Page',
      'Certificates & Training Showcase',
      'Client Onboarding Process',
      'Contact & Social Media Page',
      'Editable Call-to-Action Buttons & Contact Details'
    ],
    formats: ['Canva', 'Website template','PDF ready'],
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
    category: 'Financial Advisor Pitch Decks & Proposals',
    price: '\u20B1349',
    regularPrice: '\u20B1599',
    tag: '',
    includes: [
      '✓ Professional Financial Advisor Pitch Deck',
      '✓ Advisor / Company Introduction',
      '✓ Financial Services Overview',
      '✓ Client Needs & Financial Goals Section',
      '✓ Financial Planning Strategy Presentation',
      '✓ Investment & Wealth Management Overview',
      '✓ Retirement Planning Section',
      '✓ Insurance & Risk Management Presentation',
      '✓ Financial Assessment & Recommendations',
      '✓ Proposed Solutions & Action Plan',
      '✓ Service Packages / Advisory Options',
      '✓ Fees & Pricing Presentation',
      '✓ Advisor Credentials & Qualifications',
      '✓ Client Testimonials / Success Stories',
      '✓ Financial Planning Process',
      '✓ Next Steps & Call-to-Action Page',
      '✓ Professional Contact Information Page',
      '✓ Editable Charts, Graphics, Text & Branding'
    ],
    formats: ['Canva', 'PDF ready','Customizable Presentation'],
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
    title: 'GCash & Maya Digital Transaction Ledger',
    description: 'A simple digital tracker for logging GCash and Maya transactions and budgets.',
    longDescription: `Stay on top of your GCash and Maya spending with this ready-to-use digital tracker. Log income, expenses, and savings goals in one clean, easy-to-read layout.

Great for freelancers, small business owners, or anyone who wants a simple way to track e-wallet spending without a complicated spreadsheet.`,
    category: 'GCash & Maya Digital Transaction Ledger',
    price: '\u20B1249',
    regularPrice: '\u20B1399',
    tag: '',
    includes: [
      ' GCash Rate Guide',
      'GCash Transaction Type Guide',
      'GCash Transaction Record (Automated Ledger)',
      'GCash Dashboard (Summary & Overview)',
      'Maya Transaction Type Guide',
      'Maya Rate Guide',
      'Maya Transaction Record (Automated Ledger)',
      'Maya Dashboard (Summary & Overview)', 
    ],
    formats: ['Google Sheets', 'Excel'],
    images: [
      '/template-assets/GCASHMAYA%20TRACKER%20WM/1.jpg',
      '/template-assets/GCASHMAYA%20TRACKER%20WM/2.jpg',
      '/template-assets/GCASHMAYA%20TRACKER%20WM/3.jpg',
      '/template-assets/GCASHMAYA%20TRACKER%20WM/4.jpg',
    ],
  },
  {
    id: 19,
    title: 'Real Estate Bundle',
    description: 'Realtor social template set with real estate photo placements already styled in — just swap in your own photos.',
    longDescription: `Realtor Cyan - 30 Portrait (With Sample Photos) comes pre-styled with sample real estate photography so you can see exactly how your own listing photos will look once dropped in.

Fully editable in Canva — swap photos, update text, and adjust colors to match your brand in minutes.`,
    category: 'Real Estate Listing & Social Media Canva Bundle',
    price: '\u20B1199',
    regularPrice: '\u20B1349',
    tag: '',
    includes: [
      '30-design Canva pack',
      'Canva template link',
      'Basic usage guide',
      'Real Estate Square Post Templates',
      'Real Estate Portrait Post Templates',
      'Instagram & Facebook Story Templates',
      'Real Estate Highlight Covers',
      'Property Listing & Home for Sale Designs',
      'Just Listed / Just Sold Content',
      'Property Features & Highlights',
      'Market Insights & Real Estate Updates',
      'Buyer & Seller Focused Content',
      'Homeownership & Real Estate Tips',
      'Promotional & Special Offer Posts',
      'Client Testimonial Designs',
      'Coming Soon & Property Announcement Posts',
      'Agent Contact & Call-to-Action Designs',
      'Coordinated Branding Across All Templates',
      'Editable Photos, Text, Colors & Contact Details'
    ],
    formats: ['Canva','Multiple Social Media Sizes','Instagram & Facebook Stories', 'Customizable Presentation','Reusable'
    ],
    images: [
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20PORTRAIT/5.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20SQUARE%20POSTS/5.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20CYAN%20-%2030%20STORY/5.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20PORTRAIT/5.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20SQUARES/5.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/1.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/2.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/3.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/4.jpg',
      '/template-assets/REAL%20ESTATE%20w-%20Sample%20Photos/REALTOR%20TEAL%2030%20STORY/5.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/BUYER%20AND%20SELLER%20TIPS/ABEGAIL%20REAL%20ESTATE%20DEEP%20TEAL-%2020%20BUYER%20AND%20SELLER%20TIPS%20STORY%20WM/5.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/ABEGAIL%20REALTOR%20DEEP%20TEAL%2030%20PORTRAIT%20WM/5.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20TEAL%2030%20PORTRAIT%20WM/5.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/03%20REALTOR%20CYAN%2030%20STORY%20WM/5.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/1.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/2.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/3.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/4.jpg',
      '/template-assets/REAL%20ESTATE/REALTOR/REALTOR%20CYAN-%2030%20Portrait%20POSTS%20WM/5.jpg',
    ],
  },
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

  const regularPrice = product.regularPrice ?? computeFallbackRegularPrice(product.price);

  return {
    ...product,
    tagBg,
    tagColor,
    regularPrice,
    thumbnail: product.images[0],
  };
});

export default templates;
