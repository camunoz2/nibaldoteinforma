import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://nibaldoteinforma.cl",
  integrations: [tailwind()],
  adapter: vercelServerless(),
});
