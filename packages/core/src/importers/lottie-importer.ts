import { Canvas } from './../canvas';
import { SHAPES } from './classes';
import { Importer } from './importer';

class LottieImporter extends Importer {
	public add(content: any, group: any): Canvas {
		throw new Error('Method not implemented.');
	}
	public load(content: any): Canvas {
		throw new Error('Method not implemented.');
	}
	protected _parseShape(shape: any) {
		throw new Error('Method not implemented.');
	}
}

export { LottieImporter };
