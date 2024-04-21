import {
	Shape
} from './shape';
import {
	Collection
} from './../mixins';

class Group extends Collection(Shape) {

	protected readonly tagName = 'g';

	public constructor(params?){
		super();
		this.init(params);
	}

}

export {
	Group
};
