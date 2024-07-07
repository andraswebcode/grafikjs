<script setup lang="ts">
import { provide } from 'vue';
import { useCanvas } from './../../hooks';

const canvas = useCanvas();

provide('collection', canvas);
</script>

<template>
	<svg>
		<slot />
	</svg>
</template>

<style scoped></style>
