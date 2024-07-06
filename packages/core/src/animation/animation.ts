import { Observable } from './../observable';
import { Collection } from './../mixins';

class Animation extends Collection(Observable) {
	public shape: any;

	public play() {}

	public pause() {}

	public seek(ms: number) {}

	private _render(timeStamp: number) {}
}

export { Animation };
