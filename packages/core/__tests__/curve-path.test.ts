import {
	Point,
	BBox,
	CurvePath,
	MoveCurve,
	LineCurve,
	HorizontalLineCurve,
	VerticalLineCurve,
	QuadraticBezierCurve,
	CubicBezierCurve,
	SmoothQuadraticBezierCurve,
	SmoothCubicBezierCurve,
	ArcCurve,
	CloseCurve
} from '../src/maths';

describe('CurvePath', () => {
	test('should handle fromString and toString methods', () => {
		const path = new CurvePath();
		path.moveTo(10, 20);
		path.lineTo(30, 40);
		const str = path.toString();
		const newPath = new CurvePath();
		newPath.fromString(str);
		expect(newPath.length).toBe(2);
	});

	test('should update bounding box', () => {
		const path = new CurvePath();
		path.moveTo(0, 0);
		path.lineTo(10, 10);
		path.updateBBox();
		expect(path.getBBox()).toBeInstanceOf(BBox);
	});

	test('should handle curve intersection', () => {
		const path1 = new CurvePath();
		const path2 = new CurvePath();
		path1.moveTo(0, 0);
		path1.lineTo(10, 10);
		path2.moveTo(10, 10);
		path2.lineTo(20, 20);
		expect(path1.intersects(path2)).toBe(true);
	});

	test('should handle containsPoint', () => {
		const path = new CurvePath();
		path.moveTo(0, 0);
		path.lineTo(10, 0);
		path.lineTo(10, 10);
		path.lineTo(0, 10);
		path.closePath();
		expect(path.containsPoint(new Point(5, 5))).toBe(true);
		expect(path.containsPoint(new Point(15, 15))).toBe(false);
	});
});
