import { Exporter } from './exporter';

// Creates tsx file with a react component.
class ReactExporter extends Exporter {
	protected _mimeType = 'text/plain';
	protected _extension = 'tsx';
	protected _createDefs() {}

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

export { ReactExporter };
