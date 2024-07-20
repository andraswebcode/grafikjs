<script setup>
import { CanvasProvider, Canvas, ShapeTree, Wrapper } from '@grafikjs/vue';

const shapes = [
	{
		tagName: 'rect',
		width: 40,
		height: 40,
		left: 50,
		top: 50,
		angle: 45
	}
];
</script>

<template>
	<CanvasProvider :value="{ width: 100, height: 100, zoom: 1 }">
		<Wrapper>
			<Canvas>
				<ShapeTree :initialShapes="shapes" />
			</Canvas>
		</Wrapper>
	</CanvasProvider>
</template>

<style scoped></style>
