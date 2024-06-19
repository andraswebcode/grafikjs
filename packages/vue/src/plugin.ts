import {
	Canvas
} from '@grafikjs/core';

const createGrafik = () => ({
	install(app, options){
		const canvas = new Canvas(options);
		app.provide('canvas', canvas);
	}
});

export {
	createGrafik
};
