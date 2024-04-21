import {
	Element
} from './../element';
import {
	Collection
} from './../mixins';
import {
	Point,
	Matrix
} from './../maths';
import {
	uniqueId
} from './../utils';

class ControlNode extends Collection(Element) {

	protected readonly tagName = 'div';
	protected className = 'grafik-control-node';
	protected name = '';
	protected id = '';

	public position = new Point();
	private connectedWith: ControlNode;

	public constructor(params?){
		super();
		this.set(params);
		this.id = uniqueId();
		if (this.name){
			this.addClass('grafik-control-node__' + this.name);
		}
	}

	public connectTo(node: ControlNode){
		this.connectedWith = node;
		return node;
	}

	public getLineMatrix() : Matrix {

		if (!this.connectedWith){
			return new Matrix();
		}

		const p1 = this.position;
		const p2 = this.connectedWith.position;
		const m = new Matrix();
		const a = - p1.angleTo(p2);

		return m.rotate(a);

	}

	public getStyle(){
		return {};
	}

}

export {
	ControlNode
};
