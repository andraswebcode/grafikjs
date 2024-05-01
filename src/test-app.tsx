import {
	CanvasProvider,
	Canvas,
	Defs,
	Rect,
	Image,
	Text,
	Wrapper,
	Interactive,
	useCanvas,
	useCreateDef
} from '@grafikjs/react';

import '@grafikjs/styles';

const TestApp = () => {

	const [fill, setFill] = useCreateDef('linearGradient', {
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
			width={600}
			height={200} >
			<Wrapper>
				<Canvas>
					<Defs />
					<Rect
						left={120}
						top={100}
						width={100}
						height={100}
						angle={45}
						fill={fill} />
					<Text
						text='Hello GrafikJS! :-)'
						left={400}
						top={100}
						angle={10} />
				</Canvas>
				<Interactive />
			</Wrapper>
		</CanvasProvider>
	);

};

export {
	TestApp
};
