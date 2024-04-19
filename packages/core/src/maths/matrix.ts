import {
	MatrixObject,
	MatrixArray,
	TransformObject
} from './../types';
import {
	deg2Rad
} from './../utils';

class Matrix {

	public a = 1;
	public b = 0;
	public c = 0;
	public d = 1;
	public tx = 0;
	public ty = 0;

	public fromArray(matrix: MatrixArray) : Matrix {

		this.a = matrix[0];
		this.b = matrix[1];
		this.c = matrix[2];
		this.d = matrix[3];
		this.tx = matrix[4];
		this.ty = matrix[5];

		return this;

	}

	public fromObject(object: MatrixObject) : Matrix {

		this.a = object.a;
		this.b = object.b;
		this.c = object.c;
		this.d = object.d;
		this.tx = object.tx;
		this.ty = object.ty;

		return this;

	}

	public fromOptions(object: TransformObject) : Matrix {

		const {
			left,
			top,
			angle,
			scaleX,
			scaleY,
			skewX,
			skewY
		} = object;

		this.reset();
		this.translate(left, top);
		this.rotate(angle);
		this.scaleX(scaleX);
		this.scaleY(scaleY);
		this.skewX(skewX);
		this.skewY(skewY);

		return this;

	}

	public fromCSS(value: string) : Matrix {
		const array = value.replace('matrix(', '').replace(')', '').split(' ').map(parseFloat);
		// @ts-ignore
		this.fromArray(array);
		return this;
	}

	public toArray() : MatrixArray {

		return [this.a, this.b, this.c, this.d, this.tx, this.ty];

	}

	public toObject() : MatrixObject {

		return {
			a:this.a,
			b:this.b,
			c:this.c,
			d:this.d,
			tx:this.tx,
			ty:this.ty
		};

	}

	public toOptions() : TransformObject {

		return {
			left:0,
			top:0,
			angle:0,
			scaleX:0,
			scaleY:0,
			skewX:0,
			skewY:0
		};

	}

	public toCSS() : string {

		const array = this.toArray().join(', ');

		return `matrix(${array})`;

	}

	public translate(tx: number, ty: number) : Matrix {

		this.tx = tx;
		this.ty = ty;

		return this;

	}

	public rotate(angle: number) : Matrix {

		if (!angle){
			return this;
		}

		const theta = deg2Rad(angle);
		const cos = Math.cos(theta);
		const sin = Math.sin(theta);
		const m = new Matrix().fromArray([cos, sin, -sin, cos, 0, 0]);

		return this.multiply(m);

	}

	public scale(sx: number, sy?: number) : Matrix {

		if (typeof sx === 'undefined'){
			return this;
		}

		if (typeof sy === 'undefined') sy = sx;

		const m = new Matrix().fromArray([sx, 0, 0, sy, 0, 0]);

		return this.multiply(m);

	}

	public scaleX(scale: number) : Matrix {

		if (typeof scale === 'undefined'){
			return this;
		}

		const m = new Matrix().fromArray([scale, 0, 0, 1, 0, 0]);

		return this.multiply(m);

	}

	public scaleY(scale: number) : Matrix {

		if (typeof scale === 'undefined'){
			return this;
		}

		const m = new Matrix().fromArray([1, 0, 0, scale, 0, 0]);

		return this.multiply(m);

	}

	public skewX(angle: number) : Matrix {

		if (!angle){
			return this;
		}

		const theta = deg2Rad(angle);

		const m = new Matrix().fromArray([1, 0, Math.tan(theta), 1, 0, 0]);

		return this.multiply(m);

	}

	public skewY(angle: number) : Matrix {

		if (!angle){
			return this;
		}

		const theta = deg2Rad(angle);

		const m = new Matrix().fromArray([1, Math.tan(theta), 0, 1, 0, 0]);

		return this.multiply(m);

	}

	public multiply(m: Matrix) : Matrix {

		const a = this.a * m.a + this.c * m.b;
		const b = this.b * m.a + this.d * m.b;
		const c = this.a * m.c + this.c * m.d;
		const d = this.b * m.c + this.d * m.d;
		const tx = this.a * m.tx + this.c * m.ty + this.tx;
		const ty = this.b * m.tx + this.d * m.ty + this.ty;

		return this.fromObject({a, b, c, d, tx, ty});

	}

	public reset() : Matrix {

		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.tx = 0;
		this.ty = 0;

		return this;

	}

	public copy(matrix: Matrix) : Matrix {
		return this.fromArray(matrix.toArray());
	}

	public clone() : Matrix {
		return new Matrix().copy(this);
	}

}

export {
	Matrix
};
