<script setup lang="ts">
import ShapeBranch from './ShapeBranch.vue';
import { useCanvas } from './../../hooks';
import { onMounted } from 'vue';
import { JSONImporter } from '@grafikjs/core';

const props = defineProps<{
	initialShapes: any;
}>();
const emit = defineEmits(['change', 'update', 'add', 'remove']);
const {
	state: { shapes },
	context
} = useCanvas(
	(canvas) => ({
		shapes: [...canvas.getChildren()]
	}),
	null,
	'added removed shapes:updated drawn:path',
	(...args) => {
		const eventName = args[args.length - 1];
		const fnMap = {
			added: 'add',
			removed: 'remove',
			'shapes:updated': 'update'
		};
		if (fnMap[eventName]) {
			emit(fnMap[eventName], ...args);
		}
		emit('change', ...args);
	}
);
onMounted(() => {
	const importer = new JSONImporter(context);
	importer.load({ children: JSON.parse(JSON.stringify(props.initialShapes)) });
});
</script>

<template>
	<ShapeBranch v-for="shape in shapes" :key="shape.id" :shape="shape" />
</template>

<style scoped></style>
