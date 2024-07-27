import { Matrix } from '../src/maths/matrix';

describe('Matrix', () => {
	test('should translate matrix', () => {
		const m = new Matrix();
		m.translate(10, 20);
		expect(m.tx).toBe(10);
		expect(m.ty).toBe(20);
	});

	test('should rotate matrix', () => {
		const m = new Matrix();
		m.rotate(90);
		expect(m.a).toBeCloseTo(0);
		expect(m.b).toBeCloseTo(1);
		expect(m.c).toBeCloseTo(-1);
		expect(m.d).toBeCloseTo(0);
	});

	test('should scale matrix', () => {
		const m = new Matrix();
		m.scale(2, 3);
		expect(m.a).toBe(2);
		expect(m.d).toBe(3);
	});

	test('should scaleX matrix', () => {
		const m = new Matrix();
		m.scaleX(2);
		expect(m.a).toBe(2);
		expect(m.d).toBe(1);
	});

	test('should scaleY matrix', () => {
		const m = new Matrix();
		m.scaleY(3);
		expect(m.a).toBe(1);
		expect(m.d).toBe(3);
	});

	test('should skewX matrix', () => {
		const m = new Matrix();
		m.skewX(45);
		expect(m.a).toBeCloseTo(1);
		expect(m.b).toBeCloseTo(0);
		expect(m.c).toBeCloseTo(1);
		expect(m.d).toBeCloseTo(1);
	});

	test('should skewY matrix', () => {
		const m = new Matrix();
		m.skewY(45);
		expect(m.a).toBeCloseTo(1);
		expect(m.b).toBeCloseTo(1);
		expect(m.c).toBeCloseTo(0);
		expect(m.d).toBeCloseTo(1);
	});

	test('should multiply matrix', () => {
		const m1 = new Matrix([1, 2, 3, 4, 5, 6]);
		const m2 = new Matrix([7, 8, 9, 10, 11, 12]);
		const result = m1.multiply(m2);
		expect(result.a).toBe(31);
		expect(result.b).toBe(46);
		expect(result.c).toBe(39);
		expect(result.d).toBe(58);
		expect(result.tx).toBe(52);
		expect(result.ty).toBe(76);
	});

	test('should invert matrix', () => {
		const m = new Matrix([1, 2, 3, 4, 5, 6]);
		m.invert();
		expect(m.a).toBeCloseTo(-2);
		expect(m.b).toBeCloseTo(1);
		expect(m.c).toBeCloseTo(1.5);
		expect(m.d).toBeCloseTo(-0.5);
		expect(m.tx).toBeCloseTo(1);
		expect(m.ty).toBeCloseTo(-2);
	});
});
