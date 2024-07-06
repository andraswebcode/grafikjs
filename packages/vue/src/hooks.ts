import { Canvas, Group } from '@grafikjs/core';
import { inject } from 'vue';

const useCanvas = (): Canvas => {
	const canvas = inject<Canvas>('canvas');

	if (!canvas) {
		console.error('No canvas provided.');
		return new Canvas();
	}

	return canvas;
};

const useCollection = (): any => {
	const collection = inject<Group | Canvas>('collection');

	if (!collection) {
		console.error('No collection provided.');
		return new Group();
	}

	return collection;
};

export { useCanvas, useCollection };
