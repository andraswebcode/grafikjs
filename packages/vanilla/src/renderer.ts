import {
	Canvas
} from '@grafikjs/core';

import {
	kebabize
} from './utils';

class Renderer {

	private canvas: any;
	private xmlns: string;
	private canvasElement: SVGElement;
	private elements = {};
	private renderControls = false;

	public constructor(canvas: Canvas, options = {}){

		this.canvas = canvas;
		this.xmlns = canvas.get('xmlns');
		this.createCanvasElement();
		this.appendShapes();

	}

	public createCanvasElement(){
		// @ts-ignore
		this.canvasElement = document.createElementNS(this.xmlns, this.canvas.get('tagName'));
		this.setAttributes(this.canvasElement, this.canvas.getAttributes());
		this.canvas.eachShape(this.createShapeElement.bind(this));
		return this;
	}

	public createShapeElement(object: any){

		const wrapper = document.createElementNS(this.xmlns, 'g');
		const shape = document.createElementNS(this.xmlns, object.tagName);
		const id = object.get('id');

		this.setAttributes(wrapper, object.getWrapperAttributes());
		this.setAttributes(shape, object.getAttributes());

		wrapper.appendChild(shape);

		this.elements[id] = {
			id,
			wrapper,
			shape,
			object
		};

		// @ts-ignore
		if (object.isCollection){
			// @ts-ignore
			object.eachShape(this.createShapeElement.bind(this));
		}

		return this;

	}

	public appendShapes(){

		const canvasElement = this.canvasElement;
		const elements = this.elements;

		for (let id in elements){
			const element = elements[id];
			const {
				object,
				wrapper
			} = element;
			const parent = object.get('parent');
			if (parent.isCanvas){
				canvasElement.appendChild(wrapper);
			} else {
				const parentId = parent.get('id');
				const parentElement = elements[parentId];
				parentElement.shape.appendChild(wrapper);
			}
			this.bindEvents(element);
		}

		return this;

	}

	public setOptions(options){
		for (let key in options){
			this[key] = options[key];
		}
		return this;
	}

	public appendTo(element: HTMLElement){

		element.appendChild(this.canvasElement);

		return this;

	}

	public setAttributes(element: Element, attributes: Object){

		let key, value;

		for (key in attributes){
			value = attributes[key];
			element.setAttribute(kebabize(key), value);
		}

		return this;

	}

	public bindEvents({
		object,
		wrapper,
		shape
	}){

		object.on('set', () => {
			this.setAttributes(wrapper, object.getWrapperAttributes());
			this.setAttributes(shape, object.getAttributes());
		});

		return this;

	}

}

export {
	Renderer
};
