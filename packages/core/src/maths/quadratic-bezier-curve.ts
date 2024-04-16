import {
	Curve
} from './curve';
import {
	Point
} from './point';

class QuadraticBezierCurve extends Curve {

	private p0: Point;
	private p1: Point;
	private p2: Point;

	public constructor(p0: Point, p1: Point, p2: Point){
		super();
		this.p0 = p0;
		this.p1 = p1;
		this.p2 = p2;
	}

}

export {
	QuadraticBezierCurve
};
