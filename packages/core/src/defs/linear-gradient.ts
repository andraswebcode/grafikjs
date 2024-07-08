import { Gradient } from './gradient';

class LinearGradient extends Gradient {
	protected readonly tagName = 'linearGradient';

	public constructor(params?) {
		super();
		this.init(params);
	}
}

export { LinearGradient };
