import { LineCurve } from './line-curve';
import { Point } from './../point';
import { toFixed } from './../../utils';
import { ParsedCurve, ParsedPath } from './../../types';

class HorizontalLineCurve extends LineCurve {
	protected readonly command = 'H';

	public fromArray(curve: ParsedCurve, lastPoint: Point) {
		const isRelative = curve[0] === curve[0].toLowerCase();

		this.p0.copy(lastPoint);
		this.p1.copy(lastPoint).setX(curve[1]);

		if (isRelative) {
			this.p0.add(lastPoint);
			this.p1.add(lastPoint);
		}

		return this;
	}

	public toString(): string {
		return this.command + ' ' + toFixed(this.p1.x);
	}
}

export { HorizontalLineCurve };
