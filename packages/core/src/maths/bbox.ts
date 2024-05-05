import {
	Point,
	Matrix,
	CurvePath,
	MoveCurve,
	LineCurve
} from './';
class BBox {

	public min: Point;
	public max: Point;

	public constructor(min: Point = new Point(), max: Point = new Point()){
		this.min = min;
		this.max = max;
	}

	public fromSizeAndOrigin(size: Point, origin: Point = new Point(0.5, 0.5)) : BBox {

		const mByOrigin = size.clone().multiply(origin).multiplyScalar(-1);

		this.min.copy(mByOrigin);
		this.max.copy(size.clone().add(mByOrigin));

		return this;

	}

	public fromPoints(points: Point[]) : BBox {

		this.flip();

		for (let i = 0; i < points.length; i++){
			this.expandByPoint(points[i]);
		}

		return this;

	}

	public expandByPoint(point: Point) : BBox {
		this.min.min(point);
		this.max.max(point);
		return this;
	}

	public getSize() : Point {
		return new Point().subtractPoints(this.max, this.min);
	}

	public getOrigin() : Point {
		return new Point().subtract(this.min).divide(this.getSize());
	}

	public getLineEdges(matrix?: Matrix) : Point[] {

		const minX = this.min.x;
		const minY = this.min.y;
		const maxX = this.max.x;
		const maxY = this.max.y;
		let tl = new Point(minX, maxY);
		let tr = new Point(maxX, maxY);
		let bl = new Point(minX, minY);
		let br = new Point(maxX, minY);

		if (matrix){
			tl = tl.transform(matrix);
			tr = tr.transform(matrix);
			bl = bl.transform(matrix);
			br = br.transform(matrix);
		}

		return [tl, tr, br, bl];

	}

	public toPolygon(matrix?: Matrix) : CurvePath {
		const [tl, tr, br, bl] = this.getLineEdges(matrix);
		return new CurvePath([
			new MoveCurve(tl),
			new LineCurve(tl, tr),
			new LineCurve(tr, br),
			new LineCurve(br, bl),
			new LineCurve(bl, tl)
		]);
	}

	public contains(point: Point) : boolean {
		return (
			point.x >= this.min.x && point.x <= this.max.x &&
			point.y >= this.min.y && point.y <= this.max.y
		);
	}

	public intersects(bBox: BBox) : boolean {
		return (
			bBox.max.x >= this.min.x &&
			bBox.min.x <= this.max.x &&
			bBox.max.y >= this.min.y &&
			bBox.min.y <= this.max.y
		);
	}

	public transform(matrix: Matrix) : BBox {
		const {tx, ty} = matrix;
		const edges = this.getLineEdges(matrix.clone().translate(0, 0));
		return this.fromPoints(edges).translate(tx, ty);
	}

	public translate(x: number, y: number) : BBox {
		const point = new Point(x, y);
		this.min.add(point);
		this.max.add(point);
		return this;
	}

	public reset() : BBox {
		this.min.set(0, 0);
		this.max.set(0, 0);
		return this;
	}

	public flip() : BBox {
		this.min.set(Infinity, Infinity);
		this.max.set(- Infinity, - Infinity);
		return this;
	}

	public isEqual(bBox: BBox) : boolean {
		return (this.min.isEqual(bBox.min) && this.max.isEqual(bBox.max));
	}

	public isEmpty() : boolean {
		return (this.min.isEqual(this.max));
	}

	public intersect(bBox: BBox) : BBox {
		this.min.max(bBox.min);
		this.max.min(bBox.max);
		return this;
	}

	public union(bBox: BBox) : BBox {
		this.min.min(bBox.min);
		this.max.max(bBox.max);
		return this;
	}

	public copy(bBox: BBox) : BBox {
		this.min.copy(bBox.min);
		this.max.copy(bBox.max);
		return this;
	}

	public clone() : BBox {
		return new BBox().copy(this);
	}

}

export {
	BBox
};
