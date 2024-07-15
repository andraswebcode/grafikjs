<script setup lang="ts">
import ShapeBranch from './ShapeBranch.vue';
import { useCanvas } from './../../hooks';
import { onMounted } from 'vue';
import { JSONImporter } from '@grafikjs/core';

const props = defineProps<{
	initialShapes?: any[];
}>();
const emit = defineEmits(['change', 'update', 'select', 'add', 'remove']);
const {
	state: { shapes },
	context
} = useCanvas(
	(canvas) => ({
		shapes: [...canvas.getChildren()]
	}),
	null,
	'added removed',
	(...args) => {
		const eventName = args[args.length - 1];
		emit('change', ...args);
		if (eventName === 'added') {
			emit('add', ...args);
		} else {
			emit('remove', ...args);
		}
	}
);
useCanvas(null, null, 'shapes:selection:updated shapes:updated drawn:path', (...args) => {
	const eventName = args[args.length - 1];
	emit('change', ...args);
	if (eventName === 'shapes:updated') {
		emit('update', ...args);
	} else if (eventName === 'shapes:selection:updated') {
		emit('select', ...args);
	}
});
onMounted(() => {
	const importer = new JSONImporter(context);
	importer.load({ children: JSON.parse(JSON.stringify(props.initialShapes || [])) });
});
</script>

<template>
	<ShapeBranch v-for="shape in shapes" :key="shape.id" :shape="shape" />
</template>

<style scoped></style>
