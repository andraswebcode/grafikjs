import {
	Shape
} from './shape';
import {
	ImageLoader
} from './../loaders';
import {
	Point
} from './../maths';

class Image extends Shape {

	protected readonly tagName = 'image';
	private href = '';
	private width = 0;
	private height = 0;

	private loader = new ImageLoader();

	public constructor(params?){
		super();
		this.init(params);
		this.setImage(this.href);
	}

	protected setImage(src: string){

		this.loader.fromURL(src).onLoad(({
			width,
			height
		}) => this.set({
			width,
			height
		}));

		return this;

	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'href',
			'width',
			'height'
		]);
	}

	protected updateOthersWithKeys(keys){

		if (keys.includes('width') || keys.includes('height')){
			this.updateBBox();
		}

		return this;

	}

	public updateBBox(){
		this.bBox.fromSizeAndOrigin(new Point(this.width, this.height), this.origin);
		return this;
	}

}

export {
	Image
};
