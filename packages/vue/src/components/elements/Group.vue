<script setup lang="ts">
import { Group, GroupObject, omitBy } from '@grafikjs/core';
import { useCollection } from './../../hooks';
import { onMounted, onUnmounted, provide } from 'vue';
import ShapeBase from './ShapeBase.vue';

const props = defineProps<Partial<GroupObject>>();
const {
	actions: { add, remove }
} = useCollection(null, (collection) => ({
	add: collection.add.bind(collection),
	remove: collection.remove.bind(collection)
}));
const group = new Group(
	omitBy(props, (value, key) => typeof value === 'undefined' || key === 'children')
);

onMounted(() => {
	add(group);
});
onUnmounted(() => {
	remove(group);
});

provide('collection', group);
</script>

<template>
	<ShapeBase tagName="g" :shape="group" :props="props">
		<slot />
	</ShapeBase>
</template>

<style scoped></style>
