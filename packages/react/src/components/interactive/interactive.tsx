import {
	useState,
	useCallback
} from 'react';
import {
	Point
} from '@grafikjs/core';

import {
	Control
} from './';
import {
	useCanvas,
	useCanvasReducer
} from './../../hooks';

const Interactive = ({
	className = 'grafik-interactive',
	children
}: any) => {

	const {canvas, dispatch}: any = useCanvasReducer();
	const shapes = canvas.getSelectedShapes();

	const onMouseDown = useCallback(e => {
		e.preventDefault();
		canvas.onPointerStart(e);
		dispatch();
	}, []);
	const onMouseMove = useCallback(e => {
		canvas.onPointerMove(e);
	}, []);
	const onMouseUp = useCallback(e => {
		canvas.onPointerEnd(e);
	}, []);
	const onWheel = useCallback(e => {
		canvas.onWheel(e);
	}, []);

	return (
		<div
			className={className}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseUp}
			onWheel={onWheel} >
			{shapes.map(shape => (
				<Control
					key={shape.id}
					control={shape.getControl()} />
			))}
			{children}
		</div>
	);

};

export {
	Interactive
};
