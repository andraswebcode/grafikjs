import { Canvas } from './../canvas';
import { SHAPES } from './classes';
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
		return this._canvas.setChildren(shapes);
	}

	protected _parseShape(shapeDOM: any) {
		const tagName = shapeDOM.tagName.toLowerCase();
		const attrs = this._getAttributes(shapeDOM);
		const Shape = SHAPES[tagName];

		if (!Shape) {
			return console.warn(
				`The specified tagName - ${tagName} does not have a class definition.`
			);
		}

		const shape = new Shape(attrs);
		const children = this._getChildren(shapeDOM);

		if (children?.length) {
			const childShapes = children
				.map((child) => this._parseShape(child))
				.filter((child) => !!child);
			shape.add(childShapes);
		}

		return shape;
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
