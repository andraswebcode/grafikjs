import {
	Shape
} from './shape';
import {
	Point
} from './../maths';

class Ellipse extends Shape {

	protected readonly tagName = 'ellipse';
	private rx = 0;
	private ry = 0;
	private cx = 0;
	private cy = 0;

	public constructor(params?){
		super();
		this.init(params);
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'rx',
			'ry',
			'cx',
			'cy'
		]);
	}

	protected updateOthersWithKeys(keys: string[]){

		if (keys.includes('rx') || keys.includes('ry')){
			this.updateBBox();
			this.cx = this.rx;
			this.cy = this.ry;
		}

		return this;

	}

	public updateBBox(){
		this.bBox.fromSizeAndOrigin(new Point(this.rx, this.ry).multiplyScalar(2), this.origin);
		return this;
	}

}

export {
	Ellipse
};
