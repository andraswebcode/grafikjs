import { KeyframeObject } from './../types';
import { Observable } from './../observable';

class Keyframe extends Observable implements KeyframeObject {
	public duration = 0;
	public delay = 0;
	public easing = 'linear';
}

export { Keyframe };
