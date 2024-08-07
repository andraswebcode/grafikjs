import { ParsedCurve } from './../../types';
import { Curve, Point } from './../';

class MoveCurve extends Curve {
	protected readonly command = 'M';

	public p0: Point;

	public constructor(p0 = new Point()) {
		super();
		this.p0 = p0;
	}

	public getPoint(t: number): Point {
		return this.p0.clone();
	}

	public fromArray(curve: ParsedCurve, lastPoint: Point) {
		const isRelative = curve[0] === curve[0].toLowerCase();

		this.p0.set(curve[1] || 0, curve[2] || 0);

		if (isRelative) {
			this.p0.add(lastPoint);
		}

		return this;
	}

	public getPoints(divisions = 10): Point[] {
		return [this.getPoint(0)];
	}
}

export { MoveCurve };
