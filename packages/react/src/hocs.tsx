import {
	useMemo,
	useContext
} from 'react';
import {
	Importer,
	ShapeObject
} from '@grafikjs/core';

import {
	CanvasContext
} from './contexts';

const withCanvasContext = (Component, tagName) => (props:Partial<ShapeObject>) => {

	const canvas = useContext(CanvasContext);
	const shape = useMemo(() => {
		const Shape = Importer.getClassFromTagName(tagName);
		// @ts-ignore
		const shape = new Shape(props);
		return shape;
	}, []);

	return (
		<Component
			TagName={tagName}
			shape={shape} />
	);

};

export {
	withCanvasContext
};
