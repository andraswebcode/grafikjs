import {
	Element
} from './element';
import {
	Collection
} from './mixins';
import {
	Point,
	Matrix
} from './maths';
import {
	ViewBoxArray
} from './types';

class Canvas extends Collection(Element) {

	public readonly isCanvas = true;
	protected readonly tagName = 'svg';
	protected className = 'grafik-canvas';
	protected readonly xmlns = 'http://www.w3.org/2000/svg';

	protected width = 0;
	protected height = 0;

	protected viewBox:ViewBoxArray;
	protected viewportMatrix = new Matrix();

	private _selectedShapes = [];

	public constructor(params = {}){
		super();
		this.set(params);
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'xmlns',
			'width',
			'height',
			'viewBox'
		]);
	}

	public set(key, value?){
		super.set(key, value);
		this.setViewBox();
		return this;
	}

	public setViewBox(){
		this.viewBox = [0, 0, this.width, this.height];
	}

	public selectShapes(...shapes: any[]){
		shapes.forEach(shape => {
			// @ts-ignore
			if (!this._selectedShapes.includes(shape)){
				// @ts-ignore
				this._selectedShapes.push(shape);
			}
		});
		this.trigger('selected', shapes);
		return this;
	}

	public releaseShapes(...shapes: any[]){
		this.trigger('released', shapes);
		return this;
	}

	public getSelectedShapes() : any[] {
		return this._selectedShapes;
	}

	public findShapesByPointer(pointer: Point) : any[] {
		return [];
	}

}

export {
	Canvas
};
