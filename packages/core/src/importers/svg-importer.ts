import { Canvas } from './../canvas';
import { Importer } from './importer';

class SVGImporter extends Importer {
	public load(content: any): Canvas {
		if (!content) {
			return this._canvas;
		}

		const parser = new DOMParser();
		const doc = parser.parseFromString(content, 'image/svg+xml');
		const svg = doc.querySelector('svg');

		if (!svg) {
			console.warn('No <svg> element found in the provided content.');
			return this._canvas;
		}

		// Set canvas options.
		this._canvas.set(this._getAttributes(svg));

		const children = this._getChildren(svg);

		if (!children.length) {
			return this._canvas;
		}

		// Add shapes.
		const shapes = children.map((child) => this._parseShape(child)).filter((child) => !!child);
		// @ts-ignore
		return this._canvas; //.setChildren(shapes);
	}

	protected _parseShape(shapeDOM: any) {
		console.log(shapeDOM);

		return {};
	}

	protected _getAttributes(element: SVGElement) {
		const attributes = {};
		let i, attr;

		for (i = 0; i < element.attributes.length; i++) {
			attr = element.attributes[i];
			attributes[attr.name] = attr.value;
		}

		return attributes;
	}

	protected _getChildren(element: SVGElement) {
		return Array.from(element.childNodes);
	}
}

export { SVGImporter };
