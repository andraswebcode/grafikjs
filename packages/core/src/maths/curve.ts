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
		const length = curve.length;
		const isRelative = curve[0] === curve[0].toLowerCase();
		const lastPoint = this._getLastCurveEndPoint(path, index);
		let point, i, p;

		// @ts-ignore
		if (this.p0) {
			if (this.command === 'M') {
				// @ts-ignore
				this.p0.set(curve[1], curve[2]);
			} else {
				// @ts-ignore
				this.p0.copy(lastPoint);
			}
		}

		for (i = 0, p = 1; i < length - 1; i += 2, p++) {
			if ((point = this['p' + p])) {
				point.set(curve[i + 1], curve[i + 2]);
				if (isRelative) {
					point.add(lastPoint);
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

	protected _getLastCurveEndPoint(path: ParsedPath, index: number): Point {
		let x = 0;
		let y = 0;
		let xSet = false;
		let ySet = false;
		let _i = index,
			_curve;

		// Walking through the path array backward, and pick up the first x, or y value.
		// And stops at the curve, that is not V, or H. So, the curve.length is not equals to 2.
		while (path[_i--].length === 2) {
			_curve = path[_i];
			switch (_curve[0]) {
				case 'H':
				case 'h':
					if (!xSet) {
						x = _curve[1];
						xSet = true;
					}
					break;
				case 'V':
				case 'v':
					if (!ySet) {
						y = _curve[1];
						ySet = true;
					}
					break;
				default:
					if (!xSet) {
						// @ts-ignore
						x = _curve[_curve.length - 2];
						xSet = true;
					}
					if (!ySet) {
						// @ts-ignore
						y = _curve[_curve.length - 1];
						ySet = true;
					}
					break;
			}
		}

		return new Point(x, y);
	}
}

export { Curve };
