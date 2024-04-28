import {
	useState,
	Fragment
} from 'react';
import {
	CanvasProvider,
	Canvas,
	Group,
	Rect,
	Circle,
	Ellipse,
	Path,
	Wrapper,
	Interactive,
	useCanvas,
	useCollection
} from '@grafikjs/react';

import '@grafikjs/styles';

let logged = false;

const TestComponent = props => {

	const cv = useCanvas();
	const cl = useCollection();
	if (!logged){
		logged = true;
		console.log(cv, cl);
	}

	setTimeout(() => {
		// @ts-ignore
		window.path = cv.childAt(4);
	}, 40);

	return null;

};

const TestApp = () => {

	const [zoom, setZoom] = useState(2);
	const [left, setLeft] = useState(400);
	const [top, setTop] = useState(400);
	const [angle, setAngle] = useState(0);
	const [scaleX, setScaleX] = useState(0.5);
	const [scaleY, setScaleY] = useState(0.5);
	const [skewX, setSkewX] = useState(0);
	const [skewY, setSkewY] = useState(0);
	const [sw, setSw] = useState(12);

	return (
		<Fragment>
			<CanvasProvider
				width={1200}
				height={800} >
				<Wrapper>
					<Canvas
						zoom={zoom} >
						<TestComponent />
					{/*}
						<Group
							left={250}
							top={250}
							angle={angle} >
							<Group
								skewX={20} >
								<Rect
									left={-50}
									top={-50}
									width={100}
									height={100}
									stroke='forestgreen'
									strokeWidth={2}
									fill='none' />
								<Rect
									left={50}
									top={-50}
									width={100}
									height={100}
									stroke='forestgreen'
									strokeWidth={2}
									fill='none' />
							</Group>
							<Group
								skewX={-20} >
								<Rect
									left={-50}
									top={50}
									width={100}
									height={100}
									stroke='forestgreen'
									strokeWidth={2}
									fill='none' />
								<Rect
									left={50}
									top={50}
									width={100}
									height={100}
									stroke='forestgreen'
									strokeWidth={2}
									fill='none' />
							</Group>
						</Group>
					{*/}
						<Rect
							left={left}
							top={top}
							angle={angle}
							scaleX={scaleX}
							scaleY={scaleY}
							skewX={skewX}
							skewY={skewY}
							originX={0.25}
							originY={0.75}
							width={200}
							height={200}
							stroke='black'
							strokeWidth={sw}
							fill='none'
							onChange={rect => {
								const {left, top, angle, scaleX, scaleY} = rect;
								setLeft(left);
								setTop(top);
								setAngle(angle);
								setScaleX(scaleX);
								setScaleY(scaleY);
							}} />
					{/*}
						<Ellipse
							left={400}
							top={400}
							rx={80}
							ry={40}
							stroke='black'
							strokeWidth={2}
							fill='none' />
						<Circle
							left={400}
							top={400}
							r={40}
							stroke='black'
							strokeWidth={2}
							fill='none' />
						<Path
							d='M0 100 C 40 0 160 0 200 100 C 160 200 40 200 0 100Z'
							left={800}
							top={200}
							width={200}
							height={200}
							angle={angle}
							stroke='black'
							strokeWidth={8}
							fill='none' />
					{*/}
					</Canvas>
					<Interactive />
				</Wrapper>
			</CanvasProvider>
			<label>
				Zoom:
				<input
					type='number'
					value={zoom}
					onChange={e => setZoom(parseFloat(e.target.value) || 0)}
					step={0.1} />
			</label>
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
