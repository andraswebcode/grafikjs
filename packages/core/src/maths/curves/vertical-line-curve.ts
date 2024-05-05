import {
	LineCurve
} from './line-curve';
import {
	toFixed
} from './../../utils';

class VerticalLineCurve extends LineCurve {

	protected readonly command = 'V';

	public fromString(string: string, prevString = ''){

		const prevValues = (prevString.match(/[\-\.\d]+/g) || []).map(n => toFixed(n));
		// @ts-ignore
		const value = toFixed((string.match(/[\-\.\d]+/g) || [0])[0]);
		const prevLength = prevValues.length;
		// There is something wrong here, because if an other V, or H precedes this curve,
		// the prevValues x, or y will be missing.
		// It should be fixed, but in the meantime we put a fallback 0 value.
		const x = prevValues[prevLength - 2] || 0;
		const y = prevValues[prevLength - 1] || 0;

		this.p0.set(x, y);
		this.p1.set(x, value);

		return this;

	}

	public toString() : string {
		return this.command + ' ' + this.p1.y;
	}

}

export {
	VerticalLineCurve
};
