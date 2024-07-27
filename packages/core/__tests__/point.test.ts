import { Point, Matrix } from '../src/maths';

describe('Point', () => {
	test('should create a default point', () => {
		const point = new Point();
		expect(point.x).toBe(0);
		expect(point.y).toBe(0);
	});

	test('should create a point with specific coordinates', () => {
		const point = new Point(1, 2);
		expect(point.x).toBe(1);
		expect(point.y).toBe(2);
	});

	test('should set point coordinates', () => {
		const point = new Point();
		point.set(3, 4);
		expect(point.x).toBe(3);
		expect(point.y).toBe(4);
	});

	test('should set point x coordinate', () => {
		const point = new Point();
		point.setX(5);
		expect(point.x).toBe(5);
	});

	test('should set point y coordinate', () => {
		const point = new Point();
		point.setY(6);
		expect(point.y).toBe(6);
	});

	test('should create a point from an object', () => {
		const point = new Point();
		point.fromObject({ x: 7, y: 8 });
		expect(point.x).toBe(7);
		expect(point.y).toBe(8);
	});

	test('should convert a point to an object', () => {
		const point = new Point(9, 10);
		const obj = point.toObject();
		expect(obj).toEqual({ x: 9, y: 10 });
	});

	test('should create a point from a string', () => {
		const point = new Point();
		point.fromString('11, 12');
		expect(point.x).toBe(11);
		expect(point.y).toBe(12);
	});

	test('should convert a point to a string', () => {
		const point = new Point(13, 14);
		const str = point.toString();
		expect(str).toBe('13 14');
	});

	test('should add another point', () => {
		const point = new Point(1, 2);
		point.add(new Point(3, 4));
		expect(point.x).toBe(4);
		expect(point.y).toBe(6);
	});

	test('should add a scalar', () => {
		const point = new Point(1, 2);
		point.addScalar(3);
		expect(point.x).toBe(4);
		expect(point.y).toBe(5);
	});

	test('should add two points', () => {
		const point = new Point();
		point.addPoints(new Point(1, 2), new Point(3, 4));
		expect(point.x).toBe(4);
		expect(point.y).toBe(6);
	});

	test('should subtract another point', () => {
		const point = new Point(5, 6);
		point.subtract(new Point(1, 2));
		expect(point.x).toBe(4);
		expect(point.y).toBe(4);
	});

	test('should subtract a scalar', () => {
		const point = new Point(5, 6);
		point.subtractScalar(2);
		expect(point.x).toBe(3);
		expect(point.y).toBe(4);
	});

	test('should subtract two points', () => {
		const point = new Point();
		point.subtractPoints(new Point(5, 6), new Point(1, 2));
		expect(point.x).toBe(4);
		expect(point.y).toBe(4);
	});

	test('should multiply another point', () => {
		const point = new Point(2, 3);
		point.multiply(new Point(4, 5));
		expect(point.x).toBe(8);
		expect(point.y).toBe(15);
	});

	test('should multiply a scalar', () => {
		const point = new Point(2, 3);
		point.multiplyScalar(4);
		expect(point.x).toBe(8);
		expect(point.y).toBe(12);
	});

	test('should multiply two points', () => {
		const point = new Point();
		point.multiplyPoints(new Point(2, 3), new Point(4, 5));
		expect(point.x).toBe(8);
		expect(point.y).toBe(15);
	});

	test('should divide by another point', () => {
		const point = new Point(8, 15);
		point.divide(new Point(2, 3));
		expect(point.x).toBe(4);
		expect(point.y).toBe(5);
	});

	test('should divide by a scalar', () => {
		const point = new Point(8, 15);
		point.divideScalar(2);
		expect(point.x).toBe(4);
		expect(point.y).toBe(7.5);
	});

	test('should divide two points', () => {
		const point = new Point();
		point.dividePoints(new Point(8, 15), new Point(2, 3));
		expect(point.x).toBe(4);
		expect(point.y).toBe(5);
	});

	test('should linearly interpolate between two points', () => {
		const point = new Point(1, 1);
		point.lerp(new Point(3, 3), 0.5);
		expect(point.x).toBe(2);
		expect(point.y).toBe(2);
	});

	test('should linearly interpolate between two points using static method', () => {
		const point = new Point();
		point.lerpPoints(new Point(1, 1), new Point(3, 3), 0.5);
		expect(point.x).toBe(2);
		expect(point.y).toBe(2);
	});

	test('should bilinearly interpolate between two points', () => {
		const point = new Point(1, 1);
		point.bilerp(new Point(3, 3), new Point(0.5, 0.5));
		expect(point.x).toBe(2);
		expect(point.y).toBe(2);
	});

	test('should bilinearly interpolate between two points using static method', () => {
		const point = new Point();
		point.bilerpPoints(new Point(1, 1), new Point(3, 3), new Point(0.5, 0.5));
		expect(point.x).toBe(2);
		expect(point.y).toBe(2);
	});

	test('should rotate a point around a center', () => {
		const point = new Point(1, 0);
		point.rotate(new Point(0, 0), 90);
		expect(point.x).toBeCloseTo(0);
		expect(point.y).toBeCloseTo(1);
	});

	test('should calculate the angle to another point', () => {
		const point = new Point(0, 0);
		const angle = point.angleTo(new Point(1, 1));
		expect(angle).toBeCloseTo(45);
	});

	test('should calculate the distance to another point', () => {
		const point = new Point(0, 0);
		const distance = point.distanceTo(new Point(3, 4));
		expect(distance).toBe(5);
	});

	test('should calculate the dot product with another point', () => {
		const point = new Point(1, 2);
		const dot = point.dot(new Point(3, 4));
		expect(dot).toBe(11);
	});

	test('should transform a point by a matrix', () => {
		const point = new Point(1, 1);
		const matrix = new Matrix([1, 0, 0, 1, 2, 3]);
		point.transform(matrix);
		expect(point.x).toBe(3);
		expect(point.y).toBe(4);
	});

	test('should find the minimum of two points', () => {
		const point = new Point(5, 6);
		point.min(new Point(3, 8));
		expect(point.x).toBe(3);
		expect(point.y).toBe(6);
	});

	test('should find the minimum of two points using static method', () => {
		const point = new Point();
		point.minPoints(new Point(5, 6), new Point(3, 8));
		expect(point.x).toBe(3);
		expect(point.y).toBe(6);
	});

	test('should find the maximum of two points', () => {
		const point = new Point(5, 6);
		point.max(new Point(3, 8));
		expect(point.x).toBe(5);
		expect(point.y).toBe(8);
	});

	test('should find the maximum of two points using static method', () => {
		const point = new Point();
		point.maxPoints(new Point(5, 6), new Point(3, 8));
		expect(point.x).toBe(5);
		expect(point.y).toBe(8);
	});

	test('should return the absolute value of a point', () => {
		const point = new Point(-3, -4);
		point.abs();
		expect(point.x).toBe(3);
		expect(point.y).toBe(4);
	});

	test('should negate a point', () => {
		const point = new Point(3, 4);
		point.negate();
		expect(point.x).toBe(-3);
		expect(point.y).toBe(-4);
	});

	test('should round a point', () => {
		const point = new Point(3.6, 4.3);
		point.round();
		expect(point.x).toBe(4);
		expect(point.y).toBe(4);
	});

	test('should ceil a point', () => {
		const point = new Point(3.6, 4.3);
		point.ceil();
		expect(point.x).toBe(4);
		expect(point.y).toBe(5);
	});

	test('should floor a point', () => {
		const point = new Point(3.6, 4.3);
		point.floor();
		expect(point.x).toBe(3);
		expect(point.y).toBe(4);
	});

	test('should clamp a point', () => {
		const point = new Point(10, -5);
		point.clamp(new Point(0, 0), new Point(5, 5));
		expect(point.x).toBe(5);
		expect(point.y).toBe(0);
	});

	test('should check if two points are equal', () => {
		const point1 = new Point(3, 4);
		const point2 = new Point(3, 4);
		const point3 = new Point(5, 6);
		expect(point1.isEqual(point2)).toBe(true);
		expect(point1.isEqual(point3)).toBe(false);
	});

	test('should copy another point', () => {
		const point = new Point();
		point.copy(new Point(3, 4));
		expect(point.x).toBe(3);
		expect(point.y).toBe(4);
	});

	test('should clone a point', () => {
		const point1 = new Point(3, 4);
		const point2 = point1.clone();
		expect(point2.x).toBe(3);
		expect(point2.y).toBe(4);
		expect(point1).not.toBe(point2);
	});
});
