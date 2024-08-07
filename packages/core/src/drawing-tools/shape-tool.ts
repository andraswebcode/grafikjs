import { DrawingToolName, MouseOrTouchEvent } from './../types';
import { DrawingTool } from './drawing-tool';

class ShapeTool extends DrawingTool {
	public name: DrawingToolName = 'shape';
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

export { ShapeTool };
