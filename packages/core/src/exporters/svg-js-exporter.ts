import { SVGExporter } from './svg-exporter';

class SVGJSExporter extends SVGExporter {
	protected _createDefs() {
		return '';
	}

	protected _createShape(shape: any) {
		const wAttrs = this._serializeAttributes(shape.getWrapperAttributes());
		const attrs = this._serializeAttributes(shape.getAttributes(true));
		const tag = shape.get('tagName');

		if (shape.isCollection && shape.childrenLength) {
			const shapes = shape.mapChildren((child) => this._createShape(child));
			return `<g ${wAttrs}><g ${attrs}>${shapes}</g></g>`;
		}

		return `<g ${wAttrs}><${tag} ${attrs} /></g>`;
	}

	protected _createAnimation() {}
}

export { SVGJSExporter };
