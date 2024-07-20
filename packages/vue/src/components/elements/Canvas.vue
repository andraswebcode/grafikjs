<script setup lang="ts">
import { CanvasObject } from '@grafikjs/core';
import { useCanvas } from './../../hooks';
import { onMounted, onUnmounted, provide, ref, watch } from 'vue';

const props = defineProps<CanvasObject>();
const emit = defineEmits(['change', 'animate']);
const svgRef = ref(null);
const {
	state: { attrs, daAttrs, shwAttrs, showGrid, hasDrawingArea },
	actions: { set, setSize },
	context
} = useCanvas(
	(canvas) => ({
		attrs: canvas.getAttributes(),
		shwAttrs: canvas.getShapesWrapperAttributes(),
		daAttrs: canvas.getDrawingAreaAttributes(),
		showGrid: canvas.showGrid,
		hasDrawingArea: canvas.hasDrawingArea
	}),
	(canvas) => ({
		set: canvas.set.bind(canvas),
		setSize: canvas.setResponsiveSize.bind(canvas)
	}),
	'set',
	(...args) => emit('change', ...args)
);
useCanvas(
	null,
	null,
	'animation:updated animation:played animation:paused animation:completed',
	(...args) => emit('animate', ...args)
);
const resize = () => {
	setSize(svgRef.value);
};

onMounted(() => {
	window.addEventListener('resize', resize);
	set({ ...props }, true);
	resize();
	// setSize(svgRef.value);
});
onUnmounted(() => {
	window.removeEventListener('resize', resize);
});

watch(props, (props) => {
	set({ ...props }, true);
});

provide('collection', context);
</script>

<template>
	<svg ref="svgRef" class="grafik-canvas" v-bind="attrs">
		<slot name="defs" />
		<rect v-if="showGrid" v-bind="daAttrs" fill="url(#grafik-grid)" />
		<g v-if="hasDrawingArea" clip-path="url(#grafik-drawing-area)">
			<g v-bind="shwAttrs">
				<slot />
			</g>
		</g>
		<slot v-else />
	</svg>
</template>

<style scoped></style>
