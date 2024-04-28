import {
	PointObject
} from './../types';
import {
	clamp,
	deg2Rad,
	rad2Deg
} from './../utils';
import {
	Matrix
} from './';

class Point {

	public x: number;
	public y: number;

	public constructor(x = 0, y = 0){
		this.set(x, y);
	}

	public set(x: number, y: number) : Point {
		this.x = x;
		this.y = y;
		return this;
	}

	public fromObject(object: PointObject) : Point {
		this.x = object.x;
		this.y = object.y;
		return this;
	}

	public toObject() : PointObject {
		return {
			x:this.x,
			y:this.y
		};
	}

	public fromString(point: string, separator = ', ') : Point {
		const array = point.split(separator).map(n => parseFloat(n));
		this.x = array[0];
		this.y = array[1];
		return this;
	}

	public toString(separator = ' ') : string {
		const array = [this.x, this.y];
		return array.join(separator);
	}

	public add(point: Point) : Point {
		this.x += point.x;
		this.y += point.y;
		return this;
	}

	public addScalar(scale: number) : Point {
		this.x += scale;
		this.y += scale;
		return this;
	}

	public addPoints(p1: Point, p2: Point) : Point {
		this.x = p1.x + p2.x;
		this.y = p1.y + p2.y;
		return this;
	}

	public subtract(point: Point) : Point {
		this.x -= point.x;
		this.y -= point.y;
		return this;
	}

	public subtractScalar(scale: number) : Point {
		this.x -= scale;
		this.y -= scale;
		return this;
	}

	public subtractPoints(p1: Point, p2: Point) : Point {
		this.x = p1.x - p2.x;
		this.y = p1.y - p2.y;
		return this;
	}

	public multiply(point: Point) : Point {
		this.x *= point.x;
		this.y *= point.y;
		return this;
	}

	public multiplyScalar(scale: number) : Point {
		this.x *= scale;
		this.y *= scale;
		return this;
	}

	public multiplyPoints(p1: Point, p2: Point) : Point {
		this.x = p1.x * p2.x;
		this.y = p1.y * p2.y;
		return this;
	}

	public divide(point: Point) : Point {
		this.x /= point.x;
		this.y /= point.y;
		return this;
	}

	public divideScalar(scale: number) : Point {
		this.x /= scale;
		this.y /= scale;
		return this;
	}

	public dividePoints(p1: Point, p2: Point) : Point {
		this.x = p1.x / p2.x;
		this.y = p1.y / p2.y;
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

	public angleTo(point: Point) : number {
		return rad2Deg(Math.atan2(point.y - this.y, point.x - this.x));
	}

	public distanceTo(point: Point) : number {
		const dx = this.x - point.x;
		const dy = this.y - point.y;
		return Math.sqrt(dx ** 2 + dy ** 2);
	}

	public transform(matrix: Matrix) : Point {

		const {x, y} = this;
		const {a, b, c, d, tx, ty} = matrix;

		this.x = a * x + c * y + tx;
		this.y = b * x + d * y + ty;

		return this;

	}

	public min(point: Point) : Point {
		this.x = Math.min(this.x, point.x);
		this.y = Math.min(this.y, point.y);
		return this;
	}

	public max(point: Point) : Point {
		this.x = Math.max(this.x, point.x);
		this.y = Math.max(this.y, point.y);
		return this;
	}

	public abs() : Point {
		this.x = Math.abs(this.x);
		this.y = Math.abs(this.y);
		return this;
	}

	public clamp(min: Point, max: Point) : Point {
		this.x = clamp(this.x, min.x, max.x);
		this.y = clamp(this.y, min.y, max.y);
		return this;
	}

	public isEqual(point: Point) : boolean {
		return (this.x === point.x && this.y === point.y);
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
