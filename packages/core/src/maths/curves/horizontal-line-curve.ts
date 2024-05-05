import {
	LineCurve
} from './line-curve';
import {
	toFixed
} from './../../utils';
import {
	ParsedCurve,
	ParsedPath
} from './../../types';

class HorizontalLineCurve extends LineCurve {

	protected readonly command = 'H';

	public fromArray(curve: ParsedCurve, index: number, path: ParsedPath){

		const prevCurve = path[index - 1] || [];
		const prevLength = prevCurve.length;
		const length = curve.length;
		// There is something wrong here, because if an other V, or H precedes this curve,
		// the prevCurve x, or y will be missing.
		// It should be fixed, but in the meantime we put a fallback 0 value.
		// @ts-ignore
		const x = prevCurve[prevLength - 2] || 0;
		// @ts-ignore
		const y = prevCurve[prevLength - 1] || 0;

		// @ts-ignore
		this.p0.set(x, y);
		// @ts-ignore
		this.p1.set(curve[1], y);

		return this;

	}

	public toString() : string {
		return this.command + ' ' + this.p1.x;
	}

}

export {
	HorizontalLineCurve
};
