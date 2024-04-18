import {
	ControlNode
} from './';

class Control {

	protected nodes: ControlNode[] = [];

	public constructor(){
		this.setNodes();
	}

	public setNodes(){
		console.warn('setNodes() must be implemented by subclass.');
		return this;
	}

	public getNodes() : ControlNode[] {
		return this.nodes;
	}

	public addNode(...nodes: ControlNode[]){
		this.nodes.push(...nodes);
		return this;
	}

}

export {
	Control
};
