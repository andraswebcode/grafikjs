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
	protected _startVector = new Point();
	protected _startMatrix = new Matrix();

	public constructor(params?){
		super();
		this.init(params);
	}

	public onPointerStart(e){

		const shape = this.getShape();
		const wMatrix = shape.getWorldMatrix();
		const {left, top} = wMatrix.toOptions();
		const {
			scaleX,
			scaleY
		} = shape.get(['scaleX', 'scaleY']);
		this._startScale.set(scaleX, scaleY);
		this._startVector.copy(shape.getLocalPointer(e));
		this._startMatrix.copy(wMatrix.invert());

		this._isDragging = true;

	}

	public onPointerMove(e){

		if (!this._isDragging){
			return;
		}

		const shape = this.getShape();
		const {left, top} = shape.getWorldMatrix().toOptions();
		const scale = shape.getLocalPointer(e, this._startMatrix).divide(this._startVector).multiply(this._startScale).abs();
		const ratio = this._startScale.x / this._startScale.y;
		const set: any = {};

		if (this.axis === 'x'){
			set.scaleX = toFixed(scale.x);
		} else if (this.axis === 'y'){
			set.scaleY = toFixed(scale.y);
		} else {
			set.scaleX = toFixed(Math.max(scale.x, scale.y));
			set.scaleY = toFixed(Math.max(scale.x, scale.y)) / ratio;
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
