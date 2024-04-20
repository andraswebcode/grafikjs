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
const Path = withCanvasContext(ShapeBase, 'path');

export {
	Rect,
	Circle,
	Path
};
