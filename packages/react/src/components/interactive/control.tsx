import {
	useState,
	useEffect,
	useCallback
} from 'react';

import {
	ControlNode
} from './';

const Control = ({
	control
}: any) => {

	const TagName = control.get('tagName');
	const [attributes, setAttributes] = useState(control.getAttributes());
	const [style, setStyle] = useState(control.getStyle());
	const onShapeSet = useCallback(() => {
		setAttributes(control.getAttributes());
		setStyle(control.getStyle());
	}, []);

	useEffect(() => {

		control.shape.on('set', onShapeSet);

		return () => {
			control.shape.off('set', onShapeSet);
		};

	}, []);

	return (
		<TagName
			{...attributes}
			style={style}
			onMouseDown={control.onPointerStart}
			onMouseMove={control.onPointerMove}
			onMouseUp={control.onPointerEnd} >
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
