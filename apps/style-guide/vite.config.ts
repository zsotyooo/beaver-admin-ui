import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
	plugins: [vue()],
	optimizeDeps: {
		include: ["lucide-vue-next"],
	},
	server: {
		fs: {
			allow: [
				// Allow files from the 'node_modules' in your monorepo
				path.resolve(__dirname, "../../node_modules"),
				// If using Histoire or other symlinked packages, ensure this directory is allowed
				path.resolve(__dirname, "../../packages"), // Adjust this based on your folder structure
			],
		},
	},
});
