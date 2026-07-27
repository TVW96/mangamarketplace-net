# Manga Marketplace (.net)

Next.js app configured for deployment to Cloudflare Workers using OpenNext.

## Local development

```bash
npm run dev
```

## Build for production

```bash
npm run build
```

## Cloudflare deployment

1. Authenticate Wrangler:

```bash
npx wrangler login
```

2. Build and preview the Worker locally:

```bash
npm run preview
```

3. Deploy to Cloudflare Workers:

```bash
npm run deploy
```

## Domain setup for mangamarketplace.net

1. Ensure your domain nameservers are managed by Cloudflare.
2. In Cloudflare dashboard, open Workers and add custom domains:
	- mangamarketplace.net
	- www.mangamarketplace.net
3. Keep DNS records proxied and set SSL/TLS mode to Full (strict).

## Optional type generation for Cloudflare bindings

```bash
npm run cf-typegen
```

## GitHub Pages deployment

The app can also be published as a static export to GitHub Pages via the
`.github/workflows/deploy-pages.yml` workflow, which runs automatically on
pushes to `main` (or manually via `workflow_dispatch`).

Static export mode is only enabled when the `GITHUB_PAGES` environment
variable is set, so it does not affect the Cloudflare Worker build:

```bash
npm run build:pages
```

This generates a static site in `out/`, with `basePath`/`assetPrefix` set to
`/mangamarketplace-net` to match the GitHub Pages project URL
(`https://<owner>.github.io/mangamarketplace-net/`). To enable it:

1. In the repository settings, under **Pages**, set the source to
   **GitHub Actions**.
2. Push to `main` or trigger the `Deploy to GitHub Pages` workflow manually.
