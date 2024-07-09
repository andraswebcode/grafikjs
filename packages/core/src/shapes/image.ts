import { Rect } from './rect';

class Image extends Rect {
	protected readonly tagName = 'image';
	private href = '';

	public constructor(params?) {
		super();
		this.init(params);
		this.setImage(this.href);
	}

	protected setImage(src: string) {
		return this;
	}

	protected getAttrMap(): string[] {
		return super.getAttrMap().concat(['href']);
	}
}

export { Image };
