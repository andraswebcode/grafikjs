import { uniqueId } from './../utils';
import { Stateful } from './../mixins';
import { Observable } from './../observable';

class AnimationBase extends Stateful(Observable) {
	protected id = '';
	protected name = '';

	public createId() {
		if (!this.id) {
			this.id = uniqueId(this.name);
		}
	}

	toJSON() {
		return {};
	}
}

export { AnimationBase };
