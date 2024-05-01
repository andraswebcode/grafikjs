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
	useCanvas
} from './../../hooks';

const Interactive = ({
	className = 'grafik-interactive',
	children
}: any) => {

	const canvas: any = useCanvas();
	const [shapes, setShapes] = useState([]);

	const onMouseDown = useCallback(e => {
		e.preventDefault();
		canvas.onPointerStart(e);
		setShapes(canvas.getSelectedShapes());
	}, []);
	const onMouseMove = useCallback(e => {
		canvas.onPointerMove(e);
	}, []);
	const onMouseUp = useCallback(e => {
		canvas.onPointerEnd(e);
	}, []);
	const onWheel = useCallback(e => {
		// canvas.onWheel(e);
	}, []);

	return (
		<div
			className={className}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseUp}
			onWheel={onWheel} >
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
