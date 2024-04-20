import {
	Control,
	ControlNode
} from './';

class TransformControl extends Control {

	public constructor(params?){
		super(params);
		this.addClass('grafik-transform-control');
	}

	public setNodes(){

		// Create control nodes.
		const tl = new ControlNode({
			name:'tl'
		});
		const tc = new ControlNode({
			name:'tc'
		});
		const tr = new ControlNode({
			name:'tr'
		});

		const ml = new ControlNode({
			name:'ml'
		});
		const mr = new ControlNode({
			name:'mr'
		});

		const bl = new ControlNode({
			name:'bl'
		});
		const bc = new ControlNode({
			name:'bc'
		});
		const br = new ControlNode({
			name:'br'
		});

		this.add(tl, tc, tr, ml, mr, bl, bc, br);

		return this;

	}

}

export {
	TransformControl
};
