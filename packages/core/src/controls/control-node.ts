import {
	Element
} from './../element';
import {
	Point,
	Matrix
} from './../maths';

class ControlNode extends Element {

	public position = new Point();
	protected readonly tagName = 'div';
	private connectedWith: ControlNode;

	constructor(params?){
		super();
		this.set(params);
	}

	connectTo(node: ControlNode){
		this.connectedWith = node;
		return node;
	}

	getLineMatrix() : Matrix {

		if (!this.connectedWith){
			return new Matrix();
		}

		const p1 = this.position;
		const p2 = this.connectedWith.position;
		const m = new Matrix();
		const a = - p1.angleTo(p2);

		return m.rotate(a);

	}

}

export {
	ControlNode
};
