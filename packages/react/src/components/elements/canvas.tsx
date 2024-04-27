import {
	useCanvas
} from './../../hooks';
import {
	CollectionContext
} from './../../contexts';

const Canvas = ({
	children,
	...props
}: any) => {

	const canvas: any = useCanvas();

	canvas.set(props);

	return (
		<CollectionContext.Provider value={canvas} >
			<svg {...canvas.getAttributes()}>
				{children}
			</svg>
		</CollectionContext.Provider>
	);

};

export {
	Canvas
};
