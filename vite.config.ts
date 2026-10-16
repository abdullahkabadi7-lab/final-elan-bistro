// Set Nitro preset to vercel so builds produce .vercel/output (Build Output API v3)
// ensuring static files (robots.txt, sitemap.xml) and SSR functions are deployed correctly.
if (!process.env.NITRO_PRESET) {
  process.env.NITRO_PRESET = "vercel";
}

import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
