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

	public fromArray(curve: ParsedCurve, lastPoint: Point) {
		return this;
	}

	public toString(): string {
		const { command, rx, ry, xAxisRotation, largeArcFlag, sweepFlag, p1 } = this;
		return `${command} ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${p1.toString()}`;
	}
}

export { ArcCurve };
