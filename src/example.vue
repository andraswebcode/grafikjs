<script setup>
import { ref } from 'vue';
import { Canvas, Group, Rect, ShapeTree, Wrapper, Interactive, Selector } from '@grafikjs/vue';
const width = ref(1280);
const height = ref(720);
const rotate = ref(45);
const json = ref([
	{
		id: 'rect-Yta5Pdq4y2je',
		name: '',
		tagName: 'rect',
		fill: { id: 'pattern-aIQ65qznRkSV', name: '', tagName: 'pattern', children: [] },
		width: 1200,
		height: 800,
		left: 600,
		top: 400,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	},
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
		fill: {
			id: 'radialGradient-hnDPTtTNeRlo',
			name: '',
			tagName: 'radialGradient',
			children: [
				{
					id: 'stop-joPLt0LglRvO',
					name: '',
					tagName: 'stop',
					offset: 0,
					stopColor: 'red',
					stopOpacity: 1
				},
				{
					id: 'stop-U1ROJ5u0XNQn',
					name: '',
					tagName: 'stop',
					offset: 1,
					stopColor: 'blue',
					stopOpacity: 1
				}
			]
		},
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
		fill: {
			id: 'linearGradient-7UoNA93OaDg8',
			name: '',
			tagName: 'linearGradient',
			children: [
				{
					id: 'stop-todvI6PKpDEJ',
					name: '',
					tagName: 'stop',
					offset: 0,
					stopColor: 'red',
					stopOpacity: 1
				},
				{
					id: 'stop-1HuymXTDy3CM',
					name: '',
					tagName: 'stop',
					offset: 1,
					stopColor: '#F44',
					stopOpacity: 1
				}
			]
		},
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
		fill: {
			id: 'linearGradient-FEf53VpA0ZMX',
			name: '',
			tagName: 'linearGradient',
			children: [
				{
					id: 'stop-R29LzAzEtWhq',
					name: '',
					tagName: 'stop',
					offset: 0,
					stopColor: 'red',
					stopOpacity: 1
				},
				{
					id: 'stop-Ey3n54yJKfrq',
					name: '',
					tagName: 'stop',
					offset: 1,
					stopColor: 'blue',
					stopOpacity: 1
				}
			]
		},
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
	},
	{
		id: 'rect-XUcgrfmJZuEc',
		name: '',
		tagName: 'image',
		width: 512,
		height: 342,
		href: 'img.jpg',
		left: 300,
		top: 600,
		angle: 0,
		scaleX: 0.4,
		scaleY: 0.4,
		skewX: 0,
		skewY: 0
	}
]);
</script>

<template>
	<div>
		<Wrapper>
			<Canvas :width="width" :height="height">
				<Rect
					:width="200"
					:height="200"
					:left="400"
					:top="400"
					:angle="rotate"
					fill="green"
				/>
				<Group :left="200" :top="200">
					<Rect :width="200" :height="200" :left="100" :top="100" fill="green" />
					<Rect :width="200" :height="200" :left="-100" :top="-100" fill="green" />
				</Group>
				<ShapeTree :json="json" />
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
			Rotate:
			<input type="number" v-model="rotate" />
		</label>
	</div>
</template>

<style scoped></style>
