<script setup lang="ts">
import { Group, ShapeObject, omitBy } from '@grafikjs/core';
import { provide, inject, onMounted, onUnmounted, watch } from 'vue';
import ShapeBase from './ShapeBase.vue';
const props = defineProps<Partial<ShapeObject>>();
const collection: any = inject('collection');
const group = new Group(omitBy(props, (value) => typeof value === 'undefined'));

provide('collection', group);

onMounted(() => {
	collection.add(group);
});

onUnmounted(() => {
	collection.remove(group);
});

watch(props, (props) => {
	group.set(props);
});
</script>

<template>
	<ShapeBase tagName="g" :shape="group" :props="props">
		<slot />
	</ShapeBase>
</template>

<style scoped></style>
