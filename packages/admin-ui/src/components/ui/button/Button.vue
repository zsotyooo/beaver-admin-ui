<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/lib/scn-utils";
import { Primitive, type PrimitiveProps } from "reka-ui";
import { type ButtonVariants, buttonVariants } from ".";

interface Props extends PrimitiveProps {
	variant?: ButtonVariants["variant"];
	size?: ButtonVariants["size"];
	loading?: ButtonVariants["loading"];
	disabled?: ButtonVariants["disabled"];
	class?: HTMLAttributes["class"];
}

const props = withDefaults(defineProps<Props>(), {
	as: "button",
});
</script>

<template>
	<Primitive
		:as="as"
		:as-child="asChild"
		:disabled="disabled || loading"
		:class="
			cn(
				buttonVariants({ variant, size, loading, disabled }),
				props.class,
			)
		"
	>
		<slot />
	</Primitive>
</template>
