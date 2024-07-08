import { AnimationBase } from './animation-base';
import { Collection } from './../mixins';
import { KeyframeObject, TrackObject } from './../types';
import { Keyframe } from './keyframe';

class Track extends Collection(AnimationBase) {
	public property = '';
	public originalValue: any = 0;

	get keyframes() {
		return this.getChildren();
	}

	set keyframes(value) {}

	constructor(property: string, originalValue: any, keyframes: KeyframeObject[]) {
		super();
		this.property = property;
		this.originalValue = originalValue;
		keyframes?.forEach((kf) => {
			this.addKeyframe(kf);
		});
	}

	public addKeyframe(kf: KeyframeObject) {
		const prevKf = this.lastChild();
		const from = prevKf ? prevKf.to : 0;
		const startValue = prevKf ? prevKf.endValue : this.originalValue;
		const keyframe = new Keyframe(from, kf.to, startValue, kf.value, kf.easing);
		this.add(keyframe);
		return keyframe;
	}

	public getValueAt(time: number): any {
		if (!this.childrenLength) {
			return null;
		}
		return 0;
	}

	public toJSON(): TrackObject {
		return {
			property: this.property,
			originalValue: this.originalValue,
			keyframes: this.mapChildren((kf) => kf.toJSON())
		};
	}
}

export { Track };
