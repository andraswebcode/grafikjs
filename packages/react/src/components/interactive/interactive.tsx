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
			onMouseUp={e => {}} >
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
