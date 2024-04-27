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
		const {
			left,
			top
		} = e.currentTarget.getBoundingClientRect();
		const pointer = new Point(e.clientX - left, e.clientY - top);
		const founded = canvas.findLastChildByPointer(pointer);
		const method = founded ? 'selectShapes' : 'releaseShapes';
		if (method === 'selectShapes' && !e.ctrlKey){
			// Here we do not use dispatch to avoid multiple renders of this component.
			canvas.releaseShapes();
		}
		dispatch(method, founded);
	}, []);
	const onMouseMove = useCallback(e => {}, []);
	const onMouseUp = useCallback(e => {}, []);

	return (
		<div
			className={className}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp} >
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
