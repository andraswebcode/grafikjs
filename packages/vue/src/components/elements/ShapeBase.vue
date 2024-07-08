<script setup lang="ts">
import { ShapeObject } from '@grafikjs/core';
import { useObject } from './../../hooks';

const props = defineProps<{
	tagName: string;
	shape: any;
	props: Partial<ShapeObject>;
}>();
const { shape, tagName } = props;
const {
	state: { wAttrs, attrs }
} = useObject(
	shape,
	(shape) => ({
		wAttrs: shape.getWrapperAttributes(),
		attrs: shape.getAttributes(true)
	}),
	null,
	'set animation:updated'
);
</script>

<template>
	<g v-bind="wAttrs">
		<component :is="tagName" v-bind="attrs">
			<slot />
		</component>
	</g>
</template>

<style scoped></style>
