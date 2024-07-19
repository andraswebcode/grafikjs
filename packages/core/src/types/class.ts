import {
	Circle,
	Ellipse,
	Group,
	Image,
	Path,
	Polygon,
	Polyline,
	Rect,
	Text,
	TextPath
} from './../shapes';

type ShapeType =
	| Rect
	| Circle
	| Ellipse
	| Group
	| Path
	| Polygon
	| Polyline
	| Text
	| TextPath
	| Image;

export { ShapeType };
