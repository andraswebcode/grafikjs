import {
	Shape
} from './shape';
import {
	Point,
	CurvePath
} from './../maths';
import {
	PathControl
} from './../controls';

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
		})).setControl('path');
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'd'
		]);
	}

	protected updateOthersWithKeys(keys){

		if (keys.includes('d')){
			this.path.fromString(this.d);
			this.getControl('path').setNodes();
		}

		return this;

	}

	public updateBBox(){
		this.bBox.fromPoints([]);
		return this;
	}

}

export {
	Path
};
