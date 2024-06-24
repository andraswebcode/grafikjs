<script setup lang="ts">
import { ref, watch, inject, onMounted, onUnmounted, provide } from 'vue';
import { CanvasObject, Canvas } from '@grafikjs/core';

const props = defineProps<CanvasObject>();
const canvas: Canvas = inject('canvas');
const attrs = ref(canvas.getAttributes());
const onSet = () => {
	attrs.value = canvas.getAttributes();
};

onMounted(() => {
	canvas.on('set', onSet).set(props);
});

onUnmounted(() => {
	canvas.off('set', onSet);
});

watch(props, (props) => {
	canvas.set(props);
});

provide('collection', canvas);
</script>

<template>
	<svg v-bind="attrs">
		<slot />
	</svg>
</template>

<style scoped></style>
