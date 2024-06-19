<script setup lang="ts">
import { Canvas, CanvasObject } from '@grafikjs/core';
import { computed, inject } from 'vue';
const canvas: Canvas = inject('canvas');
const attributes = computed(() => {
	return canvas.getAttributes();
});
const props = defineProps<Partial<CanvasObject>>();

</script>

<template>
	<svg v-bind="attributes"></svg>
</template>

<style scoped>

</style>
