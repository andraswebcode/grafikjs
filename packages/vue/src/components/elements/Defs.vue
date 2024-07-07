<script setup>
import { useCanvas } from './../../hooks';

const {
	state: { hasDefs, hasDrawingArea, showGrid, daAttrs, pAttrs, pPaths }
} = useCanvas((canvas) => ({
	hasDefs: canvas.hasDefs(),
	hasDrawingArea: canvas.hasDrawingArea,
	showGrid: canvas.showGrid,
	daAttrs: canvas.getDrawingAreaAttributes(),
	pAttrs: canvas.getGridPatternAttributes(),
	pPaths: canvas.getGridPatternPaths(true)
}));
</script>

<template>
	<defs v-if="hasDefs">
		<clipPath v-if="hasDrawingArea" id="grafik-drawing-area">
			<rect v-bind="daAttrs" />
		</clipPath>
		<pattern v-if="showGrid" v-bind="pAttrs">
			<path v-for="path in pPaths" v-bind="path" />
		</pattern>
	</defs>
</template>

<style scoped></style>
