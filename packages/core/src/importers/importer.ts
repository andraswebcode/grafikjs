import { Canvas } from './../canvas';

abstract class Importer {
	protected _canvas: Canvas;

	public constructor(canvas: Canvas) {
		this._canvas = canvas;
	}

	// Just adding some shapes to the specified group, or the canvas if th group is not set.
	public abstract add(content: any, group?: any): Canvas;

	// Loading json and set up a whole new canvas from options
	public abstract load(content: any): Canvas;

	protected abstract _parseShape(shape: any): any;
}

export { Importer };
