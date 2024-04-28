import {
	ControlNode
} from './../control-node';
import {
	Point,
	Matrix
} from './../../maths';
import {
	toFixed
} from './../../utils';

class AngleControlNode extends ControlNode {

	protected _isDragging = false;
	protected _startAngle = 0;
	protected _startVector = 0;
	protected _startMatrix: Matrix;

	public constructor(params?){
		super();
		this.init(params);
	}

	public onPointerStart(e){
		const shape = this.getShape();
		const {left, top} = shape.getWorldMatrix().toOptions();
		this._isDragging = true;
		this._startAngle = shape.get('angle');
		// We do not want to get the whole world matrix, just want to get the translate matrix here.
		this._startMatrix = new Matrix().translate(left, top).invert();
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
		let angle = toFixed(this._startAngle + cv);

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
