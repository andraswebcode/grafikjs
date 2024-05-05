import {
	QuadraticBezierCurve
} from './quadratic-bezier-curve';
import {
	ParsedCurve,
	ParsedPath
} from './../../types';

class SmoothQuadraticBezierCurve extends QuadraticBezierCurve {

	protected readonly command = 'T';

	public fromArray(curve: ParsedCurve, i: number, path: ParsedPath){
		return this;
	}

	public toString() : string {
		return '';
	}

}

export {
	SmoothQuadraticBezierCurve
};
