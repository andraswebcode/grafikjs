<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, provide } from 'vue';
import { CanvasObject, Canvas } from '@grafikjs/core';
import { useCanvas } from './../../hooks';

const props = defineProps<CanvasObject>();
const emit = defineEmits(['change']);
const canvas = useCanvas();
const canvasRef = ref<SVGElement | null>(null);
const attrs = ref<Record<string, any>>(canvas.getAttributes());
const daAttrs = ref(canvas.getDrawingAreaAttributes());
const onSet = () => {
	attrs.value = canvas.getAttributes();
	daAttrs.value = canvas.getDrawingAreaAttributes();
	emit('change', canvas);
};
const onResize = () => {
	if (!canvas.autoSize || !canvasRef.value) {
		return;
	}
	canvasRef.value.style.display = 'none';
	const { clientWidth = 0, clientHeight = 0 } = canvasRef.value.parentElement || {};
	canvasRef.value.style.display = '';
	canvas
		.set({ width: clientWidth, height: clientHeight }, true)
		// just updating the viewBox.
		.zoomTo(canvas.zoom, canvas.pan);
};

onMounted(() => {
	const { autoSize } = canvas;
	const { clientWidth = 0, clientHeight = 0 } = canvasRef.value?.parentElement || {};
	const set = autoSize
		? {
				...props,
				width: clientWidth,
				height: clientHeight
		  }
		: props;

	canvas.on('set', onSet).set(set, true);
	window.addEventListener('resize', onResize);
});

onUnmounted(() => {
	canvas.off('set', onSet);
	window.removeEventListener('resize', onResize);
});

watch(props, (props) => {
	canvas.set({ ...props }, true);
});

provide('collection', canvas);
</script>

<template>
	<svg v-bind="attrs" ref="canvasRef">
		<slot name="defs" />
		<rect v-if="canvas.showGrid" v-bind="daAttrs" fill="url(#grafik-grid)" />
		<g v-if="canvas.hasDrawingArea" clip-path="url(#grafik-drawing-area)">
			<slot />
		</g>
		<slot v-else />
	</svg>
</template>

<style scoped></style>
