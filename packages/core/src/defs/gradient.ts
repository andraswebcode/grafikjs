import {
	Definition,
	ColorStop
} from './';

class Gradient extends Definition {

	set colorStops(value: ColorStop[]){
		const colorStops = value.map(stop => new ColorStop(stop));
		this.setChildren(colorStops, true);
	}

	get colorStops() : ColorStop[] {
		return this.getChildren();
	}

}

export {
	Gradient
};
