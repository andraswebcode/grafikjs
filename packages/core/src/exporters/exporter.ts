import { Canvas } from './../canvas';
import { Point } from './../maths';

abstract class Exporter {
	protected _canvas: Canvas;
	protected _content: string;
	private _options: any;

	constructor(canvas: Canvas, options: any = {}) {
		this._canvas = canvas;
		this._options = options;
		this._build();
	}

	public getContent() {
		return this._content;
	}

	public getOption(key: string) {
		return this._options[key];
	}

	protected _getCanvasAttributes() {
		const zoom = this._canvas.zoom;
		const pan = this._canvas.pan;

		// Reset viewport.
		this._canvas.zoomTo(1, new Point());
		const attrs = this._canvas.getAttributes();

		// Restore viewport.
		this._canvas.zoomTo(zoom, pan);

		// OverWrite canvas size, if it has drawing area.
		const overWrites: any = {};

		if (this._canvas.hasDrawingArea) {
			const size = this._canvas.getDrawingAreaSize();
			overWrites.width = size.x;
			overWrites.height = size.y;
			overWrites.viewBox = `0 0 ${size.x} ${size.y}`;
		}

		return {
			...attrs,
			...overWrites
		};
	}

	protected abstract _build();

	protected abstract _createCanvas();

	protected abstract _createShape(shape: any);

	protected abstract _createAnimation(animation: any);
}

export { Exporter };
