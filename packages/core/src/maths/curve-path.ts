import { Point } from './point';
import { BBox } from './bbox';
import {
	MoveCurve,
	CloseCurve,
	LineCurve,
	VerticalLineCurve,
	HorizontalLineCurve,
	QuadraticBezierCurve,
	CubicBezierCurve,
	SmoothQuadraticBezierCurve,
	SmoothCubicBezierCurve,
	ArcCurve
} from './curves';
import { toFixed, parsePath } from './../utils';

const CURVES = {
	M: MoveCurve,
	L: LineCurve,
	V: VerticalLineCurve,
	H: HorizontalLineCurve,
	Q: QuadraticBezierCurve,
	C: CubicBezierCurve,
	T: SmoothQuadraticBezierCurve,
	S: SmoothCubicBezierCurve,
	A: ArcCurve,
	Z: CloseCurve
};

const _axis = new Point();

// Function to project a polygon onto an axis. Thanks ChatGPT! :-)
function _project(
	points: Point[],
	axis: Point
): {
	min: number;
	max: number;
} {
	let min = Infinity,
		max = -Infinity,
		i,
		point,
		dot;

	for (i = 0; i < points.length; i++) {
		point = points[i];
		dot = point.dot(axis);
		min = Math.min(min, dot);
		max = Math.max(max, dot);
	}

	return { min, max };
}

// Function to check if an edge separates two polygons. Thanks ChatGPT! :-)
function _separate(points1: Point[], points2: Point[], axis: Point): boolean {
	const project1 = _project(points1, axis);
	const project2 = _project(points2, axis);

	return project1.max < project2.min || project2.max < project1.min;
}

class CurvePath {
	private _curves: object[] = [];
	private _currentCommand = '';
	private _currentPoint = new Point();
	private _currentControlPoint = new Point();
	private _bBox = new BBox();

	public constructor(curves?: any | any[]) {
		if (curves) {
			this.set(curves);
		}
	}

	public get length() {
		return this._curves.length;
	}

	public at(index: number) {
		return this._curves[index];
	}

	public add(curves: any | any[]): CurvePath {
		curves = Array.isArray(curves) ? curves : [curves];

		this._curves.push(...curves);

		return this;
	}

	public remove(curves: any | any[]): CurvePath {
		curves = Array.isArray(curves) ? curves : [curves];

		this._curves = this._curves.filter((c) => !curves.includes(c));

		return this;
	}

	public set(curves: any | any[]): CurvePath {
		this._curves = [];

		return this.add(curves);
	}

	public moveTo(x: number, y: number): CurvePath {
		const curve = new MoveCurve(new Point(x, y));

		this._currentPoint.set(x, y);
		this._currentCommand = 'M';

		return this.add(curve);
	}

	public lineTo(x: number, y: number): CurvePath {
		const curve = new LineCurve(this._currentPoint.clone(), new Point(x, y));

		this._currentPoint.set(x, y);
		this._currentCommand = 'L';

		return this.add(curve);
	}

	public horizontalLineTo(x: number): CurvePath {
		const cp = this._currentPoint.clone();
		const curve = new HorizontalLineCurve(cp, new Point(x, cp.y));

		this._currentPoint.setX(x);
		this._currentCommand = 'H';

		return this.add(curve);
	}

	public verticalLineTo(y: number): CurvePath {
		const cp = this._currentPoint.clone();
		const curve = new VerticalLineCurve(cp, new Point(cp.x, y));

		this._currentPoint.setY(y);
		this._currentCommand = 'V';

		return this.add(curve);
	}

	public quadraticCurveTo(cx: number, cy: number, x: number, y: number): CurvePath {
		const curve = new QuadraticBezierCurve(
			this._currentPoint.clone(),
			new Point(cx, cy),
			new Point(x, y)
		);

		this._currentPoint.set(x, y);
		this._currentControlPoint.set(cx, cy);
		this._currentCommand = 'Q';

		return this.add(curve);
	}

	public smoothQuadraticCurveTo(x: number, y: number): CurvePath {
		if (this._currentCommand !== 'T' && this._currentCommand !== 'Q') {
			console.warn(
				'The previous method must be an other smoothQuadraticCurveTo(), or a quadraticCurveTo().'
			);
		}

		const cPoint = this._currentPoint
			.clone()
			.multiplyScalar(2)
			.subtract(this._currentControlPoint);
		const curve = new SmoothQuadraticBezierCurve(
			this._currentPoint.clone(),
			cPoint,
			new Point(x, y)
		);

		this._currentPoint.set(x, y);
		this._currentControlPoint.copy(cPoint);
		this._currentCommand = 'T';

		return this.add(curve);
	}

	public cubicCurveTo(
		c1x: number,
		c1y: number,
		c2x: number,
		c2y: number,
		x: number,
		y: number
	): CurvePath {
		const curve = new CubicBezierCurve(
			this._currentPoint.clone(),
			new Point(c1x, c1y),
			new Point(c2x, c2y),
			new Point(x, y)
		);

		this._currentPoint.set(x, y);
		this._currentControlPoint.set(c2x, c2y);
		this._currentCommand = 'C';

		return this.add(curve);
	}

	public smoothCubicCurveTo(cx: number, cy: number, x: number, y: number): CurvePath {
		if (this._currentCommand !== 'S' && this._currentCommand !== 'C') {
			console.warn(
				'The previous method must be an other smoothCubicCurveTo(), or a cubicCurveTo().'
			);
		}

		const cPoint = this._currentPoint
			.clone()
			.multiplyScalar(2)
			.subtract(this._currentControlPoint);
		const curve = new SmoothCubicBezierCurve(
			this._currentPoint.clone(),
			cPoint,
			new Point(cx, cy),
			new Point(x, y)
		);

		this._currentPoint.set(x, y);
		this._currentControlPoint.copy(cPoint);
		this._currentCommand = 'S';

		return this;
	}

	public arcTo(
		rx: number,
		ry: number,
		xAxisRotation: number,
		largeArcFlag: number,
		sweepFlag: number,
		x: number,
		y: number
	): CurvePath {
		const curve = new ArcCurve(
			this._currentPoint.clone(),
			rx,
			ry,
			xAxisRotation,
			largeArcFlag,
			sweepFlag,
			new Point(x, y)
		);

		this._currentPoint.set(x, y);
		this._currentCommand = 'A';

		return this.add(curve);
	}

	public closePath(): CurvePath {
		const curve = new CloseCurve();
		this._currentCommand = 'Z';

		return this.add(curve);
	}

	public fromString(string: string): CurvePath {
		const curves = parsePath(string).map((curve, i, array) => {
			const command = (curve[0] || '').toUpperCase();
			const Curve = CURVES[command];
			return new Curve().fromArray(curve, i, array);
		});

		return this.set(curves);
	}

	public toString(): string {
		// @ts-ignore
		return this._curves.map((curve) => curve.toString(' ')).join(' ');
	}

	// Parses points attribute of polyline, or polygon.
	public fromNumbers(numbers: string): CurvePath {
		// @ts-ignore
		const nums = numbers
			.replace(/\,\s?/g, ' ')
			.split(' ')
			.map((n) => toFixed(n));
		const curves: LineCurve[] = [];

		for (let i = 0; i < nums.length; i += 2) {
			curves.push(
				new LineCurve(
					new Point(nums[i], nums[i + 1]),
					new Point(nums[(i + 2) % nums.length], nums[(i + 3) % nums.length])
				)
			);
		}

		return this.set(curves);
	}

	// Makes points attribute for polyline, or polygon.
	public toNumbers(): string {
		return this.mapCurves((curve) => {
			if (curve instanceof LineCurve) {
				return curve.p0.toString();
			}
		})
			.filter((str) => !!str)
			.join(' ');
	}

	public toPoints(divisions?: number): Point[] {
		let pp; // Previous point.
		return this.mapCurves((curve) => curve.getPoints(divisions))
			.flat()
			.filter((p, i, array) => {
				pp = array[i - 1];
				if (!pp) {
					return true;
				}
				return !p.isEqual(pp);
			});
	}

	public updateBBox(): CurvePath {
		this._bBox.flip();
		return this.eachCurve((curve) => {
			this._bBox.union(curve.updateBBox().getBBox());
		});
	}

	public getBBox(): BBox {
		return this._bBox;
	}

	public adjust(): CurvePath {
		const { x, y } = this._bBox.min;
		this.eachCurve((curve) => {
			curve.translate(-x, -y);
		});
		return this;
	}

	// Thanks ChatGPT to help implementing the raycasting algorithm! :-)
	public containsPoint(point: Point, divisions?: number): boolean {
		const { x, y } = point;
		const polygon = this.toPoints(divisions);
		let contains = false,
			intersects,
			i,
			j,
			xi,
			yi,
			xj,
			yj;

		for (i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
			xi = polygon[i].x;
			yi = polygon[i].y;
			xj = polygon[j].x;
			yj = polygon[j].y;
			intersects = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
			if (intersects) {
				contains = !contains;
			}
		}

		return contains;
	}

	// Thanks ChatGPT to help implementing the Separating Axis Theorem (SAT) algorithm! :-)
	public intersects(curvePath: CurvePath, divisions?: number): boolean {
		const points1 = this.toPoints(divisions);
		const points2 = curvePath.toPoints(divisions);
		const p1Length = points1.length;
		const p2Length = points2.length;
		let i, point, next, x, y;

		for (i = 0; i < p1Length; i++) {
			point = points1[i];
			next = points1[(i + 1) % p1Length];
			_axis.copy(next).subtract(point);
			x = _axis.x;
			y = _axis.y;
			if (_separate(points1, points2, _axis.set(-y, x))) {
				return false;
			}
		}

		for (i = 0; i < p2Length; i++) {
			point = points2[i];
			next = points2[(i + 1) % p2Length];
			_axis.copy(next).subtract(point);
			x = _axis.x;
			y = _axis.y;
			if (_separate(points1, points2, _axis.set(-y, x))) {
				return false;
			}
		}

		return true;
	}

	public eachCurve(callback: (v: any, i: number, a: any[]) => void): CurvePath {
		this._curves.forEach(callback);
		return this;
	}

	public mapCurves(callback): any[] {
		return this._curves.map(callback);
	}
}

export { CurvePath };
