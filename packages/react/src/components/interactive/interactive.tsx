import {
	useRef,
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
	const ref: any = useRef();
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

	useEffect(() => {
		ref.current?.addEventListener('wheel', onMouseWheel);
		ref.current?.addEventListener('touchstart', onMouseDown);
		ref.current?.addEventListener('touchmove', onMouseMove);
		ref.current?.addEventListener('touchend', onMouseUp);
		return () => {
			ref.current?.removeEventListener('wheel', onMouseWheel);
			ref.current?.removeEventListener('touchstart', onMouseDown);
			ref.current?.removeEventListener('touchmove', onMouseMove);
			ref.current?.removeEventListener('touchend', onMouseUp);
		};
	}, []);

	return (
		<div
			ref={ref}
			className={className}
			onMouseDown={onMouseDown}
			onMouseMove={onMouseMove}
			onMouseUp={onMouseUp}
			onMouseLeave={onMouseUp} >
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
