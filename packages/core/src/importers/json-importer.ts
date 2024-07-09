import { Canvas } from './../canvas';
import { Importer } from './importer';

class JSONImporter extends Importer {
	public load(content: any): Canvas {
		throw new Error('Method not implemented.');
	}
	protected _parseShape(shape: any) {
		throw new Error('Method not implemented.');
	}
}

export { JSONImporter };
