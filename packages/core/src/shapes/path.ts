import {
	Shape
} from './shape';
import {
	CurveChain
} from './../maths';

class Path extends Shape {

	protected readonly tagName = 'path';
	private d: string;

	private path = new CurveChain();

	constructor(params?){
		super();
		this.init(params);
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'd'
		]);
	}

	protected updateOthersWithKeys(keys){

		if (keys.includes('d')){
			this.path.fromString(this.d);
		}

		return this;

	}

}

export {
	Path
};
