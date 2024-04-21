import {
	useMemo,
	useEffect
} from 'react';
import * as core from '@grafikjs/core';

import {
	useCanvas
} from './hooks';

const withCanvasContext = (Component, tagName) => (props:Partial<core.ShapeObject>) => {

	const canvas: any = useCanvas();
	const shape = useMemo(() => {
		const Shape = core[core.CLASSNAMES[tagName]];
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
