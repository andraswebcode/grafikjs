<script setup lang="ts">
import { ShapeObject, Canvas } from '@grafikjs/core';
import { ref, watch, inject, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
	tagName: string;
	shape: any;
	props: Partial<ShapeObject>;
}>();
const { shape, tagName } = props;
const canvas: Canvas = inject('canvas') as Canvas;
const wAttrs = ref(shape.getWrapperAttributes());
const attrs = ref(shape.getAttributes());
const onSet = () => {
	wAttrs.value = shape.getWrapperAttributes();
	attrs.value = shape.getAttributes();
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
