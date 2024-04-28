import {
	Control,
	ControlNode
} from './../';
import {
	CurvePath
} from './../../maths';

class PathControl extends Control {

	protected path: CurvePath;

	public constructor(params?){
		super();
		this.init(params);
		this.addClass('grafik-path-control');
	}

	public setNodes(){
		return this;
	}

}

export {
	PathControl
};
