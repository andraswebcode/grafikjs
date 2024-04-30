import {
	Definition
} from './definition';

class Pattern extends Definition {

	protected readonly tagName = 'pattern';

	public constructor(params?){
		super();
		this.init(params);
	}

}

export {
	Pattern
};
