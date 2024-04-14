import {
	Gradient
} from './gradient';
import {
	GradientObject
} from './../types';

class RadialGradient extends Gradient implements GradientObject {

	public readonly tagName = 'radialGradient';

}

export {
	RadialGradient
};
