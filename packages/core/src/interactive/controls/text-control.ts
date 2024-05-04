import {
	Control,
	ControlNode
} from './../';

class TextControl extends Control {

	public constructor(params?){
		super();
		this.init(params);
		this.addClass('grafik-text-control');
	}

}

export {
	TextControl
};
