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

	public readonly isCanvas = true;
	protected readonly tagName = 'svg';
	protected readonly xmlns = 'http://www.w3.org/2000/svg';
	protected width = 0;
	protected height = 0;
	protected viewBox:ViewBoxArray;
	protected viewportMatrix = new Matrix();

	public constructor(params = {}){
		super();
		this.set(params);
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
