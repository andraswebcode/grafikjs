import { Canvas } from './../canvas';
import { SHAPES } from './classes';
import { Importer } from './importer';

class JSONImporter extends Importer {
	public add(content: any, group?: any): Canvas {
		const _group = group || this._canvas;
		const shapes = this._parseShape(content);

		_group.add(shapes);

		return this._canvas;
	}
	public load(content: any): Canvas {
		if (!content) {
			return this._canvas;
		}

		const { children, ...options } = content;

		// Set canvas options.
		this._canvas.set(options);

		if (!children?.length) {
			return this._canvas;
		}

		// Add shapes.
		const shapes = children.map((child) => this._parseShape(child)).filter((child) => !!child);
		// @ts-ignore
		return this._canvas.setChildren(shapes);
	}

	protected _parseShape(shapeOptions: any) {
		const { tagName, children, ...options } = shapeOptions;

		const Shape = SHAPES[tagName];

		if (!Shape) {
			return console.warn(
				`The specified tagName - ${tagName} does not have a class definition.`
			);
		}

		const shape = new Shape(options);

		if (children?.length) {
			const childShapes = children
				.map((child) => this._parseShape(child))
				.filter((child) => !!child);
			shape.add(childShapes);
		}

		return shape;
	}
}

export { JSONImporter };
