import { Exporter } from './exporter';

class LottieExporter extends Exporter {
	protected _mimeType = 'application/json';
	protected _extension = 'json';
	protected _createDefs() {}
	protected _build() {
		throw new Error('Method not implemented.');
	}
	protected _createCanvas() {
		throw new Error('Method not implemented.');
	}
	protected _createShape() {
		throw new Error('Method not implemented.');
	}
	protected _createAnimation() {
		throw new Error('Method not implemented.');
	}
}

export { LottieExporter };
