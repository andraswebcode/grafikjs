import {
	Shape
} from './shape';
import {
	Point
} from './../maths';

class Circle extends Shape {

	protected readonly tagName = 'circle';
	private r = 0;

	constructor(params?){
		super();
		this.init(params);
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'r'
		]);
	}

	protected updateOthersWithKeys(keys: string[]){

		if (keys.includes('r')){
			this.updateBBox();
		}

		return this;

	}

	public updateBBox(){
		this.bBox.fromSizeAndOrigin(new Point().addScalar(this.r * 2), this.origin);
		return this;
	}

}

export {
	Circle
};
