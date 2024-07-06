<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useCanvas } from './../../hooks';

const canvas = useCanvas();
const attrs = ref(canvas.getSelector().getAttributes());
const style = ref(canvas.getSelector().getStyle());
const onSelect = () => {
	attrs.value = canvas.getSelector().getAttributes();
	style.value = canvas.getSelector().getStyle();
};

onMounted(() => {
	canvas.on('selector:updated', onSelect);
});

onUnmounted(() => {
	canvas.off('selector:updated', onSelect);
});
</script>

<template>
	<div v-bind="attrs" :style="style" />
</template>

<style scoped></style>
