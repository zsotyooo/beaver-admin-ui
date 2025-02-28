import { defineConfig } from "histoire";
import { HstVue } from "@histoire/plugin-vue";
import path from "path";

export default defineConfig({
	setupFile: path.resolve(__dirname, "./histoire.setup.ts"),
	plugins: [HstVue()],
});
