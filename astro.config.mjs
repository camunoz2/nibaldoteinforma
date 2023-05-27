import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://nibaldoteinforma.cl",
  integrations: [tailwind(), partytown()],
  adapter: vercelStatic(),
  output: "static"
});