<script setup lang="ts">
import { inject, ref, onMounted, onUnmounted } from 'vue';
import { Canvas } from '@grafikjs/core';

const canvas: Canvas = inject('canvas') as Canvas;
const daAttrs = ref(canvas.getDrawingAreaAttributes());
const pAttrs = ref(canvas.getGridPatternAttributes());
const ppAttrs = ref(canvas.getGridPatternPathAttributes());
const onSet = () => {
	daAttrs.value = canvas.getDrawingAreaAttributes();
	pAttrs.value = canvas.getGridPatternAttributes();
	ppAttrs.value = canvas.getGridPatternPathAttributes();
};

onMounted(() => {
	canvas.on('set', onSet);
});

onUnmounted(() => {
	canvas.off('set', onSet);
});
</script>

<template>
	<defs v-if="canvas.hasDefs()">
		<clipPath v-if="canvas.hasDrawingArea" id="grafik-drawing-area">
			<rect v-bind="daAttrs" />
		</clipPath>
		<pattern v-if="canvas.showGrid" v-bind="pAttrs">
			<path v-bind="ppAttrs" />
		</pattern>
	</defs>
</template>

<style scoped></style>
