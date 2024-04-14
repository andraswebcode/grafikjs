import {
	Shape
} from './shape';
import {
	ShapeObject
} from './../types/object';

class Rect extends Shape implements ShapeObject {

	public readonly tagName = 'rect';
	public readonly attrMap = [
		'width',
		'height',
		'fill',
		'stroke',
		'strokeWidth',
	];
	public width = 0;
	public height = 0;

	constructor(params){
		super();
		this.init(params);
	}

}

export {
	Rect
};
