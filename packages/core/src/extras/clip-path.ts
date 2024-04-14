import {
	Element
} from './../element';
import {
	Collection
} from './../mixins';
import {
	ClipPathObject
} from './../types';

class ClipPath extends Collection(Element) implements ClipPathObject {

	public readonly tagName = 'clipPath';

}

export {
	ClipPath
};
