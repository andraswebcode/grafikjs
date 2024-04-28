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

class ScaleControlNode extends ControlNode {

	protected axis = '';

	protected _isDragging = false;
	protected _startScale = new Point();
	protected _startSize = new Point();
	protected _startMatrix: Matrix;

	public constructor(params?){
		super();
		this.init(params);
	}

	public onPointerStart(e){
		const shape = this.getShape();
		this._isDragging = true;
		this._startScale.set(shape.get('scaleX'), shape.get('scaleY'));
		this._startSize.copy(this.getControlSize());
		this._startMatrix = shape.getWorldMatrix().invert();
	}

	public onPointerMove(e){

		if (!this._isDragging){
			return;
		}

		const shape = this.getShape();
		const lp = shape.getLocalPointer(e, this._startMatrix);
		const ratio = lp.divide(this._startSize.clone().divideScalar(2).divide(this._startScale));
		const scale = new Point().multiplyPoints(this._startScale, ratio).abs();
		const set: any = {};

		if (this.axis === 'x'){
			set.scaleX = toFixed(scale.x);
		} else if (this.axis === 'y'){
			set.scaleY = toFixed(scale.y);
		} else {
			set.scaleX = Math.max(scale.x, scale.y);
			set.scaleY = Math.max(scale.x, scale.y);
		}

		shape.set(set);

	}

	public onPointerEnd(e){
		this._isDragging = false;
	}

}

export {
	ScaleControlNode
};
