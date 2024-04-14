import {
	Gradient
} from './gradient';
import {
	GradientObject
} from './../types';

class LinearGradient extends Gradient implements GradientObject {

	public readonly tagName = 'linearGradient';

}

export {
	LinearGradient
};
