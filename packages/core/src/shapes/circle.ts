import { Shape } from './shape';
import { Point } from './../maths';

class Circle extends Shape {
	protected readonly tagName = 'circle';
	private r = 0;
	private cx = 0;
	private cy = 0;

	public constructor(params?) {
		super();
		this.init(params);
	}

	protected getAttrMap(): string[] {
		return super.getAttrMap().concat(['r', 'cx', 'cy']);
	}

	protected updateOthersWithKeys(keys: string[]) {
		if (keys.includes('r')) {
			this.updateBBox();
			this.cx = this.r;
			this.cy = this.r;
		}

		return this;
	}

	public updateBBox() {
		this.bBox.fromSizeAndOrigin(new Point().addScalar(this.r * 2), this.origin);
		return this;
	}
}

export { Circle };
