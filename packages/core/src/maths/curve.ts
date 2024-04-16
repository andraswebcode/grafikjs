import {
	Point
} from './'

class Curve {

	public getPoint(t: number) : Point {
		return new Point();
	}

	public getPoints(divisions = 10) : Point[] {
		return [];
	}

}

export {
	Curve
};
