import {
	CubicBezierCurve
} from './cubic-bezier-curve';
import {
	ParsedCurve,
	ParsedPath
} from './../../types';

class SmoothCubicBezierCurve extends CubicBezierCurve {

	protected readonly command = 'S';

	public fromArray(curve: ParsedCurve, i: number, path: ParsedPath){
		return this;
	}

	public toString() : string {
		return '';
	}

}

export {
	SmoothCubicBezierCurve
};
