import {
	useMemo
} from 'react';
import {
	Canvas
} from '@grafikjs/core';

import {
	CanvasContext
} from './../contexts';

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
	CanvasProvider
};
