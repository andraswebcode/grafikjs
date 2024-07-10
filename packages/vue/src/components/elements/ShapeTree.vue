<script setup lang="ts">
import ShapeBranch from './ShapeBranch.vue';
import { useCanvas } from './../../hooks';

const {
	state: { shapes }
} = useCanvas(
	(canvas) => ({
		shapes: [...canvas.getChildren()]
	}),
	null,
	'added removed'
);
</script>

<template>
	<ShapeBranch v-for="shape in shapes" :key="shape.id" :shape="shape" />
</template>

<style scoped></style>
