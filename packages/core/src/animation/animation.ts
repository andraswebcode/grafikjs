import { AnimationBase } from './animation-base';
import { Collection, Stateful } from './../mixins';
import { AnimationObject, KeyframeObject, TrackObject } from './../types';
import { Track } from './track';

class Animation extends Collection(AnimationBase) {
	protected shape: any;

	private _isPlaying = false;
	private _startTime = 0;
	private _currentTime = 0;

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
	}

	public play() {
		if (this._isPlaying) {
			return this;
		}

		this._isPlaying = true;
		this._startTime = performance.now() - this._currentTime;
		requestAnimationFrame(this._render.bind(this));
		this.trigger('played', this.shape);
		this.shape.trigger('animation:played', this);
		return this;
	}

	public pause() {
		this._isPlaying = false;
		this.trigger('paused', this.shape);
		this.shape.trigger('animation:paused', this);
		return this;
	}

	public seek(time: number) {
		this._currentTime = time;
		this._update();
		return this;
	}

	private _render(timeStamp: number) {
		if (!this._isPlaying) return;

		this._currentTime = timeStamp - this._startTime;
		this._update();

		if (this._currentTime <= this.duration) {
			requestAnimationFrame(this._render.bind(this));
		} else {
			this._isPlaying = false;
			this._startTime = 0;
			this._currentTime = 0;
			this.trigger('completed', this.shape);
			this.shape.trigger('animation:completed', this);
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
