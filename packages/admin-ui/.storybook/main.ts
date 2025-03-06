import path from "node:path";
import type { StorybookConfig } from "@storybook/vue3-vite";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-storysource",
		"storybook-dark-mode",
	],
	framework: {
		name: "@storybook/vue3-vite",
		options: {},
	},
	viteFinal: config => {
		config.resolve = {
			...(config.resolve ?? {}),
			alias: {
				...(config.resolve?.alias ?? {}),
				"@": path.resolve(__dirname, "..", "src"),
			},
		};
		return config;
	},
};
export default config;
