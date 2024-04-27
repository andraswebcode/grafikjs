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

	public getPoint(t: number) : Point {
		return this.p0.clone();
	}

	public getPoints(divisions = 10) : Point[] {
		return [this.getPoint(0)];
	}

}

export {
	MoveCurve
};
