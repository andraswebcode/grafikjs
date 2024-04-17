import {
	Canvas,
	Shape
} from '@grafikjs/core';

interface RenderableElement {
	element?:Element
}

interface RenderableCanvas extends RenderableElement, Canvas {}

interface RenderableShape extends RenderableElement, Canvas {}

export {
	RenderableElement,
	RenderableCanvas,
	RenderableShape
};
