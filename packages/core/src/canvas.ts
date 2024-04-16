import {
	Element
} from './element';
import {
	Collection
} from './mixins';
import {
	Matrix
} from './maths';
import {
	ViewBoxArray
} from './types';

class Canvas extends Collection(Element) {

	public readonly tagName = 'svg';
	public readonly xmlns = 'http://www.w3.org/2000/svg';
	public width = 0;
	public height = 0;
	public viewBox:ViewBoxArray;
	public viewportMatrix:Matrix;

	public constructor(params){
		super();
		this.set(params);
		this.viewportMatrix = new Matrix();
	}

	protected getAttrMap() : string[] {
		return [
			'xmlns',
			'width',
			'height',
			'viewBox'
		];
	}

	public set(key, value?){
		super.set(key, value);
		this.setViewBox();
		return this;
	}

	public setViewBox(){
		this.viewBox = [0, 0, this.width, this.height];
	}

}

export {
	Canvas
};
