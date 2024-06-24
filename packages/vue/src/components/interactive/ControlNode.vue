<script setup lang="ts">
const props = defineProps<{ node: any }>();
const attrs = props.node.getAttributes();
const style = props.node.getStyle();
</script>

<template>
	<div v-bind="attrs" :style="style"></div>
</template>

<style scoped></style>
