import { Canvas } from '@grafikjs/core';

const createGrafik = (opt?) => ({
	install(app, options = opt) {
		const canvas = new Canvas(options);
		app.provide('canvas', canvas);
		if (process.env.NODE_ENV === 'development') {
			// @ts-ignore
			window.grafikCanvas = canvas;
		}
	}
});

export { createGrafik };
