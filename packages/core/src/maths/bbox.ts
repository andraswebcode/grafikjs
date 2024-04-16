import {
	Point
} from './point';

class BBox {

	private min: Point;
	private max: Point;

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

	public getSize() : Point {
		return new Point().subtractPoints(this.max, this.min);
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
