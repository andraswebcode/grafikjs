import {
	Canvas,
	Group,
	Rect,
	Circle,
	Ellipse,
	Path,
	Polygon,
	Polyline,
	LinearGradient
} from '@grafikjs/core';

const CLASSES = {
	'svg':Canvas,
	'g':Group,
	'rect':Rect,
	'circle':Circle,
	'ellipse':Ellipse,
	'path':Path,
	'polygon':Polygon,
	'polyline':Polyline
};

const DEFCLASSES = {
	'linearGradient':LinearGradient
};

export {
	CLASSES,
	DEFCLASSES
};
