import { QuadraticBezierCurve } from './quadratic-bezier-curve';
import { Point } from './../point';
import { ParsedCurve, ParsedPath } from './../../types';

class SmoothQuadraticBezierCurve extends QuadraticBezierCurve {
	protected readonly command = 'T';

	public fromArray(curve: ParsedCurve, index: number, path: ParsedPath) {
		const prevCurve = path[index - 1] || [];
		const prevLength = prevCurve.length;
		const isRelative = curve[0] === curve[0].toLowerCase();
		const isQorTCurve = ['Q', 'q', 'T', 't'].includes(prevCurve[0]);
		const prevCurveEndPoint = new Point(
			// @ts-ignore
			prevCurve[prevLength - 2],
			// @ts-ignore
			prevCurve[prevLength - 1]
		);
		const prevCurveControlPoint = new Point(
			// @ts-ignore
			prevCurve[prevLength - 4],
			// @ts-ignore
			prevCurve[prevLength - 3]
		);

		this.p0.copy(prevCurveEndPoint);

		if (isQorTCurve) {
			this.p1.copy(prevCurveEndPoint).multiplyScalar(2).subtract(prevCurveControlPoint);
		} else {
			console.warn('The previous command must be an other T, or Q command.');
			this.p1.copy(prevCurveEndPoint);
		}

		this.p2.set(curve[1] || 0, curve[2] || 0);

		if (isRelative) {
			for (let i = 0; i < 4; i++) {
				this['p' + i].add(prevCurveEndPoint);
			}
		}

		return this;
	}

	public toString(): string {
		return this.command + ' ' + this.p2.toString();
	}
}

export { SmoothQuadraticBezierCurve };
