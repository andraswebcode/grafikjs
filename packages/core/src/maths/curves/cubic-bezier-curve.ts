import {
	Curve,
	Point
} from './../';

class CubicBezierCurve extends Curve {

	protected command = 'C';

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

	public getPoint(t: number) : Point {
		return new Point(
			CubicBezierCurve.interpolation(t, this.p0.x, this.p1.x, this.p2.x, this.p3.x),
			CubicBezierCurve.interpolation(t, this.p0.y, this.p1.y, this.p2.y, this.p3.y)
		);
	}

	static interpolation(t: number, p0: number, p1: number, p2: number, p3: number) : number {
		const tn = 1 - t;
		return tn * tn * tn * p0 + 3 * tn * tn * t * p1 + 3.0 * tn * t * t * p2 + t * t * t * p3;
	}

}

export {
	CubicBezierCurve
};
