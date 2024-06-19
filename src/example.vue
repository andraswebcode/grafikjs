<script setup>
import { ref } from 'vue';
import { Canvas, Wrapper, Interactive, Selector } from "@grafikjs/vue";
const width = ref(1280);
const height = ref(720);
</script>

<template>
<div>
	<Wrapper>
		<Canvas></Canvas>
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

<style scoped>

</style>
