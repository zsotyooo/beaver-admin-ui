import pluginVue from "eslint-plugin-vue";
import {
	defineConfigWithVueTs,
	vueTsConfigs,
} from "@vue/eslint-config-typescript";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default defineConfigWithVueTs(
	{
		ignores: ["**/dist/**"],
	},
	pluginVue.configs["flat/essential"],
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.mts", "**/*.vue"],
		rules: {
			"vue/multi-word-component-names": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ varsIgnorePattern: "^_" },
			],
		},
	},
	vueTsConfigs.recommended,
	skipFormatting,
);
