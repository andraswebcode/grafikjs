import { Exporter } from './exporter';

// Creates vue file with a vue component.
class VueExporter extends Exporter {
	protected _mimeType = 'text/plain';
	protected _extension = 'vue';
	protected _createDefs() {}
	protected _build() {
		throw new Error('Method not implemented.');
	}
	protected _createCanvas() {
		throw new Error('Method not implemented.');
	}
	protected _createShape(shape: any) {
		throw new Error('Method not implemented.');
	}
	protected _createAnimation(animation: any) {
		throw new Error('Method not implemented.');
	}
}

export { VueExporter };
