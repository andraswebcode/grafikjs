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

	const canvas = useCanvas();

	// @ts-ignore
	canvas.set(props);

	return (
		// @ts-ignore
		<svg {...canvas.getAttributes()}>
			{children}
		</svg>
	);

};

const CanvasProvider = ({
	children
}) => {

	const canvas = useMemo(() => new Canvas(), []);

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
