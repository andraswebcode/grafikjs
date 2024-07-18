import { DrawingTool } from './drawing-tool';
import { Path } from './../shapes';
import { MouseOrTouchEvent } from './../types';

class PenTool extends DrawingTool {
	public onPointerStart(e: MouseOrTouchEvent) {
		const { x, y } = this._canvas
			.getPointer(e)
			.transform(this._canvas.get('viewportMatrix').clone().invert())
			.subtract(this._canvas.getDrawingAreaPosition());
		const path = new Path({
			left: 0,
			top: 0,
			originX: 0,
			originY: 0,
			stroke: this._canvas.penColor,
			strokeWidth: this._canvas.penWidth,
			fill: 'none'
		});

		path.getPath().moveTo(x, y);

		this._isDrawing = true;
		this._path = path;
		this._canvas.add(path);
	}

	public onPointerMove(e: MouseOrTouchEvent) {
		if (!this._isDrawing || !this._path) {
			return;
		}

		const { x, y } = this._canvas
			.getPointer(e)
			.transform(this._canvas.get('viewportMatrix').clone().invert())
			.subtract(this._canvas.getDrawingAreaPosition());

		this._path.getPath().lineTo(x, y);
		// Call set, just to trigger events to rerender views.
		this._path.updateBBox().set({});
	}

	public onPointerEnd(e: MouseOrTouchEvent) {
		if (!this._path) {
			return;
		}

		const curves = this._path.getPath();
		const bBox = curves.getBBox();
		const translate = bBox.min.clone().add(bBox.getSize().divideScalar(2));

		curves.adjust();
		this._path.updateBBox().set({
			left: translate.x,
			top: translate.y,
			originX: 0.5,
			originY: 0.5
		});

		this._isDrawing = false;
		this._path = null;

		this._canvas.trigger('drawn', this._path, this);
		this._canvas.trigger('drawn:path', this._path, this);
	}
}

export { PenTool };
