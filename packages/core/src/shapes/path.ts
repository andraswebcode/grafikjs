import { Shape } from './shape';
import { CurvePath } from './../maths';
import { PathControl } from './../interactive';

class Path extends Shape {
	protected readonly tagName = 'path';
	private d: string;

	private path = new CurvePath();

	public constructor(params?) {
		super();
		this.init(params);
		this.addControl(
			'path',
			new PathControl({
				shape: this,
				path: this.path
			})
		);
	}

	public getAttributes(makeKebabeCase?: boolean): object {
		const defaultAttributes = super.getAttributes(makeKebabeCase);
		return {
			...defaultAttributes,
			d: this.path.toString()
		};
	}

	protected updateOthersWithKeys(keys) {
		if (keys.includes('d')) {
			this.path.fromString(this.d).adjust();
			this.updateBBox();
		}

		return this;
	}

	public updateBBox() {
		this.bBox.fromSizeAndOrigin(this.path.updateBBox().getBBox().getSize(), this.origin);
		return this;
	}

	public getPath() {
		return this.path;
	}
}

export { Path };
