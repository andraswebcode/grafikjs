import { Curve, Point } from './../';
import { deg2Rad, toFixed } from './../../utils';
import { ParsedCurve, ParsedPath } from './../../types';

class ArcCurve extends Curve {
	protected readonly command = 'A';

	public p0: Point;
	public p1: Point;
	public rx: number;
	public ry: number;
	public xAxisRotation: number;
	public largeArcFlag: number;
	public sweepFlag: number;

	public constructor(
		p0 = new Point(),
		rx = 0,
		ry = 0,
		xAxisRotation = 0,
		largeArcFlag = 0,
		sweepFlag = 0,
		p1 = new Point()
	) {
		super();
		this.p0 = p0;
		this.p1 = p1;
		this.rx = rx;
		this.ry = ry;
		this.xAxisRotation = xAxisRotation;
		this.largeArcFlag = largeArcFlag;
		this.sweepFlag = sweepFlag;
	}

	public getPoint(t: number): Point {
		return new Point();
	}

	public fromArray(curve: ParsedCurve, index: number, path: ParsedPath) {
		const prevCurve = path[index - 1] || [];
		const prevLength = prevCurve.length;
		const length = curve.length;

		// @ts-ignore
		this.p0.set(prevCurve[prevLength - 2], prevCurve[prevLength - 1]);
		this.rx = curve[1];
		this.ry = curve[2] || 0;
		this.xAxisRotation = curve[3] || 0;
		this.largeArcFlag = curve[4] || 0;
		this.sweepFlag = curve[5] || 0;
		this.p1.set(curve[6] || 0, curve[7] || 0);

		return this;
	}

	public toString(): string {
		const { command, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, p1 } = this;
		return `${command} ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${p1.toString()}`;
	}
}

export { ArcCurve };
