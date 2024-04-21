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
		this.addClass('grafik-path-control');console.log(this)
	}

	public setNodes(){

		const nodes = this.path.mapCurves(curve => {
			return new ControlNode();
		});console.log(nodes, this.path)

		this.setChildren(...nodes);

		return this;

	}

}

export {
	PathControl
};
