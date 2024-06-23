import {
	Canvas,
	Group,
	Rect,
	Circle,
	Ellipse,
	Path,
	Polygon,
	Polyline,
	Image,
	Text,
	TextPath,
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
	'polyline':Polyline,
	'image':Image,
	'text':Text,
	'text-path':TextPath
};

const DEFCLASSES = {
	'linearGradient':LinearGradient
};

export {
	CLASSES,
	DEFCLASSES
};
