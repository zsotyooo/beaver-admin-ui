<script setup lang="ts">
import { ChevronRight } from "lucide-vue-next";
import { computed } from "vue";
import {
	BeaNavigationItem,
	isBeaNavigationItemBlock,
	isBeaNavigationItemLink,
} from "../navigation/types";
import { useBeaNavigationStore } from "../navigation/utils/beaNavigationStore";
import { createReusableTemplate } from "@vueuse/core";
import { type SidebarMenuButtonProps } from "@/components/ui/sidebar/SidebarMenuButtonChild.vue";
const props = defineProps<{
	groupId: string;
}>();

const store = useBeaNavigationStore();

const [DefineLocalChildrenBlock, LocalChildrenBlock] = createReusableTemplate<{
	items: BeaNavigationItem[];
	buttonSize: SidebarMenuButtonProps["size"];
}>();

const [DefineLocalNavigationItem, LocalNavigationItem] =
	createReusableTemplate<{
		item: BeaNavigationItem;
		collapseInside?: boolean;
		size: SidebarMenuButtonProps["size"];
	}>();

const block = computed<BeaNavigationItem | null>(() => {
	return store.findItemById(props.groupId) ?? null;
});
</script>
<template>
	<template v-if="block">
		<DefineLocalNavigationItem v-slot="{ item, collapseInside }">
			<SidebarMenuButton
				v-if="isBeaNavigationItemBlock(item)"
				:tooltip="item.label"
				:variant="item.active ? 'active' : 'default'"
				size="xl"
			>
				<component
					:is="item.icon"
					v-if="item.icon"
					:strokeWidth="item.active ? 2.5 : 2"
				/>
				<span>{{ item.label }}</span>
				<ChevronRight
					v-if="item.children?.length"
					class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
				/>
			</SidebarMenuButton>
			<SidebarMenuButton
				v-else-if="isBeaNavigationItemLink(item)"
				:tooltip="item.label"
				size="xl"
				:variant="item.active ? 'active' : 'default'"
				as-child
			>
				<a :href="item.url">
					<component
						:is="item.icon"
						v-if="item.icon"
						:strokeWidth="item.active ? 2.5 : 2"
					/>
					<span>{{ item.label }}</span>
					<template v-if="item.children?.length">
						<CollapsibleTrigger v-if="collapseInside" as-child>
							<ChevronRight
								class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
							/>
						</CollapsibleTrigger>
						<ChevronRight
							v-else
							class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
						/>
					</template>
				</a>
			</SidebarMenuButton>
		</DefineLocalNavigationItem>

		<DefineLocalChildrenBlock v-slot="{ items, buttonSize }">
			<template v-for="item in items" :key="item.id">
				<Collapsible
					v-if="item.children?.length"
					as-child
					:default-open="item.active"
					class="group/collapsible"
				>
					<SidebarMenuItem>
						<LocalNavigationItem
							v-if="isBeaNavigationItemLink(item)"
							:item="item"
							:size="buttonSize"
							:collapseInside="true"
						/>
						<CollapsibleTrigger as-child v-else>
							<LocalNavigationItem
								:item="item"
								:size="buttonSize"
							/>
						</CollapsibleTrigger>

						<CollapsibleContent>
							<SidebarMenuSub>
								<SidebarMenuSubItem
									v-for="subItem in item.children"
									:key="subItem.id"
								>
									<SidebarGroupLabel
										v-if="isBeaNavigationItemBlock(subItem)"
									>
										{{ subItem.label }}
									</SidebarGroupLabel>
									<SidebarMenuButton
										v-else
										as-child
										:variant="
											item.active ? 'active' : 'default'
										"
									>
										<a :href="subItem.url">
											<component
												:is="subItem.icon"
												v-if="subItem.icon"
											/>
											<span>{{ subItem.label }}</span>
										</a>
									</SidebarMenuButton>
								</SidebarMenuSubItem>
							</SidebarMenuSub>
						</CollapsibleContent>
					</SidebarMenuItem>
				</Collapsible>
				<SidebarMenuItem v-else>
					<LocalNavigationItem :item="item" :size="buttonSize" />
				</SidebarMenuItem>
			</template>
		</DefineLocalChildrenBlock>

		<SidebarGroup v-if="isBeaNavigationItemBlock(block) && block.expanded">
			<SidebarGroupLabel>{{ block.label }}</SidebarGroupLabel>
			<SidebarMenu v-if="block.children?.length">
				<LocalChildrenBlock :items="block.children" buttonSize="lg" />
			</SidebarMenu>
		</SidebarGroup>
		<SidebarMenu v-else-if="isBeaNavigationItemBlock(block)">
			<LocalChildrenBlock :items="[block]" buttonSize="xl" />
		</SidebarMenu>
		<SidebarMenu v-else-if="isBeaNavigationItemLink(block)">
			<LocalChildrenBlock :items="[block]" buttonSize="xl" />
		</SidebarMenu>
	</template>
</template>
