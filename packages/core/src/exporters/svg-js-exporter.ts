import { SVGExporter } from './svg-exporter';

class SVGJSExporter extends SVGExporter {
	protected _createCanvas() {
		throw new Error('Method not implemented.');
	}
	protected _createShape(shape: any) {
		throw new Error('Method not implemented.');
	}
	protected _createAnimation() {
		throw new Error('Method not implemented.');
	}
}

export { SVGJSExporter };
