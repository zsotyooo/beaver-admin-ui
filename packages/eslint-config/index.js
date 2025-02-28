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
	{
		included: ["**/*.vue"],
		rules: {
			"vue/multi-word-component-names": "off",
		},
	},
	pluginVue.configs["flat/essential"],
	vueTsConfigs.recommended,
	skipFormatting,
);
