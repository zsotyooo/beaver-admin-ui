<script setup lang="ts">
import { ScnButton } from "@digital-beaver-admin/admin-ui";
import { Camera, Rocket } from "lucide-vue-next";

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

const sizes = ["lg", "default", "sm", "xs"];
const iconSizes = ["icon-lg", "icon", "icon-sm", "icon-xs"];

function ucFirst(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

const source = `<ScnButton :variant="variant" :size="size">
	Some text
</ScnButton>`;
</script>
<template>
	<Story
		title="Buttons"
		:layout="{
			type: 'grid',
		}"
		:source="source"
	>
		<Variant
			:title="ucFirst(variant)"
			v-for="variant in variants"
			:key="variant"
		>
			<div class="htw-flex htw-flex-col htw-gap-2">
				<div
					v-for="size in sizes"
					:key="size"
					class="htw-flex htw-flex-col htw-gap-2"
				>
					<div>
						<ScnButton :variant="variant" :size="size">
							{{ ucFirst(variant) }}
						</ScnButton>
					</div>
					<div>
						<ScnButton :variant="variant" :size="size">
							<Camera />
							{{ ucFirst(variant) }}
						</ScnButton>
					</div>
				</div>
				<div class="htw-flex htw-gap-2">
					<div v-for="size in iconSizes" :key="size">
						<ScnButton :variant="variant" :size="size">
							<Rocket />
						</ScnButton>
					</div>
				</div>
			</div>
		</Variant>
	</Story>
</template>
<docs lang="md">
# Welcome

This is a demo book using Vue 3.

Learn more about Histoire [here](https://histoire.dev/).
</docs>
