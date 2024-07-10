<script setup lang="ts">
import ShapeBase from './ShapeBase.vue';

const props = defineProps<{
	shape: any;
}>();
</script>

<template>
	<ShapeBase :tagName="props.shape.tagName" :shape="props.shape">
		<ShapeBranch
			v-if="props.shape.childrenLength"
			v-for="child in props.shape.children"
			:key="child.id"
			:shape="child"
		/>
	</ShapeBase>
</template>

<style scoped></style>
