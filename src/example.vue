<script setup>
import { onMounted, ref } from 'vue';
import { JSONImporter } from '@grafikjs/core';
import { useCanvas } from '@grafikjs/vue';
import Canvas from './Canvas';
import Controls from './Controls';

const { context } = useCanvas(null);
const show = ref(true);

onMounted(() => {
	const importer = new JSONImporter(context);
	const json = {
		zoom: 2,
		children: [
			{
				id: 'g-4IP9Il7Xh24b',
				name: 'Two Square',
				tagName: 'g',
				left: 200,
				top: 200,
				fill: 'none',
				strokeWidth: 4,
				animation: {
					tracks: [
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
						}
					]
				},
				children: [
					{
						id: 'rect-Mky72OJuTF1y',
						name: '',
						tagName: 'rect',
						width: 40,
						height: 40,
						left: -40,
						top: 0,
						angle: 45
					},
					{
						id: 'rect-2jp5z8DLz7KK',
						name: '',
						tagName: 'rect',
						width: 40,
						height: 40,
						left: 40,
						top: 0,
						angle: 45
					}
				]
			}
		]
	};
	importer.load(json);
	console.log(importer);
});
</script>

<template>
	<Canvas v-if="show" />
	<Controls />
	<label>
		Show:
		<input type="checkbox" v-model="show" />
	</label>
</template>

<style scoped></style>
