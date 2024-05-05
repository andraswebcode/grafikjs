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

class VerticalLineCurve extends LineCurve {

	protected readonly command = 'V';

	public fromArray(curve: ParsedCurve, index: number, path: ParsedPath){

		let x = 0;
		let y = 0;
		let xSet = false;
		let ySet = false;
		let _i = index, _curve, _prevCurve;

		// Walking through the path array backward, and pick up the first x, or y value.
		// And stops at the curve, that is not V, or H. So, the curve.length is not equals to 2.
		while (path[_i--].length === 2){
			_curve = path[_i];
			_prevCurve = path[_i - 1];
			switch (_curve[0]){
				case 'H':
				if (!xSet){
					x = _curve[1];
					xSet = true;
				}
				break;
				case 'V':
				if (!ySet){
					y = _curve[1];
					ySet = true;
				}
				break;
				default:
				if (!xSet){
					// @ts-ignore
					x = _curve[_curve.length - 2];
					xSet = true;
				}
				if (!ySet){
					// @ts-ignore
					y = _curve[_curve.length - 1];
					ySet = true;
				}
				break;
			}
		}

		this.p0.set(x, y);
		this.p1.set(x, curve[1]);

		return this;

	}

	public toString() : string {
		return this.command + ' ' + this.p1.y;
	}

}

export {
	VerticalLineCurve
};
