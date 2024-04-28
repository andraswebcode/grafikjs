import {
	Control,
	ControlNode
} from './../';

class GradientControl extends Control {

	public constructor(params?){
		super();
		this.init(params);
		this.addClass('grafik-gradient-control');
	}

}

export {
	GradientControl
};
