import {
	Curve,
	Point
} from './../';

class CloseCurve extends Curve {

	protected readonly command = 'Z';

	public getPoints(divisions = 10) : Point[] {
		return [];
	}

}

export {
	CloseCurve
};
