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

	public constructor(params?){
		super();
		this.set(params);
		this.setNodes();
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

}

export {
	Control
};
