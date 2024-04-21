import {
	withCanvasContext
} from './../hocs';

const ShapeBase = ({
	shape,
	TagName,
	...props
}) => (
	<g {...shape.getWrapperAttributes()} >
		<TagName
			{...shape.getAttributes()}
			{...props} />
	</g>
);

const Rect = withCanvasContext(ShapeBase, 'rect');
const Circle = withCanvasContext(ShapeBase, 'circle');
const Ellipse = withCanvasContext(ShapeBase, 'ellipse');
const Path = withCanvasContext(ShapeBase, 'path');
const Polygon = withCanvasContext(ShapeBase, 'polygon');
const Polyline = withCanvasContext(ShapeBase, 'polyline');

export {
	Rect,
	Circle,
	Ellipse,
	Path,
	Polygon,
	Polyline
};
