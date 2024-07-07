<script setup lang="ts">
import { CanvasObject } from '@grafikjs/core';
import { useCanvas } from './../../hooks';
import { provide, watch } from 'vue';

const props = defineProps<CanvasObject>();
const {
	state: { attrs, daAttrs, showGrid, hasDrawingArea },
	actions: { set },
	context
} = useCanvas(
	(canvas) => ({
		attrs: canvas.getAttributes(),
		daAttrs: canvas.getDrawingAreaAttributes(),
		showGrid: canvas.showGrid,
		hasDrawingArea: canvas.hasDrawingArea
	}),
	(canvas) => ({
		set: canvas.set.bind(canvas)
	}),
	'set'
);

watch(props, (props) => {
	set({ ...props }, true);
});

provide('collection', context);
</script>

<template>
	<svg v-bind="attrs">
		<slot name="defs" />
		<rect v-if="showGrid" v-bind="daAttrs" fill="url(#grafik-grid)" />
		<g v-if="hasDrawingArea" clip-path="url(#grafik-drawing-area)">
			<slot />
		</g>
		<slot v-else />
	</svg>
</template>

<style scoped></style>
