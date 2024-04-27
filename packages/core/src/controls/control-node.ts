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

	public offset = new Point();
	private parent;
	private connectedWith: ControlNode;

	public constructor(params?){
		super();
		this.set(params);
		this.id = uniqueId();
		if (this.name){
			this.addClass('grafik-control-node__' + this.name);
		}
		if (params.getPosition){
			this.getPosition = params.getPosition.bind(this);
		}
	}

	set x(value: number){
		this.offset.x = value;
	}

	set y(value: number){
		this.offset.y = value;
	}

	public getPosition() : Point {

		const size = this.parent.getSize();
		const {x, y} = this.offset;

		return new Point(size.x * x, size.y * y);

	}

	public connectTo(node: ControlNode){
		this.connectedWith = node;
		return node;
	}

	public getLineMatrix() : Matrix {

		if (!this.connectedWith){
			return new Matrix();
		}

		const p1 = this.getPosition();
		const p2 = this.connectedWith.getPosition();
		const m = new Matrix();
		const a = - p1.angleTo(p2);

		return m.rotate(a);

	}

	public getStyle(){
		const {x, y} = this.getPosition();
		return {
			left:x,
			top:y
		};
	}

}

export {
	ControlNode
};
