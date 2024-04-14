import {
	useMemo,
	useContext
} from 'react';
import {
	Canvas
} from '@grafikjs/core';

import {
	CanvasContext
} from './../contexts';

const ReactCanvas = ({
	children
}) => {

	const canvas = useContext(CanvasContext);

	return (
		// @ts-ignore
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
			<ReactCanvas>
				{children}
			</ReactCanvas>
		</CanvasContext.Provider>
	);

};

export {
	CanvasProvider
};
