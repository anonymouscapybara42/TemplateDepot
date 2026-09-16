# Template Depot — Deployment Guide

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🚀 Deploying to Hostinger

This project uses Astro's Node adapter because the payment form sends its
uploaded screenshot through `/api/submit-payment`. It must run as a Node.js
application; do not upload only the `dist/` folder to Hostinger's static
website directory, or the payment endpoint will not work.

### 1. Build locally (optional)

```bash
npm install
npm run build
```

The production entry point is `dist/server/entry.mjs`.

### 2. Create the Node.js application in hPanel

1. Open **Websites** in Hostinger and select the site.
2. Open **Advanced** → **Node.js** (the exact menu label may be
   **Node.js Apps**).
3. Create an application with:
   - **Node.js version:** 22.19.x
   - **Application mode:** Production
   - **Application root:** the directory containing this project
   - **Startup file:** `dist/server/entry.mjs` (equivalent start command:
     `npm start`)
4. Save the application and note the public URL or domain assigned to it.

### 3. Upload the project

Upload the repository through Git, Hostinger's file manager, or SFTP. Do not
upload `node_modules`, and do not upload a real `.env` file. If using SFTP,
upload the source files, `package.json`, and `package-lock.json`/`pnpm-lock.yaml`
to the application root.

In the Node.js application settings, run:

```bash
npm install
npm run build
```

If Hostinger offers a separate **Build command** field, use
`npm install && npm run build`; keep the startup file as
`dist/server/entry.mjs`.

### 4. Add email environment variables

Add these variables in the Node.js application's **Environment variables**
section, then restart the application:

```text
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=your-mailbox@your-domain.com
SMTP_PASS=your-mailbox-password
INQUIRY_TO_EMAIL=where-orders-should-be-delivered@example.com
```

You can use Gmail SMTP instead, but use a Gmail App Password rather than your
normal Gmail password. Never commit or publicly upload these values.

### 5. Connect the domain and test

Point the domain to Hostinger if it is not already connected, enable the
free SSL certificate, and open the site over `https://`. Test both the normal
pages and the payment form with a small valid PNG/JPG/WEBP file. Confirm that
the email arrives at `INQUIRY_TO_EMAIL`.

If the site loads but payment submissions return an error, check the Node.js
application logs and verify all five SMTP variables. A static-only Hostinger
plan cannot run this payment API; use a Hostinger plan that includes Node.js
applications or keep the site on a serverless platform that supports Astro
server routes.

## ☁️ Deploying to Cloudflare

The current configuration targets Hostinger's Node.js runtime because the
payment API needs server-side execution. The existing Cloudflare Pages
instructions below apply only after configuring an Astro Cloudflare adapter;
they are not an alternative deployment for the current Hostinger build.

### Option 1: Via Cloudflare Dashboard

1. Push your project to a GitHub repository.
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com).
3. Go to **Workers & Pages** → **Create Application** → **Pages**.
4. Click **Connect to Git** and select your repository.
5. Configure the build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node.js version:** 22.19.x (set in environment variables: `NODE_VERSION = 22`)
6. Click **Save and Deploy**.

### Option 2: Via Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name=template-depot
```

---

## ✅ Pre-Launch Checklist

Before going live, update the following placeholders:

### Payment Information
- [ ] Replace "09XX XXX XXXX" GCash number with your real GCash number
- [ ] Replace "09XX XXX XXXX" Maya number with your real Maya number  
- [ ] Replace "Your Name Here" with your real account name
- [ ] Add your actual GCash QR code image to the PaymentSection component
- [ ] Add your actual Maya QR code image to the PaymentSection component

### Contact Information
- [ ] Update `hello@templatedepot.com` with your real business email
- [ ] Update Facebook page URL (`https://facebook.com/templatedepot`)
- [ ] Update Messenger URL (`https://m.me/61590735058749`)

### SEO & Meta
- [ ] Update `site` in `astro.config.mjs` with your real domain
- [ ] Add a real `og-image.png` (1200×630px) to the `/public` folder

### Content
- [ ] Review all template descriptions and pricing
- [ ] Update testimonials (or keep sample ones until you collect real ones)
- [ ] Update business hours in Contact and Footer if different

---

## 📁 Project Structure

```
template-depot/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.astro        ← Navigation with mobile menu
│   │   ├── Hero.astro          ← Hero section
│   │   ├── TemplateGrid.astro  ← Template cards with filtering
│   │   ├── Benefits.astro      ← Why choose us
│   │   ├── PurchaseProcess.astro ← 4-step process
│   │   ├── PaymentSection.astro  ← GCash/Maya QR codes
│   │   ├── Testimonials.astro  ← Customer reviews slider
│   │   ├── FAQ.astro           ← Accordion FAQ
│   │   ├── Contact.astro       ← Contact info
│   │   └── Footer.astro        ← Site footer
│   ├── layouts/
│   │   └── BaseLayout.astro    ← HTML wrapper + SEO
│   ├── pages/
│   │   └── index.astro         ← Main page
│   └── styles/
│       └── global.css          ← Global styles + Tailwind
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 Design System

**Colors:**
- Navy 900: `#0A0F1E` (background)
- Indigo 500: `#6366F1` (primary)
- Cyan 400: `#22D3EE` (accent)
- Slate 400: `#94A3B8` (body text)

**Fonts:**
- Display: Space Grotesk (headings, labels, buttons)
- Body: Inter (paragraphs, descriptions)

---

## 🔧 Customization Tips

### Adding a New Template Card
Edit `src/components/TemplateGrid.astro` and add a new object to the `templates` array:

```typescript
{
  id: 9,
  title: 'Your Template Name',
  description: 'Short description here.',
  category: 'Business',         // Must match a filter button category
  price: '₱299',
  tag: 'New',                   // or '' for no tag
  tagColor: 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30',
  gradient: 'from-cyan-600/30 to-teal-600/20',
  accent: 'bg-cyan-500',
  icon: '📋',
}
```

### Adding Real QR Images
Replace the QR placeholder divs in `PaymentSection.astro` with:

```html
<img src="/gcash-qr.png" alt="GCash QR Code" class="w-full rounded-xl" />
```

Place your QR image in the `/public` folder.
# TemplateDepot
