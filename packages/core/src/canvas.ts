import {
	Element
} from './element';
import {
	Collection
} from './mixins';
import {
	Matrix,
	Point
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

	protected viewBox: ViewBoxArray;
	protected viewportMatrix = new Matrix();

	private _selectedShapes = [];
	private _currentNodeId: string;

	set zoom(value: number){
		this.zoomTo(value);
	}

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

	public selectShapes(shapes: any|any[]){
		shapes = Array.isArray(shapes) ? shapes : [shapes];
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

	public releaseShapes(shapes?: any|any[]){
		shapes = Array.isArray(shapes) ? shapes : [shapes];
		if (shapes?.[0]){
			this._selectedShapes = this._selectedShapes.filter(shape => !shapes.includes(shape));
		} else { // If shapes are empty, we remove all shapes from selection.
			this._selectedShapes = [];
		}
		this.trigger('released', shapes);
		return this;
	}

	public getSelectedShapes() : any[] {
		return this._selectedShapes;
	}

	public eachSelectedShape(callback: (v: any, i: number, a: any[]) => void){
		this._selectedShapes.forEach(callback);
		return this;
	}

	public zoomTo(zoom: number, point?: Point){

		// First we have to set viewport to update shapes world matrix.
		this.viewportMatrix.reset().scale(zoom);

		// And we also need to calculate viewBox from viewport to update svg attribute.
		const {a, d, tx, ty} = this.viewportMatrix;
		const {width, height} = this;

		this.viewBox = [tx, ty, width / a, height / d];

		return this;

	}

	public getPointer(e) : Point {
		const {
			left,
			top
		} = e.currentTarget.getBoundingClientRect();
		return new Point(e.clientX - left, e.clientY - top);
	}

	public onPointerStart(e){

		const {
			dataset
		} = e.target;
		const isNode = ('controlNode' in dataset);
		const pointer = this.getPointer(e);
		const founded = this.findLastChildByPointer(pointer);

		if (isNode){
			this._currentNodeId = dataset.id;
			this.eachSelectedShape(shape => {
				shape.getControl()?.childById(dataset.id)?.onPointerStart(e);
			});
		} else {
			if (founded){
				this.releaseShapes();
				this.selectShapes(founded);
			} else {
				this.releaseShapes();
			}
			this.eachSelectedShape(shape => {
				shape.getControl().onPointerStart(e);
			});
		}

	}

	public onPointerMove(e){
		this.eachSelectedShape(shape => {
			shape.getControl().onPointerMove(e);
			shape.getControl()?.childById(this._currentNodeId)?.onPointerMove(e);
		});
	}

	public onPointerEnd(e){
		this.eachSelectedShape(shape => {
			shape.getControl().onPointerEnd(e);
			shape.getControl()?.childById(this._currentNodeId)?.onPointerEnd(e);
		});
		this._currentNodeId = '';
	}

}

export {
	Canvas
};
