import {
	Shape
} from './shape';
import {
	Collection
} from './../mixins';
import {
	ShapeObject
} from './../types';

class Group extends Collection(Shape) implements ShapeObject {

	public readonly tagName = 'g';

	constructor(params){
		super();
		this.init(params);
	}

}

export {
	Group
};
