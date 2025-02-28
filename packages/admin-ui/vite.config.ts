import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
	css: {
		postcss: {
			plugins: [tailwind(), autoprefixer()],
		},
	},
	plugins: [
		vue(),
		dts({
			insertTypesEntry: true,
			include: ["src"],
		}),
		Components({
			dirs: ["src/components"],
			extensions: ["vue"],
			deep: true,
			dts: "src/components.d.ts",
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		emptyOutDir: false,
		lib: {
			entry: "src/index.ts", // Entry file for your components
			name: "@digital-beaver/admin-ui",
			fileName: format => `index.${format === "es" ? "mjs" : "cjs"}`, // Ensure .mjs for ES module
			formats: ["es", "cjs"], // Formats for module types (ES Module & CommonJS)
		},
		rollupOptions: {
			// External dependencies that should not be bundled
			external: ["vue", "@vueuse/core", "tailwindcss"],
			output: {
				globals: {
					vue: "Vue",
					"@vueuse/core": "VueUse",
					tailwindcss: "TailwindCSS",
				},
				entryFileNames: "index.[format].js", // Ensures index.es.mjs and index.cjs.js
			},
		},
	},
});
