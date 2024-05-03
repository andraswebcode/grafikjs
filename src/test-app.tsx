import {
	CanvasProvider,
	Canvas,
	Defs,
	Rect,
	Group,
	Image,
	Text,
	ShapeTree,
	Wrapper,
	Interactive,
	Selector,
	useCanvas,
	__experimental_useCanvasReducer as useCanvasReducer,
	useDefinition
} from '@grafikjs/react';

import '@grafikjs/styles';

const TestComponent = () => {

	const canvas : any = useCanvas();
	console.log(canvas);

	return (
		<ul>
			{canvas.mapChildren(shape => (
				<li key={shape.id}>
					<button>
						{shape.tagName}
					</button>
				</li>
			))}
		</ul>
	);

};

const json = [{"id":"g-QyAzNX8TCHXT","name":"","tagName":"g","children":[{"id":"rect-hMFHNAa0Uf2e","name":"","tagName":"rect","fill":{"id":"linearGradient-JZ7WYmdncNv4","name":"","tagName":"linearGradient","children":[{"id":"stop-EQ87jx2suVlf","name":"","tagName":"stop","offset":0,"stopColor":"#FF0","stopOpacity":1},{"id":"stop-vXBHNTYnYYxy","name":"","tagName":"stop","offset":1,"stopColor":"#00F","stopOpacity":1}]},"stroke":"#000","strokeWidth":2,"width":100,"height":100,"transform":"translate(-50 -50)","left":-100,"top":0,"angle":45,"scaleX":1,"scaleY":1,"skewX":0,"skewY":0},{"id":"rect-V7M80dAWO7CE","name":"","tagName":"rect","fill":{"id":"linearGradient-JZ7WYmdncNv4","name":"","tagName":"linearGradient","children":[{"id":"stop-EQ87jx2suVlf","name":"","tagName":"stop","offset":0,"stopColor":"#FF0","stopOpacity":1},{"id":"stop-vXBHNTYnYYxy","name":"","tagName":"stop","offset":1,"stopColor":"#00F","stopOpacity":1}]},"stroke":"#000","strokeWidth":2,"width":100,"height":100,"transform":"translate(-50 -50)","left":100,"top":0,"angle":45,"scaleX":1,"scaleY":1,"skewX":0,"skewY":0}],"left":600,"top":400,"angle":0,"scaleX":1,"scaleY":1,"skewX":0,"skewY":0}];

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

	const [fill] = useDefinition('linearGradient', {
		colorStops:[{
			offset:0,
			stopColor:'#FF0'
		},{
			offset:1,
			stopColor:'#00F'
		}]
	});

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
							fill={fill} />
						<Rect
							left={100}
							top={0}
							width={100}
							height={100}
							angle={45}
							stroke='#000'
							strokeWidth={2}
							fill={fill} />
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

	const [fill] = useDefinition('linearGradient', {
		colorStops:[{
			offset:0,
			stopColor:'#FF0'
		},{
			offset:1,
			stopColor:'#00F'
		}]
	});

	return (
		<CanvasProvider
			width={1200}
			height={800} >
			<Wrapper>
				<Canvas>
					<Defs />
					<Rect
						left={550}
						top={350}
						width={100}
						height={100}
						angle={45}
						stroke='#000'
						strokeWidth={2}
						fill={fill} />
					<Rect
						left={650}
						top={450}
						width={100}
						height={100}
						angle={45}
						stroke='#000'
						strokeWidth={2}
						fill={fill} />
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
