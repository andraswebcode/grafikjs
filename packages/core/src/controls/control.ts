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

	public getStyle(){
		const {
			left,
			top,
			angle,
			scaleX,
			scaleY
		} = this.shape.getWorldMatrix().toOptions();
		const size = this.shape.bBox.getSize().multiply(new Point(scaleX, scaleY));
		const {x, y} = this.shape.origin.clone().multiplyScalar(-100);
		return {
			width:size.x,
			height:size.y,
			left,
			top,
			transform:`translate(${x}%, ${y}%) rotate(${angle}deg)`
		};
	}

}

export {
	Control
};
