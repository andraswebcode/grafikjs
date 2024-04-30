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
	toFixed
} from './utils';
import {
	ViewBoxArray,
	FillStroke
} from './types';

class Canvas extends Collection(Element) {

	public readonly isCanvas = true;
	protected readonly tagName = 'svg';
	protected readonly xmlns = 'http://www.w3.org/2000/svg';
	protected className = 'grafik-canvas';

	protected width = 0;
	protected height = 0;

	protected viewBox: ViewBoxArray;
	protected viewportMatrix = new Matrix();

	private _defs = [];
	private _selectedShapes = [];
	private _currentNodeId: string;

	private _zoom = 1;
	private _pan = new Point();

	set zoom(value: number){
		this._zoom = value;
		this.zoomTo(this._zoom, this._pan);
	}

	set panX(value: number){
		this._pan.x = value;
		this.zoomTo(this._zoom, this._pan);
	}

	set panY(value: number){
		this._pan.y = value;
		this.zoomTo(this._zoom, this._pan);
	}

	get zoom(){
		return this._zoom;
	}

	get panX(){
		return this._pan.x;
	}

	get panY(){
		return this._pan.y;
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

	public mapSelectedShapes(callback) : any[] {
		return this._selectedShapes.map(callback);
	}

	public addDefs(defs: any|any[]){

		defs = Array.isArray(defs) ? defs : [defs];

		defs.forEach(def => {
			// @ts-ignore
			if (!this._defs.includes(def)){
				// @ts-ignore
				this._defs.push(def);
			}
		});
		this.trigger('defs:added', defs);

		return this;

	}

	public removeDefs(defs: any|any[]){
		return this;
	}

	public getDefs(){
		return this._defs;
	}

	public eachDef(callback: (v: any, i: number, a: any[]) => void){
		this._defs.forEach(callback);
		return this;
	}

	public mapDefs(callback) : any[] {
		return this._defs.map(callback);
	}

	public zoomTo(zoom = 1, pan = new Point()){

		// First we have to set viewport to update shapes world matrix.
		const size = new Point(this.width, this.height);
		const zoomSize = size.clone().multiplyScalar(zoom);
		const translate = new Point().subtractPoints(zoomSize, size).divideScalar(2).add(pan);
		this.viewportMatrix.fromArray([zoom, 0, 0, zoom, translate.x, translate.y]);

		// And we also need to calculate viewBox from viewport to update svg attribute.
		const {a, d, tx, ty} = this.viewportMatrix;
		const {width, height} = this;

		this.set('viewBox', [tx / a, ty / d, width / a, height / d]);

		// Update cache values too.
		this._zoom = zoom;
		this._pan.copy(pan);

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

	public onWheel(e){
		this.zoomTo(toFixed(this.zoom * 0.999 ** e.deltaY));
	}

}

export {
	Canvas
};
