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
