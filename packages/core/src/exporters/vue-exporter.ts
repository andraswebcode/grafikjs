import { Exporter } from './exporter';

const EXCLUDED_ATTRIBUTES = ['xmlns', 'viewBox', 'className', 'transform', 'preserveAspectRatio'];
const COMPONENT_NAMES = {
	svg: 'Canvas',
	g: 'Group',
	rect: 'Rect',
	circle: 'Circle',
	ellipse: 'Ellipse',
	path: 'Path',
	polygon: 'Polygon',
	polyline: 'Polyline',
	image: 'Image',
	text: 'Text',
	'text-path': 'TextPath'
};

// Creates vue file with a vue component.
class VueExporter extends Exporter {
	protected _mimeType = 'text/plain';
	protected _extension = 'vue';

	protected _createCanvas() {
		const attrs = this._serializeAttributes(this._getCanvasAttributes());
		const shapes = this._canvas.mapChildren((child) => this._createShape(child)).join('');
		return `
			<script setup>
				${this._createDefs()}
			</script>
			<template>
				<Canvas ${attrs}>
					${shapes}
				</Canvas>
			</template>
		`;
	}

	protected _createDefs() {
		const components = this._getComponents();
		const animations = this._canvas
			.getAnimation()
			.mapChildren((child) => this._createAnimation(child))
			.join('');

		return `
			import { Canvas, ${components} } from '@grafikjs/vue';
			${animations}
		`;
	}

	protected _createShape(shape: any) {
		const tag = shape.get('tagName');
		const trAttrs = this._serializeAttributes(this._getTransformAttrs(shape));
		const animAttrs = this._serializeAttributes(this._getAnimationAttr(shape));
		const attrs = this._serializeAttributes(shape.getAttributes(true));
		const component = COMPONENT_NAMES[tag];

		if (!component) {
			return '';
		}

		if (shape.isCollection && shape.childrenLength) {
			const shapes = shape.mapChildren((child) => this._createShape(child)).join('');
			return `
				<${component} ${trAttrs} ${attrs} ${animAttrs}>
					${shapes}
				</${component}>
			`;
		}

		return `
			<${component} ${trAttrs} ${attrs} />
		`;
	}

	protected _createAnimation(animation: any) {
		if (!animation.childrenLength) {
			return '';
		}

		const { shape } = animation;
		const json = JSON.stringify(animation.toJSON());
		const varName = this._createAnimationVarName(shape);

		return `
			const ${varName} = ${json};
		`;
	}

	private _createAnimationVarName(shape: any): any {
		return 'anim_' + shape.id.replace(shape.tagName + '-', '');
	}

	protected _serializeAttributes(attrs: object) {
		const output: string[] = [];
		let key, attrKey, value;

		for (key in attrs) {
			if (EXCLUDED_ATTRIBUTES.includes(key)) {
				continue;
			}

			value = attrs[key];
			attrKey = typeof value === 'string' ? key : ':' + key;

			output.push(`${attrKey}="${attrs[key]}"`);
		}

		return output.join(' ');
	}

	private _getTransformAttrs(shape: any): any {
		return {
			left: 0,
			top: 0
		};
	}

	private _getAnimationAttr(shape: any): any {
		if (!shape.getAnimation().childrenLength) {
			return {};
		}

		const varName = this._createAnimationVarName(shape);

		return {
			animation: varName
		};
	}

	private _getComponents() {
		const components = [];
		this._canvas.eachChild((child) => this.__getComponent(child, components));

		return components.join(', ');
	}

	private __getComponent(shape: any, arrayRef: string[]) {
		const component = COMPONENT_NAMES[shape.tagName];

		if (component && !arrayRef.includes(component)) {
			arrayRef.push(component);
		}

		if (shape.isCollection) {
			shape.eachChild((child) => this.__getComponent(child, arrayRef));
		}
	}
}

export { VueExporter };
