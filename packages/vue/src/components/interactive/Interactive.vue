<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Control from './Control.vue';
import { useCanvas } from './../../hooks';

const canvas = useCanvas();
const { onPointerStart, onPointerMove, onPointerEnd, onWheel } = canvas;
const mousedown = onPointerStart.bind(canvas);
const mousemove = onPointerMove.bind(canvas);
const mouseup = onPointerEnd.bind(canvas);
const wheel = onWheel.bind(canvas);
const shapes = ref(canvas.getSelectedShapes());
const onSelect = () => {
	shapes.value = [...canvas.getSelectedShapes()];
};

onMounted(() => {
	canvas.on('shapes:selection:updated', onSelect);
});

onUnmounted(() => {
	canvas.off('shapes:selection:updated', onSelect);
});
</script>

<template>
	<div
		class="grafik-interactive"
		@mousedown.prevent="mousedown"
		@mousemove="mousemove"
		@mouseup="mouseup"
		@mouseleave="mouseup"
		@wheel="wheel"
	>
		<Control v-for="shape in shapes" :key="shape.id" :control="shape.getControl()" />
		<slot />
	</div>
</template>

<style scoped></style>
