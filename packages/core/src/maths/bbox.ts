import {
	Point,
	Matrix
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

		this.reset();

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
		return this;
	}

	public reset() : BBox {
		this.min.set(0, 0);
		this.max.set(0, 0);
		return this;
	}

	public isEqual(bBox: BBox) : boolean {
		return (this.min.isEqual(bBox.min) && this.max.isEqual(bBox.max));
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
