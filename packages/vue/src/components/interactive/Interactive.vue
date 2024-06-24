<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue';
import Control from './Control.vue';
const canvas = inject('canvas');
const { onPointerStart, onPointerMove, onPointerEnd, onWheel } = canvas;
const mousedown = onPointerStart.bind(canvas);
const mousemove = onPointerMove.bind(canvas);
const mouseup = onPointerEnd.bind(canvas);
const wheel = onWheel.bind(canvas);
const shapes = ref(canvas.getSelectedShapes());
const onSelect = () => {
	shapes.value = [...canvas.getSelectedShapes()];
};
window.c = canvas;
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
		@mousedown="mousedown"
		@mousemove="mousemove"
		@mouseup="mouseup"
		@wheel="wheel"
	>
		<Control v-for="shape in shapes" :control="shape.getControl()" />
		<slot />
	</div>
</template>

<style scoped></style>
