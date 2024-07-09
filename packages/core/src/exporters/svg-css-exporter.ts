import { SVGExporter } from './svg-exporter';

class SVGCSSExporter extends SVGExporter {
	protected _createCanvas() {
		const canvas = this._canvas;
		const animation = canvas.getAnimation();
		const attrs = this._serializeAttributes(this._getCanvasAttributes());
		const style = animation.mapChildren((child) => this._createAnimation(child)).join('');
		const shapes = canvas.mapChildren((child) => this._createShape(child)).join('');

		return `<svg ${attrs}>${style}${shapes}</svg>`;
	}

	protected _createShape(shape: any) {
		const wAttrs = this._serializeAttributes(shape.getWrapperAttributes());
		const attrs = this._serializeAttributes(shape.getAttributes(true));

		if (shape.isCollection && shape.childrenLength) {
			const shapes = shape.mapChildren((child) => this._createShape(child));
			return `<g ${wAttrs}><g ${attrs}>${shapes}</g></g>`;
		}

		const tag = shape.get('tagName');

		return `<g ${wAttrs}><${tag} ${attrs} /></g>`;
	}

	protected _createAnimation(animation: any) {
		return '';
	}
}

export { SVGCSSExporter };
