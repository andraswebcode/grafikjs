import {
	Curve
} from './curve';
import {
	Point
} from './point';

class LineCurve extends Curve {

	private p0: Point;
	private p1: Point;

	public constructor(p0: Point, p1: Point){
		super();
		this.p0 = p0;
		this.p1 = p1;
	}

}

export {
	LineCurve
};
