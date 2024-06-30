import { Element } from './element';
import { ElementCollection } from './mixins';
import { Selector } from './interactive';
import { Timeline } from './animation';
import { Matrix, Point } from './maths';
import { toFixed } from './utils';
import { ViewBoxArray } from './types';

const POINTEREVENTS = {
	start: {
		select: '_onPointerStartInSelectMode',
		pan: '_onPointerStartInPanMode',
		draw: '_onPointerStartInDrawMode'
	},
	move: {
		select: '_onPointerMoveInSelectMode',
		pan: '_onPointerMoveInPanMode',
		draw: '_onPointerMoveInDrawMode'
	},
	end: {
		select: '_onPointerEndInSelectMode',
		pan: '_onPointerEndInPanMode',
		draw: '_onPointerEndInDrawMode'
	}
};

type ModeType = 'select' | 'pan' | 'draw';

class Canvas extends ElementCollection(Element) {
	public readonly isCanvas = true;
	public multiselection = true;
	public zoomable = true;
	public mode: ModeType = 'select';

	protected readonly tagName = 'svg';
	protected readonly xmlns = 'http://www.w3.org/2000/svg';
	protected preserveAspectRatio = 'xMidYMid slice';
	protected className = 'grafik-canvas';

	protected width = 0;
	protected height = 0;

	protected viewBox: ViewBoxArray;
	protected viewportMatrix = new Matrix();
	protected drawingAreaMatrix = new Matrix();

	public hasDrawingArea = false;
	public showGrid = false;
	public autoSize = false;
	public gridColorDark = '#EEEEEE';
	public gridColorLight = '#FFFFFF';
	public gridSize = 10;
	protected drawingWidth = 0;
	protected drawingHeight = 0;

	private _defs = [];

	private _animation = new Timeline();

	private _selectedShapes = [];
	private _currentNodeId: string;
	private _selector = new Selector();
	private _selection = false;

	private _zoom = 1;
	private _pan = new Point();
	private _isDragging = false;
	private _startVector = new Point();

	set zoom(value: number) {
		this._zoom = value;
		this.zoomTo(this._zoom, this._pan);
	}

	set panX(value: number) {
		this._pan.x = value;
		this.zoomTo(this._zoom, this._pan);
	}

	set panY(value: number) {
		this._pan.y = value;
		this.zoomTo(this._zoom, this._pan);
	}

	get zoom() {
		return this._zoom;
	}

	get pan() {
		return this._pan;
	}

	get panX() {
		return this._pan.x;
	}

	get panY() {
		return this._pan.y;
	}

	public constructor(params = {}) {
		super();
		this.set(params, true);
		this.trigger('init', this);
	}

	protected getAttrMap(): string[] {
		return super
			.getAttrMap()
			.concat(['xmlns', 'width', 'height', 'viewBox', 'preserveAspectRatio']);
	}

	public getDrawingAreaAttributes(): any {
		if (!this.hasDrawingArea) {
			return {};
		}

		return {
			x: this.width / 2 - this.drawingWidth / 2,
			y: this.height / 2 - this.drawingHeight / 2,
			width: this.drawingWidth,
			height: this.drawingHeight
		};
	}

	public getGridPatternAttributes(): any {
		if (!this.showGrid) {
			return {};
		}

		return {
			id: 'grafik-grid',
			width: this.gridSize * 2,
			height: this.gridSize * 2,
			patternUnits: 'userSpaceOnUse'
		};
	}

	public getGridPatternPaths(): any[] {
		if (!this.showGrid) {
			return [];
		}

		const s = this.gridSize;
		const s2 = s * 2;

		return [
			{
				d: `M 0 0 L ${s} 0 ${s} ${s2} ${s2} ${s2} ${s2} ${s} 0 ${s} Z`,
				fill: this.gridColorDark,
				stroke: 'none',
				strokeWidth: 0
			},
			{
				d: `M ${s} 0 L ${s2} 0 ${s2} ${s} 0 ${s} 0 ${s2} ${s} ${s2} Z`,
				fill: this.gridColorLight,
				stroke: 'none',
				strokeWidth: 0
			}
		];
	}

	public selectShapes(shapes: any | any[], silent = false) {
		shapes = Array.isArray(shapes) ? shapes : [shapes];

		const prevShapesLength = this._selectedShapes.length;

		shapes.forEach((shape) => {
			// @ts-ignore
			if (!this._selectedShapes.includes(shape) && shape.selectable) {
				// @ts-ignore
				this._selectedShapes.push(shape);
			}
		});

		if (!silent || prevShapesLength !== this._selectedShapes.length) {
			this.trigger('shapes:selected', shapes);
			this.trigger('shapes:selection:updated', shapes);
		}

		return this;
	}

	public releaseShapes(shapes?: any | any[], silent = false) {
		shapes = Array.isArray(shapes) ? shapes : [shapes];

		const prevShapesLength = this._selectedShapes.length;

		if (shapes?.[0]) {
			this._selectedShapes = this._selectedShapes.filter((shape) => !shapes.includes(shape));
		} else {
			// If shapes are empty, we remove all shapes from selection.
			this._selectedShapes = [];
		}

		if (!silent || prevShapesLength !== this._selectedShapes.length) {
			this.trigger('shapes:released', shapes);
			this.trigger('shapes:selection:updated', shapes);
		}

		return this;
	}

	public getSelectedShapes(): any[] {
		return this._selectedShapes;
	}

	public eachSelectedShape(callback: (v: any, i: number, a: any[]) => void) {
		this._selectedShapes.forEach(callback);
		return this;
	}

	public mapSelectedShapes(callback): any[] {
		return this._selectedShapes.map(callback);
	}

	public addDefs(defs: any | any[], silent = false) {
		defs = Array.isArray(defs) ? defs : [defs];

		defs.forEach((def) => {
			// @ts-ignore
			if (!this._defs.includes(def)) {
				// @ts-ignore
				this._defs.push(def);
			}
		});
		if (!silent) {
			this.trigger('defs:added', defs);
		}

		return this;
	}

	public removeDefs(defs: any | any[], silent = false) {
		return this;
	}

	public getDefs() {
		return this._defs;
	}

	public hasDefs(): boolean {
		return this.hasDrawingArea || this.showGrid || !!this._defs.length;
	}

	public eachDef(callback: (v: any, i: number, a: any[]) => void) {
		this._defs.forEach(callback);
		return this;
	}

	public mapDefs(callback): any[] {
		return this._defs.map(callback);
	}

	public getSelector(): Selector {
		return this._selector;
	}

	public zoomTo(zoom = 1, pan = new Point()) {
		// First we have to set viewport to update shapes world matrix.
		const size = this.getSize();
		const zoomSize = size.clone().multiplyScalar(zoom);
		const translate = new Point()
			.subtractPoints(zoomSize, size)
			.divideScalar(2)
			.multiplyScalar(-1)
			.add(pan);
		this.viewportMatrix.fromArray([zoom, 0, 0, zoom, translate.x, translate.y]);

		// Second we also have to set drawing area matrix, if it is enabled.
		if (this.hasDrawingArea) {
			const daTx = this.width / 2 - this.drawingWidth / 2;
			const daTy = this.height / 2 - this.drawingHeight / 2;
			this.drawingAreaMatrix.fromArray([1, 0, 0, 1, daTx, daTy]);
		}

		// And we also need to calculate viewBox from viewport to update svg attribute.
		const { a, d, tx, ty } = this.viewportMatrix;
		const { width, height } = this;

		this.set('viewBox', [-tx / a, -ty / d, width / a, height / d]);

		// Update cache values too.
		this._zoom = zoom;
		this._pan.copy(pan);

		return this;
	}

	public getSize() {
		return new Point(this.width, this.height);
	}

	public getPointer(e): Point {
		const { left, top } = e.currentTarget.getBoundingClientRect();
		const { clientX, clientY } = 'ontouchstart' in window ? e.touches[0] : e;
		return new Point(clientX - left, clientY - top);
	}

	private _onPointerStartInSelectMode(e) {
		const { dataset } = e.target;
		let { shape } = dataset;
		const isNode = 'controlNode' in dataset;
		const pointer = this.getPointer(e);
		let founded = this.findLastChildByPointer(pointer);

		if (this.getSelectedShapes().includes(founded) && founded.isCollection) {
			founded = founded.findLastChildByPointer(pointer);
			if (founded) shape = ''; // To create recursive selection.
		}

		if (isNode) {
			this._currentNodeId = dataset.id;
			this.eachSelectedShape((shape) => {
				shape.getControl()?.childById(dataset.id)?.onPointerStart(e);
			});
		} else {
			if (!shape) {
				if (founded) {
					this.releaseShapes();
					this.selectShapes(founded);
				} else {
					this.releaseShapes();
					if (this.multiselection) {
						this._selector.bBox.reset().min.copy(pointer);
						this._selector.bBox.max.copy(pointer);
						this.trigger('selector:updated');
						this._selection = true;
					}
				}
			}
			this.eachSelectedShape((shape) => {
				shape.getControl().onPointerStart(e);
			});
		}
	}

	private _onPointerMoveInSelectMode(e) {
		this.eachSelectedShape((shape) => {
			shape.getControl().onPointerMove(e);
			shape.getControl()?.childById(this._currentNodeId)?.onPointerMove(e);
		});

		if (this._selection) {
			this._selector.bBox.max.copy(this.getPointer(e));
			this.trigger('selector:updated');
		}
	}

	private _onPointerEndInSelectMode(e) {
		this.eachSelectedShape((shape) => {
			shape.getControl().onPointerEnd(e);
			shape.getControl()?.childById(this._currentNodeId)?.onPointerEnd(e);
		});

		this._currentNodeId = '';

		if (this._selection) {
			const selectedShapes = this.mapChildren((shape) => {
				const selectorPolygon = this._selector.bBox.toPolygon();
				const shapePolygon = shape.bBox.toPolygon(shape.getWorldMatrix());
				return (
					!this._selector.bBox.isEmpty() &&
					selectorPolygon.intersects(shapePolygon) &&
					shape
				);
			}).filter((shape) => !!shape);
			this.selectShapes(selectedShapes);
			this._selector.bBox.reset();
			this.trigger('selector:updated');
		}

		this._selection = false;
	}

	private _onPointerStartInPanMode(e) {
		this._isDragging = true;
		this._startVector.subtractPoints(this.getPointer(e), this._pan);
	}

	private _onPointerMoveInPanMode(e) {
		if (!this._isDragging) {
			return;
		}

		const pan = this.getPointer(e).subtract(this._startVector);

		this.zoomTo(this._zoom, pan);
	}

	private _onPointerEndInPanMode(e) {
		this._isDragging = false;
	}

	private _onPointerStartInDrawMode(e) {}

	private _onPointerMoveInDrawMode(e) {}

	private _onPointerEndInDrawMode(e) {}

	public onPointerStart(e) {
		this[POINTEREVENTS.start[this.mode]](e);
	}

	public onPointerMove(e) {
		this[POINTEREVENTS.move[this.mode]](e);
	}

	public onPointerEnd(e) {
		this[POINTEREVENTS.end[this.mode]](e);
	}

	public onWheel(e) {
		if (this.zoomable) {
			e.preventDefault();
			const pointer = this.getPointer(e);
			const size = this.getSize();
			this.zoomTo(toFixed(this.zoom * 0.999 ** e.deltaY));
		}
	}
}

export { Canvas };
