import {
	ControlNode
} from './';

const Control = ({
	control
}: any) => {

	const TagName = control.get('tagName');

	return (
		<TagName
			{...control.getAttributes()}
			style={control.getStyle()} >
			{control.mapChildren(node => (
				<ControlNode
					key={node.id}
					node={node} />
			))}
		</TagName>
	);

};

export {
	Control
};
