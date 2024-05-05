import {
	QuadraticBezierCurve
} from './quadratic-bezier-curve';

class SmoothQuadraticBezierCurve extends QuadraticBezierCurve {

	protected readonly command = 'T';

	public fromString(string: string, prevString = ''){

		return this;

	}

	public toString() : string {
		return '';
	}

}

export {
	SmoothQuadraticBezierCurve
};
