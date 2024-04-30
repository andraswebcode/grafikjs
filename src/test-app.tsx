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

const TestApp = () => {

	const [zoom, setZoom] = useState(1);
	const [left, setLeft] = useState(400);
	const [top, setTop] = useState(400);
	const [angle, setAngle] = useState(0);
	const [scaleX, setScaleX] = useState(0.5);
	const [scaleY, setScaleY] = useState(0.5);
	const [skewX, setSkewX] = useState(0);
	const [skewY, setSkewY] = useState(0);
	const [sw, setSw] = useState(12);
	const [fill, setFill] = useCreateDef('linearGradient', {
		colorStops:[{
			offset:0,
			stopColor:'#f00'
		},{
			offset:1,
			stopColor:'#0f0'
		}]
	});

	return (
		<Fragment>
			<CanvasProvider
				width={1200}
				height={800} >
				<Wrapper>
					<Canvas
						zoom={zoom}
						onChange={canvas => setZoom(canvas.zoom)} >
						<Defs />
						<TestComponent />
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
