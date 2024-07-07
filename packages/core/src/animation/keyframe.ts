import { KeyframeObject } from './../types';
import { Observable } from './../observable';

class Keyframe extends Observable {
	public duration = 0;
	public delay = 0;
	public easing = 'linear';

	toJSON(): KeyframeObject {
		return {
			to: 0,
			value: 0
		};
	}
}

export { Keyframe };
