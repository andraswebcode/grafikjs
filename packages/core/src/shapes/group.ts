import { Shape } from './shape';
import { ElementCollection } from './../mixins';
import { Point } from './../maths';

class Group extends ElementCollection(Shape) {
	protected readonly tagName = 'g';

	public constructor(params?) {
		super();
		this.init(params);
		this.updateBBox = this.updateBBox.bind(this);
	}

	public getAttributes(makeKebabeCase?: boolean): object {
		const defaultAttributes = super.getAttributes(makeKebabeCase);
		const translate = this.bBox.getSize().multiply(this.origin.clone().negate().addScalar(0.5));
		return {
			...defaultAttributes,
			transform: `translate(${translate})`
		};
	}

	public updateBBox() {
		const edges = this.mapChildren((child) => child.bBox.getLineEdges(child.matrix)).flat();
		this.bBox.fromPoints(edges);
		this.origin.copy(this.bBox.getOrigin());
		return this;
	}

	public add(children, silent?) {
		super.add(children, silent);
		children = Array.isArray(children) ? children : [children];
		children.forEach((child) => child.on('set', this.updateBBox));
		this.updateBBox();
		return this;
	}

	public remove(children, silent?) {
		super.remove(children, silent);
		children = Array.isArray(children) ? children : [children];
		children.forEach((child) => child.off('set', this.updateBBox));
		this.updateBBox();
		return this;
	}
}

export { Group };
