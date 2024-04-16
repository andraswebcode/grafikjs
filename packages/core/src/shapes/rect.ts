import {
	Shape
} from './shape';
import {
	Point
} from './../maths';

class Rect extends Shape {

	protected readonly tagName = 'rect';
	private width = 0;
	private height = 0;

	constructor(params){
		super();
		this.init(params);
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'width',
			'height'
		]);
	}

	public set(key, value?){
		super.set(key, value);
		if (key === 'width' || key === 'height'){
			this.updateBBox();
		}
		return this;
	}

	public updateBBox(){
		this.bBox.fromSizeAndOrigin(new Point(this.width, this.height), this.origin);
		return this;
	}

}

export {
	Rect
};
