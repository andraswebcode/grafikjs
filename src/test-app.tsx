import {
	useState,
	useEffect,
	useCallback,
	Fragment
} from 'react';
import {
	CanvasProvider,
	Canvas,
	Defs,
	Group,
	Rect,
	Circle,
	Ellipse,
	Path,
	Wrapper,
	Interactive,
	useCanvas,
	useCollection,
	useCreateDef
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

	return null;

};

const G1 = {
	colorStops:[{
		offset:0,
		stopColor:'#F00'
	},{
		offset:0.5,
		stopColor:'#FFF'
	},{
		offset:1,
		stopColor:'#0F0'
	}]
};

const G2 = {
	colorStops:[{
		offset:0,
		stopColor:'#FF0'
	},{
		offset:1,
		stopColor:'#00F'
	}]
};

let i = 0;

const TestApp = () => {

	const [zoom, setZoom] = useState(1);
	const [left, setLeft] = useState(400);
	const [top, setTop] = useState(400);
	const [angle, setAngle] = useState(45);
	const [scaleX, setScaleX] = useState(0.5);
	const [scaleY, setScaleY] = useState(0.5);
	const [skewX, setSkewX] = useState(0);
	const [skewY, setSkewY] = useState(0);
	const [sw, setSw] = useState(12);
	const [fill, setFill] = useCreateDef('linearGradient', G1);

	return (
		<Fragment>
			<CanvasProvider
				width={1200}
				height={800} >
				<Wrapper>
					<Canvas>
						<Defs />
						<TestComponent />{/*}
						<Group
							left={600}
							top={400} >
							<Group
								left={0}
								top={-100} >{*/}
								<Rect
									left={600}
									top={400}
									angle={angle}
									width={200}
									height={200}
									stroke='black'
									strokeWidth={2}
									fill='none' />{/*}
								<Rect
									left={100}
									top={0}
									angle={angle}
									width={200}
									height={200}
									stroke='black'
									strokeWidth={2}
									fill='none' />
							</Group>
							<Group
								left={0}
								top={100} >
								<Rect
									left={-100}
									top={0}
									angle={angle}
									width={200}
									height={200}
									stroke='black'
									strokeWidth={2}
									fill='none' />
								<Rect
									left={100}
									top={0}
									angle={angle}
									width={200}
									height={200}
									stroke='black'
									strokeWidth={2}
									fill='none' />
							</Group>
						</Group>
						{/*}
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
							fill={fill}
							onChange={rect => {
								const {left, top, angle, scaleX, scaleY} = rect;
								setLeft(left);
								setTop(top);
								setAngle(angle);
								setScaleX(scaleX);
								setScaleY(scaleY);
							}} />
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
			<button onClick={() => {
				setFill(i++ % 2 ? G1 : G2);
			}}>
				Change Gradient
			</button>
		</Fragment>
	);

};

export {
	TestApp
};
