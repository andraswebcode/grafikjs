import { CubicBezierCurve } from './cubic-bezier-curve';
import { Point } from './../point';
import { ParsedCurve, ParsedPath } from './../../types';

class SmoothCubicBezierCurve extends CubicBezierCurve {
	protected readonly command = 'S';

	public fromArray(curve: ParsedCurve, lastPoint: Point, prevCurve: ParsedCurve) {
		const isRelative = curve[0] === curve[0].toLowerCase();
		const isCorSCurve = ['C', 'c', 'S', 's'].includes(prevCurve[0]);
		const lastControlPoint = new Point(
			// @ts-ignore
			prevCurve[prevCurve.length - 4],
			// @ts-ignore
			prevCurve[prevCurve.length - 3]
		);

		this.p0.copy(lastPoint);

		if (isCorSCurve) {
			this.p1.copy(lastPoint).multiplyScalar(2).subtract(lastControlPoint);
		} else {
			console.warn('The previous command must be an other S, or C command.');
			this.p1.copy(lastPoint);
		}

		this.p2.set(curve[1] || 0, curve[2] || 0);
		this.p3.set(curve[3] || 0, curve[4] || 0);

		if (isRelative) {
			for (let i = 1; i < 4; i++) {
				this['p' + i].add(lastPoint);
			}
		}

		return this;
	}

	public toString(): string {
		return this.command + ' ' + this.p2.toString() + ' ' + this.p3.toString();
	}
}

export { SmoothCubicBezierCurve };
