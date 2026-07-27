import type { NextConfig } from "next";
import packageJson from "./package.json";

// GitHub Pages serves project sites from a `/<repo>/` sub-path, so the
// static export needs a matching basePath/assetPrefix. This only applies
// when explicitly building for GitHub Pages, leaving the Cloudflare Worker
// build (via OpenNext) unaffected.
const isGithubPages = process.env.GITHUB_PAGES === "true";
// The GitHub Pages project URL is derived from the repository name, which
// matches the package name in this repo.
const repoName = packageJson.name;

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
