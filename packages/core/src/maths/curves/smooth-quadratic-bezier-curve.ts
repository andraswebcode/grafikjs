import { QuadraticBezierCurve } from './quadratic-bezier-curve';
import { Point } from './../point';
import { ParsedCurve, ParsedPath } from './../../types';

class SmoothQuadraticBezierCurve extends QuadraticBezierCurve {
	protected readonly command = 'T';

	public fromArray(curve: ParsedCurve, lastPoint: Point) {
		return this;
	}

	public toString(): string {
		return this.command + ' ' + this.p2.toString();
	}
}

export { SmoothQuadraticBezierCurve };
