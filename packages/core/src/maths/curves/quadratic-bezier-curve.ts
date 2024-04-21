import {
	Curve,
	Point,
	Interpolations
} from './../';

class QuadraticBezierCurve extends Curve {

	protected readonly command = 'Q';

	public p0: Point;
	public p1: Point;
	public p2: Point;

	public constructor(p0 = new Point(), p1 = new Point(), p2 = new Point()){
		super();
		this.p0 = p0;
		this.p1 = p1;
		this.p2 = p2;
	}

	public getPoint(t: number) : Point {
		return new Point(
			Interpolations.quadraticBezier(t, this.p0.x, this.p1.x, this.p2.x),
			Interpolations.quadraticBezier(t, this.p0.y, this.p1.y, this.p2.y)
		);
	}

}

export {
	QuadraticBezierCurve
};
