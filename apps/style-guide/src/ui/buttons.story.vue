<script setup lang="ts">
import { ScnButton, Camera } from "@digital-beaver-admin/admin-ui";
import { reactive, shallowRef, watch } from "vue";

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

const state = reactive({
	label: "Some text",
	disabled: false,
	size: "lg",
	loading: false,
	icon: false,
});

const previousLabel = shallowRef(state.label);

watch(
	() => state.size,
	size => {
		if (size.startsWith("icon")) {
			if (state.label) {
				previousLabel.value = state.label;
				state.label = "";
			}

			if (!state.icon) {
				state.icon = true;
			}
		} else {
			state.label = previousLabel.value;
		}
	},
);

const sizes = [
	"lg",
	"default",
	"sm",
	"xs",
	"icon-lg",
	"icon",
	"icon-sm",
	"icon-xs",
];

const source = function (variant: string) {
	return `${state.icon ? 'import { ScnButton, Camera } from "@digital-beaver-admin/admin-ui";\n//...' : ""}
<ScnButton
	:variant="'${variant}'"
	:size="'${state.size}'"
	:disabled="${state.disabled}"
	:loading="${state.loading}"
>
	${state.icon ? "<Camera /> " : ""}${state.label}
</ScnButton>`;
};

function ucFirst(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
</script>
<template>
	<Story
		title="Buttons"
		:layout="{
			type: 'grid',
		}"
	>
		<Variant
			:title="ucFirst(variant)"
			v-for="variant in variants"
			:key="variant"
			:source="source(variant)"
		>
			<template #default>
				<ScnButton
					:variant="variant"
					:size="state.size"
					:disabled="state.disabled"
					:loading="state.loading"
				>
					<Camera v-if="state.icon" />
					{{ state.label }}
				</ScnButton>
			</template>
			<template #controls>
				<HstText v-model="state.label" title="Label" />
				<HstCheckbox v-model="state.icon" title="With Icon" />
				<HstCheckbox v-model="state.disabled" title="Disabled" />
				<HstCheckbox v-model="state.loading" title="Loading" />
				<HstSelect v-model="state.size" :options="sizes" title="Size" />
			</template>
		</Variant>
	</Story>
</template>
<docs lang="md">
# Welcome

This is a demo book using Vue 3.

Learn more about Histoire [here](https://histoire.dev/).
</docs>
