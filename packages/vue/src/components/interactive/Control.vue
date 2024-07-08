<script setup lang="ts">
import { useObject } from './../../hooks';
import ControlNode from './ControlNode.vue';

const props = defineProps<{ shape: any }>();
const {
	state: { attrs, style, nodes, playing }
} = useObject(
	props.shape,
	(shape) => ({
		attrs: shape.getControl().getAttributes(),
		style: shape.getControl().getStyle(),
		nodes: shape.getControl().getChildren(),
		playing: shape.getAnimation().playing
	}),
	null,
	'set canvas:set animation:played animation:paused animation:completed'
);
</script>

<template>
	<div v-if="!playing" v-bind="attrs" :style="style">
		<ControlNode v-for="node in nodes" :key="node.id" :id="node.id" :shape="shape" />
	</div>
</template>

<style scoped></style>
