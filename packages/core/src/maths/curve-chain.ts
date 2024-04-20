import {
	Point
} from './';
import {
	MoveCurve,
	CloseCurve,
	LineCurve,
	QuadraticBezierCurve,
	CubicBezierCurve
} from './curves';

const CURVES = {
	'M':MoveCurve,
	'L':LineCurve,
	'Q':QuadraticBezierCurve,
	'C':CubicBezierCurve,
	'Z':CloseCurve
};

class CurveChain {

	private curves: object[] = [];
	private currentPoint = new Point();

	public add(...curves: object[]) : CurveChain {

		this.curves.push(...curves);

		return this;

	}

	public set(curves: object[]) : CurveChain {

		this.curves = curves;

		return this;

	}

	public moveTo(x: number, y: number) : CurveChain {

		const curve = new MoveCurve(new Point(x, y));

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public lineTo(x: number, y: number) : CurveChain {

		const curve = new LineCurve(this.currentPoint.clone(), new Point(x, y));

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public quadraticCurveTo(cx: number, cy: number, x: number, y: number) : CurveChain {

		const curve = new QuadraticBezierCurve(
			this.currentPoint.clone(),
			new Point(cx, cy),
			new Point(x, y)
		);

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public cubicCurveTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number) : CurveChain {

		const curve = new CubicBezierCurve(
			this.currentPoint.clone(),
			new Point(c1x, c1y),
			new Point(c2x, c2y),
			new Point(x, y)
		);

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public closePath() : CurveChain {

		const curve = new CloseCurve();

		return this.add(curve);

	}

	public fromString(string: string) : CurveChain {

		const regex = /([MmLlHhVvCcSsQqTtAaZz])([^MmLlHhVvCcSsQqTtAaZz]+)?/g;
		const curves = (string.match(regex) || []).map((curve, i, array) => {
			curve = curve.trim();
			const command = curve.replace(/[^MmLlHhVvCcSsQqTtAaZz]/g, '');
			const Curve = CURVES[command];
			return new Curve().fromString(curve, array[i - 1]);
		});

		return this.set(curves);

	}

	public toString() : string {
		// @ts-ignore
		return this.curves.map(curve => curve.toString(' ')).join(' ');
	}

}

export {
	CurveChain
};
