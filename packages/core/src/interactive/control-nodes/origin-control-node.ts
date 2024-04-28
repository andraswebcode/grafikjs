import {
	ControlNode
} from './../control-node';

class OriginControlNode extends ControlNode {

	protected _isDragging = false;

	public constructor(params?){
		super();
		this.init(params);
	}

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
	OriginControlNode
};
