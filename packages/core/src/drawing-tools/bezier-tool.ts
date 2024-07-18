import { MouseOrTouchEvent } from './../types';
import { DrawingTool } from './drawing-tool';

class BezierTool extends DrawingTool {
	public onPointerStart(e: MouseOrTouchEvent) {
		throw new Error('Method not implemented.');
	}
	public onPointerMove(e: MouseOrTouchEvent) {
		throw new Error('Method not implemented.');
	}
	public onPointerEnd(e: MouseOrTouchEvent) {
		throw new Error('Method not implemented.');
	}
}

export { BezierTool };
