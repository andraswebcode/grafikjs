import {
	useState,
	Fragment
} from 'react';
import {
	CanvasProvider,
	Canvas,
	Rect,
	Circle,
	Wrapper,
	Interactive
} from '@grafikjs/react';

const TestApp = () => {

	const [left, setLeft] = useState(400);
	const [top, setTop] = useState(400);
	const [angle, setAngle] = useState(0);
	const [scaleX, setScaleX] = useState(1);
	const [scaleY, setScaleY] = useState(1);
	const [skewX, setSkewX] = useState(0);
	const [skewY, setSkewY] = useState(0);
	const [sw, setSw] = useState(12);

	return (
		<Fragment>
			<CanvasProvider
				width={1200}
				height={800} >
				<Wrapper>
					<Canvas>
						<Rect
							left={left}
							top={top}
							angle={angle}
							scaleX={scaleX}
							scaleY={scaleY}
							skewX={skewX}
							skewY={skewY}
							width={200}
							height={200}
							stroke='black'
							strokeWidth={sw}
							fill='none' />
						<Circle
							left={200}
							top={200}
							r={40}
							stroke='black'
							strokeWidth={2}
							fill='none' />
					</Canvas>
					<Interactive />
				</Wrapper>
			</CanvasProvider>
			<label>
				Left:
				<input
					type='number'
					value={left}
					onChange={e => setLeft(parseInt(e.target.value) || 0)}
					step={10} />
			</label>
			<label>
				Top:
				<input
					type='number'
					value={top}
					onChange={e => setTop(parseInt(e.target.value) || 0)}
					step={10} />
			</label>
			<label>
				Angle:
				<input
					type='number'
					value={angle}
					onChange={e => setAngle(parseInt(e.target.value) || 0)} />
			</label>
			<label>
				ScaleX:
				<input
					type='number'
					value={scaleX}
					onChange={e => setScaleX(parseFloat(e.target.value) || 0)}
					step={0.1} />
			</label>
			<label>
				ScaleY:
				<input
					type='number'
					value={scaleY}
					onChange={e => setScaleY(parseFloat(e.target.value) || 0)}
					step={0.1} />
			</label>
			<label>
				SkewX:
				<input
					type='number'
					value={skewX}
					onChange={e => setSkewX(parseInt(e.target.value) || 0)} />
			</label>
			<label>
				SkewY:
				<input
					type='number'
					value={skewY}
					onChange={e => setSkewY(parseInt(e.target.value) || 0)} />
			</label>
			<label>
				Stroke Width:
				<input
					type='number'
					value={sw}
					onChange={e => setSw(parseInt(e.target.value) || 0)} />
			</label>
		</Fragment>
	);

};

export {
	TestApp
};
