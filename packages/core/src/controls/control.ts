import {
	Element
} from './../element';
import {
	Collection
} from './../mixins';

class Control extends Collection(Element) {

	protected readonly tagName = 'div';

	public constructor(){
		super();
		this.setNodes();
	}

	public setNodes(){
		console.warn('setNodes() must be implemented by subclass.');
		return this;
	}

	public getNodes() : any[] {
		return [];
	}

	public getLines() : any[] {
		return [];
	}

}

export {
	Control
};
