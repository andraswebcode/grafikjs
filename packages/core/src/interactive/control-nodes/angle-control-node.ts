import {
	ControlNode
} from './../control-node';
import {
	Point,
	Matrix
} from './../../maths';

class AngleControlNode extends ControlNode {

	protected _isDragging = false;
	protected _startAngle = 0;
	protected _startVector = 0;
	protected _startMatrix: Matrix;

	public onPointerStart(e){
		const shape = this.getShape();
		this._isDragging = true;
		this._startAngle = shape.get('angle');
		this._startMatrix = shape.getWorldMatrix().invert();
		this._startVector = new Point().angleTo(shape.getLocalPointer(e, this._startMatrix));
	}

	public onPointerMove(e){

		if (!this._isDragging){
			return;
		}

		const shape = this.getShape();
		const p = shape.getLocalPointer(e, this._startMatrix);
		const v = new Point().angleTo(p);
		const cv = v - this._startVector;
		let angle = Math.ceil(this._startAngle + cv);

		// Normalize angle to be between 0, and 360.
		if (angle < 0) angle += 360;
		angle %= 360;

		shape.set('angle', angle);

	}

	public onPointerEnd(e){
		this._isDragging = false;
	}

}

export {
	AngleControlNode
};
