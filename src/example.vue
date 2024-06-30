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
const json = ref([
	{
		id: 'g-4IP9Il7Xh24b',
		name: 'Two Square',
		tagName: 'g',
		children: [
			{
				id: 'rect-Mky72OJuTF1y',
				name: '',
				tagName: 'rect',
				width: 20,
				height: 20,
				left: -10,
				top: 0,
				angle: 45
			},
			{
				id: 'rect-2jp5z8DLz7KK',
				name: '',
				tagName: 'rect',
				width: 20,
				height: 20,
				left: 10,
				top: 0,
				angle: 45
			}
		],
		left: 300,
		top: 50,
		angle: 45
	},
	{
		id: 'circle-pcRuqlIpl7Eg',
		name: '',
		tagName: 'circle',
		fill: 'orange',
		r: 10,
		cx: 10,
		cy: 10,
		left: 200,
		top: 200
	},
	{
		id: 'rect-JfqKQuZtBPdw',
		name: '',
		tagName: 'rect',
		fill: 'purple',
		width: 25,
		height: 25,
		left: 40,
		top: 40
	},
	{
		id: 'path-v6NkzMbA2OfZ',
		name: 'Heart',
		tagName: 'path',
		d: 'M 41.38 11.03 C 26.38 -13.97 -22.62 11.03 11.38 46.03 L 41.38 76.03 L 71.38 46.03 C 105.38 6.03 56.38 -13.97 41.38 11.03',
		fill: 'red',
		left: 80,
		top: 240,
		angle: 20,
		scaleX: 0.5,
		scaleY: 0.5
	},
	{
		id: 'polygon-Mf8vOjJKZxdb',
		name: 'Triangle',
		tagName: 'polygon',
		points: '50 0 100 100 0 100',
		fill: 'forestgreen',
		left: 300,
		top: 300,
		angle: 340,
		scaleX: 0.4,
		scaleY: 0.4
	},
	{
		id: 'g-VtPKQnon8KFi',
		name: '',
		tagName: 'g',
		fill: 'none',
		strokeWidth: 4,
		children: [
			{
				id: 'polygon-rnyVKf6qG20I',
				name: 'Triangle',
				tagName: 'polygon',
				points: '50 0 100 100 0 100',
				left: -45,
				top: -5,
				angle: 340,
				stroke: 'green'
			},
			{
				id: 'path-jFmcNvCHeasW',
				name: 'Heart',
				tagName: 'path',
				d: 'M 41.38 11.03 C 26.38 -13.97 -22.62 11.03 11.38 46.03 L 41.38 76.03 L 71.38 46.03 C 105.38 6.03 56.38 -13.97 41.38 11.03',
				left: 80,
				top: 0,
				angle: 45,
				stroke: 'red'
			}
		],
		left: 100,
		top: 320
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
	</div>
</template>

<style scoped></style>
