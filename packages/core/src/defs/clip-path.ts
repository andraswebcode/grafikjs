import {
	Definition
} from './definition';

class ClipPath extends Definition {

	protected readonly tagName = 'clipPath';

	public constructor(params?){
		super();
		this.init(params);
	}

}

export {
	ClipPath
};
