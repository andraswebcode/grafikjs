import { Observable } from './../observable';
import { Collection } from './../mixins';
import { TrackObject } from './../types';

class Track extends Collection(Observable) implements TrackObject {
	public property = '';
	public duration = 0;
}

export { Track };
