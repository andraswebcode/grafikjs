import {
	useMemo,
	useEffect
} from 'react';
import {
	ShapeObject,
	getClassFromTagName
} from '@grafikjs/core';

import {
	useCanvas
} from './hooks';

const withCanvasContext = (Component, tagName) => (props:Partial<ShapeObject>) => {

	const canvas: any = useCanvas();
	const shape = useMemo(() => {
		const Shape = getClassFromTagName(tagName);
		const shape = new Shape();
		return shape;
	}, []);

	useEffect(() => {
		canvas.add(shape);
		return () => {
			canvas.remove(shape);
		};
	}, []);

	shape.set(props);

	return (
		<Component
			TagName={tagName}
			shape={shape}
			onMouseMove={e => console.log(e)} />
	);

};

export {
	withCanvasContext
};
