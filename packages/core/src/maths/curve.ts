import {
	Point
} from './point';
import {
	toFixed
} from './../utils';

class Curve {

	protected command = '';

	public getPoint(t: number) : Point {
		console.warn('getPoint() must be implemented by subclass.');
		return new Point();
	}

	public getPoints(divisions = 10) : Point[] {

		const points = [];

		for (let d = 0; d <= divisions; d++){
			// @ts-ignore
			points.push(this.getPoint(d / divisions));
		}

		return points;

	}

	public fromString(string: string, prevString = '') : Curve {

		const prevValues = (prevString.match(/[\-\.\d]+/g) || []).map(n => toFixed(n));
		const values = (string.match(/[\-\.\d]+/g) || []).map(n => toFixed(n));
		const prevLength = prevValues.length;
		const length = values.length;
		let point;

		// @ts-ignore
		if (this.p0){
			if (this.command === 'M'){
				// @ts-ignore
				this.p0.set(values[0], values[1]);
			} else {
				// @ts-ignore
				this.p0.set(prevValues[prevLength - 2], prevValues[prevLength - 1]);
			}
		}

		for (let i = 0, p = 1; i < length - 1; i += 2, p++){
			if (point = this['p' + p]){
				point.set(values[i], values[i + 1]);
			}
		}

		return this;

	}

	public toString() : string {

		const points = [];
		let n = this.command === 'M' ? 0 : 1;

		while (this['p' + n]){
			// @ts-ignore
			points.push(this['p' + n].toString());
			n++;
		}

		return this.command + ' ' + points.join(' ');

	}

}

export {
	Curve
};
