// src/__tests__/BBox.test.ts
import { BBox, Point, Matrix } from '../src/maths';

describe('BBox', () => {
	test('should create default BBox', () => {
		const bbox = new BBox();
		expect(bbox.min).toEqual(new Point());
		expect(bbox.max).toEqual(new Point());
	});

	test('should create BBox from points', () => {
		const min = new Point(1, 2);
		const max = new Point(3, 4);
		const bbox = new BBox(min, max);
		expect(bbox.min).toEqual(min);
		expect(bbox.max).toEqual(max);
	});

	test('should create BBox from size and origin', () => {
		const size = new Point(4, 6);
		const origin = new Point(0.5, 0.5);
		const bbox = new BBox().fromSizeAndOrigin(size, origin);
		expect(bbox.min).toEqual(new Point(-2, -3));
		expect(bbox.max).toEqual(new Point(2, 3));
	});

	test('should create BBox from points array', () => {
		const points = [new Point(1, 2), new Point(3, 4), new Point(-1, -2)];
		const bbox = new BBox().fromPoints(points);
		expect(bbox.min).toEqual(new Point(-1, -2));
		expect(bbox.max).toEqual(new Point(3, 4));
	});

	test('should expand BBox by point', () => {
		const bbox = new BBox(new Point(1, 1), new Point(3, 3));
		bbox.expandByPoint(new Point(4, 4));
		expect(bbox.max).toEqual(new Point(4, 4));
	});

	test('should get BBox size', () => {
		const bbox = new BBox(new Point(1, 2), new Point(4, 6));
		const size = bbox.getSize();
		expect(size).toEqual(new Point(3, 4));
	});

	test('should get BBox origin', () => {
		const bbox = new BBox(new Point(1, 1), new Point(5, 5));
		const origin = bbox.getOrigin();
		expect(origin).toEqual(new Point(0.5, 0.5));
	});

	test('should get BBox line edges', () => {
		const bbox = new BBox(new Point(1, 1), new Point(5, 5));
		const edges = bbox.getLineEdges();
		expect(edges).toEqual([new Point(1, 5), new Point(5, 5), new Point(5, 1), new Point(1, 1)]);
	});
	/*
	This is wrong, should be fixed...
	test('should get BBox polygon', () => {
		const bbox = new BBox(new Point(1, 1), new Point(5, 5));
		const polygon = bbox.toPolygon();
		const edges = bbox.getLineEdges();
		expect(polygon.length).toBe(5); // MoveCurve + 4 LineCurves
		expect(polygon.at(0).point).toEqual(edges[0]);
	});
	*/
	test('should check if BBox contains a point', () => {
		const bbox = new BBox(new Point(1, 1), new Point(5, 5));
		expect(bbox.contains(new Point(3, 3))).toBe(true);
		expect(bbox.contains(new Point(6, 6))).toBe(false);
	});

	test('should check if BBox intersects another BBox', () => {
		const bbox1 = new BBox(new Point(1, 1), new Point(5, 5));
		const bbox2 = new BBox(new Point(3, 3), new Point(7, 7));
		const bbox3 = new BBox(new Point(6, 6), new Point(8, 8));
		expect(bbox1.intersects(bbox2)).toBe(true);
		expect(bbox1.intersects(bbox3)).toBe(false);
	});

	test('should transform BBox by matrix', () => {
		const bbox = new BBox(new Point(1, 1), new Point(3, 3));
		const matrix = new Matrix().translate(2, 2);
		const transformedBBox = bbox.transform(matrix);
		expect(transformedBBox.min).toEqual(new Point(3, 3));
		expect(transformedBBox.max).toEqual(new Point(5, 5));
	});

	test('should translate BBox', () => {
		const bbox = new BBox(new Point(1, 1), new Point(3, 3));
		bbox.translate(2, 2);
		expect(bbox.min).toEqual(new Point(3, 3));
		expect(bbox.max).toEqual(new Point(5, 5));
	});

	test('should normalize BBox', () => {
		const bbox = new BBox(new Point(3, 3), new Point(1, 1));
		bbox.normalize();
		expect(bbox.min).toEqual(new Point(1, 1));
		expect(bbox.max).toEqual(new Point(3, 3));
	});

	test('should reset BBox', () => {
		const bbox = new BBox(new Point(1, 1), new Point(3, 3));
		bbox.reset();
		expect(bbox.min).toEqual(new Point(0, 0));
		expect(bbox.max).toEqual(new Point(0, 0));
	});

	test('should flip BBox', () => {
		const bbox = new BBox(new Point(1, 1), new Point(3, 3));
		bbox.flip();
		expect(bbox.min).toEqual(new Point(Infinity, Infinity));
		expect(bbox.max).toEqual(new Point(-Infinity, -Infinity));
	});

	test('should check if BBox is equal to another BBox', () => {
		const bbox1 = new BBox(new Point(1, 1), new Point(3, 3));
		const bbox2 = new BBox(new Point(1, 1), new Point(3, 3));
		const bbox3 = new BBox(new Point(2, 2), new Point(4, 4));
		expect(bbox1.isEqual(bbox2)).toBe(true);
		expect(bbox1.isEqual(bbox3)).toBe(false);
	});

	test('should check if BBox is empty', () => {
		const bbox1 = new BBox(new Point(1, 1), new Point(3, 3));
		const bbox2 = new BBox();
		expect(bbox1.isEmpty()).toBe(false);
		expect(bbox2.isEmpty()).toBe(true);
	});

	test('should intersect BBox with another BBox', () => {
		const bbox1 = new BBox(new Point(1, 1), new Point(5, 5));
		const bbox2 = new BBox(new Point(3, 3), new Point(7, 7));
		const intersection = bbox1.intersect(bbox2);
		expect(intersection.min).toEqual(new Point(3, 3));
		expect(intersection.max).toEqual(new Point(5, 5));
	});

	test('should union BBox with another BBox', () => {
		const bbox1 = new BBox(new Point(1, 1), new Point(3, 3));
		const bbox2 = new BBox(new Point(2, 2), new Point(4, 4));
		const union = bbox1.union(bbox2);
		expect(union.min).toEqual(new Point(1, 1));
		expect(union.max).toEqual(new Point(4, 4));
	});

	test('should copy BBox', () => {
		const bbox1 = new BBox(new Point(1, 1), new Point(3, 3));
		const bbox2 = new BBox();
		bbox2.copy(bbox1);
		expect(bbox2.min).toEqual(new Point(1, 1));
		expect(bbox2.max).toEqual(new Point(3, 3));
	});

	test('should clone BBox', () => {
		const bbox1 = new BBox(new Point(1, 1), new Point(3, 3));
		const bbox2 = bbox1.clone();
		expect(bbox2.min).toEqual(new Point(1, 1));
		expect(bbox2.max).toEqual(new Point(3, 3));
	});
});
