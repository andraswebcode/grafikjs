import { AnimationObject } from './animation';
import { AnyColor } from './math';
import { DrawingToolName, ModeType } from './utils';

type ColorStopObject = {
	color: AnyColor;
};

interface ElementObject {
	id: string;
}

interface GradientObject extends ElementObject {
	colorStops: ColorStopObject[];
}

interface PatternObject extends ElementObject {}

interface ClipPathObject {}

type FillStroke = AnyColor | GradientObject | PatternObject;

type ParsedCurve = [string, number, number?, number?, number?, number?, number?, number?];

type ParsedPath = ParsedCurve[];

interface TransformObject {
	left: number;
	top: number;
	angle: number;
	scaleX: number;
	scaleY: number;
	skewX: number;
	skewY: number;
}

interface CanvasObject {
	width?: number;
	height?: number;
	drawingWidth?: number;
	drawingHeight?: number;
	zoom?: number;
	panX?: number;
	panY?: number;
	mode?: ModeType;
	drawingTool?: DrawingToolName;
	penWidth?: number;
	penColor?: AnyColor;
}

interface ShapeObject extends TransformObject, ElementObject {
	tagName: string;
	name: string;
	fill: FillStroke;
	stroke: FillStroke;
	strokeWidth: number;
	animation?: AnimationObject;
	width?: number;
	height?: number;
	r?: number;
	rx?: number;
	ry?: number;
	d?: string;
	points?: string;
}

interface GroupObject extends ShapeObject {
	children: any[];
}

export {
	ColorStopObject,
	GradientObject,
	PatternObject,
	ClipPathObject,
	FillStroke,
	ParsedCurve,
	ParsedPath,
	TransformObject,
	CanvasObject,
	ShapeObject,
	GroupObject
};
