import {
	Element
} from './../element';
import {
	Color,
	Matrix,
	BBox,
	Point
} from './../maths';
import {
	TransformControl
} from './../interactive';
import {
	FillStroke,
	TransformObject
} from './../types';

class Shape extends Element {

	public readonly isShape = true;
	public selectable = true;

	protected canvas;
	protected parent;
	protected matrix = new Matrix();
	protected bBox = new BBox();
	protected origin = new Point(0.5, 0.5);

	protected _controls = {};
	protected _activeControl: string;

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

	private _fill: string;
	private _stroke: string;
	private _defs: any = {};

	protected strokeWidth: number;
	protected opacity: number;

	get fill(){
		return this._fill;
	}

	set fill(value: any){
		if (this._defs.fill){
			this.canvas?.removeDefs(this._defs.fill);
		}
		if (Color.isColor(value)){
			this._fill = value;
			this._defs.fill = null;
		} else {
			value.shape = this;
			this.canvas?.addDefs(value);
			this._fill = `url(#${value.id})`;
			this._defs.fill = value;
		}
	}

	get stroke(){
		return this._stroke;
	}

	set stroke(value: any){
		if (this._defs.stroke){
			this.canvas?.removeDefs(this._defs.stroke);
		}
		if (Color.isColor(value)){
			this._stroke = value;
			this._defs.stroke = null;
		} else {
			value.shape = this;
			this.canvas?.addDefs(value);
			this._stroke = `url(#${value.id})`;
			this._defs.stroke = value;
		}
	}

	set originX(value: number){
		this.origin.x = value;
	}

	set originY(value: number){
		this.origin.y = value;
	}

	get originX(){
		return this.origin.x;
	}

	get originY(){
		return this.origin.y;
	}

	public init(params){
		this.set(params, true);
		this.createId(this.tagName);
		this.addControl('transform', new TransformControl({
			shape:this
		})).setControl('transform');
		this.updateMatrix();
		this.updateBBox();
		this.trigger('init', this);
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
			this.updateOthersWithKeys([key]);
			if (!silent){
				this.trigger('set', {[key]:value}, this);
				if (this.canvas){
					this.canvas.trigger('shapes:set', {[key]:value}, this);
				}
			}
		} else { // Check props if key is an object.
			let i, prop;
			for (i = 0; i < props.length; i++){
				prop = props[i];
				if (prop in key){
					this.updateMatrix();
					break;
				}
			}
			this.updateOthersWithKeys(Object.keys(key));
			// If key is an object, the 'value' represents the 'silent'.
			if (!value){
				this.trigger('set', key, this);
				if (this.canvas){
					this.canvas.trigger('shapes:set', key, this);
				}
			}
		}

		return this;

	}

	protected getAttrMap() : string[] {
		return [
			'fill',
			'stroke',
			'strokeWidth'
		];
	}

	protected updateOthersWithKeys(keys: string[]){
		return this;
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
		const attrs: any = {
			id:this.id,
			transform:this.matrix.toCSS()
		};
		if (this.className){
			attrs.className = this.className;
		}
		return attrs;
	}

	public addControl(name: string, control: any){
		if (name){
			this._controls[name] = control;
		}
		return this;
	}

	public getControl(name?: string){
		return this._controls[name || this._activeControl];
	}

	public setControl(name: string){
		this._activeControl = name;
		return this;
	}

	public updateMatrix(){
		this.matrix.fromOptions(this.get(this.transformProps));
		return this;
	}

	protected updateBBox(){
		console.warn('updateBBox() must be implemented by subclass.');
		return this;
	}

	public getWorldMatrix() : Matrix {
		const {
			viewportMatrix,
			isCanvas
		} = this.parent;
		return new Matrix().copy(isCanvas ? viewportMatrix : this.parent.getWorldMatrix()).multiply(this.matrix);
	}

	public getLocalPointer(e, matrix?: Matrix) : Point {
		const pointer = this.canvas.getPointer(e);
		return pointer.transform(matrix || this.getWorldMatrix().invert());
	}

	public toJSON() : object {

		const json: any = super.toJSON();
		const transform = this.transformProps.reduce((memo, prop) => {
			if (typeof this[prop] !== 'undefined'){
				memo[prop] = this[prop];
			}
			return memo;
		}, {});
		const defs = {};
		let key, def;

		for (key in this._defs){
			def = this._defs[key];
			if (def) {
				defs[key] = def.toJSON();
			}
		}

		delete json.transform;

		return {
			...json,
			...transform,
			...defs
		};

	}

}

export {
	Shape
};
