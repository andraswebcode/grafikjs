import {
	Element
} from './../element';
import {
	Collection
} from './../mixins';

class ClipPath extends Collection(Element) {

	protected readonly tagName = 'clipPath';

}

export {
	ClipPath
};
