import { AnimationBase } from './animation-base';
import { Collection } from './../mixins';

class Timeline extends Collection(AnimationBase) {
	get animations() {
		return this.getChildren();
	}

	set animations(value) {}
}

export { Timeline };
