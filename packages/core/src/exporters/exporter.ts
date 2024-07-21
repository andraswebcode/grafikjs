import { Canvas } from './../canvas';

abstract class Exporter {
	protected _canvas: Canvas;
	protected _content: string;
	private _options: any;

	protected abstract _mimeType: string;
	protected abstract _extension: string;

	public constructor(canvas: Canvas, options: any = {}) {
		this._canvas = canvas;
		this._options = options;
		this._build();
	}

	public download(filename = 'grafik') {
		const link = document.createElement('a');

		link.href = this.getHref();
		link.download = filename + '.' + this._extension;

		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	public getContent() {
		return this._content;
	}

	public getHref() {
		return 'data:' + this._mimeType + ';charset=utf-8,' + encodeURIComponent(this._content);
	}

	public getOption(key: string) {
		return this._options[key];
	}

	protected _getCanvasAttributes() {
		const zoom = this._canvas.zoom;
		const pan = this._canvas.pan.clone();

		// Reset viewport.
		this._canvas.zoomTo();
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

	protected _build() {
		this._content = this._createCanvas();
	}

	protected abstract _createCanvas();

	protected abstract _createDefs();

	protected abstract _createShape(shape: any);

	protected abstract _createAnimation(animation: any);
}

export { Exporter };
