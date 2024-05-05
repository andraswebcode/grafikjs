import {
	useState,
	useEffect,
	useCallback
} from 'react';
import {
	useCanvasContext
} from './../../hooks';
import {
	CollectionContext
} from './../../contexts';

const SVG = ({
	children,
	canvas,
	props
}) => {

	const [attributes, setAttributes] = useState(canvas.getAttributes());
	const onCanvasSet = useCallback(() => {
		setAttributes(canvas.getAttributes());
		props.onChange?.(canvas);
	}, []);

	useEffect(() => {

		canvas.on('set', onCanvasSet);

		// Usually, I do not love setTimeout() for any reason like this,
		// but I still didn't find any solution to re-render the parent component: <Wrapper>
		// when we set width, and height props for <Canvas> component.
		setTimeout(() => canvas.set(props), 0);

		return () => {
			canvas.off('set', onCanvasSet);
		};

	}, []);

	useEffect(() => {
		canvas.set(props);
	}, [props]);

	return (
		<svg {...attributes}>
			{children}
		</svg>
	);

};

const Canvas = ({
	children,
	...props
}: any) => {

	const canvas: any = useCanvasContext();

	return (
		<CollectionContext.Provider value={canvas} >
			<SVG
				canvas={canvas}
				props={props} >
				{children}
			</SVG>
		</CollectionContext.Provider>
	);

};

export {
	Canvas
};
