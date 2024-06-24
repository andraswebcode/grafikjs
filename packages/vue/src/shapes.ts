import { withCollectionContext } from './hocs';
import ShapeBase from './components/elements/ShapeBase.vue';

const Rect = withCollectionContext(ShapeBase, 'rect');
const Circle = withCollectionContext(ShapeBase, 'circle');
const Path = withCollectionContext(ShapeBase, 'path');
const Polygon = withCollectionContext(ShapeBase, 'polygon');
const Polyline = withCollectionContext(ShapeBase, 'polyline');
const Text = withCollectionContext(ShapeBase, 'text');
const Image = withCollectionContext(ShapeBase, 'image');

export { Rect, Circle, Path, Polygon, Polyline, Text, Image };
