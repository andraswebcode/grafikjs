import {
	Curve
} from './curve';
import {
	Point
} from './point';

class CubicBezierCurve extends Curve {

	p0: Point;
	p1: Point;
	p2: Point;
	p3: Point;

	constructor(p0: Point, p1: Point, p2: Point, p3: Point){
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
