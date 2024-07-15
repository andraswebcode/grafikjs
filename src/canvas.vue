<script setup>
import { Canvas, Defs, ShapeTree, Wrapper, Interactive } from '@grafikjs/vue';
</script>

<template>
	<Wrapper>
		<Canvas @change="console.log">
			<template v-slot:defs>
				<Defs />
			</template>
			<ShapeTree />
		</Canvas>
		<Interactive />
	</Wrapper>
</template>

<style scoped></style>
