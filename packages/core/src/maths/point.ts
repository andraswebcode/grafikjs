import {
	PointObject
} from './../types';
import {
	clamp,
	deg2Rad
} from './../utils';

class Point implements PointObject {

	public x = 0;
	public y = 0;

	public constructor(x = 0, y = 0){
		this.set(x, y);
	}

	public set(x: number, y: number) : Point {
		this.x = x;
		this.y = y;
		return this;
	}

	public add(point: Point) : Point {
		this.x += point.x;
		this.y += point.y;
		return this;
	}

	public subtract(point: Point) : Point {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	}

	public multiply(point: Point) : Point {
		this.x *= point.x;
		this.y *= point.y;
		return this;
	}

	public divide(point: Point) : Point {
		this.x /= point.x;
		this.y /= point.y;
		return this;
	}

	public lerp(point: Point, t: number) : Point {

		t = clamp(t, 0, 1);

		this.x += (point.x - this.x) * t;
		this.y += (point.y - this.y) * t;

		return this;

	}

	public rotate(center: Point, angle: number) : Point {

		const theta = deg2Rad(angle);
		const cos = Math.cos(theta);
		const sin = Math.sin(theta);
		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * cos - y * sin + center.x;;
		this.y = x * sin + y * cos + center.y;;

		return this;

	}

	public copy(point: Point) : Point {
		this.set(point.x, point.y);
		return this;
	}

	public clone() : Point {
		return new Point().copy(this);
	}

}

export {
	Point
};
