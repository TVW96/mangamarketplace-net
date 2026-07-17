import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // For best results, consider enabling R2 incremental cache.
  // See: https://opennext.js.org/cloudflare/caching
});
