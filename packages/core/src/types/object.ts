import type {
	AnyColor
} from './math';

type ColorStopObject = {
	color:AnyColor
};

interface GradientObject {
	colorStops:ColorStopObject[]
};

interface PatternObject {};

interface ClipPathObject {};

type FillStroke = AnyColor|GradientObject|PatternObject;

interface TransformObject {
	left:number;
	top:number;
	angle:number;
	scaleX:number;
	scaleY:number;
	skewX:number;
	skewY:number;
}

interface CanvasObject {
	width:number;
	height:number;
}

interface ShapeObject extends TransformObject {
	fill:FillStroke;
	stroke:FillStroke;
	strokeWidth:number;
	width?:number;
	height?:number;
	radius?:number;
}

export {
	ColorStopObject,
	GradientObject,
	PatternObject,
	ClipPathObject,
	FillStroke,
	TransformObject,
	CanvasObject,
	ShapeObject
};
