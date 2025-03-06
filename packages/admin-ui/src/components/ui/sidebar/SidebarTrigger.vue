<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-vue-next";
import { useSidebar } from "./utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type SidebarMenuButtonVariants } from ".";

export interface SidebarTriggerProps extends PrimitiveProps {
	size?: SidebarMenuButtonVariants["size"];
}

withDefaults(defineProps<SidebarTriggerProps>(), {
	as: Button,
});

const { toggleSidebar } = useSidebar();
</script>

<template>
	<Primitive
		data-sidebar="trigger"
		variant="ghost"
		size="icon"
		@click="toggleSidebar"
		:as="as"
		:as-child="asChild"
		v-bind="$attrs"
	>
		<slot>
			<PanelLeft />
			<span class="sr-only">Toggle Sidebar</span>
		</slot>
	</Primitive>
</template>
