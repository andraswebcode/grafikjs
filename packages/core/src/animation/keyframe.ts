import { AnimationBase } from './animation-base';
import { EasingFunction, EasingName, KeyframeObject } from './../types';
import easings from './easings';

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
		this.startValue = startValue;
		this.endValue = endValue;
		this.easing = typeof easing === 'string' ? easings[easing] : easing;
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
		return this.startValue + (this.endValue - this.startValue) * t;
	}

	public toJSON(): KeyframeObject {
		return {
			to: this.to,
			value: this.endValue,
			easing: 'linear'
		};
	}
}

export { Keyframe };
