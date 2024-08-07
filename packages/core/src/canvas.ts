import { Element } from './element';
import { ElementCollection } from './mixins';
import { Selector } from './interactive';
import { Timeline } from './animation';
import { Matrix, Point } from './maths';
import { clamp, isEqual, toFixed } from './utils';
import { AnyColor, DrawingToolName, ModeType, MouseOrTouchEvent, ViewBoxArray } from './types';
import { DrawingTool, PenTool, ShapeTool, BezierTool } from './drawing-tools';

class Canvas extends ElementCollection(Element) {
	public readonly isCanvas = true;
	public multiselection = true;
	public zoomable = true;
	public minZoom = 0.1;
	public maxZoom = 10;
	public mode: ModeType = 'select';
	public penWidth = 2;
	public penColor: AnyColor = '#000';

	protected readonly tagName = 'svg';
	protected readonly xmlns = 'http://www.w3.org/2000/svg';
	protected preserveAspectRatio = 'xMidYMid slice';
	protected className = 'grafik-canvas';

	protected width = 0;
	protected height = 0;

	private _viewBox: ViewBoxArray;
	protected viewportMatrix = new Matrix();

	public hasDrawingArea = false;
	public showGrid = false;
	public autoSize = false;
	public gridColorDark = '#EEEEEE';
	public gridColorLight = '#FFFFFF';
	public gridSize = 10;
	protected drawingWidth = 0;
	protected drawingHeight = 0;

	private _defs = [];

	private _animation: Timeline;

	private _selectedShapes = [];
	private _currentNode: string;
	private _selector = new Selector();
	private _selection = false;

	private _zoom = 1;
	private _pan = new Point();
	private _isDragging = false;
	private _startVector = new Point();

	private _drawingTool: DrawingTool;

	set viewBox(value: ViewBoxArray | string) {
		if (typeof value === 'string') {
			this._viewBox = value.split(' ').map((n) => toFixed(n)) as ViewBoxArray;
		} else {
			this._viewBox = value;
		}
	}

	get viewBox(): string {
		return this._viewBox ? this._viewBox.join(' ') : '0 0 0 0';
	}

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

	get drawingTool() {
		return this._drawingTool.name;
	}

	set drawingTool(value: DrawingToolName) {
		if (value === 'pen') {
			this._drawingTool = new PenTool(this);
		} else if (value === 'shape') {
			this._drawingTool = new ShapeTool(this);
		} else if (value === 'bezier') {
			this._drawingTool = new BezierTool(this);
		}
	}

	public constructor(params = {}) {
		super();
		this.set(params, true);
		this.trigger('init', this);
		this._animation = new Timeline(this);
		this._drawingTool = new PenTool(this);
	}

	protected getAttrMap(): string[] {
		return super
			.getAttrMap()
			.concat(['xmlns', 'width', 'height', 'viewBox', 'preserveAspectRatio']);
	}

	public getDrawingAreaPosition() {
		return this.hasDrawingArea
			? new Point(
					this.width / 2 - this.drawingWidth / 2,
					this.height / 2 - this.drawingHeight / 2
			  )
			: new Point();
	}

	public getDrawingAreaSize() {
		return this.hasDrawingArea
			? new Point(this.drawingWidth, this.drawingHeight)
			: new Point(this.width, this.height);
	}

	public getShapesWrapperAttributes(): any {
		if (!this.hasDrawingArea) {
			return {};
		}

		const { x, y } = this.getDrawingAreaPosition();
		return {
			transform: `translate(${x}, ${y})`
		};
	}

	public getDrawingAreaAttributes(): any {
		if (!this.hasDrawingArea) {
			return {};
		}

		const { x, y } = this.getDrawingAreaPosition();

		return {
			x,
			y,
			width: this.drawingWidth,
			height: this.drawingHeight
		};
	}

	public getGridPatternAttributes(): any {
		if (!this.showGrid) {
			return {};
		}

		const { x, y } = this.getDrawingAreaPosition();

		return {
			id: 'grafik-grid',
			width: this.gridSize * 2,
			height: this.gridSize * 2,
			x,
			y,
			patternUnits: 'userSpaceOnUse'
		};
	}

	public getGridPatternPaths(makeKebabeCase = false): any[] {
		if (!this.showGrid) {
			return [];
		}

		const s = this.gridSize;
		const s2 = s * 2;

		return [
			{
				d: `M 0 0 L ${s2} 0 ${s2} ${s2} 0 ${s2} Z`,
				fill: this.gridColorDark,
				stroke: 'none',
				[makeKebabeCase ? 'stroke-width' : 'strokeWidth']: 0
			},
			{
				d: `M ${s} 0 L ${s2} 0 ${s2} ${s} 0 ${s} 0 ${s2} ${s} ${s2} Z`,
				fill: this.gridColorLight,
				stroke: 'none',
				[makeKebabeCase ? 'stroke-width' : 'strokeWidth']: 0
			}
		];
	}

	public setSelectedShapes(shapes: any | any[], silent = false) {
		shapes = Array.isArray(shapes) ? shapes : [shapes];

		const prevShapes = this._selectedShapes.concat();

		this._selectedShapes = shapes;

		if (!silent && !isEqual(prevShapes, this._selectedShapes)) {
			this.trigger('shapes:selection:updated', shapes);
		}

		return this;
	}

	public selectShapes(shapes: any | any[], silent = false) {
		shapes = Array.isArray(shapes) ? shapes : [shapes];

		const prevShapes = this._selectedShapes.concat();

		shapes.forEach((shape) => {
			// @ts-ignore
			if (!this._selectedShapes.includes(shape) && shape.selectable) {
				// @ts-ignore
				this._selectedShapes.push(shape);
			}
		});

		if (!silent && !isEqual(prevShapes, this._selectedShapes)) {
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

	public getAnimation() {
		return this._animation;
	}

	public setResponsiveSize(element: SVGElement) {
		if (!this.autoSize || !element) {
			return;
		}

		element.style.display = 'none';
		const { clientWidth = 0, clientHeight = 0 } = element.parentElement || {};
		element.style.display = '';
		this.set({ width: clientWidth, height: clientHeight }).zoomTo(this._zoom, this._pan);
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

		// And we also need to calculate viewBox from viewport to update svg attribute.
		const { a, d, tx, ty } = this.viewportMatrix;
		const { width, height } = this;

		// Update cache values too.
		this._zoom = clamp(zoom, this.minZoom, this.maxZoom);
		this._pan.copy(pan);

		this._viewBox = [-tx / a, -ty / d, width / a, height / d];

		// Just trigger the set event.
		this.set({});

		return this;
	}

	public fitToScreen() {
		if (!this.hasDrawingArea) {
			return this;
		}

		const zoom = this.getFitZoom();
		this.zoomTo(zoom);

		return this;
	}

	public getFitZoom() {
		const { x, y } = this.getSize().divide(this.getDrawingAreaSize());

		return Math.min(x, y);
	}

	public getSize() {
		return new Point(this.width, this.height);
	}

	public getPointer(e: MouseOrTouchEvent): Point {
		// @ts-ignore
		const { clientX, clientY, currentTarget } = 'ontouchstart' in window ? e.touches[0] : e;
		const { left, top } = currentTarget.getBoundingClientRect();
		return new Point(clientX - left, clientY - top);
	}

	_foundedInGroup: any;

	private _onPointerStartInSelectMode(e: MouseOrTouchEvent) {
		// @ts-ignore
		const { dataset } = e.target;
		const { shape, name } = dataset;
		const isNode = 'controlNode' in dataset;
		const pointer = this.getPointer(e);
		const founded = this.findLastChildByPointer(pointer);

		if (isNode) {
			this._currentNode = name;
			this.eachSelectedShape((shape) => {
				shape.getControl().childByName(name)?.onPointerStart(e);
			});
		} else {
			if (!shape) {
				if (founded) {
					this.setSelectedShapes(founded);
				} else {
					this.releaseShapes();
					if (this.multiselection) {
						this._selector.bBox.reset().min.copy(pointer);
						this._selector.bBox.max.copy(pointer);
						this.trigger('selector:updated');
						this._selection = true;
					}
				}
			} else {
				if (founded?.isCollection) {
					this._foundedInGroup = founded.findLastChildByPointer(pointer);
				}
			}
			this.eachSelectedShape((shape) => {
				shape.getControl().onPointerStart(e);
			});
		}
	}

	private _onPointerMoveInSelectMode(e: MouseOrTouchEvent) {
		if (this._selection) {
			this._selector.bBox.max.copy(this.getPointer(e));
			this.trigger('selector:updated');
		} else {
			this.eachSelectedShape((shape) => {
				shape.getControl().onPointerMove(e);
				shape.getControl().childByName(this._currentNode)?.onPointerMove(e);
			});
		}
		this._foundedInGroup = null;
	}

	private _onPointerEndInSelectMode(e: MouseOrTouchEvent) {
		if (this._selection) {
			const selectedShapes = this.mapChildren((shape) => {
				const selectorPolygon = this._selector.bBox.toPolygon();
				const shapePolygon = shape.toPolygon();
				return (
					!this._selector.bBox.isEmpty() &&
					selectorPolygon.intersects(shapePolygon) &&
					shape
				);
			}).filter((shape) => !!shape);
			this.selectShapes(selectedShapes);
			this._selector.bBox.reset();
			this.trigger('selector:updated');
			this._selection = false;
		} else {
			this.eachSelectedShape((shape) => {
				shape.getControl().onPointerEnd(e);
				shape.getControl().childByName(this._currentNode)?.onPointerEnd(e);
			});
			this._currentNode = '';
		}
		if (this._foundedInGroup) {
			this.setSelectedShapes(this._foundedInGroup);
			this._foundedInGroup = null;
		}
	}

	private _onPointerStartInPanMode(e: MouseOrTouchEvent) {
		this._isDragging = true;
		this._startVector.subtractPoints(this.getPointer(e), this._pan);
	}

	private _onPointerMoveInPanMode(e: MouseOrTouchEvent) {
		if (!this._isDragging) {
			return;
		}

		const pan = this.getPointer(e).subtract(this._startVector);

		this.zoomTo(this._zoom, pan);
	}

	private _onPointerEndInPanMode(e: MouseOrTouchEvent) {
		this._isDragging = false;
	}

	public onPointerStart(e: MouseOrTouchEvent) {
		switch (this.mode) {
			case 'select':
				this._onPointerStartInSelectMode(e);
				break;
			case 'pan':
				this._onPointerStartInPanMode(e);
				break;
			case 'draw':
				this._drawingTool.onPointerStart(e);
				break;
			default:
				break;
		}
	}

	public onPointerMove(e: MouseOrTouchEvent) {
		switch (this.mode) {
			case 'select':
				this._onPointerMoveInSelectMode(e);
				break;
			case 'pan':
				this._onPointerMoveInPanMode(e);
				break;
			case 'draw':
				this._drawingTool.onPointerMove(e);
				break;
			default:
				break;
		}
	}

	public onPointerEnd(e: MouseOrTouchEvent) {
		switch (this.mode) {
			case 'select':
				this._onPointerEndInSelectMode(e);
				break;
			case 'pan':
				this._onPointerEndInPanMode(e);
				break;
			case 'draw':
				this._drawingTool.onPointerEnd(e);
				break;
			default:
				break;
		}
	}

	public onWheel(e: WheelEvent) {
		if (this.zoomable) {
			e.preventDefault();
			const pointer = this.getPointer(e);
			const size = this.getSize();
			this.zoomTo(toFixed(this.zoom * 0.999 ** e.deltaY), this._pan);
		}
	}
}

export { Canvas };
