<script setup>
import { useCanvas } from './../../hooks';
import Control from './Control.vue';
import Selector from './Selector.vue';

const {
	state: { shapes, multiselection },
	actions: { mousedown, mousemove, mouseup, wheel }
} = useCanvas(
	(canvas) => ({
		shapes: [...canvas.getSelectedShapes()],
		multiselection: canvas.multiselection
	}),
	(canvas) => ({
		mousedown: canvas.onPointerStart.bind(canvas),
		mousemove: canvas.onPointerMove.bind(canvas),
		mouseup: canvas.onPointerEnd.bind(canvas),
		wheel: canvas.onWheel.bind(canvas)
	}),
	'shapes:selection:updated'
);
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
		<Control v-for="shape in shapes" :key="shape.id" :shape="shape" />
		<Selector v-if="multiselection" />
		<slot />
	</div>
</template>

<style scoped></style>
