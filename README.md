# Mandarmani Haven

A WhatsApp-first coastal hotel booking website built with Next.js 14 and Tailwind CSS. The project features a "Coastal Minimalist" design system and conversion-focused elements like deep-linking WhatsApp buttons and sticky mobile footers.

## Features

- **WhatsApp Booking Engine**: Custom `WhatsAppButton` component with pre-filled message logic and smart deep-linking.
- **Coastal Design System**: Warm Sand (#FAFAF9) & Ocean Blue (#0EA5E9) palette with `Playfair Display` typography.
- **Conversion Optimization**:
  - Sticky Mobile Bottom Bar
  - "Flash" animations on CTAs
  - Direct "Chat to Book" integration
- **Performance**:
  - Static Export (`output: 'export'`) for Edge deployment (Cloudflare Pages)
  - Framer Motion animations
  - Lucide Icons
- **SEO Ready**:
  - Custom Metadata & Open Graph
  - `sitemap.xml` & `robots.txt`
  - SVG Favicon & PWA Manifest

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment

See [DEPLOY.md](./DEPLOY.md) for detailed Cloudflare Pages deployment instructions.
