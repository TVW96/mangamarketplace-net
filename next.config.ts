import type { NextConfig } from "next";

// GitHub Pages serves project sites from a `/<repo>/` sub-path, so the
// static export needs a matching basePath/assetPrefix. This only applies
// when explicitly building for GitHub Pages, leaving the Cloudflare Worker
// build (via OpenNext) unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "mangamarketplace-net";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
