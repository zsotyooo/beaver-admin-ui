<script setup lang="ts">
import {
	type BeaNavigationItem,
	BeaSidebarNavigationBlock,
	BookOpen,
	Bot,
	LayoutDashboard,
	ScnSidebar,
	ScnSidebarProvider,
	Settings2,
	SquareStack,
	SquareTerminal,
	Star,
	useBeaNavigationStore,
} from "@digital-beaver-admin/admin-ui";

const navigationItems: BeaNavigationItem[] = [
	{
		id: "dashboard",
		label: "Dashboard",
		active: true,
		url: "#",
		icon: LayoutDashboard,
	},
	{
		id: "platform",
		title: "Platform",
		active: true,
		children: [
			{
				id: "playground",
				title: "Playground",
				icon: SquareTerminal,
				active: true,
				children: [
					{
						id: "playground-1",
						active: true,
						label: "History",
						url: "#",
						icon: SquareStack,
					},
					{
						id: "playground-2",
						active: true,
						label: "Starred",
						url: "#",
						icon: Star,
					},
					{
						id: "playground-3",
						active: true,
						label: "Settings",
						url: "#",
					},
				],
			},
			{
				id: "models",
				title: "Models",
				active: true,
				icon: Bot,
				children: [
					{
						id: "models-1",
						active: true,
						label: "Genesis",
						url: "#",
					},
					{
						id: "models-2",
						active: true,
						label: "Explorer",
						url: "#",
					},
					{
						id: "models-3",
						active: true,
						label: "Quantum",
						url: "#",
					},
				],
			},
			{
				id: "documentation",
				title: "Documentation",
				active: true,
				icon: BookOpen,
				children: [
					{
						id: "documentation-1",
						active: true,
						label: "Introduction",
						url: "#",
					},
					{
						id: "documentation-2",
						active: true,
						label: "Get Started",
						url: "#",
					},
					{
						id: "documentation-3",
						active: true,
						label: "Tutorials",
						url: "#",
					},
					{
						id: "documentation-4",
						active: true,
						label: "Changelog",
						url: "#",
					},
				],
			},
			{
				id: "settings",
				title: "Settings",
				active: true,
				icon: Settings2,
				children: [
					{
						id: "settings-1",
						active: true,
						label: "General",
						url: "#",
					},
					{
						id: "settings-2",
						active: true,
						label: "Team",
						url: "#",
					},
					{
						id: "settings-block",
						active: true,
						title: "Additional",
					},
					{
						id: "settings-4",
						active: true,
						label: "Limits",
						url: "#",
					},
					{
						id: "settings-3",
						active: true,
						label: "Billing",
						url: "#",
					},
					{
						id: "settings-4",
						active: true,
						label: "Limits",
						url: "#",
					},
				],
			},
		],
	},
];
const store = useBeaNavigationStore();

store.setNavigationItems(navigationItems);
</script>
<template>
	<Story
		title="Sidebar"
		:layout="{
			type: 'single',
			iframe: true,
		}"
	>
		<ScnSidebarProvider>
			<ScnSidebar>
				<BeaSidebarNavigationBlock group-id="dashboard" />
				<BeaSidebarNavigationBlock group-id="platform" />
			</ScnSidebar>
		</ScnSidebarProvider>
	</Story>
</template>
<docs lang="md">
# Welcome

This is a demo book using Vue 3.

Learn more about Histoire [here](https://histoire.dev/).
</docs>
