import {
	Control,
	ControlNode,
	AngleControlNode,
	OriginControlNode
} from './../';
import {
	Point
} from './../../maths';

class TransformControl extends Control {

	public constructor(params?){
		super(params);
		this.addClass('grafik-transform-control');
	}

	public setNodes(){

		const control = this;
		const {
			shape
		} = control;

		// Create control nodes.
		const tl = new ControlNode({
			name:'tl',
			x:0,
			y:0
		});
		const tc = new ControlNode({
			name:'tc',
			x:0.5,
			y:0
		});
		const tr = new ControlNode({
			name:'tr',
			x:1,
			y:0
		});

		const ml = new ControlNode({
			name:'ml',
			x:0,
			y:0.5
		});
		const mr = new ControlNode({
			name:'mr',
			x:1,
			y:0.5
		});

		const bl = new ControlNode({
			name:'bl',
			x:0,
			y:1
		});
		const bc = new ControlNode({
			name:'bc',
			x:0.5,
			y:1
		});
		const br = new ControlNode({
			name:'br',
			x:1,
			y:1
		});

		const a = new AngleControlNode({
			name:'a',
			getPosition(){
				const {x} = control.getSize();
				const dist = 20;
				return new Point(x + dist, -dist);
			}
		});

		const o = new OriginControlNode({
			name:'o',
			getPosition(){
				const size = control.getSize();
				const {x, y} = shape.get('origin');
				return new Point(size.x * x, size.y * y);
			}
		});

		this.add([tl, tc, tr, ml, mr, bl, bc, br, a, o]);

		return this;

	}

}

export {
	TransformControl
};
