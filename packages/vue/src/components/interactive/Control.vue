<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import ControlNode from './ControlNode.vue';

const props = defineProps<{ control: any }>();
const nodes = props.control.getChildren();
const attrs = ref(props.control.getAttributes());
const style = ref(props.control.getStyle());
const onSet = () => {
	attrs.value = props.control.getAttributes();
	style.value = props.control.getStyle();
};

onMounted(() => {
	props.control.shape.on('set', onSet);
});

onUnmounted(() => {
	props.control.shape.off('set', onSet);
});
</script>

<template>
	<div v-bind="attrs" :style="style">
		<ControlNode v-for="node in nodes" :node="node" />
	</div>
</template>

<style scoped></style>
