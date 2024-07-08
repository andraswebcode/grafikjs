import { Easings } from './../types/animation';

const easings: Easings = {
	linear: (k) => k,
	quadraticIn: (k) => k * k,
	quadraticOut: (k) => 1 - Math.pow(1 - k, 2),
	quadraticInOut: (k) => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2),
	cubicIn: (k) => k * k * k,
	cubicOut: (k) => 1 - Math.pow(1 - k, 3),
	cubicInOut: (k) => (k < 0.5 ? 4 * Math.pow(k, 3) : 1 - Math.pow(-2 * k + 2, 3) / 2),
	bounceIn: (k) => 1 - easings.bounceOut(1 - k),
	bounceOut: (k) => {
		const n1 = 7.5625;
		const d1 = 2.75;
		if (k < 1 / d1) {
			return n1 * k * k;
		} else if (k < 2 / d1) {
			return n1 * (k -= 1.5 / d1) * k + 0.75;
		} else if (k < 2.5 / d1) {
			return n1 * (k -= 2.25 / d1) * k + 0.9375;
		} else {
			return n1 * (k -= 2.625 / d1) * k + 0.984375;
		}
	},
	bounceInOut: (k) =>
		k < 0.5 ? (1 - easings.bounceOut(1 - 2 * k)) / 2 : (1 + easings.bounceOut(2 * k - 1)) / 2,
	backIn: (k) => 2.70158 * Math.pow(k, 3) - 1.70158 * Math.pow(k, 2),
	backOut: (k) => 1 + 2.70158 * Math.pow(k - 1, 3) + 1.70158 * Math.pow(k - 1, 2)
};

export default easings;
