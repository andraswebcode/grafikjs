import { Observable } from './../observable';
import { Collection } from './../mixins';

class Track extends Collection(Observable) {
	public property = '';
	public duration = 0;

	constructor(property: string) {
		super();
		this.property = property;
	}

	public getValue(time: number) {}
}

export { Track };
