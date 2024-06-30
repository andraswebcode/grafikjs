import { Canvas } from '@grafikjs/core';
import { inject } from 'vue';

const useCanvas = (): Canvas | undefined => {
	const canvas = inject<Canvas>('canvas');

	if (!canvas) {
		console.error('No canvas provided.');
		return;
	}

	return canvas;
};

export { useCanvas };
