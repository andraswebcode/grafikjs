<script setup lang="ts">
import { ShapeObject } from '@grafikjs/core';
import { ref, watch, inject, onMounted, onUnmounted } from 'vue';
import { useCanvas } from './../../hooks';

const props = defineProps<{
	tagName: string;
	shape: any;
	props: Partial<ShapeObject>;
}>();
const { shape, tagName } = props;
const canvas = useCanvas();
const wAttrs = ref(shape.getWrapperAttributes());
const attrs = ref(shape.getAttributes(true));
const onSet = () => {
	wAttrs.value = shape.getWrapperAttributes();
	attrs.value = shape.getAttributes(true);
};

onMounted(() => {
	shape.on('set', onSet);
	canvas.on('set', onSet);
});

onUnmounted(() => {
	shape.off('set', onSet);
	canvas.off('set', onSet);
});

watch(props.props, (props) => {
	shape.set(props);
});
</script>

<template>
	<g v-bind="wAttrs">
		<component :is="tagName" v-bind="attrs">
			<slot />
		</component>
	</g>
</template>

<style scoped></style>
