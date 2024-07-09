import { Canvas } from './../canvas';

abstract class Importer {
	protected _canvas: Canvas;

	public constructor(canvas: Canvas) {
		this._canvas = canvas;
	}

	public abstract load(content: any): Canvas;

	protected abstract _parseShape(shape: any): any;
}

export { Importer };
