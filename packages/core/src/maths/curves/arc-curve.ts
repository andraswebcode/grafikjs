import {
	Curve,
	Point
} from './../';
import {
	deg2Rad,
	toFixed
} from './../../utils';

class ArcCurve extends Curve {

	protected readonly command = 'A';

	public p0: Point;
	public p1: Point;
	public rx: number;
	public ry: number;
	public xAxisRotation: number;
	public largeArcFlag: number;
	public sweepFlag: number;

	public constructor(p0 = new Point(), rx = 0, ry = 0, xAxisRotation = 0, largeArcFlag = 0, sweepFlag = 0, p1 = new Point()){
		super();
		this.p0 = p0;
		this.p1 = p1;
		this.rx = rx;
		this.ry = ry;
		this.xAxisRotation = xAxisRotation;
		this.largeArcFlag = largeArcFlag;
		this.sweepFlag = sweepFlag;
	}

	public getPoint(t: number) : Point {
		return new Point();
	}

	public fromString(string: string, prevString = ''){

		const prevValues = (prevString.match(/[\-\.\d]+/g) || []).map(n => toFixed(n));
		const values = (string.match(/[\-\.\d]+/g) || []).map(n => toFixed(n));
		const prevLength = prevValues.length;

		this.p0.set(prevValues[prevLength - 2], prevValues[prevLength - 1]);
		this.rx = values[0];
		this.ry = values[1];
		this.xAxisRotation = values[2];
		this.largeArcFlag = values[3];
		this.sweepFlag = values[4];
		this.p1.set(values[5], values[6]);

		return this;

	}

	public toString() : string {
		const {
			command,
			rx,
			ry,
			xAxisRotation,
			largeArcFlag,
			sweepFlag,
			p1
		} = this;
		return `${command} ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${p1.toString()}`;
	}

}

export {
	ArcCurve
};
