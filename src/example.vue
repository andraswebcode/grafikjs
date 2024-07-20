<script setup>
import { onMounted, ref } from 'vue';
import { JSONImporter, SVGImporter } from '@grafikjs/core';
import { useCanvas } from '@grafikjs/vue';
import Canvas from './Canvas';
import Controls from './Controls';
import InnerCanvas from './InnerCanvas';

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
	console.log(importer); /*
	const svgImporter = new SVGImporter(context);
	svgImporter.load(
		'<svg height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g id="flat"><path d="m39 40.476-13.506-.412 2.834 10.307a4.953 4.953 0 0 0 7.344 0z" fill="#f4f4e6"/><path d="m37.132 5h-10.264l-7.868 34v7l2 6a2.993 2.993 0 0 0 3 2c1.532 0 3.3-1.637 4-3 1.687-3.281 4-7 4-7s2.312 3.719 4 7c.7 1.363 2.468 3 4 3a2.993 2.993 0 0 0 3-2l2-6v-7z" fill="#e8e7d6"/><path d="m19 39s2.562-8.28 7-12a8.98 8.98 0 0 0 3-6v-8.025l-2-7.975-12 3v22z" fill="#d3843d"/><path d="m15 8-8.659 6.883c-5.132 8.838-2.836 24.306-1.341 27.117a26.878 26.878 0 0 1 3 12c0 6.842 7 8.685 7-5z" fill="#66342e"/><path d="m45 39s-2.562-8.28-7-12a8.98 8.98 0 0 1 -3-6v-8.025l2-7.975 12 3v22z" fill="#d3843d"/><path d="m49 8 8.659 6.883c5.132 8.838 2.841 24.306 1.341 27.117a26.878 26.878 0 0 0 -3 12c0 6.842-7 8.685-7-5z" fill="#66342e"/><path d="m38 37c0 2.979-3.069 7-6 7s-6-4.021-6-7 3.069-3 6-3 6 .021 6 3z" fill="#66342e"/><path d="m30.43 36.746a1 1 0 0 0 -1.2 1.607 2.472 2.472 0 0 1 .764.768 2.667 2.667 0 0 1 -1.307.686 1 1 0 0 0 -.7 1.123 1.006 1.006 0 0 0 1.291.791c1.076-.327 2.442-.98 2.678-2.218.225-1.178-.706-2.141-1.526-2.757z" fill="#301a12"/><path d="m35.3 39.807a2.943 2.943 0 0 1 -1.3-.646s.063-.281.747-.8a1 1 0 0 0 -1.187-1.616c-.82.616-1.751 1.579-1.527 2.761.235 1.237 1.6 1.891 2.677 2.218a1.006 1.006 0 0 0 1.29-.791 1 1 0 0 0 -.7-1.126z" fill="#301a12"/><g fill="#143441"><path d="m23 25a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m19.316 20.949-.633-1.9a13.727 13.727 0 0 0 4.61-2.759l1.414 1.414a15.536 15.536 0 0 1 -5.391 3.245z"/><path d="m41 25a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z"/><path d="m44.684 20.949a15.536 15.536 0 0 1 -5.391-3.242l1.414-1.414a13.6 13.6 0 0 0 4.609 2.758z"/><path d="m22 44h2v2h-2z"/><path d="m24 48h2v2h-2z"/><path d="m37 47h2v2h-2z"/><path d="m40 43h2v2h-2z"/></g><path d="m36.684 31.949c-5.49-1.83-9.2-.07-9.241-.053l-.89-1.791c.179-.088 4.443-2.16 10.763-.054z" fill="#394d5c"/></g></svg>'
	);
	console.log(svgImporter);*/
});
</script>

<template>
	<Canvas v-if="show" />
	<Controls />
	<label>
		Show:
		<input type="checkbox" v-model="show" />
	</label>
	<InnerCanvas />
</template>

<style scoped></style>
