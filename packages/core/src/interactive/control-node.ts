import { Element } from './../element';
import { Collection } from './../mixins';
import { Point, Matrix } from './../maths';

class ControlNode extends Collection(Element) {
	protected readonly tagName = 'div';
	protected className = 'grafik-control-node';
	protected name = '';

	public offset = new Point();
	private parent;
	private connectedWith: ControlNode;

	public init(params?) {
		this.set(params);
		this.createId('node');
		if (this.name) {
			this.addClass('grafik-control-node__' + this.name);
		}
		if (params.getPosition) {
			this.getPosition = params.getPosition.bind(this);
		}
		this.onPointerStart = this.onPointerStart.bind(this);
		this.onPointerMove = this.onPointerMove.bind(this);
		this.onPointerEnd = this.onPointerEnd.bind(this);
	}

	set x(value: number) {
		this.offset.x = value;
	}

	set y(value: number) {
		this.offset.y = value;
	}

	get x() {
		return this.offset.x;
	}

	get y() {
		return this.offset.y;
	}

	public getPosition(): Point {
		const size = this.getControlSize();
		const { x, y } = this.offset;

		return new Point(size.x * x, size.y * y);
	}

	public connectTo(node: ControlNode) {
		this.connectedWith = node;
		return node;
	}

	public getLineMatrix(): Matrix {
		if (!this.connectedWith) {
			return new Matrix();
		}

		const p1 = this.getPosition();
		const p2 = this.connectedWith.getPosition();
		const m = new Matrix();
		const a = -p1.angleTo(p2);

		return m.rotate(a);
	}

	public getShape() {
		return this.parent.shape;
	}

	public getControlSize(): Point {
		return this.parent.getSize();
	}

	public getStyle() {
		const { x, y } = this.getPosition();
		return {
			left: x + 'px',
			top: y + 'px'
		};
	}

	public getAttributes(): object {
		const defaultAttributes = super.getAttributes();
		return {
			...defaultAttributes,
			'data-control-node': true,
			'data-id': this.id,
			'data-name': this.name,
			'data-shape': this.getShape().get('id')
		};
	}

	public onPointerStart(e) {}

	public onPointerMove(e) {}

	public onPointerEnd(e) {}
}

export { ControlNode };
