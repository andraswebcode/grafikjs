import { Matrix } from '../src/maths/matrix';

describe('Matrix', () => {
	test('should create default matrix', () => {
		const m = new Matrix();
		expect(m.a).toBe(1);
		expect(m.b).toBe(0);
		expect(m.c).toBe(0);
		expect(m.d).toBe(1);
		expect(m.tx).toBe(0);
		expect(m.ty).toBe(0);
	});

	test('should create matrix from array', () => {
		const m = new Matrix([1, 2, 3, 4, 5, 6]);
		expect(m.a).toBe(1);
		expect(m.b).toBe(2);
		expect(m.c).toBe(3);
		expect(m.d).toBe(4);
		expect(m.tx).toBe(5);
		expect(m.ty).toBe(6);
	});

	test('should create matrix from object', () => {
		const obj = { a: 1, b: 2, c: 3, d: 4, tx: 5, ty: 6 };
		const m = new Matrix(obj);
		expect(m.a).toBe(1);
		expect(m.b).toBe(2);
		expect(m.c).toBe(3);
		expect(m.d).toBe(4);
		expect(m.tx).toBe(5);
		expect(m.ty).toBe(6);
	});

	test('should create matrix from options', () => {
		const options = {
			left: 10,
			top: 20,
			angle: 30,
			scaleX: 2,
			scaleY: 3,
			skewX: 10,
			skewY: 20
		};
		const m = new Matrix();
		m.fromOptions(options);
		expect(m.tx).toBeCloseTo(10);
		expect(m.ty).toBeCloseTo(20);
	});

	test('should create matrix from CSS string', () => {
		const css = 'matrix(1, 2, 3, 4, 5, 6)';
		const m = new Matrix(css);
		expect(m.a).toBe(1);
		expect(m.b).toBe(2);
		expect(m.c).toBe(3);
		expect(m.d).toBe(4);
		expect(m.tx).toBe(5);
		expect(m.ty).toBe(6);
	});

	test('should return matrix as array', () => {
		const m = new Matrix([1, 2, 3, 4, 5, 6]);
		expect(m.toArray()).toEqual([1, 2, 3, 4, 5, 6]);
	});

	test('should return matrix as object', () => {
		const m = new Matrix([1, 2, 3, 4, 5, 6]);
		expect(m.toObject()).toEqual({ a: 1, b: 2, c: 3, d: 4, tx: 5, ty: 6 });
	});

	test('should return matrix as options', () => {
		const m = new Matrix([1, 2, 3, 4, 5, 6]);
		const options = m.toOptions();
		expect(options.left).toBe(5);
		expect(options.top).toBe(6);
		expect(options.angle).toBeCloseTo(63.4349, 4); // angle in degrees
		expect(options.scaleX).toBeCloseTo(2.236, 3);
		expect(options.scaleY).toBeCloseTo(0.894, 3);
		expect(options.skewX).toBeCloseTo(0);
	});

	test('should return matrix as CSS string', () => {
		const m = new Matrix([1, 2, 3, 4, 5, 6]);
		expect(m.toCSS()).toBe('matrix(1, 2, 3, 4, 5, 6)');
	});

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

	test('should reset matrix', () => {
		const m = new Matrix([1, 2, 3, 4, 5, 6]);
		m.reset();
		expect(m.a).toBe(1);
		expect(m.b).toBe(0);
		expect(m.c).toBe(0);
		expect(m.d).toBe(1);
		expect(m.tx).toBe(0);
		expect(m.ty).toBe(0);
	});

	test('should copy matrix', () => {
		const m1 = new Matrix([1, 2, 3, 4, 5, 6]);
		const m2 = new Matrix();
		m2.copy(m1);
		expect(m2.a).toBe(1);
		expect(m2.b).toBe(2);
		expect(m2.c).toBe(3);
		expect(m2.d).toBe(4);
		expect(m2.tx).toBe(5);
		expect(m2.ty).toBe(6);
	});

	test('should clone matrix', () => {
		const m1 = new Matrix([1, 2, 3, 4, 5, 6]);
		const m2 = m1.clone();
		expect(m2.a).toBe(1);
		expect(m2.b).toBe(2);
		expect(m2.c).toBe(3);
		expect(m2.d).toBe(4);
		expect(m2.tx).toBe(5);
		expect(m2.ty).toBe(6);
	});
});
