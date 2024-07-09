import { AnimationBase } from './animation-base';
import { EasingFunction, EasingName, KeyframeObject } from './../types';
import { easings } from './easings';
import { Color } from './../maths';

type Value = string | number | null;

class Keyframe extends AnimationBase {
	public from = 0;
	public to = 0;
	public startValue: Value = null;
	public endValue: Value = null;
	public easing: EasingFunction;

	private _startValue: Value[];
	private _endValue: Value[];

	get duration() {
		return this.to - this.from;
	}

	public constructor(
		from: number,
		to: number,
		startValue: Value,
		endValue: Value,
		easing: EasingName | EasingFunction = 'linear'
	) {
		super();
		this.from = from;
		this.to = to;
		this.startValue = startValue;
		this.endValue = endValue;
		this._startValue = this._parseValue(startValue);
		this._endValue = this._parseValue(endValue);
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

	private _interpolateValue(t: number): Value {
		if (Array.isArray(this._startValue) && Array.isArray(this._endValue)) {
			return this._startValue
				.map((startChunk, i) => {
					const endChunk = this._endValue[i];
					return typeof startChunk === 'number' && typeof endChunk === 'number'
						? startChunk + (endChunk - startChunk) * t
						: startChunk;
				})
				.join('');
		}

		if (typeof this.startValue !== 'number' || typeof this.endValue !== 'number') {
			return 0;
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
