import { LucideIcon } from "lucide-vue-next";

export type BeaNavigationItemLink = {
	id: string;
	label: string;
	url: string;
	active: boolean;
	icon?: LucideIcon;
	children?: BeaNavigationItem[];
};

export type BeaNavigationItemBlock = {
	id: string;
	label: string;
	active: boolean;
	icon?: LucideIcon;
	expanded?: boolean;
	children?: BeaNavigationItem[];
};

export type BeaNavigationItem = BeaNavigationItemLink | BeaNavigationItemBlock;

export function isBeaNavigationItemLink(
	item: BeaNavigationItem,
): item is BeaNavigationItemLink {
	return (item as BeaNavigationItemLink).url !== undefined;
}

export function isBeaNavigationItemBlock(
	item: BeaNavigationItem,
): item is BeaNavigationItemBlock {
	return !isBeaNavigationItemLink(item);
}
