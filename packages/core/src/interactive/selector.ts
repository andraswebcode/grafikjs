import {
	Element
} from './../element';
import {
	BBox,
	Point
} from './../maths';

const _min = new Point();
const _max = new Point();
const _size = new Point();

class Selector extends Element {

	protected readonly tagName = 'div';
	protected className = 'grafik-selector';

	public bBox = new BBox();

	public getAttributes() : object {
		const defaultAttributes = super.getAttributes();
		return {
			...defaultAttributes,
			'data-selector':true
		};
	}

	public getStyle() : object {

		const {min, max} = this.bBox;

		_min.minPoints(min, max);
		_max.maxPoints(min, max);
		_size.subtractPoints(_max, _min);

		return {
			left:_min.x,
			top:_min.y,
			width:_size.x,
			height:_size.y
		};

	}

}

export {
	Selector
};
