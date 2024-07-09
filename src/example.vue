<script setup>
import { onMounted, onUpdated, ref } from 'vue';
import {
	Canvas,
	Defs,
	Group,
	Rect,
	Path,
	ShapeTree,
	Wrapper,
	Interactive,
	useCanvas
} from '@grafikjs/vue';

const width = ref(1200);
const height = ref(800);
const dWidth = ref(400);
const dHeight = ref(400);
const zoom = ref(1);
const panX = ref(0);
const panY = ref(0);
const mode = ref('select');
const show = ref(true);
const {
	state: { time, duration },
	actions: { seek, play, pause }
} = useCanvas(
	(canvas) => {
		const anim = canvas.getAnimation();
		// console.log('coll');
		return {
			duration: anim.duration,
			time: anim.time
		};
	},
	(canvas) => {
		const anim = canvas.getAnimation();
		return {
			seek: anim.seek.bind(anim),
			play: anim.play.bind(anim),
			pause: anim.pause.bind(anim)
		};
	},
	'set'
);
const onSeek = (e) => {
	const time = parseInt(e.target.value);
	// console.log(time);
	seek(time);
};

onUpdated(() => {
	// console.log(duration.value, time.value);
});

onMounted(() => {
	// console.log(duration.value, time.value);
});
const json = ref([
	{
		id: 'g-4IP9Il7Xh24b',
		name: 'Two Square',
		tagName: 'g',
		animation: {},
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
		name: 'Animated Rectangle',
		tagName: 'rect',
		fill: 'purple',
		width: 25,
		height: 25,
		left: 40,
		top: 40,
		animation: {}
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
		<div v-if="show">
			<Wrapper>
				<Canvas
					:width="width"
					:height="height"
					:drawingWidth="dWidth"
					:drawingHeight="dHeight"
					:zoom="zoom"
					:panX="panX"
					:panY="panY"
					:mode="mode"
				>
					<template v-slot:defs>
						<Defs />
					</template>
					<Rect
						:width="40"
						:height="40"
						:left="200"
						:top="200"
						fill="#000"
						:animation="{
							tracks: [
								{
									property: 'fill',
									keyframes: [
										{
											to: 1000,
											value: '#00ff00',
											easing: 'cubicIn'
										},
										{
											to: 2000,
											value: '#0000ff',
											easing: 'cubicIn'
										}
									]
								},
								{
									property: 'left',
									keyframes: [
										{
											to: 500,
											value: 300,
											easing: 'cubicOut'
										},
										{
											to: 1500,
											value: 100,
											easing: 'cubicOut'
										},
										{
											to: 2000,
											value: 200,
											easing: 'cubicOut'
										}
									]
								},
								{
									property: 'angle',
									keyframes: [
										{
											to: 500,
											value: 180,
											easing: 'cubicOut'
										},
										{
											to: 1500,
											value: -180,
											easing: 'cubicOut'
										},
										{
											to: 2000,
											value: 0,
											easing: 'cubicOut'
										}
									]
								},
								{
									property: 'top',
									keyframes: [
										{
											to: 2000,
											value: 200
										},
										{
											to: 3000,
											value: 400,
											easing: 'bounceOut'
										}
									]
								},
								{
									property: 'scaleY',
									keyframes: [
										{
											to: 2000,
											value: 1
										},
										{
											to: 3000,
											value: 0.5,
											easing: 'cubicOut'
										},
										{
											to: 3500,
											value: 1,
											easing: 'cubicOut'
										}
									]
								}
							]
						}"
					/>
				</Canvas>
				<Interactive />
			</Wrapper>
		</div>
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
			Pan X:
			<input type="number" v-model="panX" />
		</label>
		<label>
			Pan Y:
			<input type="number" v-model="panY" />
		</label>
		<label>
			Show:
			<input type="checkbox" v-model="show" />
		</label>
		<label>
			Mode:
			<select v-model="mode">
				<option value="select">Select</option>
				<option value="pan">Pan</option>
				<option value="draw">Draw</option>
			</select>
		</label>
		<label>
			Time:
			<input type="range" v-model="time" @input="onSeek" :min="0" :max="duration" />
		</label>
		<button @click="play">Play</button>
		<button @click="pause">Pause</button>
	</div>
</template>

<style scoped></style>
