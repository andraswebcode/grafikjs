import {
	Shape
} from './shape';
import {
	Point
} from './../maths';

class Rect extends Shape {

	protected tagName = 'rect';
	private width = 0;
	private height = 0;

	public constructor(params?){
		super();
		this.init(params);
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'width',
			'height'
		]);
	}

	protected updateOthersWithKeys(keys){

		if (keys.includes('width') || keys.includes('height')){
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
