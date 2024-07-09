import { Rect } from './rect';
import { ImageLoader } from './../loaders';

class Image extends Rect {
	protected readonly tagName = 'image';
	private href = '';

	private loader = new ImageLoader();

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
