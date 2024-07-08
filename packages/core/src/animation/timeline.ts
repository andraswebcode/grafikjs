import { AnimationBase } from './animation-base';
import { Collection } from './../mixins';

class Timeline extends Collection(AnimationBase) {
	get animations() {
		return this.getChildren();
	}

	set animations(value) {}

	public constructor() {
		super();
		this.name = 'timeline';
		this.createId();
	}

	public play() {
		this.eachChild((child) => child.play());
		return this;
	}

	public pause() {
		this.eachChild((child) => child.pause());
		return this;
	}

	public seek(time: number) {
		this.eachChild((child) => child.seek(time));
		return this;
	}
}

export { Timeline };
