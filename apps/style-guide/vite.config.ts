import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			"lucide-vue-next": path.resolve(
				__dirname,
				"/node_modules/lucide-vue-next",
			),
		},
	},
});
