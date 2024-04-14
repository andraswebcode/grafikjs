import {
	withCanvasContext
} from './../hocs';

const ShapeBase = ({
	shape,
	TagName
}) => (
	<g {...shape.getWrapperAttributes()} >
		<TagName
			{...shape.getAttributes()} />
	</g>
);

const Rect = withCanvasContext(ShapeBase, 'rect');

export {
	Rect
};
