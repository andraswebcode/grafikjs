import { AnimationBase } from './animation-base';
import { Collection } from './../mixins';
import { TimelineObject } from './../types';
import { Canvas } from './../canvas';

class Timeline extends Collection(AnimationBase) {
	public canvas: Canvas;

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

	get playing() {
		return this.someChildren((child) => child.playing);
	}

	public constructor(canvas: Canvas) {
		super();
		this.canvas = canvas;
		this.name = 'timeline';
		this.createId();
	}

	public play() {
		this.eachChild((child) => child.play());
		this.trigger('played', this.canvas);
		this.canvas.trigger('animation:played', this);
		return this;
	}

	public pause() {
		this.eachChild((child) => child.pause());
		this.trigger('paused', this.canvas);
		this.canvas.trigger('animation:paused', this);
		return this;
	}

	public seek(time: number) {
		this.eachChild((child) => child.seek(time));
		this.trigger('seeking', this.canvas);
		this.canvas.trigger('animation:seeking', this);
		return this;
	}

	public toJSON(): TimelineObject {
		return {
			animations: this.mapChildren((animation) => animation.toJSON())
		};
	}
}

export { Timeline };
