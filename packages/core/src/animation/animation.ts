import { Observable } from './../observable';
import { Collection } from './../mixins';
import { AnimationObject, KeyframeObject, TrackObject } from './../types';
import { Track } from './track';

class Animation extends Collection(Observable) {
	public shape: any;

	private _isPlaying = false;
	private _startTime = 0;
	private _currentTime = 0;

	get tracks() {
		return this.getChildren();
	}

	set tracks(value) {}

	public play() {
		this._isPlaying = true;
		this._startTime = performance.now() - this._currentTime;
		requestAnimationFrame(this._render.bind(this));
	}

	public pause() {
		this._isPlaying = false;
		return this;
	}

	public update() {
		this.eachChild((track) => {
			this.shape.set(track.property, track.getValue(this._currentTime));
		});
		this.trigger('updated', this.shape);
		return this;
	}

	public seek(ms: number) {
		this._currentTime = ms;
		this.update();
		return this;
	}

	private _render(timeStamp: number) {
		if (!this._isPlaying) return;

		this._currentTime = timeStamp - this._startTime;
		this.update();

		requestAnimationFrame(this._render.bind(this));
	}

	public setTracks(objects: TrackObject[]) {
		const tracks = objects.map((obj) => this.addTrack(obj.property, obj.keyframes));
		console.log(tracks);
		this.setChildren(tracks);
		return this;
	}

	public addTrack(property: string, keyframes: KeyframeObject[]) {
		const track = new Track(property);
		keyframes.forEach((kf) => {
			track.addKeyframe(kf);
		});
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
