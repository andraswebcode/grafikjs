import { Canvas } from '@grafikjs/core';

const createGrafik = (opt?) => ({
	install(app, options = opt) {
		const canvas = new Canvas(options);
		app.provide('canvas', canvas);
	}
});

export { createGrafik };
