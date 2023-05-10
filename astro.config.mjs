import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://nibaldoteinforma.cl",
  integrations: [tailwind()],
  adapter: vercelStatic(),
  output: "server",
});
