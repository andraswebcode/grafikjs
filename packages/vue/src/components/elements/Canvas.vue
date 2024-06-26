<script setup lang="ts">
import { ref, watch, inject, onMounted, onUnmounted, provide } from 'vue';
import { CanvasObject, Canvas } from '@grafikjs/core';

const props = defineProps<CanvasObject>();
const canvas: Canvas = inject('canvas') as Canvas;
const canvasRef = ref<SVGElement | null>(null);
const attrs = ref<Record<string, any>>(canvas.getAttributes());
const gAttrs = ref(canvas.getDrawingAreaAttributes());
const onSet = () => {
	attrs.value = canvas.getAttributes();
	gAttrs.value = canvas.getDrawingAreaAttributes();
};
const onResize = () => {
	if (!canvas.autoSize || !canvasRef.value) {
		return;
	}
	canvasRef.value.style.display = 'none';
	const { clientWidth = 0, clientHeight = 0 } = canvasRef.value.parentElement || {};
	canvasRef.value.style.display = '';
	canvas
		.set({ width: clientWidth, height: clientHeight })
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

	canvas.on('set', onSet).set(set);
	window.addEventListener('resize', onResize);
});

onUnmounted(() => {
	canvas.off('set', onSet);
	window.removeEventListener('resize', onResize);
});

watch(props, (props) => {
	canvas.set(props);
});

provide('collection', canvas);
</script>

<template>
	<svg v-bind="attrs" ref="canvasRef">
		<slot name="defs" />
		<rect v-if="canvas.showGrid" v-bind="gAttrs" fill="url(#grafik-grid)" />
		<g v-if="canvas.hasDrawingArea" clip-path="url(#grafik-drawing-area)">
			<slot />
		</g>
		<slot v-else />
	</svg>
</template>

<style scoped></style>
