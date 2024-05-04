import {
	Shape
} from './shape';
import {
	Point
} from './../maths';
import {
	TextControl
} from './../interactive';

// We use CanvasRenderingContext2D API to measure text size.
const CANVASCONTEXT = document.createElement('canvas').getContext('2d');

class Text extends Shape {

	protected tagName = 'text';
	private text = '';
	private fontFamily = 'Arial';
	private fontSize = 40;
	private fontWeight = 'normal';
	private x = 0;
	private y = 40;

	public constructor(params?){
		super();
		this.init(params);
		this.addControl('text', new TextControl({
			shape:this
		}));
	}

	protected getAttrMap() : string[] {
		return super.getAttrMap().concat([
			'x',
			'y',
			'fontFamily',
			'fontSize'
		]);
	}

	protected updateOthersWithKeys(keys){

		if (keys.includes('text') || keys.includes('fontFamily') || keys.includes('fontSize')){
			this.updateBBox();
		}
		if (keys.includes('fontSize')){
			this.y = this.fontSize;
		}

		return this;

	}

	public updateBBox(){
		this.bBox.fromSizeAndOrigin(this.getTextSize(), this.origin);
		return this;
	}

	public getTextSize() : Point {
		CANVASCONTEXT.font = `${this.fontSize}px ${this.fontFamily}`;
		const {
			width,
			fontBoundingBoxAscent,
			fontBoundingBoxDescent 
		} = CANVASCONTEXT.measureText(this.text);
		return new Point(width, fontBoundingBoxAscent + fontBoundingBoxDescent);
	}

}

export {
	Text
};
