import { Rect } from './rect';
import { ImageLoader } from './../loaders';
import { Point } from './../maths';

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
		this.loader.fromURL(src).onLoad(({ width, height }) =>
			this.set({
				width,
				height
			})
		);

		return this;
	}

	protected getAttrMap(): string[] {
		return super.getAttrMap().concat(['href']);
	}
}

export { Image };
