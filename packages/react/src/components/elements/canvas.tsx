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
