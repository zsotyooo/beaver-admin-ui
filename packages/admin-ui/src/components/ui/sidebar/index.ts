import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "vue";
import { cva } from "class-variance-authority";

export interface SidebarProps {
	side?: "left" | "right";
	variant?: "sidebar" | "floating" | "inset";
	collapsible?: "offcanvas" | "icon" | "none";
	class?: HTMLAttributes["class"];
}

export { default as Sidebar } from "./Sidebar.vue";
export { default as SidebarContent } from "./SidebarContent.vue";
export { default as SidebarFooter } from "./SidebarFooter.vue";
export { default as SidebarGroup } from "./SidebarGroup.vue";
export { default as SidebarGroupAction } from "./SidebarGroupAction.vue";
export { default as SidebarGroupContent } from "./SidebarGroupContent.vue";
export { default as SidebarGroupLabel } from "./SidebarGroupLabel.vue";
export { default as SidebarHeader } from "./SidebarHeader.vue";
export { default as SidebarInput } from "./SidebarInput.vue";
export { default as SidebarInset } from "./SidebarInset.vue";
export { default as SidebarMenu } from "./SidebarMenu.vue";
export { default as SidebarMenuAction } from "./SidebarMenuAction.vue";
export { default as SidebarMenuBadge } from "./SidebarMenuBadge.vue";
export { default as SidebarMenuButton } from "./SidebarMenuButton.vue";
export { default as SidebarMenuItem } from "./SidebarMenuItem.vue";
export { default as SidebarMenuSkeleton } from "./SidebarMenuSkeleton.vue";
export { default as SidebarMenuSub } from "./SidebarMenuSub.vue";
export { default as SidebarMenuSubButton } from "./SidebarMenuSubButton.vue";
export { default as SidebarMenuSubItem } from "./SidebarMenuSubItem.vue";
export { default as SidebarProvider } from "./SidebarProvider.vue";
export { default as SidebarRail } from "./SidebarRail.vue";
export { default as SidebarSeparator } from "./SidebarSeparator.vue";
export { default as SidebarTrigger } from "./SidebarTrigger.vue";

export { useSidebar } from "./utils";

export const sidebarMenuButtonVariants = cva(
	"peer/menu-button flex w-full items-center gap-4 overflow-hidden rounded-xl p-2 text-left text-sm outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-10 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:shrink-0 group-data-[collapsible=icon]:[&>svg]:!size-6",
	{
		variants: {
			variant: {
				default:
					"text-sidebar-accent-foreground-inactive hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
				active: "text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
				outline:
					"bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
			},
			size: {
				default: "h-8 text-sm [&>svg]:size-4",
				sm: "h-7 text-xs [&>svg]:size-4",
				lg: "h-10 text-sm group-data-[collapsible=icon]:!p-2 [&>svg]:size-4",
				xl: "h-12 text-base group-data-[collapsible=icon]:!p-2 [&>svg]:size-5",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export type SidebarMenuButtonVariants = VariantProps<
	typeof sidebarMenuButtonVariants
>;
