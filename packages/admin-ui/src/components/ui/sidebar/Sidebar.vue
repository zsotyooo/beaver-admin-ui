<script setup lang="ts">
import type { SidebarProps } from ".";
import { cn } from "@/lib/scn-utils";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SIDEBAR_WIDTH_MOBILE, useSidebar } from "./utils";

defineOptions({
	inheritAttrs: false,
});

const props = withDefaults(defineProps<SidebarProps>(), {
	side: "left",
	variant: "sidebar",
	collapsible: "offcanvas",
});

const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
</script>

<template>
	<div
		v-if="collapsible === 'none'"
		:class="
			cn(
				'bg-sidebar text-sidebar-foreground flex h-full w-[--sidebar-width] flex-col',
				props.class,
			)
		"
		v-bind="$attrs"
	>
		<slot />
	</div>

	<Sheet
		v-else-if="isMobile"
		:open="openMobile"
		v-bind="$attrs"
		@update:open="setOpenMobile"
	>
		<SheetContent
			data-sidebar="sidebar"
			data-mobile="true"
			:side="side"
			:class="
				cn(
					'from-sidebar-from via-sidebar to-sidebar-to text-sidebar-foreground w-[--sidebar-width] overflow-y-auto border-none bg-gradient-to-b p-0 pb-4 pt-12 shadow [&>button]:hidden',
					side === 'left'
						? 'rounded-br-3xl rounded-tr-3xl'
						: 'rounded-bl-3xl rounded-tl-3xl',
				)
			"
			:style="{
				'--sidebar-width': SIDEBAR_WIDTH_MOBILE,
			}"
		>
			<div class="flex h-full w-full flex-col">
				<slot />
			</div>
		</SheetContent>
	</Sheet>

	<div
		v-else
		class="group peer hidden md:block"
		:data-state="state"
		:data-collapsible="state === 'collapsed' ? collapsible : ''"
		:data-variant="variant"
		:data-side="side"
	>
		<!-- This is what handles the sidebar gap on desktop  -->
		<div
			:class="
				cn(
					'relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
					'group-data-[collapsible=offcanvas]:w-0',
					'group-data-[side=right]:rotate-180',
					variant === 'floating' || variant === 'inset'
						? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
						: 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
				)
			"
		/>
		<div
			:class="
				cn(
					'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
					side === 'left'
						? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
						: 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
					// Adjust the padding for floating and inset variants.
					variant === 'floating' || variant === 'inset'
						? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]'
						: 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
					props.class,
				)
			"
			v-bind="$attrs"
		>
			<div
				data-sidebar="sidebar"
				:class="
					cn(
						'text-sidebar-foreground from-sidebar-from via-sidebar to-sidebar-to rounded-tr-4xl rounded-br-4xl flex h-full w-full flex-col overflow-y-auto border-none bg-gradient-to-b pt-16 shadow-[inset_-5px_5px_30px_hsl(var(--sidebar-background-to))] group-data-[variant=floating]:rounded-lg group-data-[collapsible=icon]:!pr-0 group-data-[collapsible=icon]:pt-10 group-data-[variant=floating]:shadow',
						side === 'left'
							? 'rounded-br-3xl rounded-tr-3xl'
							: 'rounded-bl-3xl rounded-tl-3xl',
					)
				"
			>
				<slot />
			</div>
		</div>
	</div>
</template>
