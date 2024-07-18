import { AnimationBase } from './animation-base';
import { Collection } from './../mixins';
import { AnimationObject, KeyframeObject, TrackObject } from './../types';
import { Track } from './track';
import { Timeline } from './timeline';
import { clamp } from './../utils';

class Animation extends Collection(AnimationBase) {
	// Iteration count, or true for infinity.
	public loop: true | number = 1;
	public direction: 'normal' | 'reverse' | 'alternate' = 'normal';
	public speed = 1;

	protected shape: any;
	protected parent: Timeline;

	private _isPlaying = false;
	private _startTime = 0;
	private _currentTime = 0;
	private _loopCount = 1;
	private _directionMultiplier = 1;

	get tracks() {
		return this.getChildren();
	}

	set tracks(value) {}

	get duration() {
		const durs = this.mapChildren((child) => child.duration);
		return durs.length ? Math.max(...durs) : 0;
	}

	get time() {
		return this._currentTime;
	}

	get playing() {
		return this._isPlaying;
	}

	public constructor(shape: any) {
		super();
		this.shape = shape;
		this.name = 'animation';
		this.createId();
		if (this.direction === 'reverse') {
			this._directionMultiplier = -1;
		}
	}

	public play() {
		if (this._isPlaying) {
			return this;
		}

		this._isPlaying = true;
		this._startTime = performance.now() - this._currentTime / this.speed;
		requestAnimationFrame(this._render.bind(this));
		this.trigger('played', this.shape);
		this.shape.trigger('animation:played', this);
		this.shape.canvas.trigger('shapes:animation:played', this, this.shape);
		return this;
	}

	public pause() {
		this._isPlaying = false;
		this.trigger('paused', this.shape);
		this.shape.trigger('animation:paused', this);
		this.shape.canvas.trigger('shapes:animation:paused', this, this.shape);
		return this;
	}

	public seek(time: number) {
		this._currentTime = time;
		this.trigger('seeking', this.shape);
		this.shape.trigger('animation:seeking', this);
		this.shape.canvas.trigger('shapes:animation:seeking', this, this.shape);
		this._update();
		return this;
	}

	private _render(timeStamp: number) {
		if (!this._isPlaying) return;

		const ellapsed = (timeStamp - this._startTime) * this.speed;
		const adjusted = this._directionMultiplier === 1 ? ellapsed : this.duration - ellapsed;

		this._currentTime = clamp(adjusted, 0, this.duration);

		this._update();

		if (
			(this._directionMultiplier === 1 && this._currentTime < this.duration) ||
			(this._directionMultiplier === -1 && this._currentTime > 0)
		) {
			requestAnimationFrame(this._render.bind(this));
		} else {
			if (this.loop === true || this._loopCount < this.loop) {
				this._loopCount++;
				this._startTime = performance.now();
				if (this.direction === 'alternate') {
					this._directionMultiplier *= -1;
					this._currentTime = this._directionMultiplier === 1 ? 0 : this.duration;
				} else if (this.direction === 'reverse') {
					this._currentTime = this.duration;
				} else {
					this._currentTime = 0;
				}
				requestAnimationFrame(this._render.bind(this));
			} else {
				this._isPlaying = false;
				this._startTime = 0;
				// this._currentTime = 0;
				this.trigger('completed', this.shape);
				this.shape.trigger('animation:completed', this);
				this.shape.canvas.trigger('shapes:animation:completed', this, this.shape);
				// Check if this animation is the longest,
				// and if so only then trigger for optimizing performance.
				// @see Timeline.protoype.duration
				if (this.duration === this.parent.duration) {
					this.parent.trigger('completed', this.parent.canvas);
					this.parent.canvas.trigger('animation:completed', this.parent);
				}
			}
		}
	}

	private _update() {
		this.eachChild((track) => {
			const value = track.getValueAt(this._currentTime);
			if (value !== null) {
				this.shape.set(track.property, value, true);
			}
		});
		this.trigger('updated', this.shape);
		this.shape.trigger('animation:updated', this);
		this.shape.canvas.trigger('shapes:animation:updated', this, this.shape);
		// Check if this animation is the longest,
		// and if so only then trigger for optimizing performance.
		// @see Timeline.protoype.duration
		if (this.duration === this.parent.duration) {
			this.parent.trigger('updated', this.parent.canvas);
			this.parent.canvas.trigger('animation:updated', this.parent);
		}
	}

	public setTracks(objects: TrackObject[]) {
		const tracks = objects.map((obj) => this.addTrack(obj.property, obj.keyframes));
		this.setChildren(tracks);
		return this;
	}

	public addTrack(property: string, keyframes: KeyframeObject[]) {
		const track = new Track(property, this.shape.get(property), keyframes);
		this.add(track);
		return track;
	}

	public toJSON(): AnimationObject {
		return {
			tracks: this.mapChildren((track) => track.toJSON())
		};
	}
}

export { Animation };
