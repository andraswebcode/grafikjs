import { Observable } from './../observable';
import { Canvas } from './../canvas';

class Exporter extends Observable {
	canvas: Canvas;

	constructor(canvas: Canvas) {
		super();
		this.canvas = canvas;
	}
}

export { Exporter };
