const ControlNode = ({
	node
}: any) => {

	const TagName = node.get('tagName');

	return (
		<TagName {...node.getAttributes()}>
		</TagName>
	);

};

export {
	ControlNode
};
