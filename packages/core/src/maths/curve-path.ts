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

class CurvePath {

	private curves: object[] = [];
	private currentPoint = new Point();

	public constructor(...curves: object[]){
		this.set(curves);
	}

	public get length(){
		return this.curves.length;
	}

	public at(index: number){
		return this.curves[index];
	}

	public add(...curves: object[]){

		this.curves.push(...curves);

		return this;

	}

	public set(curves: object[]){

		this.curves = curves;

		return this;

	}

	public moveTo(x: number, y: number) : CurvePath {

		const curve = new MoveCurve(new Point(x, y));

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public lineTo(x: number, y: number) : CurvePath {

		const curve = new LineCurve(this.currentPoint.clone(), new Point(x, y));

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public quadraticCurveTo(cx: number, cy: number, x: number, y: number) : CurvePath {

		const curve = new QuadraticBezierCurve(
			this.currentPoint.clone(),
			new Point(cx, cy),
			new Point(x, y)
		);

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public cubicCurveTo(c1x: number, c1y: number, c2x: number, c2y: number, x: number, y: number) : CurvePath {

		const curve = new CubicBezierCurve(
			this.currentPoint.clone(),
			new Point(c1x, c1y),
			new Point(c2x, c2y),
			new Point(x, y)
		);

		this.currentPoint.set(x, y);

		return this.add(curve);

	}

	public closePath() : CurvePath {

		const curve = new CloseCurve();

		return this.add(curve);

	}

	public fromString(string: string) : CurvePath {

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

	public toPoints(divisions?: number) : Point[] {
		let pp; // Previous point.
		return this.mapCurves(curve => curve.getPoints(divisions)).flat().filter((p, i, array) => {
			pp = array[i - 1];
			if (!pp){
				return true;
			}
			return !p.isEqual(pp);
		});
	}

	public containsPoint(point: Point, divisions?: number) : boolean {

		const {x, y} = point;
		const polygon = this.mapCurves(curve => curve.getPoints(divisions)).flat();
		let contains = false, intersects, i, j, xi, yi, xj, yj;

		for (i = 0, j = polygon.length - 1; i < polygon.length; j = i++){
			xi = polygon[i].x;
			yi = polygon[i].y;
			xj = polygon[j].x;
			yj = polygon[j].y;
			intersects = ((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
			if (intersects){
				contains = !contains;
			}
		}

		return contains;

	}

	public eachCurve(callback: (v: any, i: number, a: any[]) => void) : CurvePath {
		this.curves.forEach(callback);
		return this;
	}

	public mapCurves(callback) : any[] {
		return this.curves.map(callback);
	}

}

export {
	CurvePath
};
