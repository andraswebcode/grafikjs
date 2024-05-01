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
	Image,
	Text,
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
						<TestComponent />
						<Rect
							left={100}
							top={100}
							angle={angle}
							width={200}
							height={200}
							originX={0.25}
							originY={0.25}
							stroke='black'
							strokeWidth={2}
							fill={fill} />{/*}
						<Group
							left={600}
							top={400} >
							<Group
								left={0}
								top={-100} >
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
							angle={angle}
							stroke='black'
							strokeWidth={8}
							fill='none' />{*/}
						<Image
							href='img.jpg'
							left={600}
							top={400}
							scaleX={0.4}
							scaleY={0.4} />
						<Text
							text='Hello GrafikJS!'
							left={600}
							top={400} />
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
