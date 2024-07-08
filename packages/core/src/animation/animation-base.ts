import { uniqueId } from './../utils';
import { Stateful } from './../mixins';
import { Observable } from './../observable';

class AnimationBase extends Stateful(Observable) {
	protected id = '';
	protected name = '';

	public createId(prefix?: string) {
		if (!this.id) {
			this.id = uniqueId(prefix);
		}
	}

	toJSON() {
		return {};
	}
}

export { AnimationBase };
