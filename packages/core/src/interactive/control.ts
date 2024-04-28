import {
	Element
} from './../element';
import {
	Collection
} from './../mixins';
import {
	Point
} from './../maths';

class Control extends Collection(Element) {

	protected readonly tagName = 'div';
	protected className = 'grafik-control';

	protected shape: any;

	protected _isDragging = false;
	protected _startVector = new Point();

	public init(params?){
		this.set(params);
		this.setNodes();
		this.onPointerStart = this.onPointerStart.bind(this);
		this.onPointerMove = this.onPointerMove.bind(this);
		this.onPointerEnd = this.onPointerEnd.bind(this);
	}

	public setNodes(){
		console.warn('setNodes() must be implemented by subclass.');
		return this;
	}

	public getSize() : Point {
		const {
			scaleX,
			scaleY
		} = this.shape.getWorldMatrix().toOptions();
		return this.shape.bBox.getSize().multiply(new Point(scaleX, scaleY));
	}

	public getStyle() : object {
		const {
			left,
			top,
			angle
		} = this.shape.getWorldMatrix().toOptions();
		const size = this.getSize();
		const {x, y} = this.shape.origin.clone().multiplyScalar(100);
		return {
			width:Math.abs(size.x),
			height:Math.abs(size.y),
			left,
			top,
			transform:`translate(${-x}%, ${-y}%) rotate(${angle}deg)`,
			transformOrigin:`${x}% ${y}%`
		};
	}

	public getAttributes() : object {
		const defaultAttributes = super.getAttributes();
		return {
			...defaultAttributes,
			'data-control':true,
			'data-shape':this.shape.get('id')
		};
	}

	public onPointerStart(e){

		const {
			left,
			top
		} = this.shape.get(['left', 'top']);

		this._isDragging = true;
		this._startVector.subtractPoints(new Point(e.clientX, e.clientY), new Point(left, top));

	}

	public onPointerMove(e){

		if (!this._isDragging){
			return;
		}

		const move = new Point(e.clientX, e.clientY).subtract(this._startVector);

		this.shape.set({
			left:move.x,
			top:move.y
		});

	}

	public onPointerEnd(e){
		this._isDragging = false;
	}

}

export {
	Control
};
