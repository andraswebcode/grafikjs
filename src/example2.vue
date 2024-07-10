<script setup>
import { onMounted, ref } from 'vue';
import { JSONImporter } from '@grafikjs/core';
import { useCanvas } from '@grafikjs/vue';
import Canvas from './canvas';
import Controls from './controls';

const { context } = useCanvas(null);
const show = ref(true);

onMounted(() => {
	const importer = new JSONImporter(context);
	const json = {
		children: [
			{
				name: '',
				tagName: 'circle',
				fill: 'orange',
				r: 40,
				left: 200,
				top: 200
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
