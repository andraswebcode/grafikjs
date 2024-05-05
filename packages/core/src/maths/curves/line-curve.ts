import {
	Curve,
	Point
} from './../';
import {
	clamp
} from './../../utils';

class LineCurve extends Curve {

	protected command = 'L';

	public p0: Point;
	public p1: Point;

	public constructor(p0 = new Point(), p1 = new Point()){
		super();
		this.p0 = p0;
		this.p1 = p1;
	}

	public getPoint(t: number) : Point {

		t = clamp(t, 0, 1);

		const point = this.p1.clone();

		if (t === 1){
			return point;
		} else {
			point.subtract(this.p0).multiplyScalar(t).add(this.p0);
		}

		return point;

	}

}

export {
	LineCurve
};
