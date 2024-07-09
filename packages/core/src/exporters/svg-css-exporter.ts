import { toFixed } from './../utils';
import { SVGExporter } from './svg-exporter';

const TRANSFORM_VALUES = {
	left: {
		fn: 'translateX',
		defValue: 0,
		unit: 'px'
	},
	top: {
		fn: 'translateY',
		defValue: 0,
		unit: 'px'
	},
	scaleX: {
		fn: 'scaleX',
		defValue: 1,
		unit: ''
	},
	scaleY: {
		fn: 'scaleY',
		defValue: 1,
		unit: ''
	},
	angle: {
		fn: 'rotate',
		defValue: 0,
		unit: 'deg'
	}
};
class SVGCSSExporter extends SVGExporter {
	protected _createCanvas() {
		const canvas = this._canvas;
		const animation = canvas.getAnimation();
		const attrs = this._serializeAttributes(this._getCanvasAttributes());
		const style = animation.mapChildren((child) => this._createAnimation(child)).join('');
		const shapes = canvas.mapChildren((child) => this._createShape(child)).join('');

		return `
			<svg ${attrs}>
				<style>
					${style}
				</style>
				${shapes}
			</svg>
		`;
	}

	protected _createShape(shape: any) {
		const wAttrs = this._serializeAttributes(shape.getWrapperAttributes());
		const attrs = this._serializeAttributes(shape.getAttributes(true));
		const animatedTransforms = shape
			.getAnimation()
			.mapChildren((track) => track.property)
			.filter((prop) => Object.keys(TRANSFORM_VALUES).includes(prop));

		if (shape.isCollection && shape.childrenLength) {
			const shapes = shape.mapChildren((child) => this._createShape(child));
			if (animatedTransforms.length) {
				return this._createGroupsForTransform(
					animatedTransforms,
					shape.id,
					`<g ${attrs}>${shapes}</g>`
				);
			}
			return `<g ${wAttrs}><g ${attrs}>${shapes}</g></g>`;
		}

		const tag = shape.get('tagName');

		if (animatedTransforms.length) {
			return this._createGroupsForTransform(
				animatedTransforms,
				shape.id,
				`<${tag} ${attrs} />`
			);
		}

		return `<g ${wAttrs}><${tag} ${attrs} /></g>`;
	}

	private _createGroupsForTransform(properties: string[], shapeId: string, children: string) {
		let output = '',
			id = '',
			child = '';

		for (let i = properties.length - 1; i >= 0; i--) {
			id = `${shapeId}-${properties[i]}`;
			child = i === properties.length - 1 ? children : output;
			output = `<g id="${id}">${child}</g>`;
		}

		return output;
	}

	protected _createAnimation(animation: any) {
		const id = animation.shape.get('id');
		const tag = animation.shape.get('tagName');
		const duration = animation.duration;
		const keyframes = this._createKeyframes(animation);
		const output = `
			#${id} ${tag} {
				animation-name: ${id};
				animation-duration: ${duration}ms;
			}
			${keyframes}
		`;

		return output;
	}

	private _createKeyframes(animation) {
		const { duration, shape } = animation;
		const { id } = shape;
		const keyframes = animation
			.mapChildren((track) =>
				track.mapChildren((kf) => ({
					...kf.toJSON(),
					property: track.property
				}))
			)
			.flat()
			.reduce((memo, item) => {
				(memo[item.to] = memo[item.to] || []).push(item);
				return memo;
			}, {});

		let output = `@keyframes ${id} {`,
			sec = '0',
			_sec = 0,
			_prc = 0,
			_body = '';

		for (sec in keyframes) {
			_sec = parseInt(sec);
			_prc = toFixed((_sec / duration) * 100);
			_body = keyframes[sec]
				.map((data) => this._getCSSDecaration(data.property, data.value))
				.join('');
			output += `
				${_prc}% {
					${_body}
				}
			`;
		}

		output += '}';

		return output;
	}

	private _getCSSDecaration(property, value) {
		const transformValue = this._getTransformValue(property, value);

		if (transformValue) {
			return `transform: ${transformValue};`;
		}

		return `${property}: ${value};`;
	}

	private _getTransformValue(property, value) {
		if (!TRANSFORM_VALUES[property]) {
			return '';
		}

		const { fn, defValue, unit } = TRANSFORM_VALUES[property];
		const val = typeof value === 'undefined' ? defValue : value;

		return `${fn}(${val}${unit})`;
	}
}

export { SVGCSSExporter };
