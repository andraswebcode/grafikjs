import { Point } from './point';
import { BBox } from './bbox';
import { ParsedPath, ParsedCurve } from './../types';

const _point = new Point();

class Curve {
	protected command = '';
	private _bBox = new BBox();

	public getPoint(t: number): Point {
		console.warn('getPoint() must be implemented by subclass.');
		return new Point();
	}

	public getPoints(divisions = 10): Point[] {
		const points = [];

		for (let d = 0; d <= divisions; d++) {
			// @ts-ignore
			points.push(this.getPoint(d / divisions));
		}

		return points;
	}

	public updateBBox(): Curve {
		this._bBox.fromPoints(this.getPoints());
		return this;
	}

	public getBBox(): BBox {
		return this._bBox;
	}

	public fromArray(curve: ParsedCurve, index: number, path: ParsedPath): Curve {
		const prevCurve = path[index - 1] || [];
		const prevLength = prevCurve.length;
		const length = curve.length;
		const isRelative = curve[0] === curve[0].toLowerCase();
		const prevCurveEndPoint = new Point(
			// @ts-ignore
			prevCurve[prevLength - 2],
			// @ts-ignore
			prevCurve[prevLength - 1]
		);
		let point, i, p;

		// @ts-ignore
		if (this.p0) {
			if (this.command === 'M') {
				// @ts-ignore
				this.p0.set(curve[1], curve[2]);
			} else {
				// @ts-ignore
				this.p0.copy(prevCurveEndPoint);
			}
		}

		for (i = 0, p = 1; i < length - 1; i += 2, p++) {
			if ((point = this['p' + p])) {
				point.set(curve[i + 1], curve[i + 2]);
				if (isRelative) {
					point.add(prevCurveEndPoint);
				}
			}
		}

		return this;
	}

	public toString(): string {
		const points = [];
		let n = this.command === 'M' ? 0 : 1;

		while (this['p' + n]) {
			// @ts-ignore
			points.push(this['p' + n].toString());
			n++;
		}

		return this.command + ' ' + points.join(' ');
	}

	public translate(x: number, y: number): Curve {
		let n = 0;

		while (this['p' + n]) {
			this['p' + n].add(_point.set(x, y));
			n++;
		}

		return this;
	}
}

export { Curve };
