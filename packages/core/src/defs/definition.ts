import { Element } from './../element';
import { Collection } from './../mixins';

class Definition extends Collection(Element) {
	public readonly isDefinition = true;
	public shape: any;

	public init(params) {
		this.set(params, true);
		this.createId(this.tagName);
		this.trigger('init', this);
	}

	protected getAttrMap(): string[] {
		return ['id'];
	}
}

export { Definition };
