import { DrawingToolName, MouseOrTouchEvent } from './../types';
import { Canvas } from './../canvas';

abstract class DrawingTool {
	public abstract name: DrawingToolName;

	protected _canvas: Canvas;
	protected _path: any;
	protected _isDrawing = false;

	public constructor(canvas: Canvas) {
		this._canvas = canvas;
	}

	public abstract onPointerStart(e: MouseOrTouchEvent);

	public abstract onPointerMove(e: MouseOrTouchEvent);

	public abstract onPointerEnd(e: MouseOrTouchEvent);
}

export { DrawingTool };
