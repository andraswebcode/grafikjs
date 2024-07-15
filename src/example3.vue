<script setup>
import { Wrapper, Interactive, Canvas, Defs, ShapeTree } from '@grafikjs/vue';
import { ref } from 'vue';
const json = ref([
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
]);
</script>

<template>
	<Wrapper>
		<Canvas @change="console.log">
			<template v-slot:defs>
				<Defs />
			</template>
			<ShapeTree :initialShapes="json" @change="console.log" />
		</Canvas>
		<Interactive />
	</Wrapper>
	<textarea :cols="200" :rows="20" @input="json = JSON.parse($event.target.value)">{{
		JSON.stringify(json)
	}}</textarea>
</template>

<style scoped></style>
