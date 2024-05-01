import {
	withCollectionContext
} from './../../hocs';
import {
	ShapeBase
} from './shape-base';

const TextBase = ({
	children,
	...props
}: any) => {
	return (
		<ShapeBase {...props}>
			{props.props.text}
		</ShapeBase>
	);
};

const ReactText = withCollectionContext(TextBase, 'text');

export {
	ReactText as Text
};
