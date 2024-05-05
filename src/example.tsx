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
	Group,
	Path,
	Text,
	Polygon,
	Wrapper,
	Interactive,
	Selector,
	useCanvasContext
} from '@grafikjs/react';

import '@grafikjs/styles';

const Logger = () => {
	const canvas = useCanvasContext();
	console.log(canvas);
	return null;
}

const Example = () => {

	const lg1 = new LinearGradient({
		colorStops:[{
			offset:0,
			stopColor:'#F00'
		},{
			offset:1,
			stopColor:'#F44'
		}]
	});
	const lg2 = new LinearGradient({
		colorStops:[{
			offset:0,
			stopColor:'#080'
		},{
			offset:1,
			stopColor:'#00F'
		}]
	});
	const lg3 = new LinearGradient({
		colorStops:[{
			offset:0,
			stopColor:'#AA0'
		},{
			offset:1,
			stopColor:'#FF0'
		}]
	});
	const points = '40 0 51.76 23.82 78.04 27.64 59.02 46.18 63.51 72.36 40 60 16.49 72.36 20.98 46.18 1.96 27.64 28.24 23.82';

	return (
		<CanvasProvider>
			<Wrapper>
				<Canvas
					width={800}
					height={200} >
					<Defs />
					<Path
						d='M50,25C35,0,-14,25,20,60L50,90L80,60C114,20,65,0,50,25'
						fill={lg1}
						angle={330}
						left={100}
						top={100} />
					<Text
						text='Hello GrafikJS! :-)'
						fill={lg2}
						angle={12}
						left={400}
						top={100} />
					<Group
						left={680}
						top={100}
						angle={20}
						fill={lg3} >
						<Polygon
							points={points}
							left={0}
							top={48} />
						<Polygon
							points={points}
							left={52}
							top={-30} />
						<Polygon
							points={points}
							left={-52}
							top={-30} />
					</Group>
				</Canvas>
				<Interactive>
					<Selector />
				</Interactive>
			</Wrapper>
			<Logger />
		</CanvasProvider>
	);

};

export {
	Example
};
