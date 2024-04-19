import {
	Control,
	ControlNode
} from './';

class TransformControl extends Control {

	public setNodes(){

		// Create control nodes.
		const tl = new ControlNode({
			className:'transform-control__tl'
		});
		const tc = new ControlNode({
			className:'transform-control__tc'
		});
		const tr = new ControlNode({
			className:'transform-control__tr'
		});

		const ml = new ControlNode({
			className:'transform-control__ml'
		});
		const mr = new ControlNode({
			className:'transform-control__mr'
		});

		const bl = new ControlNode({
			className:'transform-control__bl'
		});
		const bc = new ControlNode({
			className:'transform-control__bc'
		});
		const br = new ControlNode({
			className:'transform-control__br'
		});

		// Make bounding box rectangle.
		tl
		.connectTo(tr)
		.connectTo(br)
		.connectTo(bl)
		.connectTo(tl);

		this.add(tl, tc, tr, ml, mr, bl, bc, br);

		return this;

	}

}

export {
	TransformControl
};
