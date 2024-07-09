import { kebabize, toFixed } from './../utils';
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
const TRANSFORM_ORDER = ['top', 'left', 'angle', 'scaleY', 'scaleX'];
const EASING_FUNCTIONS = {
	linear: 'linear',
	// Quadratic
	quadraticIn: 'cubic-bezier(0.11, 0, 0.5, 0)',
	quadraticOut: 'cubic-bezier(0.5, 1, 0.89, 1)',
	quadraticInOut: 'cubic-bezier(0.45, 0, 0.55, 1)',
	quadraticOutIn: 'cubic-bezier(0, 0.45, 1, 0.55)',
	// Cubic
	cubicIn: 'cubic-bezier(0.32, 0, 0.67, 0)',
	cubicOut: 'cubic-bezier(0.33, 1, 0.68, 1)',
	cubicInOut: 'cubic-bezier(0.65, 0, 0.35, 1)',
	cubicOutIn: 'cubic-bezier(0, 0.65, 1, 0.35)',
	// Quartic
	quarticIn: 'cubic-bezier(0.5, 0, 0.75, 0)',
	quarticOut: 'cubic-bezier(0.25, 1, 0.5, 1)',
	quarticInOut: 'cubic-bezier(0.76, 0, 0.24, 1)',
	quarticOutIn: 'cubic-bezier(0, 0.76, 1, 0.24)',
	// Quintic
	quinticIn: 'cubic-bezier(0.64, 0, 0.78, 0)',
	quinticOut: 'cubic-bezier(0.22, 1, 0.36, 1)',
	quinticInOut: 'cubic-bezier(0.83, 0, 0.17, 1)',
	quinticOutIn: 'cubic-bezier(0, 0.83, 1, 0.17)',
	// Sine
	sineIn: 'cubic-bezier(0.12, 0, 0.39, 0)',
	sineOut: 'cubic-bezier(0.61, 1, 0.88, 1)',
	sineInOut: 'cubic-bezier(0.37, 0, 0.63, 1)',
	sineOutIn: 'cubic-bezier(0, 0.37, 1, 0.63)',
	// Exponential
	exponentialIn: 'cubic-bezier(0.7, 0, 0.84, 0)',
	exponentialOut: 'cubic-bezier(0.16, 1, 0.3, 1)',
	exponentialInOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
	exponentialOutIn: 'cubic-bezier(0, 0.87, 1, 0.13)',
	// Circular
	circularIn: 'cubic-bezier(0.55, 0, 1, 0.45)',
	circularOut: 'cubic-bezier(0, 0.55, 0.45, 1)',
	circularInOut: 'cubic-bezier(0.85, 0, 0.15, 1)',
	circularOutIn: 'cubic-bezier(0, 0.85, 1, 0.15)',
	// Back
	backIn: '',
	backOut: '',
	backInOut: '',
	backOutIn: '',
	// Bounce
	bounceIn: '',
	bounceOut: '',
	bounceInOut: '',
	bounceOutIn: '',
	// Elastic
	elasticIn: '',
	elasticOut: '',
	elasticInOut: '',
	elasticOutIn: ''
};

class SVGCSSExporter extends SVGExporter {
	protected _createDefs() {
		const canvas = this._canvas;
		const animation = canvas.getAnimation();
		const style = animation.mapChildren((child) => this._createAnimation(child)).join('');

		return `
		<style>
			${style}
		</style>
		`;
	}

	protected _createShape(shape: any) {
		const wAttrs = this._serializeAttributes(shape.getWrapperAttributes());
		const attrs = this._serializeAttributes(shape.getAttributes(true));
		const animatedTransforms = this._getAnimatedTransformProps(shape);
		const tag = shape.get('tagName');
		const id = shape.get('id');

		if (shape.isCollection && shape.childrenLength) {
			const shapes = shape.mapChildren((child) => this._createShape(child));
			if (animatedTransforms.length) {
				return this._createGroupsForTransform(
					animatedTransforms,
					shape.id,
					`<g id="${id}"><g ${attrs}>${shapes}</g></g>`
				);
			}
			return `<g ${wAttrs}><g ${attrs}>${shapes}</g></g>`;
		}

		if (animatedTransforms.length) {
			return this._createGroupsForTransform(
				animatedTransforms,
				shape.id,
				`<g id="${id}"><${tag} ${attrs} /></g>`
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
		const duration = this.getOption('duration') || animation.duration;
		const delay = this.getOption('delay') || '0';
		const repeat = this.getOption('repeat') || '1';
		const direction = this.getOption('direction') || 'normal';
		const fillMode = this.getOption('fillMode') || 'both';
		const animationNames = animation
			.mapChildren((track) => track.property)
			.filter((prop) => !TRANSFORM_PROPERTIES.includes(prop))
			.map((prop) => `${id}-${prop}`)
			.join(', ');
		const keyframes = this._createKeyframes(animation);
		const transformCSS = this._getAnimatedTransformProps(shape)
			.map(
				(prop) => `
			#${id}-${prop} {
				animation-name: ${id}-${prop};
				animation-duration: ${duration}ms;
				animation-delay: ${delay}ms;
				animation-iteration-count: ${repeat};
				animation-direction: ${direction};
				animation-fill-mode: ${fillMode};
				transform: ${this._getTransformValue(prop, shape.get(prop))}
			}
			`
			)
			.join('');
		const output = `
			#${id} ${tag} {
				animation-name: ${animationNames};
				animation-duration: ${duration}ms;
				animation-delay: ${delay}ms;
				animation-iteration-count: ${repeat};
				animation-direction: ${direction};
				animation-fill-mode: ${fillMode};
			}
			${transformCSS}
			${keyframes}
		`;

		return output;
	}

	private _createKeyframes(animation) {
		const { duration, shape } = animation;
		const { id } = shape;
		return animation
			.mapChildren((track) => {
				const { property, originalValue } = track;
				let output = `@keyframes ${id}-${property} {`;
				let cssDeclaration = '';
				output += `
					0% {
						${this._getCSSDeclaration(property, originalValue)}
					}
				`;
				output += track
					.mapChildren((kf) => {
						const { to, value, easing } = kf.toJSON();
						const prc = toFixed((to / duration) * 100);
						const easingFn = EASING_FUNCTIONS[easing] || 'linear';
						cssDeclaration = this._getCSSDeclaration(property, value);
						return `
							${prc}% {
								${cssDeclaration}
								animation-timing-function: ${easingFn};
							}
						`;
					})
					.join('');
				output += `
					100% {
						${cssDeclaration}
					}
				`;
				output += '}';
				return output;
			})
			.join('');
	}

	private _getAnimatedTransformProps(shape: any) {
		return shape
			.getAnimation()
			.mapChildren((track) => track.property)
			.filter((prop) => TRANSFORM_PROPERTIES.includes(prop))
			.sort((a, b) => TRANSFORM_ORDER.indexOf(a) - TRANSFORM_ORDER.indexOf(b));
	}

	private _getCSSDeclaration(property, value) {
		const transformValue = this._getTransformValue(property, value);

		if (transformValue) {
			return `transform: ${transformValue};`;
		}

		const unit = typeof value === 'number' ? 'px' : '';

		return `${kebabize(property)}: ${value}${unit};`;
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
