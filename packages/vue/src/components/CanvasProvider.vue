<script setup lang="ts">
import { CanvasObject, Canvas } from '@grafikjs/core';
import { provide, watch } from 'vue';

const props = defineProps<{
	value: CanvasObject;
}>();
const canvas = new Canvas(props.value);
provide('canvas', canvas);

watch(props, (props) => {
	canvas.set(props.value);
});
</script>

<template>
	<slot />
</template>

<style scoped></style>
