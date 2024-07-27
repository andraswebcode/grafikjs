<script setup>
import { Canvas, Defs, ShapeTree, Wrapper, Interactive, useCanvas } from '@grafikjs/vue';
import { SVGImporter } from '@grafikjs/core';

const { context } = useCanvas(null);
const importer = new SVGImporter(context);
const svg = document.getElementById('svg5');

console.log(importer.load(svg.outerHTML));
</script>

<template>
	<Wrapper>
		<Canvas>
			<template v-slot:defs>
				<Defs />
			</template>
			<ShapeTree />
		</Canvas>
		<Interactive />
	</Wrapper>
</template>

<style scoped></style>
