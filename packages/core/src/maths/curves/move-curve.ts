import {
	Curve,
	Point
} from './../';

class MoveCurve extends Curve {

	protected readonly command = 'M';

	public p0: Point;

	public constructor(p0 = new Point()){
		super();
		this.p0 = p0;
	}

}

export {
	MoveCurve
};
