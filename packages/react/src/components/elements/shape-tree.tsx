import { ShapeBase } from './shape-base';
import { Group } from './group';
import { withCollectionContext } from './../../hocs';

const Shape = ({ tagName, children, ...props }: any) => {
	const Component = tagName === 'g' ? Group : withCollectionContext(ShapeBase, tagName);

	return (
		<Component {...props}>
			{children?.map((child) => (
				<Shape key={child.id} {...child} />
			))}
		</Component>
	);
};

const ShapeTree = ({ json = [] }) => {
	return json.map((shape) => <Shape key={shape.id} {...shape} />);
};

export { ShapeTree };
