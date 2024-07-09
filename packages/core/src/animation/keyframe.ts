import { AnimationBase } from './animation-base';
import { EasingFunction, EasingName, KeyframeObject } from './../types';
import { easings } from './easings';
import { Color } from './../maths';

class Keyframe extends AnimationBase {
	public from = 0;
	public to = 0;
	public startValue: any = null;
	public endValue: any = null;
	public easing: EasingFunction;

	get duration() {
		return this.to - this.from;
	}

	public constructor(
		from: number,
		to: number,
		startValue: any,
		endValue: any,
		easing: EasingName | EasingFunction = 'linear'
	) {
		super();
		this.from = from;
		this.to = to;
		this.startValue = this._parseValue(startValue);
		this.endValue = this._parseValue(endValue);
		this.easing = typeof easing === 'string' ? easings[easing] : easing;
		this.name = 'keyframe';
		this.createId();
	}

	public getValueAt(time: number): any {
		if (time < this.from || time > this.to) {
			return null;
		}

		const t = (time - this.from) / (this.to - this.from);
		const eased = this.easing(t);

		return this._interpolateValue(eased);
	}

	private _interpolateValue(t: number): any {
		if (Array.isArray(this.startValue) && Array.isArray(this.endValue)) {
			return this.startValue
				.map((startChunk, i) => {
					const endChunk = this.endValue[i];
					return typeof startChunk === 'number'
						? startChunk + (endChunk - startChunk) * t
						: startChunk;
				})
				.join('');
		}

		return this.startValue + (this.endValue - this.startValue) * t;
	}

	private _parseValue(value: any) {
		if (typeof value === 'number') {
			return value;
		}

		if (Color.isColor(value)) {
			// If value is an any color format, eg #000, or black,
			// first we need to convert this to a value
			// that contains decimal numbers eg. rgba().
			const color = new Color(value);
			value = color.toRGBA();
		}

		if (typeof value === 'string') {
			value = value
				.split(/(\d+\.?\d*)|(\D+)/g)
				.filter(Boolean)
				.map((chunk) => {
					const n = parseFloat(chunk);
					return isNaN(n) ? chunk : n;
				});
		}

		return value;
	}

	public toJSON(): KeyframeObject {
		return {
			to: this.to,
			value: this.endValue,
			easing: this.easing.name as EasingName
		};
	}
}

export { Keyframe };
