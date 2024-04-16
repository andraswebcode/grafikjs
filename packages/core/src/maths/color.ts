import {
	ColorObject,
	ColorArray,
	AnyColor
} from './../types';

class Color {

	private r = 0;
	private g = 0;
	private b = 0;
	private a = 1;

	public constructor(r?: AnyColor|number, g?: number, b?: number, a?: number){
		this.set(r, g, b, a);
	}

	public set(r?: AnyColor|number, g?: number, b?: number, a?: number) : Color {
		return this;
	}

	public fromHEX(color: string) : Color {

		const match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

		if (match){
			this.r = parseInt(match[1], 16);
			this.g = parseInt(match[2], 16);
			this.b = parseInt(match[3], 16);
			this.a = (typeof match[4] !== 'undefined') ? parseFloat(match[4]) : 1;
		}

		return this;

	}

	public fromRGB(color: string) : Color {

		const match = color.match(/^rgba?\(\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)\s*,\s*(\d{1,3}(?:\.\d+)?)\s*(?:\s*,\s*((?:\d*\.?\d+)?)\s*)?\)$/i);

		if (match){
			this.r = parseInt(match[1], 10);
			this.g = parseInt(match[2], 10);
			this.b = parseInt(match[3], 10);
			this.a = (typeof match[4] !== 'undefined') ? parseFloat(match[4]) : 1;
		}

		return this;

	}

	public fromHSL(color: string) : Color {
		return this;
	}

	public fromArray(color: ColorArray) : Color {

		this.r = color[0];
		this.g = color[1];
		this.b = color[2];
		this.a = color[3];

		return this;

	}

	public fromObject(color: ColorObject) : Color {

		this.r = color.r;
		this.g = color.g;
		this.b = color.b;
		this.a = color.a;

		return this;

	}

	public toHEX() : string {

		let r = this.r.toString(16);
		let g = this.g.toString(16);
		let b = this.b.toString(16);

		r = (r.length === 1) ? ('0' + r) : r;
		g = (g.length === 1) ? ('0' + g) : g;
		b = (b.length === 1) ? ('0' + b) : b;

		return '#' + r.toUpperCase() + g.toUpperCase() + b.toUpperCase();

	}

	public toHEXA() : string {

		// @ts-ignore
		let a = parseInt(this.a * 255).toString(16);

		a = (a.length === 1) ? ('0' + a) : a;

		return this.toHEX() + a.toUpperCase();

	}

	public toRGB() : string {

		const {r, g, b} = this;

		return `rgb(${r}, ${g}, ${b})`;

	}

	public toRGBA() : string {

		const {r, g, b, a} = this;

		return `rgba(${r}, ${g}, ${b}, ${a})`;

	}

	public toHSL() : string {
		return '';
	}

	public toArray() : ColorArray {

		const {r, g, b, a} = this;

		return [r, g, b, a];

	}

	public toObject() : ColorObject {

		const {r, g, b, a} = this;

		return {r, g, b, a};

	}

	public copy(color: Color) : Color {
		return this.fromArray(color.toArray());
	}

	public clone() : Color {
		return new Color().copy(this);
	}

}

export {
	Color
};
