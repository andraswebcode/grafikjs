import {
	Shape
} from './shape';
import {
	Point,
	CurvePath
} from './../maths';
import {
	PathControl
} from './../interactive';

class Path extends Shape {

	protected readonly tagName = 'path';
	private d: string;

	private path = new CurvePath();

	public constructor(params?){
		super();
		this.init(params);
		this.addControl('path', new PathControl({
			shape:this,
			path:this.path
		}));
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'd'
		]);
	}

	protected updateOthersWithKeys(keys){

		if (keys.includes('d')){
			this.path.fromString(this.d);
			this.updateBBox();
		}

		return this;

	}

	public updateBBox(){
		this.bBox.fromPoints(this.path.toPoints());
		this.origin.copy(this.bBox.getOrigin());
		return this;
	}

}

export {
	Path
};
