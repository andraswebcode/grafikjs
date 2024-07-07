<script setup lang="ts">
import { Group, ShapeObject, omitBy } from '@grafikjs/core';
import { useCollection } from './../../hooks';
import { onMounted, onUnmounted, provide } from 'vue';
import ShapeBase from './ShapeBase.vue';

const props = defineProps<Partial<ShapeObject>>();
const {
	actions: { add, remove }
} = useCollection(null, (collection) => ({
	add: collection.add.bind(collection),
	remove: collection.remove.bind(collection)
}));
const group = new Group(omitBy(props, (value) => typeof value === 'undefined'));

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
