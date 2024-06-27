<script setup>
import { ref } from 'vue';
import {
	Canvas,
	Defs,
	Group,
	Rect,
	Path,
	ShapeTree,
	Wrapper,
	Interactive,
	Selector
} from '@grafikjs/vue';
const width = ref(1200);
const height = ref(800);
const dWidth = ref(400);
const dHeight = ref(400);
const zoom = ref(1);
const left = ref(200);
const top = ref(200);
const rotate = ref(45);
const json = ref([
	{
		id: 'g-M7NEAs01Icl1',
		name: '',
		tagName: 'g',
		children: [
			{
				id: 'rect-Cj6aGLV9ZMI4',
				name: '',
				tagName: 'rect',
				fill: 'none',
				stroke: '#000',
				strokeWidth: 2,
				width: 100,
				height: 100,
				left: -100,
				top: 0,
				angle: 45,
				scaleX: 1,
				scaleY: 1,
				skewX: 0,
				skewY: 0
			},
			{
				id: 'rect-kWdNZKVOn7lf',
				name: '',
				tagName: 'rect',
				fill: 'none',
				stroke: '#000',
				strokeWidth: 2,
				width: 100,
				height: 100,
				left: 100,
				top: 0,
				angle: 45,
				scaleX: 1,
				scaleY: 1,
				skewX: 0,
				skewY: 0
			}
		],
		left: 400,
		top: 400,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'circle-NjxlXyZCpbKh',
		name: '',
		tagName: 'circle',
		r: 50,
		cx: 50,
		cy: 50,
		left: 600,
		top: 400,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'rect-Rrjr8i7cvlLD',
		name: '',
		tagName: 'rect',
		fill: 'none',
		stroke: '#000',
		strokeWidth: 2,
		width: 100,
		height: 100,
		left: 0,
		top: 0,
		angle: 45,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'path-kGa1gK1SYKhr',
		name: '',
		tagName: 'path',
		d: 'M 41.376 11.025000000000002 C 26.375999999999998 -13.974999999999998 -22.624000000000002 11.025000000000002 11.376 46.025000000000006 L 41.376 76.025 L 71.376 46.025000000000006 C 105.376 6.025000000000002 56.376 -13.974999999999998 41.376 11.025000000000002',
		left: 450,
		top: 250,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'polyline-C4eoMzQX67qY',
		name: '',
		tagName: 'polygon',
		points: '50 0 100 100 0 100',
		left: 350,
		top: 150,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
	{
		id: 'text-crKouhcmBjUO',
		name: '',
		tagName: 'text',
		x: 0,
		y: 40,
		fontFamily: 'Arial',
		fontSize: 40,
		left: 800,
		top: 250,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	}
]);
</script>

<template>
	<div>
		<Wrapper>
			<Canvas
				:width="width"
				:height="height"
				:drawingWidth="dWidth"
				:drawingHeight="dHeight"
				:zoom="zoom"
			>
				<template v-slot:defs>
					<Defs />
				</template>
				<Rect
					:width="200"
					:height="200"
					:left="left"
					:top="top"
					:angle="rotate"
					fill="lightblue"
				/>
				<Group :left="200" :top="200" fill="lightgreen">
					<Rect
						:width="100"
						:height="100"
						:left="-50"
						:top="-50"
						:angle="rotate"
					/>
					<Rect
						:width="100"
						:height="100"
						:left="50"
						:top="50"
						:angle="rotate"
					/>
				</Group>
			</Canvas>
			<Interactive>
				<Selector />
			</Interactive>
		</Wrapper>
		<label>
			Width:
			<input type="number" v-model="width" />
		</label>
		<label>
			Height:
			<input type="number" v-model="height" />
		</label>
		<label>
			Drawing Width:
			<input type="number" v-model="dWidth" />
		</label>
		<label>
			Drawing Height:
			<input type="number" v-model="dHeight" />
		</label>
		<label>
			Zoom:
			<input type="number" v-model="zoom" step="0.1" />
		</label>
		<label>
			Left:
			<input type="number" v-model="left" />
		</label>
		<label>
			Top:
			<input type="number" v-model="top" />
		</label>
		<label>
			Rotate:
			<input type="number" v-model="rotate" />
		</label>
	</div>
</template>

<style scoped></style>
