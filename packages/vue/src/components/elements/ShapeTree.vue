<script setup lang="ts">
import { ShapeObject } from '@grafikjs/core';
import ShapeBranch from './ShapeBranch.vue';
import { onMounted, onUnmounted } from 'vue';
import { useCanvas } from './../../hooks';
const props = defineProps<{ json: ShapeObject[] }>();
const emit = defineEmits(['updated']);
const canvas = useCanvas();
const updated = (props, shape) => {
	emit('updated', props, shape);
};

onMounted(() => {
	canvas.on('shapes:updated', updated);
});
onUnmounted(() => {
	canvas.off('shapes:updated', updated);
});
</script>

<template>
	<ShapeBranch v-for="shape in props.json" :key="shape.id" v-bind="shape" />
</template>

<style scoped></style>
