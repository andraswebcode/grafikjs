import {
	useMemo
} from 'react';
import {
	ShapeObject,
	getClassFromTagName
} from '@grafikjs/core';

import {
	useCanvas
} from './hooks';

const withCanvasContext = (Component, tagName) => (props:Partial<ShapeObject>) => {

	const canvas = useCanvas();
	const shape = useMemo(() => {
		const Shape = getClassFromTagName(tagName);
		// @ts-ignore
		const shape = new Shape();
		return shape;
	}, []);

	// @ts-ignore
	shape.set(props);

	return (
		<Component
			TagName={tagName}
			shape={shape} />
	);

};

export {
	withCanvasContext
};
