import { Observable } from './../observable';
import { Collection } from './../mixins';
import { KeyframeObject, TrackObject } from './../types';
import { Keyframe } from './keyframe';

class Track extends Collection(Observable) {
	public property = '';
	public duration = 0;

	get keyframes() {
		return this.getChildren();
	}

	set keyframes(value) {}

	constructor(property: string) {
		super();
		this.property = property;
	}

	public addKeyframe(kf: KeyframeObject) {
		const keyframe = new Keyframe();
		this.add(keyframe);
		return keyframe;
	}

	public getValueAt(time: number) {}

	public toJSON(): TrackObject {
		return {
			property: '',
			keyframes: this.mapChildren((kf) => kf.toJSON())
		};
	}
}

export { Track };
