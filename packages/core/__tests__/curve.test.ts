import {
	Point,
	BBox,
	Curve,
	LineCurve,
	QuadraticBezierCurve,
	CubicBezierCurve
} from '../src/maths';

class TestCurve extends Curve {
	constructor() {
		super();
		this.command = 'T';
	}

	public getPoint(t: number): Point {
		// For testing, return a point based on the parameter t
		return new Point(t, t);
	}
}

describe('Curve', () => {
	test('should initialize with default bbox', () => {
		const curve = new TestCurve();
		expect(curve.getBBox()).toBeInstanceOf(BBox);
	});

	test('should update bbox', () => {
		const curve = new TestCurve();
		curve.updateBBox();
		expect(curve.getBBox()).toBeInstanceOf(BBox);
	});

	test('should translate points', () => {
		const curve = new LineCurve(new Point(0, 0), new Point(1, 1));
		curve.translate(10, 20);
		expect(curve.p0.x).toBe(10);
		expect(curve.p0.y).toBe(20);
		expect(curve.p1.x).toBe(11);
		expect(curve.p1.y).toBe(21);
	});

	test('should convert to and from array', () => {
		const curve = new QuadraticBezierCurve(new Point(0, 0), new Point(1, 1), new Point(2, 2));
		const curveFromArray = new QuadraticBezierCurve();
		curveFromArray.fromArray(['Q', 0, 0, 1, 1, 2, 2], new Point(0, 0));
		expect(curveFromArray.p0).toEqual(curve.p0);
		expect(curveFromArray.p1).toEqual(curve.p1);
		expect(curveFromArray.p2).toEqual(curve.p2);
	});

	test('should handle string conversion', () => {
		const curve = new CubicBezierCurve(
			new Point(0, 0),
			new Point(1, 1),
			new Point(2, 2),
			new Point(3, 3)
		);
		const str = curve.toString();
		expect(str).toBe('C 0 0 1 1 2 2');
		const newCurve = new CubicBezierCurve();
		newCurve.fromArray(['C', 0, 0, 1, 1, 2, 2], new Point(0, 0));
		expect(newCurve.toString()).toBe(str);
	});
});
