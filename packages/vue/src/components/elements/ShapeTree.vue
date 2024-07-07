<script setup lang="ts">
import { GroupObject } from '@grafikjs/core';
import ShapeBranch from './ShapeBranch.vue';

const props = defineProps<{ json: GroupObject[] }>();
</script>

<template>
	<ShapeBranch v-for="shape in props.json" :key="shape.id" v-bind="shape" />
</template>

<style scoped></style>
