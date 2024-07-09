import { Exporter } from './exporter';

// Creates tsx file with a react component.
class ReactExporter extends Exporter {
	protected _build() {
		throw new Error('Method not implemented.');
	}
	protected _createCanvas(children: any) {
		throw new Error('Method not implemented.');
	}
	protected _createShape(children: any) {
		throw new Error('Method not implemented.');
	}
	protected _createAnimation() {
		throw new Error('Method not implemented.');
	}
}

export { ReactExporter };
