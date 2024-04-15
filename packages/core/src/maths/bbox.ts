import {
	BBoxObject
} from './../types/math';
import {
	Point
} from './point';

class BBox implements BBoxObject {

	public min: Point;
	public max: Point;

	constructor(min: Point = new Point(), max: Point = new Point()){
		this.min = min;
		this.max = max;
	}

	public copy(color: BBox) : BBox {
		return this;
	}

	public clone() : BBox {
		return new BBox().copy(this);
	}

}

export {
	BBox
};
