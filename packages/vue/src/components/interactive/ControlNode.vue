<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted } from 'vue';
import { Canvas } from '@grafikjs/core';

const props = defineProps<{ node: any }>();
const canvas: Canvas = inject('canvas');
const attrs = ref(props.node.getAttributes());
const style = ref(props.node.getStyle());
const onSet = () => {
	attrs.value = props.node.getAttributes();
	style.value = props.node.getStyle();
};

onMounted(() => {
	canvas.on('set', onSet);
	props.node.parent.shape.on('set', onSet);
});

onUnmounted(() => {
	canvas.off('set', onSet);
	props.node.parent.shape.off('set', onSet);
});
</script>

<template>
	<div v-bind="attrs" :style="style"></div>
</template>

<style scoped></style>
