import { useState } from 'react';
import { LinearGradient, RadialGradient, Pattern } from '@grafikjs/core';
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
	const { canvas, width, zoom, set, setShape, shapes }: any = useCanvas((canvas) => ({
		canvas,
		width: canvas.get('width'),
		zoom: canvas.get('zoom'),
		set: canvas.set.bind(canvas),
		setShape: canvas.getSelectedShapes()[0]?.set.bind(canvas.getSelectedShapes()[0]),
		shapes: canvas.getChildren()
	}));
	// @ts-ignore
	window.c = canvas;

	return (
		<>
			<label>
				ZOOM:
				<input
					type="number"
					value={zoom}
					onChange={(e) => set('zoom', parseFloat(e.target.value))}
				/>
			</label>
			<label>
				WIDTH:
				<input
					type="number"
					value={width}
					onChange={(e) => set('width', parseFloat(e.target.value))}
				/>
			</label>
			<ul>
				{shapes?.map((shape) => (
					<li key={shape.id}>
						<button
							style={{
								background: canvas.getSelectedShapes().includes(shape)
									? '#0f0'
									: '#eee'
							}}
							onClick={() => {
								canvas.releaseShapes().selectShapes(shape);
							}}
						>
							{shape.tagName}
						</button>
					</li>
				))}
			</ul>
			<button
				onClick={() => {
					canvas.set('mode', canvas.get('mode') === 'select' ? 'pan' : 'select');
				}}
			>
				{canvas.get('mode') === 'select' ? 'Switch to Pan Mode' : 'Switch to Select Mode'}
			</button>
		</>
	);
};

const TestCanvas = ({ children }) => {
	const [w, setW] = useState(1200);
	const [h, setH] = useState(800);

	return (
		<>
			<Canvas width={w} height={h}>
				{children}
			</Canvas>
			<input
				style={{
					position: 'relative',
					zIndex: 9
				}}
				type="number"
				value={w}
				onChange={(e) => setW(parseInt(e.target.value))}
			/>
			<input
				style={{
					position: 'relative',
					zIndex: 9
				}}
				type="number"
				value={h}
				onChange={(e) => setH(parseInt(e.target.value))}
			/>
		</>
	);
};

const json = [
	{
		id: 'g-QyAzNX8TCHXT',
		name: '',
		tagName: 'g',
		children: [
			{
				id: 'rect-hMFHNAa0Uf2e',
				name: '',
				tagName: 'rect',
				fill: {
					id: 'linearGradient-JZ7WYmdncNv4',
					name: '',
					tagName: 'linearGradient',
					children: [
						{
							id: 'stop-EQ87jx2suVlf',
							name: '',
							tagName: 'stop',
							offset: 0,
							stopColor: '#FF0',
							stopOpacity: 1
						},
						{
							id: 'stop-vXBHNTYnYYxy',
							name: '',
							tagName: 'stop',
							offset: 1,
							stopColor: '#00F',
							stopOpacity: 1
						}
					]
				},
				stroke: '#000',
				strokeWidth: 2,
				width: 100,
				height: 100,
				transform: 'translate(-50 -50)',
				left: -100,
				top: 0,
				angle: 45,
				scaleX: 1,
				scaleY: 1,
				skewX: 0,
				skewY: 0
			},
			{
				id: 'rect-V7M80dAWO7CE',
				name: '',
				tagName: 'rect',
				fill: {
					id: 'linearGradient-JZ7WYmdncNv4',
					name: '',
					tagName: 'linearGradient',
					children: [
						{
							id: 'stop-EQ87jx2suVlf',
							name: '',
							tagName: 'stop',
							offset: 0,
							stopColor: '#FF0',
							stopOpacity: 1
						},
						{
							id: 'stop-vXBHNTYnYYxy',
							name: '',
							tagName: 'stop',
							offset: 1,
							stopColor: '#00F',
							stopOpacity: 1
						}
					]
				},
				stroke: '#000',
				strokeWidth: 2,
				width: 100,
				height: 100,
				transform: 'translate(-50 -50)',
				left: 100,
				top: 0,
				angle: 45,
				scaleX: 1,
				scaleY: 1,
				skewX: 0,
				skewY: 0
			}
		],
		left: 600,
		top: 400,
		angle: 0,
		scaleX: 1,
		scaleY: 1,
		skewX: 0,
		skewY: 0
	}
];
const colorStops1 = [
	{
		offset: 0,
		stopColor: 'red'
	},
	{
		offset: 1,
		stopColor: 'blue'
	}
];
const colorStops2 = [
	{
		offset: 0,
		stopColor: 'red'
	},
	{
		offset: 1,
		stopColor: '#F44'
	}
];

const TestApp1 = () => {
	return (
		<CanvasProvider width={1200} height={800}>
			<Wrapper>
				<Canvas>
					<Defs />
					<ShapeTree json={json} />
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
		<CanvasProvider width={1200} height={800}>
			<Wrapper>
				<Canvas>
					<Defs />
					<Group left={600} top={400}>
						<Rect
							left={-100}
							top={0}
							width={100}
							height={100}
							angle={45}
							stroke="#000"
							strokeWidth={2}
							fill="none"
						/>
						<Rect
							left={100}
							top={0}
							width={100}
							height={100}
							angle={45}
							stroke="#000"
							strokeWidth={2}
							fill="none"
						/>
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
		colorStops: colorStops1
	});
	const lg2 = new LinearGradient({
		colorStops: colorStops2
	});
	const lg3 = new RadialGradient({
		colorStops: colorStops1
	});
	const pt = new Pattern({
		//
	});

	return (
		<CanvasProvider>
			<Wrapper>
				<Canvas width={1200} height={800} zoom={2} mode="select">
					<Defs />
					<Rect
						selectable={false}
						width={1200}
						height={800}
						left={600}
						top={400}
						fill={pt}
					/>
					<Group left={400} top={400}>
						<Rect
							left={-100}
							top={0}
							width={100}
							height={100}
							angle={45}
							stroke="#000"
							strokeWidth={2}
							fill="none"
						/>
						<Rect
							left={100}
							top={0}
							width={100}
							height={100}
							angle={45}
							stroke="#000"
							strokeWidth={2}
							fill="none"
						/>
					</Group>
					<Circle left={600} top={400} r={50} fill={lg3} />
					<Rect
						left={0}
						top={0}
						width={100}
						height={100}
						angle={45}
						stroke="#000"
						strokeWidth={2}
						fill="none"
					/>
					<Path
						d="M50,25C35,0,-14,25,20,60L50,90L80,60C114,20,65,0,50,25"
						fill={lg2}
						left={450}
						top={250}
					/>
					<Polygon points="120 70 170 170 70 170" fill={lg1} left={350} top={150} />
					<Text text="Hello GrafikJS! :-)" left={800} top={250} />
					<Image href="img.jpg" left={300} top={600} scaleX={0.4} scaleY={0.4} />
				</Canvas>
				<Interactive>
					<Selector />
				</Interactive>
			</Wrapper>
			<TestComponent />
		</CanvasProvider>
	);
};

export { TestApp };
