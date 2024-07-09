import { AnimationBase } from './animation-base';
import { Collection } from './../mixins';
import { TimelineObject } from './../types';

class Timeline extends Collection(AnimationBase) {
	get animations() {
		return this.getChildren();
	}

	set animations(value) {}

	get duration() {
		const durs = this.mapChildren((child) => child.duration);
		return durs.length ? Math.max(...durs) : 0;
	}

	get time(): number {
		const longest = this.reduceChildren(
			(max, animation) => (animation.duration > max.duration ? animation : max),
			this.firstChild()
		);
		return this.childrenLength ? longest.time : 0;
	}

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

	public toJSON(): TimelineObject {
		return {
			animations: this.mapChildren((animation) => animation.toJSON())
		};
	}
}

export { Timeline };
