import {
	ControlNode
} from './../control-node';

class ScaleControlNode extends ControlNode {

	protected _isDragging = false;

	public onPointerStart(e){
		this._isDragging = true;
	}

	public onPointerMove(e){

		if (!this._isDragging){
			return;
		}

	}

	public onPointerEnd(e){
		this._isDragging = false;
	}

}

export {
	ScaleControlNode
};
