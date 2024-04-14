import {
	ColorObject,
	ColorArray,
	AnyColor
} from './../types';

class Color implements ColorObject {

	public r = 0;
	public g = 0;
	public b = 0;
	public a = 1;

	constructor(r?: AnyColor|number, g?: number, b?: number, a?: number){
		this.set(r, g, b, a);
	}

	set(r?: AnyColor|number, g?: number, b?: number, a?: number) : Color {
		return this;
	}

	fromHEX(color: string) : Color {
		return this;
	}

	fromRGB(color: string) : Color {
		return this;
	}

	fromHSL(color: string) : Color {
		return this;
	}

	fromArray(color: ColorArray) : Color {
		return this;
	}

	fromObject(color: ColorObject) : Color {
		return this;
	}

	toHEX() : string {

		let r = this.r.toString(16);
		let g = this.g.toString(16);
		let b = this.b.toString(16);

		r = (r.length === 1) ? ('0' + r) : r;
		g = (g.length === 1) ? ('0' + g) : g;
		b = (b.length === 1) ? ('0' + b) : b;

		return '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();

	}

	toHEXA() : string {

		// @ts-ignore
		let a = parseInt(this.a * 255).toString(16);

		a = (a.length === 1) ? ('0' + a) : a;

		return this.toHEX() + a.toUpperCase();

	}

	toRGB() : string {

		const {r, g, b} = this;

		return `rgb(${r}, ${g}, ${b})`;

	}

	toRGBA() : string {

		const {r, g, b, a} = this;

		return `rgba(${r}, ${g}, ${b}, ${a})`;

	}

	toHSL() : string {
		return '';
	}

	toArray() : ColorArray {

		const {r, g, b, a} = this;

		return [r, g, b, a];

	}

	toObject() : ColorObject {

		const {r, g, b, a} = this;

		return {r, g, b, a};

	}

	public copy(color: Color) : Color {
		this.fromArray(color.toArray());
		return this;
	}

	public clone() : Color {
		return new Color().copy(this);
	}

}

export {
	Color
};
