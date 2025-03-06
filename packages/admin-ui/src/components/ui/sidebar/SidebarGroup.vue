<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/scn-utils";

const props = defineProps<{
	class?: HTMLAttributes["class"];
}>();
</script>

<template>
	<div
		data-sidebar="group"
		:class="
			cn(
				'group-data-[collapsible=icon]:!border-sidebar-accent-foreground-inactive relative flex w-full min-w-0 flex-col p-2 group-data-[collapsible=icon]:!mt-2 group-data-[collapsible=icon]:!border-t group-data-[collapsible=icon]:!border-dashed group-data-[collapsible=icon]:!px-0',
				props.class,
			)
		"
	>
		<slot />
	</div>
</template>
