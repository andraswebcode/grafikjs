<script setup>
import { Canvas, Defs, ShapeTree, Wrapper, Interactive } from '@grafikjs/vue';

const animate = (timline, eventName) => {
	console.log(timline.playing, eventName);
};
</script>

<template>
	<Wrapper>
		<Canvas @change="console.log" @animate="animate">
			<template v-slot:defs>
				<Defs />
			</template>
			<ShapeTree />
		</Canvas>
		<Interactive />
	</Wrapper>
</template>

<style scoped></style>
