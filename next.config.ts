import type { NextConfig } from "next";
import { name as packageName } from "./package.json";

// GitHub Pages serves project sites from a `/<repo>/` sub-path, so the
// static export needs a matching basePath/assetPrefix. This only applies
// when explicitly building for GitHub Pages, leaving the Cloudflare Worker
// build (via OpenNext) unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
// The GitHub Pages project path is derived from the repository name, which
// matches the package name in this repo.
const basePath = `/${packageName}`;

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath,
    assetPrefix: `${basePath}/`,
    images: {
      unoptimized: true,
    },
  }),
};

export default nextConfig;
