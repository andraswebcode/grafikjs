import {
	Shape
} from './shape';
import {
	CurvePath
} from './../maths';

class Polyline extends Shape {

	protected tagName = 'polyline';
	protected points: string;

	private path = new CurvePath();

	public constructor(params?){
		super();
		this.init(params);
	}

	public getAttributes() : object {
		const defaultAttributes = super.getAttributes();
		return {
			...defaultAttributes,
			points:this.path.toNumbers()
		};
	}

	protected updateOthersWithKeys(keys){

		if (keys.includes('points')){
			this.path.fromNumbers(this.points);
			this.updateBBox();
		}

		return this;

	}

	public updateBBox(){
		this.bBox.copy(this.path.updateBBox().updateOrigin(this.origin).getBBox());
		// this.origin.copy(this.bBox.getOrigin());
		return this;
	}

}

export {
	Polyline
};
