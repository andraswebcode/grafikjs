import { withCollectionContext } from './hocs';
import ShapeBase from './components/elements/ShapeBase.vue';

const Rect = withCollectionContext(ShapeBase, 'rect');
const Circle = withCollectionContext(ShapeBase, 'circle');
const Path = withCollectionContext(ShapeBase, 'path');

export { Rect, Circle, Path };
