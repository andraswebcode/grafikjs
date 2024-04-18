import {
	Control,
	ControlNode
} from './';

class TransformControl extends Control {

	public setNodes(){
		this.addNode();
		return this;
	}

}

export {
	TransformControl
};
