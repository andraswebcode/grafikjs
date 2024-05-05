import {
	useState,
	useEffect,
	useCallback
} from 'react';
import {
	Point
} from '@grafikjs/core';

import {
	Control
} from './';
import {
	useCanvas
} from './../../hooks';

const Interactive = ({
	className = 'grafik-interactive',
	children
}: any) => {

	const {
		shapes,
		onPointerStart,
		onPointerMove,
		onPointerEnd,
		onWheel
	} : any = useCanvas(canvas => ({
		shapes:canvas.getSelectedShapes(),
		onPointerStart:canvas.onPointerStart.bind(canvas),
		onPointerMove:canvas.onPointerMove.bind(canvas),
		onPointerEnd:canvas.onPointerEnd.bind(canvas),
		onWheel:canvas.onWheel.bind(canvas)
	}), 'shapes:selection:updated');

	const onMouseDown = useCallback(e => {
		e.preventDefault();
		onPointerStart(e);
	}, []);
	const onMouseMove = useCallback(e => {
		onPointerMove(e);
	}, []);
	const onMouseUp = useCallback(e => {
		onPointerEnd(e);
	}, []);
	const onMouseWheel = useCallback(e => {
		onWheel(e);
	}, []);

	return (
		<div
			className={className}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseUp}
			onWheel={onMouseWheel} >
			{shapes.map((shape: any) => (
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
