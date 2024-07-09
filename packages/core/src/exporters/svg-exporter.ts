import { Exporter } from './exporter';

abstract class SVGExporter extends Exporter {
	protected _mimeType = 'image/svg+xml';
	protected _extension = 'svg';
	protected _build() {
		this._content = this._createCanvas();
	}

	protected _createCanvas() {
		const canvas = this._canvas;
		const attrs = this._serializeAttributes(this._getCanvasAttributes());
		const defs = this._createDefs();
		const shapes = canvas.mapChildren((child) => this._createShape(child)).join('');

		return `
			<svg ${attrs}>
				${defs}
				${shapes}
			</svg>
		`;
	}

	protected _serializeAttributes(attrs: object) {
		let output: string[] = [];
		for (let key in attrs) {
			output.push(`${key}="${attrs[key]}"`);
		}
		return output.join(' ');
	}
}

export { SVGExporter };
