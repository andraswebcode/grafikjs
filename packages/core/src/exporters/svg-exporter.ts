import { Exporter } from './exporter';

abstract class SVGExporter extends Exporter {
	protected _build() {
		this._content = this._createCanvas();
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
