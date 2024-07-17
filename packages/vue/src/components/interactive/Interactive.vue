<script setup>
import { useCanvas } from './../../hooks';
import Control from './Control.vue';
import Selector from './Selector.vue';

const {
	state: { shapes, mode, multiselection },
	actions: { mousedown, mousemove, mouseup, wheel }
} = useCanvas(
	(canvas) => ({
		shapes: [...canvas.getSelectedShapes()],
		mode: canvas.mode,
		multiselection: canvas.multiselection
	}),
	(canvas) => ({
		mousedown: canvas.onPointerStart.bind(canvas),
		mousemove: canvas.onPointerMove.bind(canvas),
		mouseup: canvas.onPointerEnd.bind(canvas),
		wheel: canvas.onWheel.bind(canvas)
	}),
	'set shapes:selection:updated'
);
</script>

<template>
	<div
		class="grafik-interactive"
		:class="{
			[`grafik-mode-${mode}`]: mode
		}"
		@mousedown.prevent="mousedown"
		@mousemove="mousemove"
		@mouseup="mouseup"
		@mouseleave="mouseup"
		@wheel="wheel"
	>
		<Control v-if="mode === 'select'" v-for="shape in shapes" :key="shape.id" :shape="shape" />
		<Selector v-if="multiselection" />
		<slot />
	</div>
</template>

<style scoped></style>
