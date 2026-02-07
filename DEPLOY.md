# Deployment Instructions: Cloudflare Pages

This project is optimized for deployment on **Cloudflare Pages**.

## Prerequisites
- A Cloudflare account.
- This repository pushed to GitHub.

## Deployment Steps

1. **Log in to Cloudflare Dashboard** and navigate to **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select this repository.
4. **Configure Build Settings**:
   - **Framework Preset**: Next.js (Static)
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
   - **Node.js Compatibility**: Ensure `NODE_VERSION` is set to `20`.

> [!TIP]
> **Static Export**: We have configured `output: 'export'` in `next.config.ts`. This generates a purely static site in the `out/` directory, which is the most stable and performant way to host on Cloudflare Pages for this type of landing page.

## Important Notes

### Image Optimization
We have set `images: { unoptimized: true }` in `next.config.ts`.
- **Why?** The default Next.js Image Optimization API requires a Node.js server (Vercel/EC2). Cloudflare Pages is static/edge.
- **Alternative**: If you want optimized images, enable **Cloudflare Images** and update the config to use a custom loader, or use a third-party service like Cloudinary.

### Edge Runtime
This project uses standard React Server Components. The `@cloudflare/next-on-pages` adapter will build your app to run on Cloudflare Workers (Edge).

### Environment Variables
Add any necessary environment variables (like API keys) in the Cloudflare Dashboard under **Settings > Environment variables**.
