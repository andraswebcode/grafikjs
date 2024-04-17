import {
	Canvas
} from '@grafikjs/core';
import {
	RenderableCanvas
} from './types';

class Renderer {

	private canvas: RenderableCanvas;

	public constructor(canvas: Canvas){
		this.canvas = canvas;
		this.canvas.element = document.createElementNS(canvas.xmlns, canvas.tagName);
	}

	appendTo(element: HTMLElement){
		element.appendChild(this.canvas.element);
		return this;
	}

}

export {
	Renderer
};
