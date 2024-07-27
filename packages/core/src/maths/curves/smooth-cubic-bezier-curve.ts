import { CubicBezierCurve } from './cubic-bezier-curve';
import { Point } from './../point';
import { ParsedCurve, ParsedPath } from './../../types';

class SmoothCubicBezierCurve extends CubicBezierCurve {
	protected readonly command = 'S';

	public fromArray(curve: ParsedCurve, lastPoint: Point) {
		return this;
	}

	public toString(): string {
		return this.command + ' ' + this.p2.toString() + ' ' + this.p3.toString();
	}
}

export { SmoothCubicBezierCurve };
