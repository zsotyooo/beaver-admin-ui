import { createGlobalState, createSharedComposable } from "@vueuse/core";
import { ref } from "vue";
import { BeaNavigationItem } from "../types";

const beaNavigationStore = createGlobalState(() => {
	// The actual state
	const navigationItems = ref<BeaNavigationItem[]>([]);

	function findItemById(id: string) {
		const found = _findItemById(id, navigationItems.value);
		if (found) {
			return found;
		}
		console.warn(`BEA: Navigation item for id ${id} not found!`);
	}

	function findParentItemById(id: string) {
		for (const item of navigationItems.value) {
			if (item.children && item.children.length) {
				const found = _findItemById(id, item.children);
				if (found) {
					return item;
				}
			}
		}
		console.warn(`BEA: Parent navigation item for id ${id} not found!`);
		return null;
	}

	function addItem(item: BeaNavigationItem, parentId?: string) {
		if (parentId) {
			const parentItem = findItemById(parentId);
			if (parentItem) {
				if (!parentItem.children) {
					parentItem.children = [item];
				}
				return;
			}
		} else {
			navigationItems.value.push(item);
		}
	}

	function removeItem(itemId: string) {
		const parentItem = findParentItemById(itemId);
		if (parentItem) {
			const index = parentItem.children!.findIndex(
				item => item.id === itemId,
			);
			if (index >= 0) {
				parentItem.children!.splice(index, 1);
			}
			return;
		}
	}

	function setNavigationItems(items: BeaNavigationItem[]) {
		navigationItems.value = items;
	}

	return {
		navigationItems,
		setNavigationItems,
		findItemById,
		findParentItemById,
		addItem,
		removeItem,
	};
});

function _findItemById(
	id: string,
	items: BeaNavigationItem[],
): BeaNavigationItem | null {
	for (const item of items) {
		if (item.id === id) {
			return item;
		}
		if (item.children && item.children.length) {
			const found = _findItemById(id, item.children);
			if (found) {
				return found;
			}
		}
	}
	return null;
}

export const useBeaNavigationStore = createSharedComposable(beaNavigationStore);
