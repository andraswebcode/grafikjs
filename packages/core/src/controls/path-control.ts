import {
	Control,
	ControlNode
} from './';
import {
	CurvePath
} from './../maths';

class PathControl extends Control {

	protected path: CurvePath;

	public constructor(params?){
		super(params);
		this.addClass('grafik-path-control');
	}

	public setNodes(){

		const nodes = this.path.toPoints().map(position => new ControlNode({
			position
		}));

		this.setChildren(nodes);

		return this;

	}

}

export {
	PathControl
};
