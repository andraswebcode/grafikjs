import { Gradient } from './gradient';

class RadialGradient extends Gradient {
	protected readonly tagName = 'radialGradient';

	public constructor(params?) {
		super();
		this.init(params);
	}
}

export { RadialGradient };
