<script setup lang="ts">
import { CanvasObject, Canvas } from '@grafikjs/core';
import { provide, watch } from 'vue';

const props = defineProps<{
	value: CanvasObject;
}>();
const canvas = new Canvas(props);
provide('canvas', canvas);

watch(props.value, (value) => {
	canvas.set(value);
});
</script>

<template>
	<slot />
</template>

<style scoped></style>
