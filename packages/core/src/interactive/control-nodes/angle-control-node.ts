import {
	ControlNode
} from './../control-node';
import {
	Point
} from './../../maths';

class AngleControlNode extends ControlNode {

	protected _isDragging = false;
	protected _startAngle: number;

	public onPointerStart(e){
		this._isDragging = true;
		this._startAngle = this.getShape().get('angle');
	}

	public onPointerMove(e){

		if (!this._isDragging){
			return;
		}

	}

	public onPointerEnd(e){
		this._isDragging = false;
	}

}

export {
	AngleControlNode
};
