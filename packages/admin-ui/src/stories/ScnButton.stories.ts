import type { Meta, StoryObj } from "@storybook/vue3";
import type { ComponentProps } from "vue-component-type-helpers";
import { fn } from "@storybook/test";
import { ScnButton, Camera } from "..";

const variants = [
	"default",
	"primary",
	"destructive",
	"outline",
	"secondary",
	"ghost",
	"clear",
	"link",
];

const sizes = [
	"xl",
	"lg",
	"default",
	"sm",
	"xs",
	"icon-xl",
	"icon-lg",
	"icon",
	"icon-sm",
	"icon-xs",
];

const meta: Meta<
	ComponentProps<typeof ScnButton> & { onClick: () => void; default: string }
> = {
	title: "Example/Button",
	component: ScnButton,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			type: "string",
			description: variants.join(" | "),
			options: variants,
		},
		size: {
			control: "select",
			type: "string",
			description: `<strong>Text or text with icon:</strong> ${sizes.filter(s => !s.startsWith("icon")).join(" | ")}<br><strong>Icon only:</strong> ${sizes.filter(s => s.startsWith("icon")).join(" | ")}`,
			options: sizes,
		},
		loading: { control: "boolean", type: "boolean" },
		disabled: { control: "boolean", type: "boolean" },
		default: { control: "text", type: "string" },
	},
	args: {
		default: "Click me!",
		variant: "default",
		size: "default",
		loading: false,
		disabled: false,
		onClick: fn(),
	},
	parameters: {
		actions: {
			argTypesRegex: "^on[A-Z].*",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Deafault: Story = {
	render: args => ({
		components: { ScnButton },
		setup() {
			const defaultSlot = args.default;
			return { defaultSlot, args };
		},
		template: '<ScnButton v-bind="args">{{ defaultSlot }}</ScnButton>',
	}),

	args: {},
};

export const WithIcon: StoryObj<typeof meta> = {
	render: args => ({
		components: { ScnButton, Camera },
		setup() {
			const defaultSlot = args.default;
			return { defaultSlot, args };
		},
		template:
			'<ScnButton v-bind="args"><Camera />{{ defaultSlot }}</ScnButton>',
	}),
	args: {},
};

export const WithIconRight: StoryObj<typeof meta> = {
	render: args => ({
		components: { ScnButton, Camera },
		setup() {
			const defaultSlot = args.default;
			return { defaultSlot, args };
		},
		template:
			'<ScnButton v-bind="args">{{ defaultSlot }}<Camera /></ScnButton>',
	}),
	args: {},
};

export const Icon: StoryObj<typeof meta> = {
	render: args => ({
		components: { ScnButton, Camera },
		setup() {
			const defaultSlot = args.default;
			return { defaultSlot, args };
		},
		template: '<ScnButton v-bind="args"><Camera /></ScnButton>',
	}),
	args: {
		size: "icon",
		default: "",
	},
};
