<script setup lang="ts">
import { useObject } from './../../hooks';

const props = defineProps<{ id: string; shape: any }>();
const {
	state: { attrs, style }
} = useObject(
	props.shape,
	(shape) => ({
		attrs: shape.getControl().childById(props.id).getAttributes(),
		style: shape.getControl().childById(props.id).getStyle()
	}),
	null,
	'set canvas:set animation:updated'
);
</script>

<template>
	<div v-bind="attrs" :style="style" />
</template>

<style scoped></style>
