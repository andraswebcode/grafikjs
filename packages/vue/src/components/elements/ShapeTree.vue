<script setup lang="ts">
import { ShapeObject } from '@grafikjs/core';
import ShapeBranch from './ShapeBranch.vue';
const props = defineProps<{ json: ShapeObject[] }>();
</script>

<template>
	<ShapeBranch v-for="shape in props.json" :key="shape.id" v-bind="shape" />
</template>

<style scoped></style>
