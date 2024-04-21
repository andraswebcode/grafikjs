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

	return (
		<div
			className={className}
			onMouseDown={e => {}}
			onMouseMove={e => {}}
			onMouseUp={e => {}}
			onClick={e => {
				const founded = canvas.findLastChildByPointer(new Point(e.clientX, e.clientY));
				const method = founded ? 'selectShapes' : 'releaseShapes';
				if (method === 'selectShapes' && !e.ctrlKey){
					// Here we do not use dispatch to avoid multiple renders of this component.
					canvas.releaseShapes();
				}
				dispatch(method, founded);
			}} >
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
