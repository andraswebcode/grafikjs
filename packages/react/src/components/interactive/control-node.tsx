const ControlNode = ({
	node
}: any) => {

	const TagName = node.get('tagName');

	return (
		<TagName
			{...node.getAttributes()}
			style={node.getStyle()} >
		</TagName>
	);

};

export {
	ControlNode
};
