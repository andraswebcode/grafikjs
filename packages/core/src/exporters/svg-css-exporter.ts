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
const TRANSFORM_PROPERTIES = Object.keys(TRANSFORM_VALUES);

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
		const animatedTransforms = this._getAnimatedTransformProps(shape);

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
		const { shape } = animation;
		const id = shape.get('id');
		const tag = shape.get('tagName');
		const duration = animation.duration;
		const keyframes = this._createKeyframes(animation);
		const transformCSS = this._getAnimatedTransformProps(shape)
			.map(
				(prop) => `
			#${id}-${prop} {
				animation-name: ${id}-${prop};
				animation-duration: ${duration}ms;
				animation-fill-mode: both;
			}
			`
			)
			.join('');
		const output = `
			#${id} ${tag} {
				animation-name: ${id};
				animation-duration: ${duration}ms;
				animation-fill-mode: both;
			}
			${transformCSS}
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
			.flat();
		const reducer = (memo, item) => {
			(memo[item.to] = memo[item.to] || []).push(item);
			return memo;
		};
		const buildKeyframes = (kfs) => {
			let o = '',
				sec = '0',
				_sec = 0,
				_prc = 0,
				_body = '';
			for (sec in kfs) {
				_sec = parseInt(sec);
				_prc = toFixed((_sec / duration) * 100);
				_body = kfs[sec]
					.map((data) => this._getCSSDeclaration(data.property, data.value))
					.join('');
				o += `
					${_prc}% {
						${_body}
					}
				`;
			}
			return o;
		};
		const shapeKeyframes = keyframes
			.filter((kf) => !TRANSFORM_PROPERTIES.includes(kf.property))
			.reduce(reducer, {});

		let output = `@keyframes ${id} {`;

		output += buildKeyframes(shapeKeyframes);

		output += '}';

		output += this._getAnimatedTransformProps(shape)
			.map((prop) => {
				const trKfs = keyframes.filter((kf) => kf.property === prop).reduce(reducer, {});
				let output = `@keyframes ${id}-${prop} {`;
				output += buildKeyframes(trKfs);
				output += '}';
				return output;
			})
			.join('');

		return output;
	}

	private _getAnimatedTransformProps(shape: any) {
		return shape
			.getAnimation()
			.mapChildren((track) => track.property)
			.filter((prop) => TRANSFORM_PROPERTIES.includes(prop));
	}

	private _getCSSDeclaration(property, value) {
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
