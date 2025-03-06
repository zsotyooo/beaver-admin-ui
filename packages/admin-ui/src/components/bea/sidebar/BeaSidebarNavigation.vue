<script setup lang="ts">
import { computed, onMounted } from "vue";
import { BeaNavigationItem } from "../navigation/types";
import { useBeaNavigationStore } from "../navigation/utils/beaNavigationStore";

const props = withDefaults(
	defineProps<{
		include?: string[];
		exclude?: string[];
	}>(),
	{
		include: undefined,
		exclude: undefined,
	},
);

const store = useBeaNavigationStore();

const blocks = computed<BeaNavigationItem[]>(() => {
	const allIds = store.navigationItems.value.map(item => item.id);
	const includedIds = allIds.filter(id => {
		if (!props.include && !props.exclude) {
			return true;
		}
		if (props.include && !props.exclude) {
			return props.include.includes(id);
		}
		if (props.exclude && !props.include) {
			return !props.exclude.includes(id);
		}
		if (props.include && props.exclude) {
			return props.include.includes(id) && !props.exclude.includes(id);
		}
		return false;
	});
	return store.navigationItems.value.filter(item =>
		includedIds.includes(item.id),
	);
});
onMounted(() => {
	console.log(store.navigationItems.value);
});
</script>
<template>
	<BeaSidebarNavigationBlock
		v-for="block in blocks"
		:key="block.id"
		:groupId="block.id"
	/>
</template>
