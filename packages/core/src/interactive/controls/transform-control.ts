import {
	Control,
	AngleControlNode,
	OriginControlNode,
	ScaleControlNode
} from './../';
import {
	Point
} from './../../maths';

class TransformControl extends Control {

	public constructor(params?){
		super();
		this.init(params);
		this.addClass('grafik-transform-control');
	}

	public setNodes(){

		const control = this;
		const {
			shape
		} = control;

		// Create control nodes.
		const tl = new ScaleControlNode({
			name:'tl',
			axis:'',
			x:0,
			y:0
		});
		const tc = new ScaleControlNode({
			name:'tc',
			axis:'y',
			x:0.5,
			y:0
		});
		const tr = new ScaleControlNode({
			name:'tr',
			axis:'',
			x:1,
			y:0
		});

		const ml = new ScaleControlNode({
			name:'ml',
			axis:'x',
			x:0,
			y:0.5
		});
		const mr = new ScaleControlNode({
			name:'mr',
			axis:'x',
			x:1,
			y:0.5
		});

		const bl = new ScaleControlNode({
			name:'bl',
			axis:'',
			x:0,
			y:1
		});
		const bc = new ScaleControlNode({
			name:'bc',
			axis:'y',
			x:0.5,
			y:1
		});
		const br = new ScaleControlNode({
			name:'br',
			axis:'',
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
