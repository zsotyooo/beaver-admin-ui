<script setup lang="ts">
import { PanelLeftClose, PanelLeftOpen } from "lucide-vue-next";
</script>
<template>
	<SidebarProvider>
		<Sidebar collapsible="icon">
			<SidebarMenu
				class="border-b-sidebar-accent-foreground-inactive mb-6 hidden group-data-[collapsible=icon]:flex"
			>
				<SidebarMenuItem>
					<SidebarTrigger as-child>
						<SidebarMenuButton size="xl" variant="default">
							<PanelLeftOpen />
							<span class="sr-only">Toggle Sidebar</span>
						</SidebarMenuButton>
					</SidebarTrigger>
				</SidebarMenuItem>
			</SidebarMenu>
			<SidebarTrigger as-child>
				<Button
					variant="clear"
					size="icon-xl"
					class="text-sidebar-accent-foreground-inactive active:text-sidebar-accent-foreground hover:text-sidebar-accent-foreground absolute right-10 top-10 group-data-[collapsible=icon]:hidden"
				>
					<PanelLeftClose />
					<span class="sr-only">Toggle Sidebar</span>
				</Button>
			</SidebarTrigger>
			<div class="pl-5 pr-10 group-data-[collapsible=icon]:px-0">
				<div
					class="-mt-6 mb-12 w-full group-data-[collapsible=icon]:hidden md:-mt-8"
				>
					<slot name="logo">
						<BeaLogo class="max-h-16 w-full max-w-16" />
					</slot>
				</div>
				<slot name="menu">
					<BeaSidebarNavigation />
				</slot>
			</div>
		</Sidebar>
		<SidebarInset>
			<header
				class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
			>
				<div class="flex items-center gap-2 px-4">
					<SidebarTrigger class="-ml-1 md:hidden" />
					<Separator
						orientation="vertical"
						class="mr-2 h-4 md:hidden"
					/>
					<slot name="header">
						<div>header</div>
					</slot>
				</div>
			</header>
			<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
				<slot>
					<div>content</div>
				</slot>
			</div>
		</SidebarInset>
	</SidebarProvider>
</template>
