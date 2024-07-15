<script setup lang="ts">
import ShapeBranch from './ShapeBranch.vue';
import { useCanvas } from './../../hooks';

const emit = defineEmits(['change', 'update', 'add', 'remove']);
const {
	state: { shapes }
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
</script>

<template>
	<ShapeBranch v-for="shape in shapes" :key="shape.id" :shape="shape" />
</template>

<style scoped></style>
