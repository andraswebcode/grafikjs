import {
	useState,
	useEffect,
	useCallback
} from 'react';

// This component should be optimized,
// because it renders twice, when it gets new props.

const ShapeBase = ({
	shape,
	TagName,
	props,
	children
}) => {

	const [wrapperAttributes, setWrapperAttributes] = useState(shape.getWrapperAttributes());
	const [attributes, setAttributes] = useState(shape.getAttributes());
	const onShapeSet = useCallback(() => {
		setWrapperAttributes(shape.getWrapperAttributes());
		setAttributes(shape.getAttributes());
		props.onChange?.(shape);
	}, [props]);

	useEffect(() => {

		shape.on('set', onShapeSet);

		return () => {
			shape.off('set', onShapeSet);
		};

	}, []);

	useEffect(() => {
		// How to optimize this?
		// When we set silent to true, the component can't updated from props.
		// When we leave it false, the component updated two times.
		shape.set(props/* , true */);
	}, [props]);

	return (
		<g {...wrapperAttributes} >
			<TagName {...attributes} >
				{children}
			</TagName>
		</g>
	);

};

export {
	ShapeBase
};
