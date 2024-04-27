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
		const {
			dataset
		} = e.target;
		const isNode = ('controlNode' in dataset);
		const pointer = new Point(e.clientX - left, e.clientY - top);
		const founded = canvas.findLastChildByPointer(pointer);
		if (isNode){
			canvas.eachSelectedShape(shape => {
				shape.getControl().childById(dataset.id).onPointerStart(e);
			});
		} else {
			if (founded){
				if (!e.ctrlKey){
					canvas.releaseShapes();
				}
				canvas.selectShapes(founded);
			} else {
				canvas.releaseShapes();
			}
			canvas.eachSelectedShape(shape => {
				shape.getControl().onPointerStart(e);
			});
		}
		// Force rerender component here.
		dispatch();
	}, []);
	const onMouseMove = useCallback(e => {
		const {
			dataset
		} = e.target;
		if ('controlNode' in dataset){
			canvas.eachSelectedShape(shape => {
				shape.getControl().childById(dataset.id).onPointerMove(e);
			});
		} else {
			canvas.eachSelectedShape(shape => {
				shape.getControl().onPointerMove(e);
			});
		}
	}, []);
	const onMouseUp = useCallback(e => {
		const {
			dataset
		} = e.target;
		if ('controlNode' in dataset){
			canvas.eachSelectedShape(shape => {
				shape.getControl().childById(dataset.id).onPointerEnd(e);
			});
		} else {
			canvas.eachSelectedShape(shape => {
				shape.getControl().onPointerEnd(e);
			});
		}
	}, []);

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
