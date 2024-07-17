<script setup>
import { useCanvas } from '@grafikjs/vue';
const {
	state: { dWidth, dHeight, zoom, mode },
	actions: { set, play, pause }
} = useCanvas(
	(canvas) => ({
		dWidth: canvas.drawingWidth,
		dHeight: canvas.drawingHeight,
		zoom: canvas.zoom,
		mode: canvas.mode
	}),
	(canvas) => ({
		set: canvas.set.bind(canvas),
		play: canvas.getAnimation().play.bind(canvas.getAnimation()),
		pause: canvas.getAnimation().pause.bind(canvas.getAnimation())
	}),
	'set'
);
</script>

<template>
	<label>
		Drawing Width:
		<input
			type="number"
			v-model="dWidth"
			@input="set('drawingWidth', parseInt($event.target.value))"
		/>
	</label>
	<label>
		Drawing Height:
		<input
			type="number"
			v-model="dHeight"
			@input="set('drawingHeight', parseInt($event.target.value))"
		/>
	</label>
	<label>
		Zoom:
		<input
			type="number"
			v-model="zoom"
			@input="set('zoom', parseFloat($event.target.value))"
			step="0.1"
		/>
	</label>
	<label>
		Mode:
		<select v-model="mode" @change="set('mode', $event.target.value)">
			<option value="select">Select</option>
			<option value="pan">Pan</option>
			<option value="draw">Draw</option>
		</select>
	</label>
	<button @click="play()">Play</button>
	<button @click="pause()">Pause</button>
</template>

<style scoped></style>
