<script setup>
import { useCanvas } from './../../hooks';

const {
	state: { attrs, style }
} = useCanvas((canvas) => ({
	attrs: canvas.getSelector().getAttributes(),
	style: canvas.getSelector().getStyle()
}));
</script>

<template>
	<div v-bind="attrs" :style="style" />
</template>

<style scoped></style>
