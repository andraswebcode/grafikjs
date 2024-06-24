<script setup lang="ts">
import { ref, inject, onMounted, onUnmounted } from 'vue';
import { Canvas } from '@grafikjs/core';
import ControlNode from './ControlNode.vue';

const props = defineProps<{ control: any }>();
const canvas: Canvas = inject('canvas');
const nodes = props.control.getChildren();
const attrs = ref(props.control.getAttributes());
const style = ref(props.control.getStyle());
const onSet = () => {
	attrs.value = props.control.getAttributes();
	style.value = props.control.getStyle();
};

onMounted(() => {
	canvas.on('set', onSet);
	props.control.shape.on('set', onSet);
});

onUnmounted(() => {
	canvas.off('set', onSet);
	props.control.shape.off('set', onSet);
});
</script>

<template>
	<div v-bind="attrs" :style="style">
		<ControlNode v-for="node in nodes" :key="node.id" :node="node" />
	</div>
</template>

<style scoped></style>
