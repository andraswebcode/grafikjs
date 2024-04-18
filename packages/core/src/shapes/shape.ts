import {
	Element
} from './../element';
import {
	Matrix,
	BBox,
	Point
} from './../maths';
import {
	TransformControl
} from './../controls';
import {
	FillStroke,
	TransformObject
} from './../types';
import {
	uniqueId
} from './../utils';

class Shape extends Element {

	protected canvas = null;
	protected parent = null;
	protected id = '';
	protected matrix = new Matrix();
	protected bBox = new BBox();
	protected origin = new Point(0.5, 0.5);
	protected transformControl = new TransformControl();
	protected transformProps: string[] = [
		'left',
		'top',
		'angle',
		'scaleX',
		'scaleY',
		'skewX',
		'skewY'
	];

	protected left = 0;
	protected top = 0;
	protected angle = 0;
	protected scaleX = 1;
	protected scaleY = 1;
	protected skewX = 0;
	protected skewY = 0;

	protected fill: FillStroke = 'none';
	protected stroke: FillStroke = 'black';
	protected strokeWidth = 1;

	public init(params){
		this.set(params);
		this.id = uniqueId();
		this.updateMatrix();
		this.updateBBox();
	}

	public set(key, value?, silent = false){

		super.set(key, value, true);

		if (!key){
			return this;
		}

		const props = this.transformProps;

		// Check props if key is a string.
		if (typeof key === 'string'){
			if (props.includes(key)){
				this.updateMatrix();
			}
			if (!silent){
				this.trigger('set', {[key]:value});
			}
			return this;
		}

		let i, prop;

		// Also check props if key is an object.
		for (i = 0; i < props.length; i++){
			prop = props[i];
			if (prop in key){
				this.updateMatrix();
				if (!silent){
					this.trigger('set', key);
				}
				break;
			}
		}

		return this;

	}

	public setOrigin(x: number, y: number){
		this.origin.set(x, y);
		return this;
	}

	protected getAttrMap() : string[] {
		return [
			'fill',
			'stroke',
			'strokeWidth'
		];
	}

	public getAttributes() : object {
		const defaultAttributes = super.getAttributes();
		// @ts-ignore
		if (this.isCollection){
			return defaultAttributes;
		}
		const translate = this.bBox.getSize().multiply(this.origin).multiplyScalar(-1).toString();
		return {
			...defaultAttributes,
			transform:`translate(${translate})`
		};
	}

	public getWrapperAttributes() : object {
		return {
			id:this.id,
			transform:this.matrix.toCSS()
		};
	}

	public updateMatrix(){
		this.matrix.fromOptions(this.get(this.transformProps));
		return this;
	}

	protected updateBBox(){
		console.warn('updateBBox() must be implemented by subclass.')
		return this;
	}

	public getWorldMatrix() : Matrix {
		return new Matrix();
	}

}

export {
	Shape
};
