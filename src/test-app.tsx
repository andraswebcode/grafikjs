import {
	CanvasProvider,
	Canvas,
	Defs,
	Rect,
	Group,
	Image,
	Text,
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
