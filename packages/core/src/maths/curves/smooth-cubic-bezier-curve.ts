import {
	CubicBezierCurve
} from './cubic-bezier-curve';

class SmoothCubicBezierCurve extends CubicBezierCurve {

	protected readonly command = 'S';

	public fromString(string: string, prevString = ''){

		return this;

	}

	public toString() : string {
		return '';
	}

}

export {
	SmoothCubicBezierCurve
};
