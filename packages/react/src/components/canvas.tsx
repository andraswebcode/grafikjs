import {
	useMemo,
	useEffect
} from 'react';
import {
	Canvas
} from '@grafikjs/core';

import {
	CanvasContext
} from './../contexts';
import {
	useCanvas
} from './../hooks';

const ReactCanvas = ({
	children,
	...props
}) => {

	const canvas: any = useCanvas();

	canvas.set(props);

	return (
		<svg {...canvas.getAttributes()}>
			{children}
		</svg>
	);

};

const CanvasProvider = ({
	children,
	...props
}) => {

	const canvas = useMemo(() => new Canvas(props), []);

	return (
		<CanvasContext.Provider value={canvas}>
			{children}
		</CanvasContext.Provider>
	);

};

export {
	ReactCanvas as Canvas,
	CanvasProvider
};
