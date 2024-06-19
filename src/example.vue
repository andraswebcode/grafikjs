<script setup>
import { ref } from 'vue';
import { Canvas, ShapeTree, Wrapper, Interactive, Selector } from '@grafikjs/vue';
const width = ref(1280);
const height = ref(720);
const json = ref([]);
</script>

<template>
	<div>
		<Wrapper>
			<Canvas :width="width" :height="height">
				<ShapeTree :json="json" />
			</Canvas>
			<Interactive>
				<Selector />
			</Interactive>
		</Wrapper>
		<label>
			Width:
			<input type="number" v-model="width" />
		</label>
		<label>
			Height:
			<input type="number" v-model="height" />
		</label>
	</div>
</template>

<style scoped></style>
