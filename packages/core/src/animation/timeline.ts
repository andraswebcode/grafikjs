import { Observable } from './../observable';
import { Collection } from './../mixins';

class Timeline extends Collection(Observable) {
	get animations() {
		return this.getChildren();
	}

	set animations(value) {}
}

export { Timeline };
