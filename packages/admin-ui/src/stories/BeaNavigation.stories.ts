import type { Meta, StoryObj } from "@storybook/vue3";
import type { ComponentProps } from "vue-component-type-helpers";
import {
	LayoutDashboard,
	BeaNavigationItem,
	Settings2,
	useBeaNavigationStore,
	BeaSidebar,
	Atom,
	Settings,
	Mail,
	ShoppingBag,
	Package,
	ScrollText,
	ContactRound,
	CircleUser,
	Handshake,
} from "..";

const navigationItems: BeaNavigationItem[] = [
	{
		id: "dashboard",
		label: "Dashboard",
		active: false,
		url: "#",
		icon: LayoutDashboard,
	},
	{
		id: "leads",
		label: "Leads",
		active: true,
		url: "#",
		icon: Atom,
	},
	{
		id: "mail",
		label: "Mail",
		active: false,
		url: "#",
		icon: Mail,
		children: [
			{
				id: "mail-inbox",
				label: "Inbox",
				active: false,
				url: "#",
			},
			{
				id: "mail-sent",
				label: "Sent",
				active: false,
				url: "#",
			},
			{
				id: "mail-drafts",
				label: "Drafts",
				active: false,
				url: "#",
			},
			{
				id: "mail-trash",
				label: "Trash",
				active: false,
				url: "#",
			},
		],
	},
	{
		id: "quotes",
		label: "Quotes",
		active: false,
		url: "#",
		icon: ShoppingBag,
	},
	{
		id: "activities",
		label: "Activities",
		active: false,
		url: "#",
		icon: ScrollText,
	},
	{
		id: "contacts",
		label: "Contacts",
		active: false,
		icon: ContactRound,
		children: [
			{
				id: "customers",
				active: false,
				label: "Customers",
				url: "#",
				icon: CircleUser,
			},
			{
				id: "partners",
				active: false,
				label: "Partners",
				url: "#",
				icon: Handshake,
			},
		],
	},
	{
		id: "products",
		label: "Products",
		active: false,
		url: "#",
		icon: Package,
	},
	{
		id: "settings",
		label: "Settings",
		active: false,
		expanded: true,
		children: [
			{
				id: "settings-general",
				active: false,
				label: "Configuration",
				url: "#",
				icon: Settings2,
			},
			{
				id: "settings-system",
				active: false,
				label: "System settings",
				url: "#",
				icon: Settings,
			},
		],
	},
];

const meta: Meta<ComponentProps<typeof BeaSidebar>> = {
	title: "Example/Bea/Sidebar",
	component: BeaSidebar,
	tags: ["autodocs"],
	parameters: {
		actions: {
			argTypesRegex: "^on[A-Z].*",
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: args => ({
		components: {
			BeaSidebar,
		},
		setup() {
			const store = useBeaNavigationStore();
			store.setNavigationItems(navigationItems);
			return { args };
		},
		template: '<BeaSidebar v-bind="args" />',
	}),

	args: {},
};
