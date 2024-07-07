import { Observable } from './../observable';

class Keyframe extends Observable {
	public duration = 0;
	public delay = 0;
	public easing = 'linear';
}

export { Keyframe };
