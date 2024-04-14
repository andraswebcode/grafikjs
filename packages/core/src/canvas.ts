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
	CanvasObject,
	ViewBoxArray
} from './types';

class Canvas extends Collection(Element) implements CanvasObject {

	public readonly tagName = 'svg';
	public readonly attrMap = [
		'width',
		'height',
		'viewBox'
	];
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

	public set(key, value?){
		super.set(key, value);
		this.setViewBox();
	}

	public setViewBox(){
		this.viewBox = [0, 0, this.width, this.height];
	}

}

export {
	Canvas
};
