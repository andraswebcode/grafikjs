import { ControlNode } from './../control-node';
import { Point } from './../../maths';
import { toFixed } from './../../utils';

class OriginControlNode extends ControlNode {
	protected _isDragging = false;
	protected _startVector = new Point();
	protected _startPosition = new Point();
	protected _startOrigin = new Point();

	public constructor(params?) {
		super();
		this.init(params);
	}

	public onPointerStart(e) {
		const shape = this.getShape();
		const canvas = shape.get('canvas');
		const { left, top } = shape.getWorldMatrix().toOptions();

		this._isDragging = true;
		this._startVector.copy(canvas.getPointer(e));
		this._startPosition.set(left, top);
		this._startOrigin.copy(shape.get('origin'));
	}

	public onPointerMove(e) {
		if (!this._isDragging) {
			return;
		}

		const shape = this.getShape();
		const canvas = shape.get('canvas');
		const vpt = shape.parent.isCanvas
			? canvas.get('viewportMatrix').clone()
			: shape.parent.getWorldMatrix();
		const move = canvas
			.getPointer(e)
			.subtract(this._startVector.clone().subtract(this._startPosition))
			.transform(vpt.clone().invert());
		const dimMatrix = shape.getWorldMatrix().invert().translate(0, 0);
		const origin = canvas
			.getPointer(e)
			.subtract(this._startVector)
			.divide(shape.bBox.getSize())
			.transform(dimMatrix)
			.add(this._startOrigin);

		shape.set({
			left: toFixed(move.x),
			top: toFixed(move.y),
			originX: origin.x,
			originY: origin.y
		});
	}

	public onPointerEnd(e) {
		if (this._isDragging) {
			const shape = this.getShape();
			const { left, top, origin } = shape;
			shape.trigger('updated', { left, top, origin }, shape);
			if (shape.canvas) {
				shape.canvas.trigger('shapes:updated', { left, top, origin }, shape);
			}
		}
		this._isDragging = false;
	}
}

export { OriginControlNode };
