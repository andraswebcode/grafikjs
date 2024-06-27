<script setup lang="ts">
import { ShapeObject } from '@grafikjs/core';
import { ref, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
	tagName: string;
	shape: any;
	props: Partial<ShapeObject>;
}>();
const { shape, tagName } = props;
const wAttrs = ref(shape.getWrapperAttributes());
const attrs = ref(shape.getAttributes());
const onSet = () => {
	wAttrs.value = shape.getWrapperAttributes();
	attrs.value = shape.getAttributes();
};

onMounted(() => {
	shape.on('set addedto', onSet);
});

onUnmounted(() => {
	shape.off('set addedto', onSet);
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
