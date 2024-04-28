import {
	ControlNode
} from './../control-node';
import {
	Point,
	Matrix
} from './../../maths';

class ScaleControlNode extends ControlNode {

	protected _isDragging = false;
	protected _startScale = new Point();
	protected _startMatrix: Matrix;

	public onPointerStart(e){
		const shape = this.getShape();
		this._isDragging = true;
		this._startScale.set(shape.get('scaleX'), shape.get('scaleY'));
		this._startMatrix = shape.getWorldMatrix().invert();
	}

	public onPointerMove(e){

		if (!this._isDragging){
			return;
		}

		const shape = this.getShape();
		const lp = shape.getLocalPointer(e, this._startMatrix);
		const size = this.getControlSize();
		const ratio = lp.divide(size.divideScalar(2).divide(this._startScale));
		const scale = new Point().multiplyPoints(this._startScale, ratio);

		shape.set({
			scaleX:scale.x
		});

	}

	public onPointerEnd(e){
		this._isDragging = false;
	}

}

export {
	ScaleControlNode
};
