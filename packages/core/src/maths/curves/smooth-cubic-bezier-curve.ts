import { CubicBezierCurve } from './cubic-bezier-curve';
import { Point } from './../point';
import { ParsedCurve, ParsedPath } from './../../types';

class SmoothCubicBezierCurve extends CubicBezierCurve {
	protected readonly command = 'S';

	public fromArray(curve: ParsedCurve, index: number, path: ParsedPath) {
		const prevCurve = path[index - 1] || [];
		const prevLength = prevCurve.length;
		const isRelative = curve[0] === curve[0].toLowerCase();
		const isCorSCurve = ['C', 'c', 'S', 's'].includes(prevCurve[0]);
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

		if (isCorSCurve) {
			this.p1.copy(prevCurveEndPoint).multiplyScalar(2).subtract(prevCurveControlPoint);
		} else {
			console.warn('The previous command must be an other S, or C command.');
			this.p1.copy(prevCurveEndPoint);
		}

		this.p2.set(curve[1] || 0, curve[2] || 0);
		this.p3.set(curve[3] || 0, curve[4] || 0);

		if (isRelative) {
			for (let i = 0; i < 4; i++) {
				this['p' + i].add(prevCurveEndPoint);
			}
		}

		return this;
	}

	public toString(): string {
		return this.command + ' ' + this.p2.toString() + ' ' + this.p3.toString();
	}
}

export { SmoothCubicBezierCurve };
