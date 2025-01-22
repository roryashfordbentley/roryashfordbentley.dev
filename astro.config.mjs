// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tinaDirective from "./astro-tina-directive/register";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://astro.build/config
export default defineConfig({
	site: "https://www.roryashfordbentley.dev",
	integrations: [mdx(), sitemap(), react(), tinaDirective()],
	redirects: {
		"/admin": "/admin/index.html",
	},
	vite: {
		plugins: [basicSsl()],
		server: {
			https: true,
		},
	},
});
