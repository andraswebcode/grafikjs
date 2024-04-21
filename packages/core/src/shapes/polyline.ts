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

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'points'
		]);
	}

	protected updateOthersWithKeys(keys){

		if (keys.includes('points')){
			this.path.fromString(this.points);
		}

		return this;

	}

}

export {
	Polyline
};
