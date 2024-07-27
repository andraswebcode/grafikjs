import { QuadraticBezierCurve } from './quadratic-bezier-curve';
import { Point } from './../point';
import { ParsedCurve, ParsedPath } from './../../types';

class SmoothQuadraticBezierCurve extends QuadraticBezierCurve {
	protected readonly command = 'T';

	public fromArray(curve: ParsedCurve, lastPoint: Point, prevCurve: ParsedCurve) {
		const isRelative = curve[0] === curve[0].toLowerCase();
		const isQorTCurve = ['Q', 'q', 'T', 't'].includes(prevCurve[0]);
		const lastControlPoint = new Point(
			// @ts-ignore
			prevCurve[prevLength - 4],
			// @ts-ignore
			prevCurve[prevLength - 3]
		);

		this.p0.copy(lastPoint);

		if (isQorTCurve) {
			this.p1.copy(lastPoint).multiplyScalar(2).subtract(lastControlPoint);
		} else {
			console.warn('The previous command must be an other T, or Q command.');
			this.p1.copy(lastPoint);
		}

		this.p2.set(curve[1] || 0, curve[2] || 0);

		if (isRelative) {
			for (let i = 1; i < 3; i++) {
				this['p' + i].add(lastPoint);
			}
		}

		return this;
	}

	public toString(): string {
		return this.command + ' ' + this.p2.toString();
	}
}

export { SmoothQuadraticBezierCurve };
