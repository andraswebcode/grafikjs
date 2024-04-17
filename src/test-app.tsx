import {
	CanvasProvider,
	Canvas,
	Rect
} from '@grafikjs/react';

const TestApp = () => (
	<CanvasProvider>
		<Canvas
			width={1200}
			height={800} >
			<Rect
				left={600}
				top={400}
				angle={45}
				width={200}
				height={200}
				stroke='black'
				strokeWidth={2}
				fill='none' />
		</Canvas>
	</CanvasProvider>
);

export {
	TestApp
};
