import {
	Element
} from './../element';
import {
	ElementCollection
} from './../mixins';

class Definition extends ElementCollection(Element) {

	public readonly isDefinition = true;
	public shape: any;

	public init(params){
		this.set(params, true);
		this.createId(this.tagName);
		this.trigger('init', this);
	}

	protected getAttrMap() : string[] {
		return [
			'id'
		];
	}

}

export {
	Definition
};
