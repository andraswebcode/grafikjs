import {
	Curve,
	Point
} from './../';

class LineCurve extends Curve {

	protected readonly command = 'L';

	public p0: Point;
	public p1: Point;

	public constructor(p0 = new Point(), p1 = new Point()){
		super();
		this.p0 = p0;
		this.p1 = p1;
	}

}

export {
	LineCurve
};
