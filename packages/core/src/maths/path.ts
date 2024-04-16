import {
	Point,
	LineCurve,
	QuadraticBezierCurve,
	CubicBezierCurve
} from './';

class Path {

	private curves: object[] = [];
	private currentPoint = new Point();

	public add(...curves: object[]) : Path {

		this.curves.push(...curves);

		return this;

	}

	public moveTo(x: number, y: number) : Path {

		this.currentPoint.set(x, y);

		return this;

	}

	public lineTo(x: number, y: number) : Path {

		const curve = new LineCurve(this.currentPoint.clone(), new Point(x, y));

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public quadraticCurveTo(cx: number, cy: number, x: number, y: number) : Path {

		const curve = new QuadraticBezierCurve(
			this.currentPoint.clone(),
			new Point(cx, cy),
			new Point(x, y)
		);

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public cubicCurveTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number) : Path {

		const curve = new CubicBezierCurve(
			this.currentPoint.clone(),
			new Point(c1x, c1y),
			new Point(c2x, c2y),
			new Point(x, y)
		);

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public closePath() : Path {
		return this;
	}

	public fromString(string: string) : Path {
		return this;
	}

	public toString() : string {
		return '';
	}

}

export {
	Path
};
