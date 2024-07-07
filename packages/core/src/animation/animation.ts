import { Observable } from './../observable';
import { Collection } from './../mixins';

class Animation extends Collection(Observable) {
	public shape: any;

	private _isPlaying = false;
	private _startTime = 0;
	private _currentTime = 0;

	public play() {
		this._isPlaying = true;
		this._startTime = performance.now() - this._currentTime;
		requestAnimationFrame(this._render.bind(this));
	}

	public pause() {
		this._isPlaying = false;
	}

	public update() {
		this.eachChild((track) => {
			this.shape.set(track.property, track.getValue(this._currentTime));
		});
		this.trigger('updated', this.shape);
	}

	public seek(ms: number) {
		this._currentTime = ms;
		this.update();
	}

	private _render(timeStamp: number) {
		if (!this._isPlaying) return;

		this._currentTime = timeStamp - this._startTime;
		this.update();

		requestAnimationFrame(this._render.bind(this));
	}
}

export { Animation };
