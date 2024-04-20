import {
	Curve,
	Point
} from './../';

class CubicBezierCurve extends Curve {

	protected readonly command = 'C';

	public p0: Point;
	public p1: Point;
	public p2: Point;
	public p3: Point;

	public constructor(p0 = new Point(), p1 = new Point(), p2 = new Point(), p3 = new Point()){
		super();
		this.p0 = p0;
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
	}

}

export {
	CubicBezierCurve
};
