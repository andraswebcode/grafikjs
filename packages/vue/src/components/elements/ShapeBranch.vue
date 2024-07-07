<script setup lang="ts">
import { GroupObject } from '@grafikjs/core';
import { withCollectionContext } from './../../hocs';
import ShapeBase from './ShapeBase.vue';
import Group from './Group.vue';

const props = defineProps<Partial<GroupObject>>();
</script>

<template>
	<component
		:is="props.tagName === 'g' ? Group : withCollectionContext(ShapeBase, props.tagName || '')"
		v-bind="props"
	>
		<ShapeBranch
			v-if="props.children?.length"
			v-for="child in props.children"
			:key="child.id"
			v-bind="child"
		/>
	</component>
</template>

<style scoped></style>
