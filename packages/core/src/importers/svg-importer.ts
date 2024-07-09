import { Canvas } from './../canvas';
import { SHAPES } from './classes';
import { Importer } from './importer';

class SVGImporter extends Importer {
	public load(content: any): Canvas {
		throw new Error('Method not implemented.');
	}
	protected _parseShape(shape: any) {
		throw new Error('Method not implemented.');
	}
}

export { SVGImporter };
