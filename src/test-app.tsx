import {
	useState,
	Fragment
} from 'react';
import {
	CanvasProvider,
	Canvas,
	Rect,
	Interactive
} from '@grafikjs/react';

const TestApp = () => {

	const [left, setLeft] = useState(400);
	const [top, setTop] = useState(400);
	const [angle, setAngle] = useState(0);

	return (
		<Fragment>
			<CanvasProvider>
				<div>
					<Canvas
						width={1200}
						height={800} >
						<Rect
							left={left}
							top={top}
							angle={angle}
							width={200}
							height={200}
							stroke='black'
							strokeWidth={2}
							fill='none' />
					</Canvas>
					<Interactive />
				</div>
			</CanvasProvider>
			<label>
				Left:
				<input
					type='number'
					value={left}
					onChange={e => setLeft(parseInt(e.target.value) || 0)} />
			</label>
			<label>
				Top:
				<input
					type='number'
					value={top}
					onChange={e => setTop(parseInt(e.target.value) || 0)} />
			</label>
			<label>
				Angle:
				<input
					type='number'
					value={angle}
					onChange={e => setAngle(parseInt(e.target.value) || 0)} />
			</label>
		</Fragment>
	);

};

export {
	TestApp
};
