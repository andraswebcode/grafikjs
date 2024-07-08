import { Element } from './../element';
import { Collection } from './../mixins';
import { Point } from './../maths';

class Control extends Collection(Element) {
	protected readonly tagName = 'div';
	protected className = 'grafik-control';

	protected shape: any;

	public init(params?) {
		this.set(params);
		this.setNodes();
		this.onPointerStart = this.onPointerStart.bind(this);
		this.onPointerMove = this.onPointerMove.bind(this);
		this.onPointerEnd = this.onPointerEnd.bind(this);
	}

	public setNodes() {
		return this;
	}

	public getSize(): Point {
		const { scaleX, scaleY } = this.shape.getWorldMatrix().toOptions();
		return this.shape.bBox.getSize().multiply(new Point(scaleX, scaleY));
	}

	public getStyle(): object {
		const shape = this.shape;
		const { left, top, angle } = shape.getWorldMatrix(true).toOptions();
		const size = this.getSize();
		const { x, y } = shape.origin.clone().multiplyScalar(100);
		return {
			width: Math.abs(size.x) + 'px',
			height: Math.abs(size.y) + 'px',
			left: left + 'px',
			top: top + 'px',
			transform: `translate(${-x}%, ${-y}%) rotate(${angle}deg)`,
			transformOrigin: `${x}% ${y}%`
		};
	}

	public getAttributes(): object {
		const defaultAttributes = super.getAttributes();
		return {
			...defaultAttributes,
			'data-control': true,
			'data-shape': this.shape.get('id')
		};
	}

	public onPointerStart(e) {}

	public onPointerMove(e) {}

	public onPointerEnd(e) {}
}

export { Control };
