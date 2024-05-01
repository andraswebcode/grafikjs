import {
	withCollectionContext
} from './../../hocs';
import {
	ShapeBase
} from './shape-base';

const Rect = withCollectionContext(ShapeBase, 'rect');
const Circle = withCollectionContext(ShapeBase, 'circle');
const Ellipse = withCollectionContext(ShapeBase, 'ellipse');
const Path = withCollectionContext(ShapeBase, 'path');
const Polygon = withCollectionContext(ShapeBase, 'polygon');
const Polyline = withCollectionContext(ShapeBase, 'polyline');
const Image = withCollectionContext(ShapeBase, 'image');

export {
	Rect,
	Circle,
	Ellipse,
	Path,
	Polygon,
	Polyline,
	Image
};
