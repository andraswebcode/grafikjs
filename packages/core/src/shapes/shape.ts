import {
	Element
} from './../element';
import {
	Matrix,
	BBox,
	Point
} from './../maths';
import {
	FillStroke
} from './../types';

class Shape extends Element {

	public parent: object;
	public matrix: Matrix;
	public bBox: BBox;
	public origin: Point;

	public left = 0;
	public top = 0;
	public angle = 0;
	public scaleX = 0;
	public scaleY = 0;
	public skewX = 0;
	public skewY = 0;

	public fill: FillStroke = 'none';
	public stroke: FillStroke = 'black';
	public strokeWidth = 0;

	public init(params){
		this.set(params);
		this.matrix = new Matrix().fromOptions(this);
		this.bBox = new BBox();
		this.origin = new Point(0.5, 0.5);
	}

	public getAttributes() : object {
		const defaultAttributes = super.getAttributes();
		const x = 0;
		const y = 0;
		return {
			...defaultAttributes,
			transform:`translate(${x}, ${y})`
		};
	}

	public getWrapperAttributes() : object {
		return {
			transform:this.matrix.toCSS()
		};
	}

}

export {
	Shape
};
