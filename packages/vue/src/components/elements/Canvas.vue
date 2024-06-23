<script setup lang="ts">
import { computed, inject } from 'vue';
const canvas: any = inject('canvas');
const attributes = computed(() => canvas.getAttributes());
</script>

<template>
	<svg v-bind="attributes"></svg>
</template>

<style scoped></style>
