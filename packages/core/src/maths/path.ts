import {
	Point,
	LineCurve,
	QuadraticBezierCurve,
	CubicBezierCurve
} from './';

class Path {

	public curves: object[] = [];
	public currentPoint = new Point();

	add(...curves: object[]) : Path {

		this.curves.push(...curves);

		return this;

	}

	moveTo(x: number, y: number) : Path {

		this.currentPoint.set(x, y);

		return this;

	}

	lineTo(x: number, y: number) : Path {

		const curve = new LineCurve(this.currentPoint.clone(), new Point(x, y));

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	quadraticCurveTo(cx: number, cy: number, x: number, y: number) : Path {

		const curve = new QuadraticBezierCurve(
			this.currentPoint.clone(),
			new Point(cx, cy),
			new Point(x, y)
		);

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	cubicCurveTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number) : Path {

		const curve = new CubicBezierCurve(
			this.currentPoint.clone(),
			new Point(c1x, c1y),
			new Point(c2x, c2y),
			new Point(x, y)
		);

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	closePath() : Path {
		return this;
	}

	fromString(string: string) : Path {
		return this;
	}

	toString() : string {
		return '';
	}

}

export {
	Path
};
