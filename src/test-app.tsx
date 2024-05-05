import {
	useState
} from 'react';
import {
	LinearGradient
} from '@grafikjs/core';
import {
	CanvasProvider,
	Canvas,
	Defs,
	Rect,
	Circle,
	Path,
	Polygon,
	Group,
	Image,
	Text,
	ShapeTree,
	Wrapper,
	Interactive,
	Selector,
	useCanvas
} from '@grafikjs/react';

import '@grafikjs/styles';

const TestComponent = () => {

	const obj : any = useCanvas(canvas => ({
		canvas,
		width:canvas.get('width'),
		set:canvas.set.bind(canvas),
		left:canvas.getSelectedShapes()[0]?.get('left'),
		setShape:canvas.getSelectedShapes()[0]?.set.bind(canvas.getSelectedShapes()[0])
	}), 'set shapes:set');
	// @ts-ignore
	window.c = obj.canvas;

	return (
		<>
			<input type='number' value={obj.width} onChange={e => obj.set('width', parseInt(e.target.value))} />
			<input type='number' value={obj.left} onChange={e => obj.setShape('left', parseInt(e.target.value))} />
			<ul>
				{obj.shapes?.map(shape => (
					<li key={shape.id}>
						<button>
							{shape.tagName}
						</button>
					</li>
				))}
			</ul>
		</>
	);

};

const TestCanvas = ({
	children
}) => {

	const [w, setW] = useState(1200);
	const [h, setH] = useState(800);

	return (
		<>
			<Canvas
				width={w}
				height={h} >
				{children}
			</Canvas>
			<input style={{
				position:'relative',
				zIndex:9
			}} type='number' value={w} onChange={e => setW(parseInt(e.target.value))} />
			<input style={{
				position:'relative',
				zIndex:9
			}} type='number' value={h} onChange={e => setH(parseInt(e.target.value))} />
		</>
	);

};

const json = [{"id":"g-QyAzNX8TCHXT","name":"","tagName":"g","children":[{"id":"rect-hMFHNAa0Uf2e","name":"","tagName":"rect","fill":{"id":"linearGradient-JZ7WYmdncNv4","name":"","tagName":"linearGradient","children":[{"id":"stop-EQ87jx2suVlf","name":"","tagName":"stop","offset":0,"stopColor":"#FF0","stopOpacity":1},{"id":"stop-vXBHNTYnYYxy","name":"","tagName":"stop","offset":1,"stopColor":"#00F","stopOpacity":1}]},"stroke":"#000","strokeWidth":2,"width":100,"height":100,"transform":"translate(-50 -50)","left":-100,"top":0,"angle":45,"scaleX":1,"scaleY":1,"skewX":0,"skewY":0},{"id":"rect-V7M80dAWO7CE","name":"","tagName":"rect","fill":{"id":"linearGradient-JZ7WYmdncNv4","name":"","tagName":"linearGradient","children":[{"id":"stop-EQ87jx2suVlf","name":"","tagName":"stop","offset":0,"stopColor":"#FF0","stopOpacity":1},{"id":"stop-vXBHNTYnYYxy","name":"","tagName":"stop","offset":1,"stopColor":"#00F","stopOpacity":1}]},"stroke":"#000","strokeWidth":2,"width":100,"height":100,"transform":"translate(-50 -50)","left":100,"top":0,"angle":45,"scaleX":1,"scaleY":1,"skewX":0,"skewY":0}],"left":600,"top":400,"angle":0,"scaleX":1,"scaleY":1,"skewX":0,"skewY":0}];
const colorStops1 = [{
	offset:0,
	stopColor:'red'
},{
	offset:1,
	stopColor:'blue'
}];
const colorStops2 = [{
	offset:0,
	stopColor:'red'
},{
	offset:1,
	stopColor:'#F44'
}];

const TestApp1 = () => {

	return (
		<CanvasProvider
			width={1200}
			height={800} >
			<Wrapper>
				<Canvas>
					<Defs />
					<ShapeTree
						json={json} />
				</Canvas>
				<Interactive>
					<Selector />
				</Interactive>
			</Wrapper>
			<TestComponent />
		</CanvasProvider>
	);

};

const TestApp3 = () => {

	return (
		<CanvasProvider
			width={1200}
			height={800} >
			<Wrapper>
				<Canvas>
					<Defs />
					<Group
						left={600}
						top={400} >
						<Rect
							left={-100}
							top={0}
							width={100}
							height={100}
							angle={45}
							stroke='#000'
							strokeWidth={2}
							fill='none' />
						<Rect
							left={100}
							top={0}
							width={100}
							height={100}
							angle={45}
							stroke='#000'
							strokeWidth={2}
							fill='none' />
					</Group>
				</Canvas>
				<Interactive>
					<Selector />
				</Interactive>
			</Wrapper>
			<TestComponent />
		</CanvasProvider>
	);

};

const TestApp = () => {

	const lg1 = new LinearGradient({
		colorStops:colorStops1
	});
	const lg2 = new LinearGradient({
		colorStops:colorStops2
	});

	return (
		<CanvasProvider>
			<Wrapper>
				<Canvas
					width={1200}
					height={800} >
					<Defs />
					<Circle
						left={600}
						top={400}
						r={50}
						angle={45}
						stroke='#000'
						strokeWidth={2}
						fill={lg1} />
					<Rect
						left={0}
						top={0}
						width={100}
						height={100}
						angle={45}
						stroke='#000'
						strokeWidth={2}
						fill='none' />
					<Path
						d='M50,25C35,0,-14,25,20,60L50,90L80,60C114,20,65,0,50,25'
						fill={lg2}
						left={450}
						top={250} />
					{/*}
					<Path
						d='M 0 315 L 40 315 A 30 50 0 0 1 160 160 L 160 100 H 400 V 200'
						stroke='green'
						strokeWidth={8}
						fill='none'
						left={450}
						top={250} />
					{*/}
					<Polygon
						points='120 70 170 170 70 170'
						fill={lg1}
						left={350}
						top={150} />
					<Text
						text='Hello GrafikJS! :-)'
						left={800}
						top={250} />
					<Image
						href='img.jpg'
						left={300}
						top={600} />
				</Canvas>
				<Interactive>
					<Selector />
				</Interactive>
			</Wrapper>
			<TestComponent />
		</CanvasProvider>
	);

};

export {
	TestApp
};
